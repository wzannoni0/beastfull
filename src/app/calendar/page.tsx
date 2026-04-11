"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParticlesBackground } from "@/components/particles-background"
import { GlowOrb } from "@/components/glow-orb"
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Gift,
  Star,
  Trophy,
  Crown,
  Sparkles,
  Check,
  Clock
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

const streakRewards = [
  { days: 0, bonus: 0, icon: Gift, label: "Base" },
  { days: 7, bonus: 25, icon: Flame, label: "7 Days" },
  { days: 15, bonus: 50, icon: Star, label: "15 Days" },
  { days: 30, bonus: 100, icon: Crown, label: "30 Days" },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [claimedDays, setClaimedDays] = useState<number[]>([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12])
  const [streak, setStreak] = useState(12)
  const [claiming, setClaiming] = useState(false)
  const [showReward, setShowReward] = useState(false)
  
  const today = new Date().getDate()
  const canClaim = !claimedDays.includes(today)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const handleClaim = async () => {
    if (!canClaim) return
    setClaiming(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setClaimedDays([...claimedDays, today])
    setStreak(streak + 1)
    setClaiming(false)
    setShowReward(true)
    
    setTimeout(() => setShowReward(false), 3000)
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const getStreakBonus = () => {
    if (streak >= 30) return 100
    if (streak >= 15) return 50
    if (streak >= 7) return 25
    return 0
  }

  const baseReward = 2
  const bonus = getStreakBonus()
  const totalReward = baseReward * (1 + bonus / 100)

  return (
    <div className="min-h-screen bg-[#09090b] overflow-hidden">
      <ParticlesBackground count={30} />
      <GlowOrb color="#00d4ff" size="xl" position="top-right" />
      <GlowOrb color="#8b5cf6" size="lg" position="bottom-left" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[430px] mx-auto px-4 py-6 relative z-10"
      >
        <motion.header variants={itemVariants} className="flex items-center justify-between mb-6">
          <Link href="/" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-5 h-5 text-white" />
          </Link>
          <h1 className="text-xl font-bold text-white">Daily Claim</h1>
          <div className="w-10" />
        </motion.header>

        <AnimatePresence>
          {showReward && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            >
              <Card className="p-8 text-center glow-border bg-black/90">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center"
                >
                  <Gift className="w-10 h-10 text-[#00d4ff]" />
                </motion.div>
                <h2 className="text-2xl font-black text-white mb-2">Claimed!</h2>
                <p className="text-4xl font-black text-[#00d4ff]" style={{ textShadow: '0 0 30px rgba(0,212,255,0.5)' }}>
                  +{totalReward.toFixed(2)} BUBZ
                </p>
                {bonus > 0 && (
                  <Badge variant="success" className="mt-2">
                    +{bonus}% Streak Bonus!
                  </Badge>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div variants={itemVariants}>
          <Card className="p-6 mb-4 glow-border">
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
                <p className="text-2xl font-bold text-[#fbbf24]">+{bonus}%</p>
                <p className="text-white/60 text-xs">Streak Bonus</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {streakRewards.map((reward, i) => {
              const Icon = reward.icon
              const isActive = streak >= reward.days
              const isNext = streak < reward.days && (i === 0 || streak >= streakRewards[i-1].days)
              return (
                <motion.div
                  key={reward.days}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-3 rounded-xl text-center ${
                    isActive
                      ? 'bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30'
                      : isNext
                        ? 'bg-[#fbbf24]/10 border border-[#fbbf24]/30'
                        : 'bg-white/5 border border-white/5'
                  }`}
                >
                  <Icon className={`w-5 h-5 mx-auto mb-1 ${
                    isActive ? 'text-[#00d4ff]' : isNext ? 'text-[#fbbf24]' : 'text-white/40'
                  }`} />
                  <p className={`text-xs font-semibold ${
                    isActive ? 'text-white' : isNext ? 'text-[#fbbf24]' : 'text-white/40'
                  }`}>
                    +{reward.bonus}%
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="text-center">
                <p className="text-white font-bold text-lg">{monthNames[currentDate.getMonth()]}</p>
                <p className="text-[#00d4ff]/70 text-sm">{currentDate.getFullYear()}</p>
              </div>
              <button
                onClick={nextMonth}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-[#00d4ff]/50 text-xs font-medium py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {[...Array(firstDay)].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              
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
                      isClaimed
                        ? 'bg-gradient-to-br from-[#00d4ff]/30 to-[#8b5cf6]/30 text-white border border-[#00d4ff]/30'
                        : isToday
                          ? canClaim
                            ? 'bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] text-white shadow-lg shadow-[#00d4ff]/30 cursor-pointer animate-pulse'
                            : 'ring-2 ring-[#00d4ff] bg-white/5 text-white'
                          : isFuture
                            ? 'text-white/20'
                            : 'text-white/60 hover:bg-white/5'
                    }`}
                  >
                    {isClaimed ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      day
                    )}
                  </motion.div>
                )
              })}
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className={`p-6 mb-4 ${canClaim ? 'glow-border cursor-pointer' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    canClaim
                      ? 'bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6]'
                      : 'bg-[#22c55e]/20 border border-[#22c55e]/30'
                  }`}
                  animate={canClaim ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {canClaim ? (
                    <Gift className="w-8 h-8 text-white" />
                  ) : (
                    <Check className="w-8 h-8 text-[#22c55e]" />
                  )}
                </motion.div>
                <div>
                  <p className="text-white font-bold text-lg">
                    {canClaim ? "Claim Available!" : "Claimed Today"}
                  </p>
                  <p className="text-white/60 text-sm flex items-center gap-1">
                    {canClaim ? (
                      <>
                        <Clock className="w-3 h-3" />
                        Tap to claim your reward
                      </>
                    ) : (
                      "Come back tomorrow"
                    )}
                  </p>
                </div>
              </div>
              {canClaim ? (
                <Button
                  onClick={handleClaim}
                  loading={claiming}
                  className="h-12 px-6 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]"
                >
                  CLAIM
                </Button>
              ) : (
                <Badge variant="success" className="text-sm px-3 py-1">
                  Done
                </Badge>
              )}
            </div>
            
            {canClaim && (
              <div className="mt-4 p-3 rounded-xl bg-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Base Reward</span>
                  <span className="text-white font-bold">{baseReward} BUBZ</span>
                </div>
                {bonus > 0 && (
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[#fbbf24] text-sm">+{bonus}% Streak</span>
                    <span className="text-[#fbbf24] font-bold">+{(baseReward * bonus / 100).toFixed(2)} BUBZ</span>
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
      </motion.div>
    </div>
  )
}
