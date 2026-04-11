"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Home,
  Users,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  User,
  Shield,
  Zap
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { href: "/team", icon: Users, label: "Team" },
  { href: "/calendar", icon: Calendar, label: "Claim" },
  { href: "/deposit", icon: CreditCard, label: "Deposit" },
  { href: "/activity", icon: Zap, label: "Activity" },
]

const bottomItems = [
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/admin", icon: Shield, label: "Admin" },
]

export function AppShell({ children, title, subtitle }: { children: React.ReactNode; title?: string; subtitle?: string }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#09090b]">
      <ParticlesBackground count={30} />
      <GlowOrb color="#00d4ff" size="xl" position="top-right" />
      <GlowOrb color="#8b5cf6" size="lg" position="bottom-left" />
      
      <nav className="fixed left-0 top-0 h-full w-20 bg-black/50 backdrop-blur-xl border-r border-white/5 z-50 flex flex-col">
        <div className="p-4 flex flex-col items-center gap-2">
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-[#00d4ff]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-black text-sm">FU</span>
          </motion.div>
          <span className="text-[10px] font-bold tracking-wider text-[#00d4ff]">FizzUp</span>
        </div>

        <div className="flex-1 flex flex-col items-center gap-2 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 text-white shadow-lg shadow-[#00d4ff]/10"
                      : "text-white/50 hover:text-white hover:bg-white/10"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5" />
                  {isActive && (
                    <motion.div
                      className="absolute w-1 h-8 rounded-r-full bg-gradient-to-b from-[#00d4ff] to-[#8b5cf6]"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </div>

        <div className="flex flex-col items-center gap-2 py-4 border-t border-white/5">
          {bottomItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 text-white"
                      : "text-white/50 hover:text-white hover:bg-white/10"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
              </Link>
            )
          })}
        </div>
      </nav>

      <main className="ml-20 min-h-screen">
        {children}
      </main>
    </div>
  )
}

import { ParticlesBackground } from "@/components/particles-background"
import { GlowOrb } from "@/components/glow-orb"
