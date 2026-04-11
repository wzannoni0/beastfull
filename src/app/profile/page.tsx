import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { getServerSession } from "@/lib/server-session";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  const username = session.username;
  const email = session.email;
  const level = session.profile?.currentLevel || 1;
  const badge = session.profile?.badge || "Rookie";
  const streak = session.profile?.streak || 0;
  const referralCode = session.profile?.referralCode || username.toUpperCase();

  return (
    <AppShell title="Profile" subtitle="Your account details">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Account Info" subtitle="Your identity details" />
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-neutral-400">Username</span>
              <span className="text-sm font-medium text-white">@{username}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-neutral-400">Email</span>
              <span className="text-sm font-medium text-white">{email}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-neutral-400">Level</span>
              <span className="text-sm font-medium text-white">{level}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-neutral-400">Badge</span>
              <span className="text-sm font-medium text-white">{badge}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-neutral-400">Streak</span>
              <span className="text-sm font-medium text-white">{streak} days</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-neutral-400">Referral Code</span>
              <span className="text-sm font-medium text-white">{referralCode}</span>
            </div>
          </div>
        </Card>

        <Card>
          <SectionTitle title="Account Stats" subtitle="Your journey summary" />
          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm text-neutral-400">Current Level</p>
              <p className="text-2xl font-semibold text-white mt-1">Level {level}</p>
              <p className="text-xs text-neutral-500 mt-1">{badge}</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm text-neutral-400">Member Since</p>
              <p className="text-lg font-medium text-white mt-1">
                {session.profile?.createdAt ? new Date(session.profile.createdAt).toLocaleDateString() : "N/A"}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm text-neutral-400">Account Status</p>
              <p className="text-lg font-medium text-green-400 mt-1">Active</p>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}