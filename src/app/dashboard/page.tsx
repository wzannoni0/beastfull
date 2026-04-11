import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { ClaimForm } from "@/components/claim-form";
import { getServerSession } from "@/lib/server-session";
import { prisma } from "@/lib/prisma";
import { TrendingUp, Users, Calendar, Wallet } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  const balance = session.balance?.amount ? Number(session.balance.amount) : 0;
  const streak = session.profile?.streak || 0;
  const level = session.profile?.currentLevel || 1;
  const badge = session.profile?.badge || "Rookie";

  const teamCount = await prisma.teamMember.count({
    where: { sponsorId: session.userId, status: "ACTIVE" },
  });

  const recentClaims = await prisma.dailyClaim.findMany({
    where: { userId: session.userId },
    orderBy: { claimedAt: "desc" },
    take: 5,
  });

  const rewardPerDay = level * 2;

  return (
    <AppShell title="Dashboard" subtitle={`Welcome back, @${session.username}`}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-neutral-400">Total Balance</p>
              <p className="mt-1 text-2xl font-semibold text-white">{balance.toFixed(2)}</p>
              <p className="text-xs text-neutral-500 mt-1">NXF</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-neutral-400" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-neutral-400">Daily Claim</p>
              <p className="mt-1 text-2xl font-semibold text-white">+{rewardPerDay}</p>
              <p className="text-xs text-neutral-500 mt-1">NXF / day</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-neutral-400" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-neutral-400">Team Members</p>
              <p className="mt-1 text-2xl font-semibold text-white">{teamCount}</p>
              <p className="text-xs text-neutral-500 mt-1">Active</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <Users className="w-5 h-5 text-neutral-400" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-neutral-400">Streak</p>
              <p className="mt-1 text-2xl font-semibold text-white">{streak}</p>
              <p className="text-xs text-neutral-500 mt-1">Days</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-neutral-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Daily Claim" subtitle="Claim your daily rewards" />
          <div className="mt-4">
            <ClaimForm rewardPerDay={rewardPerDay} />
          </div>
        </Card>

        <Card>
          <SectionTitle title="Your Progress" subtitle={`Level ${level} - ${badge}`} />
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-neutral-400">Balance Progress</span>
                <span className="text-white font-medium">{balance.toFixed(2)} NXF</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-white/20 rounded-full" style={{ width: `${Math.min(100, (balance / 1000) * 100)}%` }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-neutral-400">Team Progress</span>
                <span className="text-white font-medium">{teamCount} members</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-white/20 rounded-full" style={{ width: `${Math.min(100, (teamCount / 50) * 100)}%` }} />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Recent Activity" subtitle="Your latest transactions" />
        <div className="mt-4 space-y-3">
          {recentClaims.length > 0 ? (
            recentClaims.map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Daily Claim</p>
                    <p className="text-xs text-neutral-500">{new Date(claim.claimedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-green-400">+{Number(claim.amount).toFixed(2)} NXF</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-neutral-500 text-center py-4">No recent activity</p>
          )}
        </div>
      </Card>
    </AppShell>
  );
}