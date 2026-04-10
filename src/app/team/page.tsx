import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { demoUser, teamMembers } from "@/lib/mock";

export default function TeamPage() {
  return (
    <AppShell title="Team" subtitle="Build your referral structure">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Referral Tree" subtitle="Struttura moderna e leggibile" />
          <div className="grid gap-3 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <div key={member.username} className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm">
                <p className="font-semibold text-white">@{member.username}</p>
                <p className="text-slate-300">Level: {member.level}</p>
                <p className="text-slate-400">Status: {member.status}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionTitle title="Referral Link" subtitle="Share and grow" />
          <p className="text-xs text-slate-400">Codice referral</p>
          <p className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm">{demoUser.referralCode}</p>
          <p className="mt-3 text-xs text-slate-400">Link referral</p>
          <p className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-300">{demoUser.referralLink}</p>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Leaderboard Team" subtitle="Forza complessiva e ranking" />
        <div className="grid gap-2">
          {teamMembers.map((member, i) => (
            <div key={member.username} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm">
              <span>
                #{i + 1} @{member.username}
              </span>
              <span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-blue-200">{member.level}</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
