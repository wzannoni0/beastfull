import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { recentActivity } from "@/lib/mock";

export default function ActivityPage() {
  return (
    <AppShell title="Attività" subtitle="Storico claim, livelli e movimenti interni">
      <Card>
        <SectionTitle title="Activity Feed" subtitle="Eventi recenti della piattaforma" />
        <div className="space-y-2">
          {recentActivity.map((event, index) => (
            <article key={`${event}-${index}`} className="rounded-xl bg-black/20 px-4 py-3 text-sm text-slate-300">
              {event}
            </article>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
