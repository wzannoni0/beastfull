import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { CanWidget } from "@/components/can-widget";
import { Card, SectionTitle } from "@/components/premium";
import { ClaimForm } from "@/components/claim-form";
import { AnimatedNumber } from "@/components/animated-number";
import { getServerSession } from "@/lib/server-session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  const balance = session.balance?.amount ? Number(session.balance.amount) : 0;
  const streak = session.profile?.streak || 0;
  
  const level = session.profile?.currentLevel || 1;
  const canPower = Math.min(100, Math.max(10, balance / 100 + 20));

  const teamCount = await prisma.teamMember.count({
    where: { sponsorId: session.userId, status: "ACTIVE" },
  });

  const recentClaims = await prisma.dailyClaim.findMany({
    where: { userId: session.userId },
    orderBy: { claimedAt: "desc" },
    take: 5,
  });

  return (
    <AppShell title="Dashboard" subtitle={`Benvenuto, ${session.username}`}>
      <div className="grid gap-4 xl:grid-cols-3">
        <CanWidget
          level={level}
          canState={`Level ${level} Luna`}
          power={Math.round(canPower)}
          animate
        />

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <SectionTitle title="Daily Claim" subtitle="Claim today's power" />
          <p className="text-sm text-slate-300">
            Balance: <span className="font-semibold text-blue-300"><AnimatedNumber value={balance} decimals={2} suffix=" NXF" /></span>
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Streak: <AnimatedNumber value={streak} suffix=" giorni" />
          </p>
          <div className="mt-4">
            <ClaimForm rewardPerDay={level * 2} />
          </div>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <SectionTitle title="Next Level Progress" subtitle="Reach the next form" />
          <p className="text-sm text-slate-300">
            Attuale: Lv.{level} • <span className="text-violet-300">Luna Core</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full animate-power-shimmer"
              style={{ width: `${canPower}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Progress to next: <AnimatedNumber value={canPower} suffix="%" />
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xs text-slate-300">Balance</p>
              <p className="text-lg font-black text-white">{balance.toFixed(2)}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xs text-slate-300">Team</p>
              <p className="text-lg font-black text-cyan-200">{teamCount}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <SectionTitle title="Team Growth" subtitle="Team energy unlocked" />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xl font-black">{teamCount}</p>
              <p className="text-xs text-slate-400">Membri team</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-xl font-black">{streak}</p>
              <p className="text-xs text-slate-400">Giorni streak</p>
            </div>
          </div>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <SectionTitle title="Recent Activity" subtitle="Your momentum log" />
          <ul className="space-y-2 text-sm text-slate-300">
            {recentClaims.length > 0 ? recentClaims.map((claim) => (
              <li
                key={claim.id}
                className="animate-fade-in rounded-lg border border-white/10 bg-black/20 px-3 py-2"
              >
                Claim: +{Number(claim.amount).toFixed(2)} NXF
              </li>
            )) : (
              <li className="animate-fade-in rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                Nessun claim ancora. Fai il primo claim!
              </li>
            )}
          </ul>
        </Card>
      </div>

      <Card className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <SectionTitle title="Info Account" subtitle="Il tuo profilo" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
            <p className="text-xs text-slate-400">Username</p>
            <p className="text-lg font-black text-white">@{session.username}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
            <p className="text-xs text-slate-400">Email</p>
            <p className="text-lg font-black text-white">{session.email}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
            <p className="text-xs text-slate-400">Ruolo</p>
            <p className="text-lg font-black text-blue-300">{session.role}</p>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}