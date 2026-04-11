import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { recentActivity } from "@/lib/mock";

export default function ActivityPage() {
  return (
    <AppShell title="Activity" subtitle="System event stream log">
      <Card>
        <SectionTitle title="Activity Feed" subtitle="Recent platform events" />
        <div className="space-y-2">
          {recentActivity.map((event, index) => (
            <article key={`${event}-${index}`} className="hud-corner border border-cyan-500/10 bg-black/50 px-4 py-3 text-xs sm:text-sm text-slate-300 font-mono">
              <span className="text-cyan-500">[{String(index + 1).padStart(3, '0')}]</span> {event}
            </article>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
