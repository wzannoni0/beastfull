"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FizzCan } from "@/components/fizz-can";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const balance = 847.50;
  const level = 4;
  const streak = 12;
  const dailyReward = 2.00;
  const teamSize = 24;
  const directs = 7;
  const nextLevelProgress = 65;

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <motion.nav 
        className="nav-top"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-black text-sm font-display">FU</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wider font-display">FizzUp</p>
              <p className="text-[#00d4ff]/70 text-xs">BUBZ System</p>
            </div>
          </motion.div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-[#00d4ff]">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#00d4ff]">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </Button>
          </div>
        </div>
      </motion.nav>

      <motion.div 
        className="scroll-area"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Balance Header */}
        <motion.div variants={item}>
          <Card className="glow-border mb-4 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#00d4ff]/70 text-xs font-medium uppercase tracking-wider mb-1">Total Balance</p>
                <p className="text-white text-3xl font-black font-display">{balance.toFixed(2)}</p>
                <Badge variant="secondary" className="mt-1">BUBZ</Badge>
              </div>
              <div className="text-right">
                <p className="text-white text-lg font-bold">+{dailyReward}/day</p>
                <p className="text-[#00d4ff]/70 text-xs">Daily Reward</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main FizzCan */}
        <motion.div 
          className="flex justify-center py-6"
          variants={item}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FizzCan balance={balance} level={level} size="xl" />
        </motion.div>

        {/* Level Progress */}
        <motion.div variants={item}>
          <Card className="glow-border mb-4 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className={`level-badge level-${level}`}>LV.{level}</Badge>
                <div>
                  <p className="text-white font-bold">Splash</p>
                  <p className="text-[#00d4ff]/70 text-xs">Current Level</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">+{nextLevelProgress}%</p>
                <p className="text-[#00d4ff]/70 text-xs">Next Level</p>
              </div>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${nextLevelProgress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-[#00d4ff]/60 text-xs mt-2 text-center">150 BUBZ to next level</p>
          </Card>
        </motion.div>

        {/* Daily Claim */}
        <motion.div variants={item}>
          <Card className="glow-violet mb-4 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30 flex items-center justify-center">
                  <svg width="28" height="28" fill="none" stroke="#00d4ff" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Daily Claim</p>
                  <p className="text-[#00d4ff]/70 text-sm">
                    {streak > 0 ? `${streak} day streak!` : "Claim your reward"}
                  </p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold">
                CLAIM
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <motion.div className="grid grid-cols-2 gap-3 mb-4" variants={item}>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#00d4ff" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-xl">{teamSize}</p>
                <p className="text-[#00d4ff]/60 text-xs">Team Members</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#8b5cf6]/10 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#8b5cf6" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-xl">{directs}</p>
                <p className="text-[#8b5cf6]/60 text-xs">Active Directs</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={item}>
          <Card className="mb-4 p-5">
            <h3 className="text-white font-bold mb-4 font-display">Quick Actions</h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: "👥", label: "Team", href: "/team" },
                { icon: "📅", label: "Calendar", href: "/calendar" },
                { icon: "💰", label: "Deposit", href: "/deposit" },
                { icon: "📤", label: "Withdraw", href: "/withdrawal" },
              ].map((action) => (
                <motion.div
                  key={action.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={action.href}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-2xl">{action.icon}</span>
                    <span className="text-white/70 text-xs font-medium">{action.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Leaderboard Preview */}
        <motion.div variants={item}>
          <Card className="mb-4 overflow-hidden">
            <div className="p-5 pb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold font-display">Global Leaderboard</h3>
                <Button variant="ghost" size="sm" className="text-[#00d4ff] text-xs">See all</Button>
              </div>
            </div>
            <div className="space-y-2 px-5 pb-5">
              {[
                { rank: 1, name: "CryptoKing", level: 8, bubz: "45,230" },
                { rank: 2, name: "EnergyGamer", level: 7, bubz: "32,150" },
                { rank: 3, name: "NebulaX", level: 7, bubz: "28,900" },
                { rank: 4, name: "You", level: 4, bubz: "847.50", isYou: true },
              ].map((user) => (
                <motion.div 
                  key={user.rank}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    user.isYou 
                      ? "bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30" 
                      : "bg-white/5"
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    user.rank === 1 ? "bg-yellow-500 text-black" :
                    user.rank === 2 ? "bg-gray-400 text-black" :
                    user.rank === 3 ? "bg-amber-600 text-white" :
                    "bg-white/10 text-white/60"
                  }`}>
                    {user.rank}
                  </span>
                  <span className="text-white font-medium flex-1">{user.name}</span>
                  <Badge variant="secondary" className={`level-badge level-${user.level}`}>LV.{user.level}</Badge>
                  <span className="text-[#00d4ff] font-bold text-sm">{user.bubz}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item}>
          <Card className="glow-border mb-4 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold">Invite Friends</p>
                <p className="text-[#00d4ff]/70 text-sm">Earn bonus BUBZ</p>
              </div>
              <Button variant="outline" className="border-[#00d4ff] text-[#00d4ff]">
                Share Code
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Login CTA */}
        <motion.div className="text-center py-8" variants={item}>
          <p className="text-white/60 mb-4">Already a member?</p>
          <div className="flex gap-3 justify-center">
            <Link href="/login">
              <Button variant="outline" className="border-[#00d4ff] text-[#00d4ff]">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white">Get Started</Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
