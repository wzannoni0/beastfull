import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { CanWidget } from "@/components/can-widget";
import { Card, SectionTitle } from "@/components/premium";
import { ClaimForm } from "@/components/claim-form";
import { AnimatedNumber } from "@/components/animated-number";
import { demoUser, leaderboard, levelState, recentActivity, teamMembers } from "@/lib/mock";
import { getServerSession } from "@/lib/server-session";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  return (
    <AppShell title="Dashboard" subtitle="Grow stronger every day">
      <div className="grid gap-4 xl:grid-cols-3">
        <CanWidget
          level={levelState.current.id}
          canState={levelState.current.canState}
          power={demoUser.canPower}
          animate
        />

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <SectionTitle title="Daily Claim" subtitle="Claim today's power" />
          <p className="text-sm text-slate-300">
            Reward: <span className="font-semibold text-blue-300"><AnimatedNumber value={levelState.current.rewardPerDay} decimals={2} suffix=" NXF" /></span>
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Streak: <AnimatedNumber value={demoUser.streak} suffix=" giorni" />
          </p>
          <div className="mt-4">
            <ClaimForm rewardPerDay={levelState.current.rewardPerDay} />
          </div>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <SectionTitle title="Next Level Progress" subtitle="Reach the next form" />
          <p className="text-sm text-slate-300">
            Attuale: Lv.{levelState.current.id} • <span className="text-violet-300">{levelState.current.name}</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full animate-power-shimmer"
              style={{ width: `${levelState.progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Progress to next: <AnimatedNumber value={levelState.progress} suffix="%" />
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xs text-slate-300">Current</p>
              <p className="text-lg font-black text-white">Lv.{levelState.current.id}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xs text-slate-300">Progress</p>
              <p className="text-lg font-black text-cyan-200"><AnimatedNumber value={levelState.progress} suffix="%" /></p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <SectionTitle title="Team Growth" subtitle="Team energy unlocked" />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xl font-black"><AnimatedNumber value={demoUser.directs} /></p>
              <p className="text-xs text-slate-400">Diretti attivi</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xl font-black"><AnimatedNumber value={demoUser.teamStrength} /></p>
              <p className="text-xs text-slate-400">Forza team</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {teamMembers.slice(0, 3).map((m) => (
              <div key={m.username} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm">
                <span>@{m.username}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-blue-200">Lv.{m.level}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <SectionTitle title="Recent Activity" subtitle="Your momentum log" />
          <ul className="space-y-2 text-sm text-slate-300">
            {recentActivity.map((item, i) => (
              <li
                key={item}
                className="animate-fade-in rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                style={{ animationDelay: `${0.5 + i * 0.05}s` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <SectionTitle title="Global Leaderboard" subtitle="Top NEXAFORCE players" />
        <div className="grid gap-2">
          {leaderboard.map((row, i) => (
            <div
              key={row.rank}
              className="animate-rank glass-card-hover flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm"
              style={{ animationDelay: `${0.6 + i * 0.08}s` }}
            >
              <span className="flex items-center gap-2">
                {row.rank === 1 && <span className="text-yellow-400">1</span>}
                {row.rank === 2 && <span className="text-slate-300">2</span>}
                {row.rank === 3 && <span className="text-orange-400">3</span>}
                {row.rank > 3 && <span className="text-slate-400">#{row.rank}</span>}
                <span className={row.rank <= 3 ? "font-semibold text-white" : ""}>{row.user}</span>
              </span>
              <span className="font-semibold text-blue-300">{row.score} NXF</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
