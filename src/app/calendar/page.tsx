import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";

export default function CalendarPage() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const claimed = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const today = 10;

  return (
    <AppShell title="Calendar" subtitle="Daily reward cycle matrix">
      <Card>
        <SectionTitle title="Claim Calendar" subtitle="Cycle bonus sequence: 7/15/30 days" />
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-1 sm:gap-2">
          {days.map((day) => {
            const isClaimed = claimed.has(day);
            const isToday = day === today;
            return (
              <button
                key={day}
                className={`hud-corner border px-1 sm:px-2 py-2 sm:py-3 text-xs sm:text-sm font-mono ${
                  isToday
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                    : isClaimed
                      ? "border-green-500/40 bg-green-500/10 text-green-300"
                      : "border-cyan-500/20 bg-black/50 text-slate-400"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
        <form action="/api/claim" method="post" className="mt-5">
          <button className="btn-primary glitch-hover uppercase font-black tracking-widest text-xs sm:text-sm">
            Initialize Daily Cycle ⚡
          </button>
        </form>
      </Card>
    </AppShell>
  );
}
