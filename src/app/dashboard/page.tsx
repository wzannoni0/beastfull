"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FizzCan3D } from "@/components/fizz-can-3d"
import { ParticlesBackground } from "@/components/particles-background"
import { GlowOrb } from "@/components/glow-orb"
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
  ArrowDownRight,
  Wallet,
  Target,
  Award,
  RefreshCcw
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const levels = [
  { name: "Spark", icon: Sparkles, color: "#9ca3af", threshold: 0 },
  { name: "Bubble", icon: Star, color: "#4ade80", threshold: 100 },
  { name: "Fizz", icon: Zap, color: "#22d3ee", threshold: 400 },
  { name: "Splash", icon: TrendingUp, color: "#60a5fa", threshold: 800 },
  { name: "Surge", icon: Award, color: "#a78bfa", threshold: 1500 },
  { name: "Thunder", icon: Trophy, color: "#f472b6", threshold: 3000 },
  { name: "Storm", icon: Crown, color: "#fb923c", threshold: 6000 },
  { name: "Omega", icon: Flame, color: "#fbbf24", threshold: 12000 },
]

const transactions = [
  { id: 1, type: "claim", amount: 2.5, date: "2 hours ago", icon: Gift },
  { id: 2, type: "deposit", amount: 50, date: "1 day ago", icon: ArrowDownRight },
  { id: 3, type: "referral", amount: 5, date: "2 days ago", icon: Users },
  { id: 4, type: "withdraw", amount: -25, date: "3 days ago", icon: ArrowUpRight },
]

export default function DashboardPage() {
  const currentLevel = 3
  const balance = 450
  const streak = 12
  const teamSize = 15
  const referrals = 5

  const nextLevel = levels[currentLevel]
  const currentLevelData = levels[currentLevel - 1]

  return (
    <div className="min-h-screen bg-[#09090b] overflow-hidden">
      <ParticlesBackground count={40} />
      <GlowOrb color="#00d4ff" size="xl" position="top-right" />
      <GlowOrb color="#8b5cf6" size="lg" position="bottom-left" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[430px] mx-auto px-4 py-6 relative z-10"
      >
        <motion.header variants={itemVariants} className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-white">Dashboard</h1>
            <p className="text-white/60 text-sm">Welcome back, CryptoKing</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="glow" className="gap-1">
              <Flame className="w-3 h-3" />
              {streak}
            </Badge>
            <Avatar className="w-10 h-10 ring-2 ring-[#00d4ff]/30">
              <AvatarFallback>CK</AvatarFallback>
            </Avatar>
          </div>
        </motion.header>

        <motion.div variants={itemVariants} className="relative flex justify-center my-8">
          <FizzCan3D balance={balance} level={currentLevel} size="xl" />
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-6">
          <p className="text-5xl font-black text-white mb-1" style={{ textShadow: '0 0 40px rgba(0,212,255,0.5)' }}>
            {balance.toLocaleString()}
          </p>
          <p className="text-[#00d4ff] font-semibold tracking-wide text-lg">BUBZ</p>
          <div className="flex justify-center gap-2 mt-2">
            <Badge variant="default" className="gap-1">
              <Star className="w-3 h-3" />
              Level {currentLevel}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Target className="w-3 h-3" />
              {nextLevel.name}
            </Badge>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-5 mb-4 glow-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/60">Progress to {nextLevel.name}</span>
              <span className="text-[#00d4ff] font-bold">{Math.round((balance / nextLevel.threshold) * 100)}%</span>
            </div>
            <Progress value={(balance / nextLevel.threshold) * 100} className="h-3" />
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-white/40">{balance} BUBZ</span>
              <span className="text-white/40">{nextLevel.threshold} BUBZ</span>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mb-6">
          <Card className="p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-[#00d4ff]" />
            <p className="text-xl font-bold text-white">{teamSize}</p>
            <p className="text-white/40 text-xs">Team</p>
          </Card>
          <Card className="p-4 text-center">
            <Award className="w-6 h-6 mx-auto mb-2 text-[#8b5cf6]" />
            <p className="text-xl font-bold text-white">{referrals}</p>
            <p className="text-white/40 text-xs">Referrals</p>
          </Card>
          <Card className="p-4 text-center">
            <Wallet className="w-6 h-6 mx-auto mb-2 text-[#ec4899]" />
            <p className="text-xl font-bold text-white">$420</p>
            <p className="text-white/40 text-xs">Value</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-3 mb-6">
          <Link href="/calendar" className="flex-1">
            <Button className="w-full h-12 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold">
              <Gift className="w-5 h-5 mr-2" />
              Claim Daily
            </Button>
          </Link>
          <Link href="/deposit">
            <Button variant="outline" size="icon" className="h-12 w-12">
              <ArrowDownRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/withdrawal">
            <Button variant="outline" size="icon" className="h-12 w-12">
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-[#8b5cf6]" />
              Recent Activity
            </h2>
          </div>
          <Card className="p-4">
            <div className="space-y-3">
              {transactions.map((tx, i) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.type === 'claim' ? 'bg-[#00d4ff]/20' :
                    tx.type === 'deposit' ? 'bg-green-500/20' :
                    tx.type === 'referral' ? 'bg-[#8b5cf6]/20' :
                    'bg-red-500/20'
                  }`}>
                    <tx.icon className={`w-5 h-5 ${
                      tx.type === 'claim' ? 'text-[#00d4ff]' :
                      tx.type === 'deposit' ? 'text-green-400' :
                      tx.type === 'referral' ? 'text-[#8b5cf6]' :
                      'text-red-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm capitalize">{tx.type}</p>
                    <p className="text-white/40 text-xs">{tx.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-sm ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount} BUBZ
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#fbbf24]" />
            Level Progression
          </h2>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]"
              style={{ width: `${(currentLevel / 8) * 100}%` }}
            />
            <div className="flex justify-between relative">
              {levels.map((level, i) => {
                const Icon = level.icon
                const isActive = i + 1 <= currentLevel
                const isCurrent = i + 1 === currentLevel
                return (
                  <motion.div
                    key={level.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 transition-all ${
                        isActive 
                          ? isCurrent
                            ? 'bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] shadow-lg shadow-[#00d4ff]/30 scale-110'
                            : 'bg-white/10'
                          : 'bg-white/5'
                      }`}
                    >
                      <Icon className="w-6 h-6" style={{ color: isActive ? '#fff' : level.color }} />
                    </div>
                    <span className="text-[10px] mt-2 text-white/60">{level.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
