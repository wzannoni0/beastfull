import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";

export default function CalendarPage() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const claimed = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const today = 10;

  return (
    <AppShell title="Calendario Reward" subtitle="Claim once every 24h">
      <Card>
        <SectionTitle title="Daily Claim Calendar" subtitle="Bonus visivi a 7/15/30 giorni" />
        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => {
            const isClaimed = claimed.has(day);
            const isToday = day === today;
            return (
              <button
                key={day}
                className={`rounded-xl border px-2 py-3 text-sm ${
                  isToday
                    ? "border-blue-400 bg-blue-500/20"
                    : isClaimed
                      ? "border-emerald-400/40 bg-emerald-500/10"
                      : "border-white/10 bg-black/20"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
        <form action="/api/claim" method="post">
          <button className="mt-5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold">
            Claim today’s power
          </button>
        </form>
      </Card>
    </AppShell>
  );
}
