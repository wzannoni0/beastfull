import { AppShell } from "@/components/app-shell";
import { CanWidget } from "@/components/can-widget";
import { Card, SectionTitle } from "@/components/premium";
import { demoUser, levelState } from "@/lib/mock";

export default function ProfilePage() {
  return (
    <AppShell title="Profile" subtitle="Node identity matrix">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <SectionTitle title="Account" subtitle="Identity data" />
          <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
            <p className="hud-corner border border-cyan-500/20 bg-black/50 p-2">NODE_ID: <span className="text-cyan-300">@{demoUser.username}</span></p>
            <p className="hud-corner border border-purple-500/20 bg-black/50 p-2">NEURAL_LINK: <span className="text-purple-300">{demoUser.email}</span></p>
            <p className="hud-corner border border-pink-500/20 bg-black/50 p-2">REFERRAL: <span className="text-pink-300">{demoUser.referralCode}</span></p>
            <p className="hud-corner border border-cyan-500/20 bg-black/50 p-2">SYNC_STREAK: <span className="text-cyan-300">{demoUser.streak}</span></p>
            <p className="hud-corner border border-yellow-500/20 bg-black/50 p-2">BADGE: <span className="text-yellow-300">{levelState.current.name}</span></p>
          </div>
        </Card>
        <div className="lg:col-span-2">
          <CanWidget level={levelState.current.id} canState={levelState.current.canState} power={demoUser.canPower} />
        </div>
      </div>
    </AppShell>
  );
}
