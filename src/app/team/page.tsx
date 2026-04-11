import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { demoUser, teamMembers } from "@/lib/mock";

export default function TeamPage() {
  return (
    <AppShell title="Team" subtitle="Referral network matrix">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Referral Tree" subtitle="Network topology structure" />
          <div className="grid gap-2 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <div key={member.username} className="hud-corner border border-cyan-500/20 bg-black/50 p-3 text-xs sm:text-sm">
                <p className="font-semibold text-white font-mono">@{member.username}</p>
                <p className="text-slate-400 font-mono">LV: {member.level} | STATUS: {member.status}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionTitle title="Referral Link" subtitle="Share to expand network" />
          <p className="text-[10px] text-slate-400 font-mono uppercase">REFERRAL_CODE</p>
          <p className="hud-corner border border-cyan-500/20 bg-black/50 px-3 py-2 text-xs sm:text-sm font-mono mt-1">{demoUser.referralCode}</p>
          <p className="text-[10px] text-slate-400 font-mono uppercase mt-3">NETWORK_LINK</p>
          <p className="hud-corner border border-pink-500/20 bg-black/50 px-3 py-2 text-[10px] sm:text-xs text-cyan-300 font-mono mt-1 break-all">{demoUser.referralLink}</p>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Leaderboard" subtitle="Network ranking matrix" />
        <div className="grid gap-2">
          {teamMembers.map((member, i) => (
            <div key={member.username} className="flex items-center justify-between hud-corner border border-cyan-500/10 bg-black/50 px-3 py-2 text-xs sm:text-sm">
              <span className="font-mono">
                #{i + 1} <span className="text-cyan-300">@{member.username}</span>
              </span>
              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 text-cyan-300 font-black">Lv.{member.level}</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
