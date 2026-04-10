export type LevelDefinition = {
  id: number;
  code: string;
  name: string;
  canState:
    | "starter can"
    | "charged can"
    | "boosted can"
    | "neon can"
    | "beast can"
    | "hyper beast can"
    | "titan beast can"
    | "legendary beast can";
  rewardPerDay: number;
  minBalance: number;
  minDirects: number;
  minTeamStrength: number;
};

export const LEVELS: LevelDefinition[] = [
  {
    id: 1,
    code: "SPARK",
    name: "Spark",
    canState: "starter can",
    rewardPerDay: 0.8,
    minBalance: 0,
    minDirects: 0,
    minTeamStrength: 0,
  },
  {
    id: 2,
    code: "CHARGE",
    name: "Charge",
    canState: "charged can",
    rewardPerDay: 2.7,
    minBalance: 100,
    minDirects: 3,
    minTeamStrength: 6,
  },
  {
    id: 3,
    code: "SURGE",
    name: "Surge",
    canState: "boosted can",
    rewardPerDay: 10.7,
    minBalance: 400,
    minDirects: 3,
    minTeamStrength: 12,
  },
  {
    id: 4,
    code: "PULSE",
    name: "Pulse",
    canState: "neon can",
    rewardPerDay: 21.3,
    minBalance: 800,
    minDirects: 6,
    minTeamStrength: 20,
  },
  {
    id: 5,
    code: "BEAST_CORE",
    name: "Beast Core",
    canState: "beast can",
    rewardPerDay: 40,
    minBalance: 1500,
    minDirects: 8,
    minTeamStrength: 32,
  },
  {
    id: 6,
    code: "OVERCHARGE",
    name: "OverCharge",
    canState: "hyper beast can",
    rewardPerDay: 80,
    minBalance: 3000,
    minDirects: 10,
    minTeamStrength: 50,
  },
  {
    id: 7,
    code: "TITAN_FLOW",
    name: "Titan Flow",
    canState: "titan beast can",
    rewardPerDay: 133.3,
    minBalance: 5000,
    minDirects: 14,
    minTeamStrength: 80,
  },
  {
    id: 8,
    code: "LEGENDARY_BEAST",
    name: "Legendary Beast",
    canState: "legendary beast can",
    rewardPerDay: 266.7,
    minBalance: 10000,
    minDirects: 18,
    minTeamStrength: 120,
  },
];

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
  const progress = next
    ? Math.max(0, Math.min(100, (input.balance / next.minBalance) * 100))
    : 100;

  return {
    current,
    next,
    progress,
  };
}
