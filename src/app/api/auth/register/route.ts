import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { generateReferralCode } from "@/lib/referral";
import { hashPassword, signAuthToken } from "@/lib/auth";

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  referralCode: z.string().min(3),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Input non valido" }, { status: 400 });
    }

    const { username, email, password, referralCode } = parsed.data;

    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });
    if (existing) {
      return NextResponse.json({ error: "Email o username già esistenti" }, { status: 409 });
    }

    const sponsorProfile = await prisma.profile.findUnique({
      where: { referralCode },
      include: { user: true },
    });

    if (!sponsorProfile) {
      return NextResponse.json({ error: "Referral code non valido" }, { status: 400 });
    }

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
        profile: {
          create: {
            referralCode: generateReferralCode(username),
            currentLevel: 1,
            badge: "Spark",
          },
        },
        balance: {
          create: { amount: 0 },
        },
        receivedReferral: {
          create: {
            sponsorId: sponsorProfile.userId,
          },
        },
        memberTeamMembership: {
          create: {
            sponsorId: sponsorProfile.userId,
            depth: 1,
          },
        },
        levelHistory: {
          create: {
            level: 1,
            rewardPerDay: 0.8,
            directRequired: 0,
            balanceMin: 0,
            teamRequired: 0,
          },
        },
        notifications: {
          create: {
            title: "Welcome to Beastfull",
            message: `Sei entrato nel team di ${sponsorProfile.user.username}`,
          },
        },
      },
    });

    const token = signAuthToken({ userId: user.id, role: user.role });
    const res = NextResponse.json({
      ok: true,
      sponsorUsername: sponsorProfile.user.username,
    });
    res.cookies.set("beastfull_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
