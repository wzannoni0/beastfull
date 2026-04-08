import { AppShell } from "@/components/app-shell";
import { CanWidget } from "@/components/can-widget";
import { Card, SectionTitle } from "@/components/premium";
import { demoUser, levelState } from "@/lib/mock";

export default function ProfilePage() {
  return (
    <AppShell title="Profilo" subtitle="Your identity, your progression">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <SectionTitle title="Account" />
          <div className="space-y-2 text-sm text-slate-300">
            <p>Username: @{demoUser.username}</p>
            <p>Email: {demoUser.email}</p>
            <p>Referral code: {demoUser.referralCode}</p>
            <p>Streak: {demoUser.streak}</p>
            <p>Badge: {levelState.current.name}</p>
          </div>
        </Card>
        <div className="lg:col-span-2">
          <CanWidget level={levelState.current.id} canState={levelState.current.canState} power={demoUser.canPower} />
        </div>
      </div>
    </AppShell>
  );
}
