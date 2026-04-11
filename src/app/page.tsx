"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FizzCan } from "@/components/fizz-can"
import { levels, getLevel, formatBalance, getStreakBonus, getNextStreakMilestone } from "@/lib/levels"
import {
  Zap,
  TrendingUp,
  Users,
  Flame,
  Gift,
  ChevronRight,
  Star,
  Trophy,
  Crown,
  Activity,
  ArrowUpRight,
  Wallet,
  Target,
  Award,
  RefreshCcw,
  Bell,
  Settings,
  LogOut,
  Home,
  Calendar,
  User,
  Shield,
  CreditCard,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stats = [
  { label: "Total BUBZ", value: "2.4M", icon: Zap, color: "#00d4ff" },
  { label: "Active Users", value: "12.5K", icon: Users, color: "#8b5cf6" },
  { label: "Daily Claims", value: "8.2K", icon: Activity, color: "#ec4899" },
]

const leaderboard = [
  { rank: 1, name: "CryptoKing", level: 8, bubz: 15420 },
  { rank: 2, name: "DeFiMaster", level: 7, bubz: 8920 },
  { rank: 3, name: "TokenHunter", level: 6, bubz: 4520 },
  { rank: 4, name: "BlockchainPro", level: 5, bubz: 2340 },
  { rank: 5, name: "Web3Wizard", level: 4, bubz: 1280 },
]

export default function HomePage() {
  const currentLevel = 5
  const balance = 450
  const streak = 12
  const nextLevel = levels.find(l => l.id === currentLevel + 1)
  const levelData = getLevel(currentLevel)
  const streakBonus = getStreakBonus(streak)
  const nextMilestone = getNextStreakMilestone(streak)

  return (
    <div className="min-h-screen bg-[#09090b] bg-gradient-radial">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[430px] mx-auto px-4 py-6 relative z-10"
      >
        {/* Header */}
        <motion.header variants={itemVariants} className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg glow-cyan">
              <span className="text-white font-black text-sm">FU</span>
            </div>
            <div>
              <p className="text-white font-bold tracking-wide">FizzUp</p>
              <p className="text-[#00d4ff]/70 text-xs">BUBZ System</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-white/60" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#ef4444] rounded-full" />
            </Button>
            <Avatar size="sm" ring="cyan">
              <AvatarFallback variant="gradient">CK</AvatarFallback>
            </Avatar>
          </div>
        </motion.header>

        {/* FizzCan 3D Widget */}
        <motion.div variants={itemVariants} className="flex justify-center my-10">
          <FizzCan balance={balance} level={currentLevel} size="xl" />
        </motion.div>

        {/* Balance */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <p className="text-5xl font-black text-white mb-1 gradient-text">
            {formatBalance(balance)}
          </p>
          <p className="text-[#00d4ff] font-semibold tracking-wide">BUBZ</p>
        </motion.div>

        {/* Badges */}
        <motion.div variants={itemVariants} className="flex justify-center gap-2 mb-8">
          <Badge variant={streak >= 7 ? "warning" : "outline"} className="gap-1">
            <Flame className="w-3 h-3" />
            {streak} Day Streak
          </Badge>
          {streakBonus > 0 && (
            <Badge variant="glow" className="gap-1">
              <Star className="w-3 h-3" />
              +{streakBonus}% Bonus
            </Badge>
          )}
        </motion.div>

        {/* Level Progress Card */}
        <motion.div variants={itemVariants}>
          <Card className="p-5 mb-4" glow="cyan">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <div>
                  <p className="text-white font-bold">{levelData.name} Level</p>
                  <p className="text-[#00d4ff] text-sm">Level {currentLevel}</p>
                </div>
              </div>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="gap-1">
                  Details <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Progress to {nextLevel?.name || "MAX"}</span>
                <span className="text-[#00d4ff] font-medium">{Math.round((balance / (nextLevel?.minBalance || balance)) * 100)}%</span>
              </div>
              <Progress value={(balance / (nextLevel?.minBalance || balance)) * 100} variant="glow" size="lg" />
            </div>

            <div className="flex justify-between pt-4 border-t border-white/10">
              <div className="text-center">
                <p className="text-white font-bold">{(nextLevel?.minBalance || balance) - balance}</p>
                <p className="text-white/40 text-xs">BUBZ Needed</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold">{nextLevel?.name || "MAX"}</p>
                <p className="text-white/40 text-xs">Next Level</p>
              </div>
              <div className="text-center">
                <p className="text-[#8b5cf6] font-bold">+{((nextLevel?.dailyReward || 0) - levelData.dailyReward).toFixed(1)}</p>
                <p className="text-white/40 text-xs">Daily Bonus</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, i) => (
            <Card key={i} className="p-4 text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
              <p className="text-white font-bold">{stat.value}</p>
              <p className="text-white/40 text-xs">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="flex gap-3 mb-6">
          <Link href="/calendar" className="flex-1">
            <Button className="w-full h-14 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]">
              <Gift className="w-5 h-5 mr-2" />
              Claim Daily
            </Button>
          </Link>
          <Link href="/deposit">
            <Button variant="outline" size="icon" className="h-14 w-14 neon-cyan">
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Leaderboard */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#fbbf24]" />
              Leaderboard
            </h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <Card className="p-4">
            <div className="space-y-3">
              {leaderboard.map((user, i) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    user.rank === 1 ? "bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-black" :
                    user.rank === 2 ? "bg-gradient-to-br from-gray-300 to-gray-400 text-black" :
                    user.rank === 3 ? "bg-gradient-to-br from-[#cd7f32] to-[#b87333] text-white" :
                    "bg-white/10 text-white/60"
                  }`}>
                    {user.rank}
                  </div>
                  <Avatar size="sm">
                    <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{user.name}</p>
                    <p className="text-[#00d4ff]/60 text-xs">Level {user.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-sm">{user.bubz.toLocaleString()}</p>
                    <p className="text-white/40 text-xs">BUBZ</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Level Progression */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#8b5cf6]" />
            Level Progression
          </h2>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10" />
            <div className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]" style={{ width: `${(currentLevel / 8) * 100}%` }} />
            <div className="flex justify-between relative">
              {levels.map((level, i) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center z-10 transition-all ${
                      i + 1 <= currentLevel
                        ? i + 1 === currentLevel
                          ? "bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] shadow-lg scale-110"
                          : "bg-white/10"
                        : "bg-white/5"
                    }`}
                  >
                    <span style={{ color: i + 1 <= currentLevel ? '#fff' : level.color }}>
                      {level.emoji}
                    </span>
                  </div>
                  <span className="text-[10px] mt-2 text-white/60">{level.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Streak Info */}
        {nextMilestone && (
          <motion.div variants={itemVariants}>
            <Card className="p-4 border-[#fbbf24]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fbbf24]/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#fbbf24]" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">Next Bonus in {nextMilestone.days} days</p>
                  <p className="text-[#fbbf24] text-xs">+{nextMilestone.bonus}% extra reward</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="max-w-[430px] mx-auto flex justify-around py-3">
          {[
            { href: "/", icon: Home, label: "Home", active: true },
            { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
            { href: "/calendar", icon: Calendar, label: "Claim" },
            { href: "/team", icon: Users, label: "Team" },
            { href: "/profile", icon: User, label: "Profile" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`flex flex-col items-center gap-1 px-3 py-1 ${item.active ? 'text-[#00d4ff]' : 'text-white/50'}`}>
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

function BarChart3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  )
}
