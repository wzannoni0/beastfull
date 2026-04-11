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
  Zap as ZapIcon,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

const navItems = [
  { href: "/", icon: Home, label: "Home", active: true },
  { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { href: "/calendar", icon: Calendar, label: "Claim" },
  { href: "/team", icon: Users, label: "Team" },
  { href: "/profile", icon: User, label: "Profile" },
]

export default function Prototype5() {
  const user = { username: "beast.alpha", balance: 1280, streak: 12, level: 4 }
  const currentLevel = levels.find(l => l.id === user.level) || levels[0]

  return (
    <div className="min-h-screen bg-[#09090b] pb-24">
      <div className="max-w-[430px] mx-auto">
        {/* Gradient Header */}
        <div className="bg-gradient-to-b from-[#00d4ff]/20 via-[#8b5cf6]/10 to-[#09090b] px-4 pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Avatar size="lg" ring="cyan">
                <AvatarFallback variant="gradient">B</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white/60 text-sm">@{user.username}</p>
                <div className="flex items-center gap-2">
                  <Badge variant={`level${user.level}` as any} className="text-xs">{currentLevel.name}</Badge>
                </div>
              </div>
            </div>
            <Button variant="ghost" className="rounded-full bg-white/5 p-3">
              <Sparkles className="w-5 h-5 text-[#00d4ff]" />
            </Button>
          </div>

          {/* Main Balance */}
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm mb-1">Your Balance</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl font-black text-white">{formatBalance(user.balance)}</span>
            </div>
            <p className="text-white/60">BUBZ</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">+12.5%</span>
              <span className="text-white/60 text-sm">this month</span>
            </div>
          </div>

          {/* Claim Button */}
          <div className="flex justify-center mb-6">
            <Button className="h-14 px-8 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold rounded-2xl shadow-2xl shadow-cyan-500/30">
              <Gift className="w-5 h-5 mr-2" />
              Claim +2.50 BUBZ
            </Button>
          </div>
        </div>

        <div className="px-4 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 -mt-4">
            {[
              { icon: Flame, value: user.streak, label: "Streak", color: "text-orange-400", bg: "bg-orange-500/20" },
              { icon: Users, value: "24", label: "Team", color: "text-violet-400", bg: "bg-violet-500/20" },
              { icon: Target, value: "1.8", label: "Daily", color: "text-green-400", bg: "bg-green-500/20" },
            ].map((stat, i) => (
              <Card key={i} className={`p-4 text-center ${stat.bg} border-0`}>
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-1`} />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-white/60">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Level Progress */}
          <Card className="p-4" glow="cyan">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5" style={{ color: currentLevel.color }} />
                <span className="font-semibold text-white">Level {user.level}: {currentLevel.name}</span>
              </div>
              <span className="text-sm font-bold text-cyan-400">68%</span>
            </div>
            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]" />
            </div>
            <p className="text-xs text-white/60 mt-2">350 BUBZ to Level {user.level + 1}</p>
          </Card>

          {/* Action Cards */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 border-0">
              <Users className="w-8 h-8 text-white mb-3" />
              <p className="font-bold text-white text-lg">Invite</p>
              <p className="text-sm text-white/80">Earn 10 BUBZ per friend</p>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 border-0">
              <TrendingUp className="w-8 h-8 text-white mb-3" />
              <p className="font-bold text-white text-lg">Deposit</p>
              <p className="text-sm text-white/80">Add more BUBZ</p>
            </Card>
          </div>

          {/* Transactions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-white">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="text-white/60">
                See All <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <Card className="p-4 space-y-4">
              {[
                { icon: Gift, type: "Daily Claim", amount: "+2.50", time: "2h ago", positive: true },
                { icon: Users, type: "Referral Bonus", amount: "+10.00", time: "1d ago", positive: true },
                { icon: TrendingUp, type: "Deposit", amount: "+50.00", time: "3d ago", positive: true },
                { icon: Activity, type: "Withdraw", amount: "-20.00", time: "5d ago", positive: false },
              ].map((tx, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.positive ? "bg-green-500/20" : "bg-red-500/20"
                  }`}>
                    <tx.icon className={`w-5 h-5 ${tx.positive ? "text-green-400" : "text-red-400"}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">{tx.type}</p>
                    <p className="text-xs text-white/60">{tx.time}</p>
                  </div>
                  <span className={`text-sm font-bold ${tx.positive ? "text-green-400" : "text-red-400"}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </Card>
          </div>

          {/* Leaderboard */}
          <Card className="p-4" glow="violet">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-white">Top Investors</span>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { rank: 1, name: "titan.kai", amount: "12.4K", color: "text-yellow-400" },
                { rank: 2, name: "alpha.zen", amount: "10.8K", color: "text-slate-300" },
                { rank: 3, name: "beast.alpha", amount: "9.9K", color: "text-orange-400" },
                { rank: 4, name: "neon.ray", amount: "9.4K", color: "text-white/60" },
              ].map((item) => (
                <div key={item.rank} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    item.rank === 1 ? "bg-yellow-500/20 text-yellow-400" :
                    item.rank === 2 ? "bg-slate-400/20 text-slate-300" :
                    item.rank === 3 ? "bg-orange-400/20 text-orange-400" :
                    "bg-white/10 text-white/60"
                  }`}>
                    {item.rank}
                  </div>
                  <span className="flex-1 text-sm text-white">@{item.name}</span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.amount}</span>
                </div>
              ))}
            </div>
          </Card>
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
