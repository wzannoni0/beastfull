"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FizzCan3D } from "@/components/fizz-can-3d"
import { ParticlesBackground } from "@/components/particles-background"
import { GlowOrb } from "@/components/glow-orb"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Sparkles,
  ArrowUpRight,
  Activity
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const levels = [
  { name: "Spark", icon: Sparkles, color: "#9ca3af", threshold: 0 },
  { name: "Bubble", icon: Activity, color: "#4ade80", threshold: 100 },
  { name: "Fizz", icon: Zap, color: "#22d3ee", threshold: 400 },
  { name: "Splash", icon: TrendingUp, color: "#60a5fa", threshold: 800 },
  { name: "Surge", icon: Star, color: "#a78bfa", threshold: 1500 },
  { name: "Thunder", icon: Trophy, color: "#f472b6", threshold: 3000 },
  { name: "Storm", icon: Crown, color: "#fb923c", threshold: 6000 },
  { name: "Omega", icon: Flame, color: "#fbbf24", threshold: 12000 },
]

const leaderboard = [
  { rank: 1, name: "CryptoKing", level: 8, bubz: 15420, avatar: "" },
  { rank: 2, name: "DeFiMaster", level: 7, bubz: 8920, avatar: "" },
  { rank: 3, name: "TokenHunter", level: 6, bubz: 4520, avatar: "" },
  { rank: 4, name: "BlockchainPro", level: 5, bubz: 2340, avatar: "" },
  { rank: 5, name: "Web3Wizard", level: 4, bubz: 1280, avatar: "" },
]

const stats = [
  { label: "Total BUBZ", value: "2.4M", icon: Zap, color: "#00d4ff" },
  { label: "Active Users", value: "12.5K", icon: Users, color: "#8b5cf6" },
  { label: "Daily Claims", value: "8.2K", icon: Activity, color: "#ec4899" },
]

export default function HomePage() {
  const currentLevel = 3
  const balance = 450
  const streak = 12

  return (
    <div className="min-h-screen bg-[#09090b] overflow-hidden">
      <ParticlesBackground count={50} />
      <GlowOrb color="#00d4ff" size="xl" position="top-right" />
      <GlowOrb color="#8b5cf6" size="lg" position="bottom-left" />
      <GlowOrb color="#ec4899" size="md" position="top-left" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[430px] mx-auto px-4 py-6 relative z-10"
      >
        <motion.header variants={itemVariants} className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-[#00d4ff]/20">
              <span className="text-white font-black text-sm">FU</span>
            </div>
            <div>
              <p className="text-white font-bold tracking-wide">FizzUp</p>
              <p className="text-[#00d4ff]/70 text-xs">BUBZ System</p>
            </div>
          </div>
          <Link href="/profile">
            <Avatar className="w-10 h-10 ring-2 ring-[#00d4ff]/30">
              <AvatarImage src="" />
              <AvatarFallback>YOU</AvatarFallback>
            </Avatar>
          </Link>
        </motion.header>

        <motion.div variants={itemVariants} className="relative flex justify-center my-8">
          <FizzCan3D balance={balance} level={currentLevel} size="lg" />
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-6">
          <p className="text-4xl font-black text-white mb-1" style={{ textShadow: '0 0 30px rgba(0,212,255,0.5)' }}>
            {balance.toLocaleString()}
          </p>
          <p className="text-[#00d4ff] font-semibold tracking-wide">BUBZ</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-2 mb-8">
          <Badge variant={streak >= 7 ? "success" : "outline"} className="gap-1">
            <Flame className="w-3 h-3" />
            {streak} Day Streak
          </Badge>
          <Badge variant="glow" className="gap-1">
            <Zap className="w-3 h-3" />
            +25% Bonus
          </Badge>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-5 mb-4 glow-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-[#fbbf24]" />
                </div>
                <div>
                  <p className="text-white font-bold">Current Level</p>
                  <p className="text-[#00d4ff] text-sm">Level {currentLevel}</p>
                </div>
              </div>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="gap-1">
                  View <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Progress to Level {currentLevel + 1}</span>
                <span className="text-[#00d4ff]">{Math.round((450 / 800) * 100)}%</span>
              </div>
              <Progress value={(450 / 800) * 100} className="h-2" />
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-white/5">
              <div className="text-center">
                <p className="text-white font-bold">{800 - 450}</p>
                <p className="text-white/40 text-xs">BUBZ Needed</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold">Level {currentLevel + 1}</p>
                <p className="text-white/40 text-xs">Next Level</p>
              </div>
              <div className="text-center">
                <p className="text-[#8b5cf6] font-bold">+50</p>
                <p className="text-white/40 text-xs">Daily Bonus</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, i) => (
            <Card key={i} className="p-4 text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
              <p className="text-white font-bold">{stat.value}</p>
              <p className="text-white/40 text-xs">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-3 mb-6">
          <Link href="/calendar" className="flex-1">
            <Button className="w-full h-14 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold">
              <Gift className="w-5 h-5 mr-2" />
              Claim Daily
            </Button>
          </Link>
          <Link href="/deposit">
            <Button variant="outline" size="icon" className="h-14 w-14">
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#fbbf24]" />
              Leaderboard
            </h2>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </div>
          <Card className="p-4">
            <div className="space-y-3">
              {leaderboard.map((user, i) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                    user.rank === 1 && "bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-black",
                    user.rank === 2 && "bg-gradient-to-br from-gray-300 to-gray-400 text-black",
                    user.rank === 3 && "bg-gradient-to-br from-[#cd7f32] to-[#b87333] text-white",
                    user.rank > 3 && "bg-white/10 text-white/60"
                  )}>
                    {user.rank}
                  </div>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={user.avatar} />
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

        <motion.div variants={itemVariants} className="mt-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-[#8b5cf6]" />
            Level Progression
          </h2>
          <div className="flex justify-between">
            {levels.map((level, i) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "flex flex-col items-center gap-1",
                  i + 1 <= currentLevel && "opacity-100",
                  i + 1 > currentLevel && "opacity-40"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    i + 1 <= currentLevel && "bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 ring-2 ring-[#00d4ff]/50",
                    i + 1 > currentLevel && "bg-white/5"
                  )}
                >
                  <level.icon className="w-5 h-5" style={{ color: level.color }} />
                </div>
                <span className="text-[10px] text-white/60">{level.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
