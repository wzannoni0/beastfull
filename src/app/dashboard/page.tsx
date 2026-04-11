"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FizzCan } from "@/components/fizz-can"
import { levels, getLevel, formatBalance, getStreakBonus } from "@/lib/levels"
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
  ArrowDownRight,
  Wallet,
  Target,
  Award,
  RefreshCcw,
  Home,
  Calendar,
  User,
  Shield,
  CreditCard,
  BarChart3,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const transactions = [
  { id: 1, type: "claim", amount: 2.5, date: "2 hours ago", icon: Gift },
  { id: 2, type: "deposit", amount: 50, date: "1 day ago", icon: ArrowDownRight },
  { id: 3, type: "referral", amount: 5, date: "2 days ago", icon: Users },
  { id: 4, type: "withdraw", amount: -25, date: "3 days ago", icon: ArrowUpRight },
]

export default function DashboardPage() {
  const currentLevel = 5
  const balance = 450
  const streak = 12
  const teamSize = 42
  const referrals = 15
  const nextLevel = levels.find(l => l.id === currentLevel + 1)
  const levelData = getLevel(currentLevel)
  const streakBonus = getStreakBonus(streak)

  return (
    <div className="min-h-screen bg-[#09090b] pb-24">
      <div className="max-w-[430px] mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <motion.header variants={itemVariants} className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-white">Dashboard</h1>
            <p className="text-white/60 text-sm">Welcome back, CryptoKing</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant={streak >= 7 ? "warning" : "outline"} className="gap-1">
              <Flame className="w-3 h-3" />
              {streak}
            </Badge>
            <Avatar size="md" ring="cyan">
              <AvatarFallback variant="gradient">CK</AvatarFallback>
            </Avatar>
          </div>
        </motion.header>

        {/* FizzCan */}
        <motion.div variants={itemVariants} className="flex justify-center my-8">
          <FizzCan balance={balance} level={currentLevel} size="lg" />
        </motion.div>

        {/* Balance */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <p className="text-4xl font-black text-white gradient-text">{formatBalance(balance)}</p>
          <p className="text-[#00d4ff] font-semibold">BUBZ</p>
          <div className="flex justify-center gap-2 mt-2">
            <Badge variant="default">Level {currentLevel}</Badge>
            <Badge variant={levelData.id >= 5 ? "gold" : "secondary"}>{levelData.name}</Badge>
          </div>
        </motion.div>

        {/* Level Progress */}
        <motion.div variants={itemVariants}>
          <Card className="p-5 mb-4" glow="cyan">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/60">Progress to {nextLevel?.name}</span>
              <span className="text-[#00d4ff] font-bold">{Math.round((balance / (nextLevel?.minBalance || balance)) * 100)}%</span>
            </div>
            <Progress value={(balance / (nextLevel?.minBalance || balance)) * 100} variant="glow" size="lg" />
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-white/40">{balance} BUBZ</span>
              <span className="text-white/40">{nextLevel?.minBalance} BUBZ</span>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
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

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="flex gap-3 mb-6">
          <Link href="/calendar" className="flex-1">
            <Button className="w-full h-12 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]">
              <Gift className="w-5 h-5 mr-2" />
              Claim Daily
            </Button>
          </Link>
          <Link href="/deposit">
            <Button variant="outline" size="icon" className="h-12 w-12 neon-cyan">
              <ArrowDownRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/withdrawal">
            <Button variant="outline" size="icon" className="h-12 w-12 neon-violet">
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-[#8b5cf6]" />
              Recent Activity
            </h2>
            <Link href="/activity"><Button variant="ghost" size="sm">View All</Button></Link>
          </div>
          <Card className="p-4">
            <div className="space-y-3">
              {transactions.map((tx, i) => {
                const Icon = tx.icon
                const typeColors: Record<string, string> = {
                  claim: "from-[#00d4ff]/20 to-[#8b5cf6]/20",
                  deposit: "from-green-500/20 to-[#00d4ff]/20",
                  referral: "from-[#8b5cf6]/20 to-[#ec4899]/20",
                  withdraw: "from-red-500/20 to-[#fbbf24]/20",
                }
                const iconColors: Record<string, string> = {
                  claim: "text-[#00d4ff]",
                  deposit: "text-green-400",
                  referral: "text-[#8b5cf6]",
                  withdraw: "text-red-400",
                }
                return (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${typeColors[tx.type]} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${iconColors[tx.type]}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium capitalize">{tx.type}</p>
                      <p className="text-white/40 text-xs">{tx.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${tx.amount > 0 ? "text-green-400" : "text-red-400"}`}>
                        {tx.amount > 0 ? "+" : ""}{tx.amount} BUBZ
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Card>
        </motion.div>

        {/* Level Progression */}
        <motion.div variants={itemVariants}>
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#fbbf24]" />
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
                    className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 transition-all ${
                      i + 1 <= currentLevel
                        ? i + 1 === currentLevel
                          ? "bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] shadow-lg scale-110"
                          : "bg-white/10"
                        : "bg-white/5"
                    }`}
                  >
                    <span style={{ color: i + 1 <= currentLevel ? '#fff' : level.color }}>{level.emoji}</span>
                  </div>
                  <span className="text-[10px] mt-2 text-white/60">{level.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="max-w-[430px] mx-auto flex justify-around py-3">
          {[
            { href: "/", icon: Home, label: "Home" },
            { href: "/dashboard", icon: BarChart3, label: "Dashboard", active: true },
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
