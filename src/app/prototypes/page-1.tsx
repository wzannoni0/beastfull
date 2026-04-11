import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { levels, formatBalance } from "@/lib/levels"
import {
  Zap,
  TrendingUp,
  Users,
  Flame,
  Gift,
  Trophy,
  Crown,
  Target,
  Star,
  ChevronRight,
  Wallet,
  Activity,
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

export default function Prototype1() {
  const user = { username: "beast.alpha", balance: 1280, streak: 12, level: 4 }
  const currentLevel = levels.find(l => l.id === user.level) || levels[0]

  return (
    <div className="min-h-screen bg-[#09090b] pb-24">
      <div className="max-w-[430px] mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar size="md" ring="cyan">
              <AvatarFallback variant="gradient">B</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-white">@{user.username}</p>
              <p className="text-xs" style={{ color: currentLevel.color }}>{currentLevel.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-white/5">
              <Trophy className="w-5 h-5 text-yellow-400" />
            </div>
            <Badge variant={`level${user.level}` as any}>{currentLevel.badge}</Badge>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="p-6 mb-4" glow="cyan">
          <p className="text-xs text-white/60 mb-1">BUBZ Balance</p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl font-black text-white">{formatBalance(user.balance)}</span>
            <span className="text-sm text-white/60">BUBZ</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60">Progress to Level {user.level + 1}</span>
            <span className="text-cyan-400">68%</span>
          </div>
          <Progress value={68} className="mt-2 h-2" />
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="p-4 text-center">
            <Flame className="w-5 h-5 text-orange-400 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">{user.streak}</p>
            <p className="text-[10px] text-white/60">Streak</p>
          </Card>
          <Card className="p-4 text-center">
            <Users className="w-5 h-5 text-violet-400 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">24</p>
            <p className="text-[10px] text-white/60">Team</p>
          </Card>
          <Card className="p-4 text-center">
            <Target className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">1.8</p>
            <p className="text-[10px] text-white/60">Daily</p>
          </Card>
        </div>

        {/* Claim CTA */}
        <Card className="p-5 mb-4 relative overflow-hidden" glow="violet">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">Claim Giornaliero</p>
                <p className="text-sm text-white/60">+2.50 BUBZ disponibili</p>
              </div>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-violet-500 to-cyan-500">
              Claim
            </Button>
          </div>
        </Card>

        {/* Recent Activity */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-white">Attività Recente</h2>
            <Button variant="ghost" size="sm" className="text-white/60">
              Vedi tutto <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <Card className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Claim giornaliero</p>
                <p className="text-xs text-white/60">2 ore fa</p>
              </div>
              <span className="text-sm font-bold text-green-400">+2.50</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Nuovo membro team</p>
                <p className="text-xs text-white/60">1 giorno fa</p>
              </div>
              <span className="text-sm font-bold text-cyan-400">+10</span>
            </div>
          </Card>
        </div>

        {/* Leaderboard Preview */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Top Investors</h2>
          <Card className="p-4 space-y-3">
            {[
              { rank: 1, name: "titan.kai", amount: "12.4K" },
              { rank: 2, name: "alpha.zen", amount: "10.8K" },
              { rank: 3, name: "beast.alpha", amount: "9.9K" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  i === 0 ? "bg-yellow-500/20 text-yellow-400" :
                  i === 1 ? "bg-slate-400/20 text-slate-300" :
                  "bg-orange-400/20 text-orange-400"
                }`}>
                  {item.rank}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">@{item.name}</p>
                </div>
                <span className="text-sm font-bold text-white">{item.amount}</span>
              </div>
            ))}
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
