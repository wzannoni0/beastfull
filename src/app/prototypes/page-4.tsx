import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { levels, formatBalance } from "@/lib/levels"
import {
  Zap,
  Flame,
  Gift,
  Trophy,
  Users,
  ChevronRight,
  Wallet,
  TrendingUp,
  Crown,
  Target,
  Sparkles,
  Star,
  Home,
  BarChart3,
  Calendar,
  User,
  Shield,
  Bell,
  Settings,
} from "lucide-react"

const navItems = [
  { href: "/", icon: Home, label: "Home", active: true },
  { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { href: "/calendar", icon: Calendar, label: "Claim" },
  { href: "/team", icon: Users, label: "Team" },
  { href: "/profile", icon: User, label: "Profile" },
]

export default function Prototype4() {
  const user = { username: "beast.alpha", balance: 1280, streak: 12, level: 4 }
  const currentLevel = levels.find(l => l.id === user.level) || levels[0]

  return (
    <div className="min-h-screen bg-[#09090b] pb-24">
      <div className="max-w-[430px] mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Avatar size="md" ring="cyan">
              <AvatarFallback variant="gradient">B</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs text-white/60">Welcome back</p>
              <p className="font-bold text-white">@{user.username}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-white/5">
              <Bell className="w-5 h-5 text-white/60" />
            </button>
            <button className="p-2 rounded-full bg-white/5">
              <Settings className="w-5 h-5 text-white/60" />
            </button>
          </div>
        </div>

        {/* Hero Balance */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 via-[#8b5cf6]/20 to-[#00d4ff]/20 rounded-3xl blur-xl" />
          <Card className="p-6 relative border border-white/10 bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#00d4ff]" />
              <span className="text-sm text-white/60">Total Balance</span>
            </div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl font-black bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
                {formatBalance(user.balance)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Badge variant={`level${user.level}` as any}>{currentLevel.name}</Badge>
              <div className="flex items-center gap-2 text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">+12.5%</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Claim Card */}
        <Card className="p-5 mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
              <Gift className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-lg">Daily Reward Ready!</p>
              <p className="text-sm text-white/60">Claim your +2.50 BUBZ</p>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg shadow-green-500/30">
              CLAIM
            </Button>
          </div>
        </Card>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { icon: Flame, value: user.streak, label: "Streak", color: "text-orange-400" },
            { icon: Users, value: "24", label: "Team", color: "text-violet-400" },
            { icon: Target, value: "1.8", label: "Daily", color: "text-cyan-400" },
            { icon: Trophy, value: "#3", label: "Rank", color: "text-yellow-400" },
          ].map((stat, i) => (
            <Card key={i} className="p-3 text-center bg-white/5 border border-white/10">
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-[10px] text-white/60">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Level Progress */}
        <Card className="p-4 mb-6 bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5" style={{ color: currentLevel.color }} />
              <span className="font-semibold text-white">Level {user.level}: {currentLevel.name}</span>
            </div>
            <span className="text-sm text-white/60">68%</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]"
              style={{ width: "68%" }}
            />
          </div>
          <p className="text-xs text-white/60 mt-2">350 BUBZ to Level {user.level + 1}</p>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: Users, title: "Invite Friends", desc: "Earn 10 BUBZ per invite", color: "from-violet-500 to-purple-500" },
            { icon: TrendingUp, title: "Deposit", desc: "Add more BUBZ", color: "from-cyan-500 to-blue-500" },
            { icon: Shield, title: "Security", desc: "Protect your account", color: "from-green-500 to-emerald-500" },
            { icon: Star, title: "Upgrade", desc: "Level up faster", color: "from-orange-500 to-red-500" },
          ].map((feature, i) => (
            <button key={i} className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-left`}>
              <feature.icon className="w-6 h-6 text-white mb-2" />
              <p className="font-bold text-white">{feature.title}</p>
              <p className="text-xs text-white/80">{feature.desc}</p>
            </button>
          ))}
        </div>

        {/* Leaderboard */}
        <Card className="p-4 bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-white">Leaderboard</span>
            </div>
            <Button variant="ghost" size="sm" className="text-white/60">
              View All <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {[
              { rank: 1, name: "titan.kai", amount: "12.4K", bg: "bg-yellow-500" },
              { rank: 2, name: "alpha.zen", amount: "10.8K", bg: "bg-slate-400" },
              { rank: 3, name: "beast.alpha", amount: "9.9K", bg: "bg-orange-400" },
              { rank: 4, name: "neon.ray", amount: "9.4K", bg: "bg-white/20" },
            ].map((item) => (
              <div key={item.rank} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors">
                <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center text-sm font-bold text-black`}>
                  {item.rank}
                </div>
                <span className="flex-1 text-sm text-white">@{item.name}</span>
                <span className="text-sm font-bold text-[#00d4ff]">{item.amount}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-[430px] mx-auto flex justify-around py-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="flex flex-col items-center gap-1">
              <div className={`p-2 rounded-xl transition-all ${item.active ? "bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] shadow-lg shadow-cyan-500/20" : ""}`}>
                <item.icon className={`w-5 h-5 ${item.active ? "text-white" : "text-white/40"}`} />
              </div>
              <span className={`text-[10px] font-medium ${item.active ? "text-white" : "text-white/40"}`}>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}
