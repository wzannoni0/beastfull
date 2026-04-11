"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { levels, formatBalance } from "@/lib/levels"
import {
  Zap,
  Mail,
  Trophy,
  Flame,
  Copy,
  Settings,
  Shield,
  Bell,
  LogOut,
  Home,
  BarChart3,
  Users,
  Calendar,
  ChevronRight,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const userData = {
  username: "beast.alpha",
  email: "alpha@beastfull.app",
  level: 4,
  badge: "Splash",
  streak: 12,
  balance: 1280,
  referralCode: "BEAST-ALPHA-77",
}

const menuItems = [
  { icon: Settings, label: "Impostazioni", href: "#" },
  { icon: Bell, label: "Notifiche", href: "#" },
  { icon: Shield, label: "Sicurezza", href: "#" },
  { icon: LogOut, label: "Esci", href: "/login" },
]

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { href: "/calendar", icon: Calendar, label: "Claim" },
  { href: "/team", icon: Users, label: "Team" },
  { href: "/profile", icon: Zap, label: "Profile", active: true },
]

export default function ProfilePage() {
  const currentLevel = levels.find(l => l.id === userData.level) || levels[0]
  const referralLink = `https://beastfull.vercel.app/register?ref=${userData.referralCode}`

  return (
    <div className="min-h-screen bg-[#09090b] pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[430px] mx-auto px-4 pt-6"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-black text-white">Profile</h1>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Settings className="w-5 h-5 text-white/60" />
          </Button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 mb-4" glow="cyan">
            <div className="flex items-center gap-4 mb-6">
              <Avatar size="lg" ring="cyan">
                <AvatarFallback variant="gradient">{userData.username.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold text-white">@{userData.username}</h2>
                <p className="text-sm text-white/60">{userData.email}</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: currentLevel.bgColor, borderColor: currentLevel.borderColor }}>
                  <span className="text-lg">{currentLevel.emoji}</span>
                </div>
                <div>
                  <p className="text-sm text-white/60">Level {userData.level}</p>
                  <p className="font-bold" style={{ color: currentLevel.color }}>{currentLevel.name}</p>
                </div>
              </div>
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <Flame className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                <p className="text-xl font-bold text-white">{userData.streak}</p>
                <p className="text-xs text-white/60">Giorni Streak</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <Zap className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                <p className="text-xl font-bold text-white">{formatBalance(userData.balance)}</p>
                <p className="text-xs text-white/60">BUBZ Balance</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-4 mb-4" glow="violet">
            <p className="text-xs text-white/60 mb-2">Codice Referral</p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-mono font-bold text-white">{userData.referralCode}</p>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(userData.referralCode)}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/60 mb-1">Link di invito</p>
              <p className="text-xs font-mono text-white/80 truncate">{referralLink}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-4">
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-white/60" />
                  <span className="text-sm text-white">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </Link>
            ))}
          </Card>
        </motion.div>
      </motion.div>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/90 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-[430px] mx-auto flex justify-around py-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1">
              <div className={`p-2 rounded-xl transition-all ${item.active ? "bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] shadow-lg shadow-cyan-500/20" : ""}`}>
                <item.icon className={`w-5 h-5 ${item.active ? "text-white" : "text-white/40"}`} />
              </div>
              <span className={`text-[10px] font-medium ${item.active ? "text-white" : "text-white/40"}`}>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
