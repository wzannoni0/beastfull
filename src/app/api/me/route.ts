import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const auth = requireAuth(request);
  if (auth.error) return auth.error;

  const user = await prisma.user.findUnique({
    where: { id: auth.payload.userId },
    include: {
      profile: true,
      balance: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "Utente non trovato" }, { status: 404 });
  }

  const teamCount = await prisma.teamMember.count({
    where: { sponsorId: user.id, status: "ACTIVE" },
  });

  return NextResponse.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    level: user.profile?.currentLevel ?? 1,
    streak: user.profile?.streak ?? 0,
    badge: user.profile?.badge ?? "Spark",
    balance: user.balance ? Number(user.balance.amount) : 0,
    teamCount,
  });
}
