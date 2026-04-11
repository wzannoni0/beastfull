"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { levels, getLevel, getStreakBonus, getNextStreakMilestone } from "@/lib/levels"
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Gift,
  Star,
  Check,
  Clock,
  Sparkles,
  Calendar,
  Home,
  BarChart3,
  Users,
  User,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const streakRewards = [
  { days: 0, bonus: 0, icon: Gift, label: "Base" },
  { days: 7, bonus: 25, icon: Flame, label: "7 Days" },
  { days: 15, bonus: 50, icon: Star, label: "15 Days" },
  { days: 30, bonus: 100, icon: Sparkles, label: "30 Days" },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [claimedDays, setClaimedDays] = useState<number[]>([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12])
  const [streak, setStreak] = useState(12)
  const [claiming, setClaiming] = useState(false)
  const [showReward, setShowReward] = useState(false)
  
  const today = new Date().getDate()
  const canClaim = !claimedDays.includes(today)

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const handleClaim = async () => {
    if (!canClaim) return
    setClaiming(true)
    await new Promise(r => setTimeout(r, 1500))
    setClaimedDays([...claimedDays, today])
    setStreak(streak + 1)
    setClaiming(false)
    setShowReward(true)
    setTimeout(() => setShowReward(false), 3000)
  }

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const streakBonus = getStreakBonus(streak)
  const baseReward = 2
  const totalReward = baseReward * (1 + streakBonus / 100)
  const nextMilestone = getNextStreakMilestone(streak)

  return (
    <div className="min-h-screen bg-[#09090b] pb-24 relative">
      <div className="max-w-[430px] mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <motion.header variants={itemVariants} className="flex items-center justify-between mb-6">
          <Link href="/" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-5 h-5 text-white" />
          </Link>
          <h1 className="text-xl font-bold text-white">Daily Claim</h1>
          <div className="w-10" />
        </motion.header>

        {/* Reward Modal */}
        <AnimatePresence>
          {showReward && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/80"
            >
              <Card className="p-8 text-center mx-4" glow="cyan">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center"
                >
                  <Gift className="w-10 h-10 text-[#00d4ff]" />
                </motion.div>
                <h2 className="text-2xl font-black text-white mb-2">Claimed!</h2>
                <p className="text-4xl font-black text-[#00d4ff] gradient-text">+{totalReward.toFixed(2)} BUBZ</p>
                {streakBonus > 0 && <Badge variant="warning" className="mt-2">+{streakBonus}% Streak Bonus!</Badge>}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Streak Card */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 mb-4" glow="gold">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fb923c] to-[#f97316] flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Flame className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <p className="text-4xl font-black text-white">{streak}</p>
                  <p className="text-white/60 text-sm">Day Streak</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#fbbf24]">+{streakBonus}%</p>
                <p className="text-white/60 text-xs">Streak Bonus</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Streak Rewards */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {streakRewards.map((reward, i) => {
              const Icon = reward.icon
              const isActive = streak >= reward.days
              const isNext = streak < reward.days && (i === 0 || streak >= streakRewards[i - 1].days)
              return (
                <motion.div
                  key={reward.days}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-3 rounded-xl text-center transition-all ${
                    isActive ? "bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30" :
                    isNext ? "bg-[#fbbf24]/10 border border-[#fbbf24]/30" :
                    "bg-white/5 border border-white/5"
                  }`}
                >
                  <Icon className={`w-5 h-5 mx-auto mb-1 ${
                    isActive ? "text-[#00d4ff]" : isNext ? "text-[#fbbf24]" : "text-white/40"
                  }`} />
                  <p className={`text-xs font-semibold ${
                    isActive ? "text-white" : isNext ? "text-[#fbbf24]" : "text-white/40"
                  }`}>+{reward.bonus}%</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Calendar */}
        <motion.div variants={itemVariants}>
          <Card className="p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="text-center">
                <p className="text-white font-bold text-lg">{monthNames[currentDate.getMonth()]}</p>
                <p className="text-[#00d4ff]/70 text-sm">{currentDate.getFullYear()}</p>
              </div>
              <button onClick={nextMonth} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-[#00d4ff]/50 text-xs font-medium py-2">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} className="aspect-square" />)}
              {days.map((day) => {
                const isClaimed = claimedDays.includes(day)
                const isToday = day === today
                const isFuture = day > today
                return (
                  <motion.div
                    key={day}
                    whileHover={{ scale: isToday && canClaim ? 1.1 : 1 }}
                    whileTap={{ scale: isToday && canClaim ? 0.95 : 1 }}
                    className={`aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all ${
                      isClaimed ? "bg-gradient-to-br from-[#00d4ff]/30 to-[#8b5cf6]/30 text-white border border-[#00d4ff]/30" :
                      isToday ? canClaim ? "bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] text-white shadow-lg animate-pulse cursor-pointer" : "ring-2 ring-[#00d4ff] bg-white/5 text-white" :
                      isFuture ? "text-white/20" : "text-white/60 hover:bg-white/5"
                    }`}
                  >
                    {isClaimed ? <Check className="w-4 h-4" /> : day}
                  </motion.div>
                )
              })}
            </div>
          </Card>
        </motion.div>

        {/* Claim Button */}
        <motion.div variants={itemVariants}>
          <Card className={`p-6 mb-4 ${canClaim ? 'glow-border cursor-pointer' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    canClaim ? "bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6]" : "bg-[#22c55e]/20 border border-[#22c55e]/30"
                  }`}
                  animate={canClaim ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {canClaim ? <Gift className="w-8 h-8 text-white" /> : <Check className="w-8 h-8 text-[#22c55e]" />}
                </motion.div>
                <div>
                  <p className="text-white font-bold text-lg">{canClaim ? "Claim Available!" : "Claimed Today"}</p>
                  <p className="text-white/60 text-sm flex items-center gap-1">
                    {canClaim ? <><Clock className="w-3 h-3" /> Tap to claim your reward</> : "Come back tomorrow"}
                  </p>
                </div>
              </div>
              {canClaim ? (
                <Button onClick={handleClaim} loading={claiming} className="h-12 px-6 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]">
                  CLAIM
                </Button>
              ) : (
                <Badge variant="success" className="text-sm px-3 py-1">Done</Badge>
              )}
            </div>
            
            {canClaim && (
              <div className="mt-4 p-3 rounded-xl bg-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Base Reward</span>
                  <span className="text-white font-bold">{baseReward} BUBZ</span>
                </div>
                {streakBonus > 0 && (
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[#fbbf24] text-sm">+{streakBonus}% Streak</span>
                    <span className="text-[#fbbf24] font-bold">+{(baseReward * streakBonus / 100).toFixed(2)} BUBZ</span>
                  </div>
                )}
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-[#00d4ff] font-black text-lg">{totalReward.toFixed(2)} BUBZ</span>
                </div>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Streak Rewards Info */}
        <motion.div variants={itemVariants}>
          <Card className="p-5">
            <h3 className="text-white font-bold mb-4">Streak Rewards</h3>
            <div className="space-y-3">
              {streakRewards.slice(1).map((reward) => {
                const Icon = reward.icon
                return (
                  <div key={reward.days} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#fbbf24]" />
                      <span className="text-white/80 text-sm">{reward.days}-Day Streak</span>
                    </div>
                    <span className="text-[#fbbf24] font-bold">+{reward.bonus}%</span>
                  </div>
                )
              })}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="max-w-[430px] mx-auto flex justify-around py-3">
          {[
            { href: "/", icon: Home, label: "Home" },
            { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
            { href: "/calendar", icon: Calendar, label: "Claim", active: true },
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
