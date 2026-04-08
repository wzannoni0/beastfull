import { computeCurrentLevel } from "@/lib/levels";

export const demoUser = {
  username: "beast.alpha",
  email: "alpha@beastfull.app",
  referralCode: "BEAST-ALPHA-77",
  referralLink: "https://beastfull.app/register?ref=BEAST-ALPHA-77",
  balance: 1280,
  directs: 6,
  teamStrength: 24,
  streak: 9,
  canPower: 68,
};

export const levelState = computeCurrentLevel({
  balance: demoUser.balance,
  directs: demoUser.directs,
  teamStrength: demoUser.teamStrength,
});

export const recentActivity = [
  "Claim giornaliero: +1.45 BZT",
  "Nuovo membro diretto: @nova.z",
  "Bonus streak 7 giorni sbloccato",
  "Upgrade can state: Neon Can",
];

export const teamMembers = [
  { username: "nova.z", level: "Charge", status: "Attivo" },
  { username: "hex.rush", level: "Spark", status: "Attivo" },
  { username: "ion.glow", level: "Surge", status: "Attivo" },
  { username: "void.pulse", level: "Spark", status: "Inattivo" },
];

export const leaderboard = [
  { rank: 1, user: "titan.kai", score: 12420 },
  { rank: 2, user: "alpha.zen", score: 10850 },
  { rank: 3, user: "beast.alpha", score: 9970 },
  { rank: 4, user: "neon.ray", score: 9440 },
];
