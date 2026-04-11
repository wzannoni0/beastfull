import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { levels, formatBalance } from "@/lib/levels"
import {
  Zap,
  Flame,
  Gift,
  Trophy,
  Users,
  Star,
  ChevronRight,
  Wallet,
  Activity,
  Home,
  BarChart3,
  Calendar,
  User,
  TrendingUp,
  Crown,
  Target,
  Sparkles,
} from "lucide-react"

const navItems = [
  { href: "/", icon: Home, label: "Home", active: true },
  { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { href: "/calendar", icon: Calendar, label: "Claim" },
  { href: "/team", icon: Users, label: "Team" },
  { href: "/profile", icon: User, label: "Profile" },
]

export default function Prototype2() {
  const user = { username: "beast.alpha", balance: 1280, streak: 12, level: 4 }
  const currentLevel = levels.find(l => l.id === user.level) || levels[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#09090b] pb-24">
      {/* Hero Section */}
      <div className="relative px-4 pt-6">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        
        <div className="relative flex items-center justify-between mb-8">
          <div>
            <p className="text-xs text-white/60 mb-1">Benvenuto,</p>
            <h1 className="text-2xl font-black text-white">@{user.username}</h1>
          </div>
          <Badge variant={`level${user.level}` as any}>{currentLevel.name}</Badge>
        </div>

        {/* Main Balance */}
        <Card className="p-6 mb-6 relative overflow-hidden border-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8b5cf6]/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-[#00d4ff]/20">
                <Wallet className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <span className="text-sm text-white/60">BUBZ Balance</span>
            </div>
            
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-black bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {formatBalance(user.balance)}
              </span>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400">+12.5%</span>
              </div>
            </div>

            <Button className="w-full h-12 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold shadow-lg shadow-cyan-500/25">
              <Sparkles className="w-5 h-5 mr-2" />
              Claim +2.50 BUBZ
            </Button>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { icon: Flame, label: "Streak", value: user.streak, color: "text-orange-400", bg: "bg-orange-500/20" },
            { icon: Users, label: "Team", value: "24", color: "text-violet-400", bg: "bg-violet-500/20" },
            { icon: Target, label: "Daily", value: "1.8", color: "text-green-400", bg: "bg-green-500/20" },
            { icon: Trophy, label: "Rank", value: "#3", color: "text-yellow-400", bg: "bg-yellow-500/20" },
          ].map((stat, i) => (
            <Card key={i} className={`p-3 text-center ${stat.bg} border-0`}>
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-[10px] text-white/60">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Level Progress */}
        <Card className="p-4 mb-6" glow="cyan">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5" style={{ color: currentLevel.color }} />
              <span className="font-semibold text-white">Level {user.level}: {currentLevel.name}</span>
            </div>
            <span className="text-sm text-white/60">68%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]" />
          </div>
          <p className="text-xs text-white/60 mt-2">350 BUBZ per Level {user.level + 1}</p>
        </Card>

        {/* Quick Actions */}
        <h2 className="text-lg font-bold text-white mb-3">Azioni Rapide</h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: Gift, label: "Claim Giornaliero", color: "from-green-500 to-emerald-500" },
            { icon: Users, label: "Invita Amici", color: "from-violet-500 to-purple-500" },
            { icon: TrendingUp, label: "Deposita", color: "from-cyan-500 to-blue-500" },
            { icon: Activity, label: "Statistiche", color: "from-orange-500 to-red-500" },
          ].map((action, i) => (
            <button key={i} className={`p-4 rounded-2xl bg-gradient-to-br ${action.color} flex items-center gap-3 shadow-lg`}>
              <action.icon className="w-6 h-6 text-white" />
              <span className="font-semibold text-white">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Leaderboard */}
        <Card className="p-4" glow="violet">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-white">Classifica</span>
            </div>
            <Button variant="ghost" size="sm" className="text-white/60">
              Vedi tutto <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {[
              { rank: 1, name: "titan.kai", amount: "12.4K", badge: "👑" },
              { rank: 2, name: "alpha.zen", amount: "10.8K", badge: "🥈" },
              { rank: 3, name: "beast.alpha", amount: "9.9K", badge: "🥉" },
              { rank: 4, name: "neon.ray", amount: "9.4K", badge: "4" },
            ].map((item) => (
              <div key={item.rank} className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
                <span className="text-lg">{item.badge}</span>
                <div className="flex-1">
                  <p className="text-sm text-white">@{item.name}</p>
                </div>
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
