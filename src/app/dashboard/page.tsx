import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { CanWidget } from "@/components/can-widget";
import { Card, SectionTitle } from "@/components/premium";
import { demoUser, leaderboard, levelState, recentActivity, teamMembers } from "@/lib/mock";
import { getServerSession } from "@/lib/server-session";

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  return (
    <AppShell title="Dashboard" subtitle="Grow stronger every day">
      <div className="grid gap-4 lg:grid-cols-3">
        <CanWidget level={levelState.current.id} canState={levelState.current.canState} power={demoUser.canPower} />

        <Card>
          <SectionTitle title="Daily Claim" subtitle="Claim today’s power" />
          <p className="text-sm text-slate-300">Reward attuale: {levelState.current.rewardPerDay.toFixed(2)} BZT</p>
          <p className="mt-2 text-sm text-slate-400">Streak: {demoUser.streak} giorni</p>
          <form action="/api/claim" method="post">
            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 font-semibold">
              Claim giornaliero
            </button>
          </form>
        </Card>

        <Card>
          <SectionTitle title="Next Level Progress" subtitle="Reach the next form" />
          <p className="text-sm text-slate-300">
            Attuale: Lv.{levelState.current.id} • {levelState.current.name}
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${levelState.progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-slate-400">Progress to next: {Math.round(levelState.progress)}%</p>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Team Growth" subtitle="Team energy unlocked" />
          <p className="text-sm text-slate-300">Diretti attivi: {demoUser.directs}</p>
          <p className="text-sm text-slate-300">Forza team: {demoUser.teamStrength}</p>
          <div className="mt-4 space-y-2">
            {teamMembers.slice(0, 3).map((m) => (
              <div key={m.username} className="flex items-center justify-between rounded-lg bg-black/20 px-3 py-2 text-sm">
                <span>@{m.username}</span>
                <span className="text-slate-300">{m.level}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionTitle title="Recent Activity" subtitle="Your momentum log" />
          <ul className="space-y-2 text-sm text-slate-300">
            {recentActivity.map((item) => (
              <li key={item} className="rounded-lg bg-black/20 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Global Leaderboard" subtitle="Top Beastfull players" />
        <div className="grid gap-2">
          {leaderboard.map((row) => (
            <div key={row.rank} className="flex items-center justify-between rounded-lg bg-black/20 px-3 py-2 text-sm">
              <span>
                #{row.rank} {row.user}
              </span>
              <span className="font-semibold text-blue-300">{row.score} BZT</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
