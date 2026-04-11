export interface Level {
  id: number
  name: string
  badge: string
  emoji: string
  color: string
  bgColor: string
  borderColor: string
  glowColor: string
  minBalance: number
  minDirects: number
  minTeamSize: number
  minIndirects: number
  dailyReward: number
  multiplier: number
  description: string
  requirements: string[]
  perks: string[]
}

export const levels: Level[] = [
  {
    id: 1,
    name: "Spark",
    badge: "SPARK",
    emoji: "⚡",
    color: "#9ca3af",
    bgColor: "rgba(156, 163, 175, 0.1)",
    borderColor: "rgba(156, 163, 175, 0.3)",
    glowColor: "rgba(156, 163, 175, 0.3)",
    minBalance: 0,
    minDirects: 0,
    minTeamSize: 0,
    minIndirects: 0,
    dailyReward: 0.8,
    multiplier: 1,
    description: "Starting point - your FizzUp journey begins here",
    requirements: ["Create account"],
    perks: ["Base daily reward: 0.80 BUBZ", "Access to dashboard", "Basic support"],
  },
  {
    id: 2,
    name: "Bubble",
    badge: "BUBBLE",
    emoji: "🫧",
    color: "#4ade80",
    bgColor: "rgba(74, 222, 128, 0.1)",
    borderColor: "rgba(74, 222, 128, 0.3)",
    glowColor: "rgba(74, 222, 128, 0.4)",
    minBalance: 100,
    minDirects: 3,
    minTeamSize: 0,
    minIndirects: 0,
    dailyReward: 1.2,
    multiplier: 1.5,
    description: "First milestone - growing your network",
    requirements: ["100 BUBZ balance", "3 active direct referrals"],
    perks: ["+50% daily reward", "Team statistics", "Priority support"],
  },
  {
    id: 3,
    name: "Fizz",
    badge: "FIZZ",
    emoji: "✨",
    color: "#22d3ee",
    bgColor: "rgba(34, 211, 238, 0.1)",
    borderColor: "rgba(34, 211, 238, 0.3)",
    glowColor: "rgba(34, 211, 238, 0.4)",
    minBalance: 400,
    minDirects: 3,
    minTeamSize: 10,
    minIndirects: 3,
    dailyReward: 1.8,
    multiplier: 2.25,
    description: "Building momentum - team structure matters",
    requirements: ["400 BUBZ balance", "3 active directs", "Each direct has 3+ active members"],
    perks: ["+125% daily reward", "Advanced analytics", "Custom badges"],
  },
  {
    id: 4,
    name: "Splash",
    badge: "SPLASH",
    emoji: "💧",
    color: "#60a5fa",
    bgColor: "rgba(96, 165, 250, 0.1)",
    borderColor: "rgba(96, 165, 250, 0.3)",
    glowColor: "rgba(96, 165, 250, 0.4)",
    minBalance: 800,
    minDirects: 6,
    minTeamSize: 25,
    minIndirects: 10,
    dailyReward: 2.5,
    multiplier: 3.125,
    description: "Making waves - your team is expanding",
    requirements: ["800 BUBZ balance", "6 active directs", "25+ team members", "10+ indirect referrals"],
    perks: ["+212% daily reward", "Team leaderboard", "Exclusive events access"],
  },
  {
    id: 5,
    name: "Surge",
    badge: "SURGE",
    emoji: "⚡",
    color: "#a78bfa",
    bgColor: "rgba(167, 139, 250, 0.1)",
    borderColor: "rgba(167, 139, 250, 0.3)",
    glowColor: "rgba(167, 139, 250, 0.5)",
    minBalance: 1500,
    minDirects: 10,
    minTeamSize: 50,
    minIndirects: 25,
    dailyReward: 4,
    multiplier: 5,
    description: "Power surge - significant network impact",
    requirements: ["1500 BUBZ balance", "10 active directs", "50+ team members", "25+ indirect referrals"],
    perks: ["+400% daily reward", "Surge badge", "Premium support", "Early feature access"],
  },
  {
    id: 6,
    name: "Thunder",
    badge: "THUNDER",
    emoji: "🌩️",
    color: "#f472b6",
    bgColor: "rgba(244, 114, 182, 0.1)",
    borderColor: "rgba(244, 114, 182, 0.3)",
    glowColor: "rgba(244, 114, 182, 0.5)",
    minBalance: 3000,
    minDirects: 15,
    minTeamSize: 100,
    minIndirects: 50,
    dailyReward: 6,
    multiplier: 7.5,
    description: "Electric power - elite network builder",
    requirements: ["3000 BUBZ balance", "15 active directs", "100+ team members", "50+ indirect referrals"],
    perks: ["+650% daily reward", "Thunder badge", "VIP support", "Monthly bonuses"],
  },
  {
    id: 7,
    name: "Storm",
    badge: "STORM",
    emoji: "🌀",
    color: "#fb923c",
    bgColor: "rgba(251, 146, 60, 0.1)",
    borderColor: "rgba(251, 146, 60, 0.3)",
    glowColor: "rgba(251, 146, 60, 0.6)",
    minBalance: 6000,
    minDirects: 25,
    minTeamSize: 200,
    minIndirects: 100,
    dailyReward: 10,
    multiplier: 12.5,
    description: "Force of nature - unstoppable growth",
    requirements: ["6000 BUBZ balance", "25 active directs", "200+ team members", "100+ indirect referrals"],
    perks: ["+1150% daily reward", "Storm badge", "White-glove support", "Exclusive retreats"],
  },
  {
    id: 8,
    name: "Omega",
    badge: "OMEGA",
    emoji: "👑",
    color: "#fbbf24",
    bgColor: "rgba(251, 191, 36, 0.1)",
    borderColor: "rgba(251, 191, 36, 0.4)",
    glowColor: "rgba(251, 191, 36, 0.7)",
    minBalance: 12000,
    minDirects: 50,
    minTeamSize: 500,
    minIndirects: 250,
    dailyReward: 20,
    multiplier: 25,
    description: "Maximum power - legendary status",
    requirements: ["12000 BUBZ balance", "50 active directs", "500+ team members", "250+ indirect referrals"],
    perks: ["+2400% daily reward", "Legendary Omega badge", "Founding member status", "Custom rewards", "Maximum privileges"],
  },
]

export function getLevel(levelId: number): Level {
  return levels.find(l => l.id === levelId) || levels[0]
}

export function getLevelByBalance(balance: number): Level {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (balance >= levels[i].minBalance) {
      return levels[i]
    }
  }
  return levels[0]
}

export function calculateDailyReward(levelId: number): number {
  return levels.find(l => l.id === levelId)?.dailyReward || 0.8
}

export function getStreakBonus(streak: number): number {
  if (streak >= 30) return 100
  if (streak >= 15) return 50
  if (streak >= 7) return 25
  return 0
}

export function getNextStreakMilestone(streak: number): { days: number; bonus: number } | null {
  if (streak < 7) return { days: 7 - streak, bonus: 25 }
  if (streak < 15) return { days: 15 - streak, bonus: 50 }
  if (streak < 30) return { days: 30 - streak, bonus: 100 }
  return null
}

export function formatBalance(balance: number): string {
  if (balance >= 1000000) return (balance / 1000000).toFixed(1) + "M"
  if (balance >= 1000) return (balance / 1000).toFixed(1) + "K"
  return balance.toFixed(2)
}
