import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { getServerSession } from "@/lib/server-session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CalendarPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  const claims = await prisma.dailyClaim.findMany({
    where: { userId: session.userId },
    orderBy: { claimedAt: "desc" },
    take: 30,
  });

  const claimedDays = new Set(claims.map((c) => c.claimedAt.getDate()));
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = new Date().getDate();
  const streak = session.profile?.streak || 0;

  return (
    <AppShell title="Calendar" subtitle="Your daily claim history">
      <Card>
        <SectionTitle title="Claim Calendar" subtitle={`Current streak: ${streak} days`} />
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-6">
          {days.map((day) => {
            const isClaimed = claimedDays.has(day);
            const isToday = day === today;
            return (
              <div
                key={day}
                className={`p-3 rounded-lg text-center border ${
                  isToday
                    ? "border-white/30 bg-white/10 text-white"
                    : isClaimed
                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                      : "border-white/10 bg-white/5 text-neutral-500"
                }`}
              >
                <p className="text-sm font-medium">{day}</p>
                {isClaimed && <p className="text-[10px] text-green-400">✓</p>}
              </div>
            );
          })}
        </div>
        <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-neutral-400">Claim your daily reward every day to build your streak and unlock bonus rewards!</p>
        </div>
      </Card>
    </AppShell>
  );
}