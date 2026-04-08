import { LEVELS, computeCurrentLevel } from "@/lib/levels";

export function computeProgression(input: {
  balance: number;
  directs: number;
  teamStrength: number;
}) {
  const levelInfo = computeCurrentLevel(input);
  return {
    currentLevel: levelInfo.current.id,
    currentName: levelInfo.current.name,
    rewardPerDay: levelInfo.current.rewardPerDay,
    nextLevel: levelInfo.next,
    progressToNext: levelInfo.progress,
    canState: levelInfo.current.canState,
    badge: levelInfo.current.name,
  };
}

export function getLevelById(id: number) {
  return LEVELS.find((l) => l.id === id) ?? LEVELS[0];
}
