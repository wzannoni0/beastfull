export type LevelDefinition = {
  id: number;
  code: string;
  name: string;
  badge: string;
  color: string;
  canState: number;
  rewardPerDay: number;
  minBalance: number;
  minDirects: number;
  minTeamStrength: number;
  multiplier: number;
  description: string;
};

export const LEVELS: LevelDefinition[] = [
  {
    id: 1,
    code: "SPARK",
    name: "Spark",
    badge: "BRONZE",
    color: "#9ca3af",
    canState: 1,
    rewardPerDay: 0.80,
    minBalance: 0,
    minDirects: 0,
    minTeamStrength: 0,
    multiplier: 1.0,
    description: "Begin your FizzUp journey"
  },
  {
    id: 2,
    code: "BUBBLE",
    name: "Bubble",
    badge: "SILVER",
    color: "#c0c0c0",
    canState: 2,
    rewardPerDay: 1.20,
    minBalance: 100,
    minDirects: 3,
    minTeamStrength: 6,
    multiplier: 1.5,
    description: "Grow with 3 active referrals"
  },
  {
    id: 3,
    code: "FIZZ",
    name: "Fizz",
    badge: "GOLD",
    color: "#fbbf24",
    canState: 3,
    rewardPerDay: 1.60,
    minBalance: 400,
    minDirects: 3,
    minTeamStrength: 12,
    multiplier: 2.0,
    description: "Expand to 9 team members"
  },
  {
    id: 4,
    code: "SPLASH",
    name: "Splash",
    badge: "PLATINUM",
    color: "#e5e7eb",
    canState: 4,
    rewardPerDay: 2.00,
    minBalance: 800,
    minDirects: 6,
    minTeamStrength: 20,
    multiplier: 2.5,
    description: "Build a team of 20"
  },
  {
    id: 5,
    code: "SURGE",
    name: "Surge",
    badge: "DIAMOND",
    color: "#60a5fa",
    canState: 5,
    rewardPerDay: 2.56,
    minBalance: 1500,
    minDirects: 8,
    minTeamStrength: 40,
    multiplier: 3.2,
    description: "Reach 40 team members"
  },
  {
    id: 6,
    code: "THUNDER",
    name: "Thunder",
    badge: "MASTER",
    color: "#a855f7",
    canState: 6,
    rewardPerDay: 3.20,
    minBalance: 3000,
    minDirects: 12,
    minTeamStrength: 80,
    multiplier: 4.0,
    description: "Elite status - 80 members"
  },
  {
    id: 7,
    code: "STORM",
    name: "Storm",
    badge: "GRANDMASTER",
    color: "#f43f5e",
    canState: 7,
    rewardPerDay: 4.40,
    minBalance: 6000,
    minDirects: 20,
    minTeamStrength: 150,
    multiplier: 5.5,
    description: "Legendary - 150 members"
  },
  {
    id: 8,
    code: "OMEGA",
    name: "Omega",
    badge: "CHAMPION",
    color: "#00d4ff",
    canState: 8,
    rewardPerDay: 6.40,
    minBalance: 12000,
    minDirects: 30,
    minTeamStrength: 300,
    multiplier: 8.0,
    description: "Maximum power - 300 members"
  },
];

export const STREAK_BONUSES = {
  7: 0.25,
  15: 0.50,
  30: 1.00,
} as const;

export function computeCurrentLevel(input: {
  balance: number;
  directs: number;
  teamStrength: number;
}) {
  const current =
    [...LEVELS]
      .reverse()
      .find(
        (level) =>
          input.balance >= level.minBalance &&
          input.directs >= level.minDirects &&
          input.teamStrength >= level.minTeamStrength,
      ) ?? LEVELS[0];

  const next = LEVELS.find((l) => l.id === current.id + 1) ?? null;
  
  let progress = 0;
  if (next) {
    const balanceProgress = ((input.balance - current.minBalance) / (next.minBalance - current.minBalance)) * 50;
    const directsProgress = current.minDirects > 0 ? ((input.directs - current.minDirects) / (next.minDirects - current.minDirects)) * 25 : 25;
    const teamProgress = current.minTeamStrength > 0 ? ((input.teamStrength - current.minTeamStrength) / (next.minTeamStrength - current.minTeamStrength)) * 25 : 25;
    progress = Math.max(0, Math.min(100, balanceProgress + directsProgress + teamProgress));
  } else {
    progress = 100;
  }

  return {
    current,
    next,
    progress: Math.min(100, Math.max(0, progress)),
  };
}
