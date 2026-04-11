import { prisma } from "@/lib/prisma";
import { computeProgression } from "@/lib/progression";

export async function recalculateUserLevel(userId: string) {
  const [balance, directs, teamStrength, profile] = await Promise.all([
    prisma.balance.findUnique({ where: { userId } }),
    prisma.teamMember.count({ where: { sponsorId: userId, depth: 1, status: "ACTIVE" } }),
    prisma.teamMember.count({ where: { sponsorId: userId, status: "ACTIVE" } }),
    prisma.profile.findUnique({ where: { userId } }),
  ]);

  const progression = computeProgression({
    balance: Number(balance?.amount ?? 0),
    directs,
    teamStrength,
  });

  if (!profile) return progression;

  if (profile.currentLevel !== progression.currentLevel || profile.badge !== progression.badge) {
    await prisma.$transaction([
      prisma.profile.update({
        where: { userId },
        data: {
          currentLevel: progression.currentLevel,
          badge: progression.badge,
        },
      }),
      prisma.levelRecord.create({
        data: {
          userId,
          level: progression.currentLevel,
          rewardPerDay: progression.rewardPerDay,
          directRequired: progression.nextLevel?.minDirects ?? 0,
          balanceMin: progression.nextLevel?.minBalance ?? 0,
          teamRequired: progression.nextLevel?.minTeamSize ?? 0,
        },
      }),
      prisma.notification.create({
        data: {
          userId,
          title: "Aggiornamento livello",
          message: `Nuovo livello: ${progression.currentName}`,
        },
      }),
    ]);
  }

  return progression;
}
