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
  ArrowUpRight,
  ArrowDownRight,
  Home,
  BarChart3,
  Calendar,
  User,
} from "lucide-react"

const navItems = [
  { href: "/", icon: Home, label: "Home", active: true },
  { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { href: "/calendar", icon: Calendar, label: "Claim" },
  { href: "/team", icon: Users, label: "Team" },
  { href: "/profile", icon: User, label: "Profile" },
]

export default function Prototype3() {
  const user = { username: "beast.alpha", balance: 1280, streak: 12, level: 4 }
  const currentLevel = levels.find(l => l.id === user.level) || levels[0]

  return (
    <div className="min-h-screen bg-[#09090b] pb-24">
      <div className="max-w-[430px] mx-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-b from-[#00d4ff]/10 via-[#09090b] to-[#09090b] px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Avatar size="lg" ring="cyan">
                <AvatarFallback variant="gradient">B</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white/60 text-sm">Ciao,</p>
                <h1 className="text-xl font-black text-white">@{user.username}</h1>
              </div>
            </div>
            <Button variant="ghost" className="rounded-full p-3 bg-white/5">
              <Sparkles className="w-5 h-5 text-[#00d4ff]" />
            </Button>
          </div>

          {/* Big Balance Card */}
          <Card className="p-6 border-2 border-[#00d4ff]/30 bg-gradient-to-br from-[#00d4ff]/5 to-[#8b5cf6]/5 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-white/60">Total Balance</span>
              <Badge variant={`level${user.level}` as any}>{currentLevel.badge}</Badge>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-black text-white">{formatBalance(user.balance)}</span>
              <span className="text-lg text-white/60">BUBZ</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% this month</span>
            </div>
          </Card>
        </div>

        {/* Claim Button Floating */}
        <div className="px-4 -mt-4 relative z-10">
          <Card className="p-4 border-0 shadow-2xl shadow-[#00d4ff]/20 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">Daily Claim</p>
                  <p className="text-sm text-white/80">+2.50 BUBZ available</p>
                </div>
              </div>
              <Button className="bg-white text-[#8b5cf6] font-bold hover:bg-white/90">
                Claim Now
              </Button>
            </div>
          </Card>
        </div>

        <div className="px-4 pt-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Streak", value: user.streak, icon: Flame, color: "text-orange-400" },
              { label: "Team", value: "24", icon: Users, color: "text-violet-400" },
              { label: "Daily", value: "1.8", icon: Target, color: "text-green-400" },
            ].map((stat, i) => (
              <Card key={i} className="p-4 text-center">
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-white/60">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-lg font-bold text-white mb-3">Quick Actions</h2>
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: Gift, label: "Claim", color: "bg-green-500" },
                { icon: Users, label: "Invite", color: "bg-violet-500" },
                { icon: TrendingUp, label: "Deposit", color: "bg-cyan-500" },
                { icon: Wallet, label: "Withdraw", color: "bg-orange-500" },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-white/80">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Transactions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-white">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="text-white/60">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <Card className="p-4 space-y-4">
              {[
                { icon: Gift, type: "Daily Claim", amount: "+2.50", time: "2h ago", color: "text-green-400", bg: "bg-green-500/20" },
                { icon: Users, type: "Referral Bonus", amount: "+10.00", time: "1d ago", color: "text-cyan-400", bg: "bg-cyan-500/20" },
                { icon: TrendingUp, type: "Deposit", amount: "+50.00", time: "3d ago", color: "text-violet-400", bg: "bg-violet-500/20" },
              ].map((tx, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${tx.bg} flex items-center justify-center`}>
                    <tx.icon className={`w-5 h-5 ${tx.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">{tx.type}</p>
                    <p className="text-xs text-white/60">{tx.time}</p>
                  </div>
                  <span className={`text-sm font-bold ${tx.color}`}>{tx.amount}</span>
                </div>
              ))}
            </Card>
          </div>

          {/* Leaderboard */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h2 className="text-lg font-bold text-white">Top Investors</h2>
              </div>
              <Button variant="ghost" size="sm" className="text-white/60">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <Card className="p-4 space-y-3">
              {[
                { rank: 1, name: "titan.kai", amount: "12.4K", color: "text-yellow-400" },
                { rank: 2, name: "alpha.zen", amount: "10.8K", color: "text-slate-300" },
                { rank: 3, name: "beast.alpha", amount: "9.9K", color: "text-orange-400" },
              ].map((item) => (
                <div key={item.rank} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    item.rank === 1 ? "bg-yellow-500/20 text-yellow-400" :
                    item.rank === 2 ? "bg-slate-400/20 text-slate-300" :
                    "bg-orange-400/20 text-orange-400"
                  }`}>
                    {item.rank}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">@{item.name}</p>
                  </div>
                  <span className={`text-sm font-bold ${item.color}`}>{item.amount}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>
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
