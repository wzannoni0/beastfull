"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { levels, formatBalance } from "@/lib/levels"
import {
  Zap,
  Users,
  Copy,
  Share2,
  Home,
  BarChart3,
  Calendar,
  User,
  ChevronRight,
  TrendingUp,
  Gift,
  Crown,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { href: "/calendar", icon: Calendar, label: "Claim" },
  { href: "/team", icon: Users, label: "Team", active: true },
  { href: "/profile", icon: User, label: "Profile" },
]

const userData = {
  referralCode: "BEAST-ALPHA-77",
  teamSize: 24,
  directs: 6,
}

const teamMembers = [
  { username: "nova.z", level: 3, balance: 420, status: "active" },
  { username: "hex.rush", level: 2, balance: 180, status: "active" },
  { username: "ion.glow", level: 5, balance: 1520, status: "active" },
  { username: "void.pulse", level: 1, balance: 45, status: "inactive" },
  { username: "neon.blaze", level: 4, balance: 890, status: "active" },
  { username: "pixel.storm", level: 2, balance: 210, status: "active" },
]

const stats = [
  { label: "Team Size", value: userData.teamSize, icon: Users, color: "text-cyan-400" },
  { label: "Directs", value: userData.directs, icon: Crown, color: "text-violet-400" },
  { label: "Team Volume", value: "12.4K", icon: TrendingUp, color: "text-green-400" },
]

export default function TeamPage() {
  const referralLink = `https://beastfull.vercel.app/register?ref=${userData.referralCode}`
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#09090b] pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[430px] mx-auto px-4 pt-6"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-2xl font-black text-white">Team</h1>
          <p className="text-sm text-white/60">La tua rete di riferimento</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, i) => (
            <Card key={i} className="p-4 text-center" glow={i === 0 ? "cyan" : i === 1 ? "violet" : "pink"}>
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-[10px] text-white/60">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-4 mb-4" glow="cyan">
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm font-semibold text-white">Invita nuovi membri</p>
                <p className="text-xs text-white/60">Condividi il tuo link di referral</p>
              </div>
            </div>
            
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-3">
              <p className="text-xs text-white/60 mb-1">Codice Referral</p>
              <p className="text-lg font-mono font-bold text-white">{userData.referralCode}</p>
            </div>
            
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-3">
              <p className="text-xs text-white/60 mb-1">Link di invito</p>
              <p className="text-xs font-mono text-white/80 break-all">{referralLink}</p>
            </div>
            
            <Button onClick={copyToClipboard} className="w-full" variant="glass">
              <Copy className="w-4 h-4 mr-2" />
              {copied ? "Copiato!" : "Copia Link"}
            </Button>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-white">Membri Team ({teamMembers.length})</h2>
            <Button variant="ghost" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <Card className="p-0 divide-y divide-white/10">
            {teamMembers.map((member, i) => {
              const level = levels.find(l => l.id === member.level) || levels[0]
              return (
                <div key={i} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm"
                      style={{ backgroundColor: level.bgColor, border: `1px solid ${level.borderColor}` }}
                    >
                      {member.username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">@{member.username}</p>
                      <p className="text-xs" style={{ color: level.color }}>Level {member.level} - {level.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">{formatBalance(member.balance)}</p>
                    <p className={`text-xs ${member.status === "active" ? "text-green-400" : "text-white/40"}`}>
                      {member.status === "active" ? "Attivo" : "Inattivo"}
                    </p>
                  </div>
                </div>
              )
            })}
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6">
          <Card className="p-4" glow="violet">
            <div className="flex items-center gap-3 mb-3">
              <Gift className="w-5 h-5 text-violet-400" />
              <p className="text-sm font-semibold text-white">Bonus Referral</p>
            </div>
            <p className="text-xs text-white/60 mb-3">
              Per ogni membro diretto che si registra, ricevi un bonus di 10 BUBZ!
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60">Bonus per invito</span>
                <span className="text-sm font-bold text-cyan-400">+10 BUBZ</span>
              </div>
            </div>
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
