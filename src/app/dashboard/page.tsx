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
    <AppShell title="Dashboard" subtitle={`NODE: ${session.username}`}>
      <div className="grid gap-4 xl:grid-cols-3">
        <CanWidget
          level={level}
          canState={`Level ${level} Luna`}
          power={Math.round(canPower)}
          animate
        />

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <SectionTitle title="Daily Claim" subtitle="Initialize daily cycle" />
          <p className="text-xs sm:text-sm text-slate-300 font-mono">
            NXF_STORAGE: <span className="font-semibold text-cyan-300"><AnimatedNumber value={balance} decimals={2} suffix=" NXF" /></span>
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-mono">
            SYNC_STREAK: <AnimatedNumber value={streak} suffix=" cycles" />
          </p>
          <div className="mt-4">
            <ClaimForm rewardPerDay={level * 2} />
          </div>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <SectionTitle title="Evolution Progress" subtitle="Matrix upgrade sequence" />
          <p className="text-xs sm:text-sm text-slate-300 font-mono">
            CURRENT: Lv.{level} • <span className="text-purple-300">NEURAL_CORE</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/60">
            <div
              className="h-full animate-power-shimmer"
              style={{ width: `${canPower}%` }}
            />
          </div>
          <p className="mt-2 text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-tighter">
            EVOLUTION_PCT: <AnimatedNumber value={canPower} suffix="%" />
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="hud-corner border border-cyan-500/20 bg-black/50 p-2 sm:p-3 text-center">
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase">STORAGE</p>
              <p className="text-sm sm:text-lg font-black text-white">{balance.toFixed(2)}</p>
            </div>
            <div className="hud-corner border border-pink-500/20 bg-black/50 p-2 sm:p-3 text-center">
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase">NETWORK</p>
              <p className="text-sm sm:text-lg font-black text-cyan-200">{teamCount}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <SectionTitle title="Team Growth" subtitle="Network node expansion" />
          <div className="grid grid-cols-2 gap-3">
            <div className="hud-corner border border-cyan-500/20 bg-black/50 p-3 text-center">
              <p className="text-xl font-black text-cyan-300">{teamCount}</p>
              <p className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">ACTIVE_NODES</p>
            </div>
            <div className="hud-corner border border-pink-500/20 bg-black/50 p-3 text-center">
              <p className="text-xl font-black text-pink-300">{streak}</p>
              <p className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">SYNC_CYCLES</p>
            </div>
          </div>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <SectionTitle title="Activity Log" subtitle="System event stream" />
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
            {recentClaims.length > 0 ? recentClaims.map((claim) => (
              <li
                key={claim.id}
                className="animate-fade-in hud-corner border border-cyan-500/10 bg-black/50 px-3 py-2"
              >
                [CLAIM] +{Number(claim.amount).toFixed(2)} NXF
              </li>
            )) : (
              <li className="animate-fade-in hud-corner border border-cyan-500/10 bg-black/50 px-3 py-2 text-slate-400">
                [EMPTY] No claims recorded
              </li>
            )}
          </ul>
        </Card>
      </div>

      <Card className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <SectionTitle title="Node Info" subtitle="Identity matrix data" />
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          <div className="hud-corner border border-cyan-500/20 bg-black/50 p-3 sm:p-4 text-center">
            <p className="text-[10px] text-slate-400 font-mono uppercase">NODE_ID</p>
            <p className="text-sm sm:text-base font-black text-white">@{session.username}</p>
          </div>
          <div className="hud-corner border border-purple-500/20 bg-black/50 p-3 sm:p-4 text-center">
            <p className="text-[10px] text-slate-400 font-mono uppercase">NEURAL_LINK</p>
            <p className="text-xs sm:text-sm font-black text-purple-300 break-all">{session.email}</p>
          </div>
          <div className="hud-corner border border-pink-500/20 bg-black/50 p-3 sm:p-4 text-center">
            <p className="text-[10px] text-slate-400 font-mono uppercase">CLEARANCE</p>
            <p className="text-sm sm:text-base font-black text-pink-300">{session.role}</p>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}