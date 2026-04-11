import { levels, getLevelByBalance } from "@/lib/levels";

export function computeCurrentLevel(input: {
  balance: number;
  directs: number;
  teamStrength: number;
}) {
  const current = getLevelByBalance(input.balance);
  const currentIndex = levels.findIndex(l => l.id === current.id);
  const next = currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
  
  const balanceProgress = next 
    ? ((input.balance - current.minBalance) / (next.minBalance - current.minBalance)) * 100 
    : 100;

  return {
    current,
    next,
    progress: Math.min(100, balanceProgress),
    canState: current.id >= 4 ? "full" : current.id >= 2 ? "partial" : "empty",
  };
}

export function computeProgression(input: {
  balance: number;
  directs: number;
  teamStrength: number;
}) {
  const levelInfo = computeCurrentLevel(input);
  return {
    currentLevel: levelInfo.current.id,
    currentName: levelInfo.current.name,
    rewardPerDay: levelInfo.current.dailyReward,
    nextLevel: levelInfo.next,
    progressToNext: levelInfo.progress,
    canState: levelInfo.canState,
    badge: levelInfo.current.name,
  };
}

export function getLevelById(id: number) {
  return levels.find((l) => l.id === id) ?? levels[0];
}
