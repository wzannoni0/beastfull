import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { recalculateUserLevel } from "@/lib/level-service";

const DAY_MS = 24 * 60 * 60 * 1000;

export async function POST(request: Request) {
  const auth = requireAuth(request);
  if (auth.error) return auth.error;

  try {
    const userId = auth.payload.userId;

    const [profile, latestClaim] = await Promise.all([
      prisma.profile.findUnique({ where: { userId } }),
      prisma.dailyClaim.findFirst({ where: { userId }, orderBy: { claimedAt: "desc" } }),
    ]);

    if (!profile) {
      return NextResponse.json({ error: "Profilo non trovato" }, { status: 404 });
    }

    const now = new Date();
    if (latestClaim && now.getTime() - latestClaim.claimedAt.getTime() < DAY_MS) {
      return NextResponse.json({ error: "Claim già effettuato nelle ultime 24h" }, { status: 429 });
    }

    const progression = await recalculateUserLevel(userId);
    const amount = progression.rewardPerDay;

    const lastDate = latestClaim ? new Date(latestClaim.claimedAt) : null;
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isConsecutive =
      lastDate &&
      lastDate.getDate() === yesterday.getDate() &&
      lastDate.getMonth() === yesterday.getMonth() &&
      lastDate.getFullYear() === yesterday.getFullYear();

    const streakAfter = isConsecutive ? profile.streak + 1 : 1;

    await prisma.$transaction([
      prisma.dailyClaim.create({
        data: {
          userId,
          amount,
          streakAfter,
        },
      }),
      prisma.profile.update({
        where: { userId },
        data: { streak: streakAfter },
      }),
      prisma.balance.update({
        where: { userId },
        data: { amount: { increment: amount } },
      }),
      prisma.transaction.create({
        data: {
          userId,
          amount,
          type: "CLAIM",
          description: "Daily claim reward",
        },
      }),
      prisma.notification.create({
        data: {
          userId,
          title: "Claim completato",
          message: `Hai ricevuto ${amount.toFixed(2)} NXF`,
        },
      }),
    ]);

    await recalculateUserLevel(userId);

    return NextResponse.json({ ok: true, amount: Number(amount), streakAfter });
  } catch {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
