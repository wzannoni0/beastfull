import { NextResponse } from "next/server";
import { getServerSession } from "@/lib/server-session";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const teamMembers = await prisma.teamMember.findMany({
    where: { sponsorId: session.userId, status: "ACTIVE" },
    include: { member: { include: { profile: true, balance: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({
    members: teamMembers.map((tm) => ({
      id: tm.member.id,
      username: tm.member.username,
      level: tm.member.profile?.currentLevel || 1,
      balance: Number(tm.member.balance?.amount || 0),
      joinedAt: new Date(tm.createdAt).toLocaleDateString(),
    })),
  });
}