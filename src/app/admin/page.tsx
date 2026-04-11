"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { GlowOrb } from "@/components/glow-orb"
import { ParticlesBackground } from "@/components/particles-background"
import {
  ChevronLeft,
  Shield,
  Users,
  CreditCard,
  DollarSign,
  Check,
  X,
  Clock,
  AlertTriangle,
  BarChart3,
  UserCheck,
  UserX
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

const pendingDeposits = [
  { id: 1, user: "CryptoKing_99", amount: 100, date: "2 hours ago" },
  { id: 2, user: "DeFiMaster", amount: 250, date: "3 hours ago" },
  { id: 3, user: "TokenHunter", amount: 50, date: "5 hours ago" },
]

const pendingWithdrawals = [
  { id: 1, user: "Web3Wizard", amount: -25, address: "TRX...7x9K2", date: "1 hour ago" },
  { id: 2, user: "NFTAficionado", amount: -50, address: "TRX...3mN8", date: "4 hours ago" },
]

const recentUsers = [
  { id: 1, name: "NewUser123", level: 1, status: "active", joined: "1 hour ago" },
  { id: 2, name: "BlockchainPro", level: 3, status: "active", joined: "2 hours ago" },
  { id: 3, name: "CryptoNewbie", level: 1, status: "suspended", joined: "1 day ago" },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"deposits" | "withdrawals" | "users" | "stats">("deposits")

  const stats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalDeposits: 45600,
    totalWithdrawals: 12300,
    pendingDeposits: 3,
    pendingWithdrawals: 2,
  }

  return (
    <div className="min-h-screen bg-[#09090b] overflow-hidden">
      <ParticlesBackground count={30} />
      <GlowOrb color="#ef4444" size="xl" position="top-right" />
      <GlowOrb color="#fbbf24" size="lg" position="bottom-left" />

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
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#fbbf24]" />
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
          <div className="w-10" />
        </motion.header>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-[#00d4ff]" />
            <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
            <p className="text-white/40 text-xs">Total Users</p>
          </Card>
          <Card className="p-4 text-center">
            <BarChart3 className="w-6 h-6 mx-auto mb-2 text-[#22c55e]" />
            <p className="text-2xl font-bold text-white">{stats.activeUsers}</p>
            <p className="text-white/40 text-xs">Active</p>
          </Card>
          <Card className="p-4 text-center">
            <DollarSign className="w-6 h-6 mx-auto mb-2 text-[#22c55e]" />
            <p className="text-2xl font-bold text-white">{stats.totalDeposits.toLocaleString()}</p>
            <p className="text-white/40 text-xs">Total Deposits</p>
          </Card>
          <Card className="p-4 text-center">
            <CreditCard className="w-6 h-6 mx-auto mb-2 text-[#ef4444]" />
            <p className="text-2xl font-bold text-white">{stats.totalWithdrawals.toLocaleString()}</p>
            <p className="text-white/40 text-xs">Total Withdrawals</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: "deposits", label: "Deposits", icon: DollarSign, count: stats.pendingDeposits },
              { id: "withdrawals", label: "Withdrawals", icon: CreditCard, count: stats.pendingWithdrawals },
              { id: "users", label: "Users", icon: Users, count: null },
              { id: "stats", label: "Stats", icon: BarChart3, count: null },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.count !== null && tab.count > 0 && (
                  <Badge variant="warning" className="ml-1">{tab.count}</Badge>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {activeTab === "deposits" && (
          <motion.div variants={itemVariants}>
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#fbbf24]" />
                Pending Deposits
              </h3>
              <div className="space-y-3">
                {pendingDeposits.map((deposit) => (
                  <div key={deposit.id} className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-[#8b5cf6]/20 to-[#00d4ff]/20">
                            {deposit.user.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium">{deposit.user}</p>
                          <p className="text-white/40 text-xs">{deposit.date}</p>
                        </div>
                      </div>
                      <p className="text-[#22c55e] font-bold">+{deposit.amount} BUBZ</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-[#22c55e] hover:bg-[#22c55e]/80">
                        <Check className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" className="flex-1">
                        <X className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {activeTab === "withdrawals" && (
          <motion.div variants={itemVariants}>
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#fbbf24]" />
                Pending Withdrawals
              </h3>
              <div className="space-y-3">
                {pendingWithdrawals.map((withdrawal) => (
                  <div key={withdrawal.id} className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-[#ef4444]/20 to-[#fbbf24]/20">
                            {withdrawal.user.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium">{withdrawal.user}</p>
                          <p className="text-white/40 text-xs">{withdrawal.address}</p>
                        </div>
                      </div>
                      <p className="text-[#ef4444] font-bold">{withdrawal.amount} BUBZ</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-[#22c55e] hover:bg-[#22c55e]/80">
                        <Check className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" className="flex-1">
                        <X className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {activeTab === "users" && (
          <motion.div variants={itemVariants}>
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#8b5cf6]" />
                Recent Users
              </h3>
              <div className="space-y-3">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-[#8b5cf6]/20 to-[#00d4ff]/20">
                          {user.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-white/40 text-xs">Level {user.level} • {user.joined}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={user.status === "active" ? "success" : "destructive"}>
                        {user.status === "active" ? (
                          <UserCheck className="w-3 h-3 mr-1" />
                        ) : (
                          <UserX className="w-3 h-3 mr-1" />
                        )}
                        {user.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {activeTab === "stats" && (
          <motion.div variants={itemVariants}>
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#00d4ff]" />
                Platform Statistics
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60">Active Users Rate</span>
                    <span className="text-[#22c55e] font-bold">{((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00d4ff] to-[#22c55e] rounded-full"
                      style={{ width: `${(stats.activeUsers / stats.totalUsers) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60">Deposit/Withdrawal Ratio</span>
                    <span className="text-[#00d4ff] font-bold">{(stats.totalDeposits / stats.totalWithdrawals).toFixed(2)}x</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex-1 h-2 bg-[#22c55e] rounded-l-full" style={{ width: "70%" }} />
                    <div className="flex-1 h-2 bg-[#ef4444] rounded-r-full" style={{ width: "30%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <p className="text-white font-bold">{stats.pendingDeposits + stats.pendingWithdrawals}</p>
                    <p className="text-white/40 text-xs">Pending</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <p className="text-[#22c55e] font-bold">{(stats.totalDeposits - stats.totalWithdrawals).toLocaleString()}</p>
                    <p className="text-white/40 text-xs">Net Flow</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mt-6">
          <Card className="p-5 border-[#fbbf24]/30">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-[#fbbf24]" />
              </div>
              <div>
                <p className="text-white font-bold mb-1">Admin Notice</p>
                <p className="text-white/60 text-sm">
                  All administrative actions are logged and audited. Ensure compliance with platform policies.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
