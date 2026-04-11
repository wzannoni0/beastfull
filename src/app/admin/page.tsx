import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { getServerSession } from "@/lib/server-session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  if (session.role !== "ADMIN") redirect("/dashboard");

  const [users, deposits, withdrawals] = await Promise.all([
    prisma.user.findMany({
      include: { profile: true, balance: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.depositRequest.findMany({
      where: { status: "PENDING" },
      include: { user: { include: { profile: true } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.withdrawalRequest.findMany({
      where: { status: "PENDING" },
      include: { user: { include: { profile: true } } },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.isActive).length;
  const totalBalance = users.reduce((sum, u) => sum + Number(u.balance?.amount || 0), 0);

  return (
    <AppShell title="Admin Panel" subtitle="Professional control center">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <SectionTitle title="Global Stats" />
          <p className="text-sm text-slate-300">Utenti totali: {totalUsers}</p>
          <p className="text-sm text-slate-300">Utenti attivi: {activeUsers}</p>
          <p className="text-sm text-slate-300">Saldo totale: {totalBalance.toFixed(2)} NXF</p>
        </Card>
        <Card>
          <SectionTitle title="Pending Requests" />
          <p className="text-sm text-slate-300">Depositi: {deposits.length}</p>
          <p className="text-sm text-slate-300">Prelievi: {withdrawals.length}</p>
        </Card>
        <Card>
          <SectionTitle title="Azioni rapide" />
          <div className="space-y-2">
            <a href="#deposits" className="block w-full rounded-xl bg-white/10 px-3 py-2 text-sm">Gestisci Depositi</a>
            <a href="#withdrawals" className="block w-full rounded-xl bg-white/10 px-3 py-2 text-sm">Gestisci Prelievi</a>
            <a href="#users" className="block w-full rounded-xl bg-white/10 px-3 py-2 text-sm">Gestisci Utenti</a>
          </div>
        </Card>
      </div>

      {deposits.length > 0 && (
        <Card id="deposits">
          <SectionTitle title="Pending Deposits" subtitle={`${deposits.length} richieste in attesa`} />
          <div className="space-y-2 text-sm">
            {deposits.map((d) => (
              <div key={d.id} className="grid grid-cols-5 items-center rounded-lg bg-black/20 px-3 py-2">
                <span>@{d.user.username || "N/A"}</span>
                <span>{Number(d.amount).toFixed(2)} NXF</span>
                <span>{d.method}</span>
                <span className="text-yellow-400">{d.status}</span>
                <div className="flex gap-2">
                  <form method="POST" action="/api/admin/approve-deposit">
                    <input type="hidden" name="id" value={d.id} />
                    <button className="rounded bg-green-600 px-2 py-1 text-xs">Approva</button>
                  </form>
                  <form method="POST" action="/api/admin/reject-deposit">
                    <input type="hidden" name="id" value={d.id} />
                    <button className="rounded bg-red-600 px-2 py-1 text-xs">Rifiuta</button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {withdrawals.length > 0 && (
        <Card id="withdrawals">
          <SectionTitle title="Pending Withdrawals" subtitle={`${withdrawals.length} richieste in attesa`} />
          <div className="space-y-2 text-sm">
            {withdrawals.map((w) => (
              <div key={w.id} className="grid grid-cols-5 items-center rounded-lg bg-black/20 px-3 py-2">
                <span>@{w.user.username || "N/A"}</span>
                <span>{Number(w.amount).toFixed(2)} NXF</span>
                <span className="text-yellow-400">{w.status}</span>
                <div className="col-span-2 flex gap-2">
                  <form method="POST" action="/api/admin/approve-withdrawal">
                    <input type="hidden" name="id" value={w.id} />
                    <button className="rounded bg-green-600 px-2 py-1 text-xs">Approva</button>
                  </form>
                  <form method="POST" action="/api/admin/reject-withdrawal">
                    <input type="hidden" name="id" value={w.id} />
                    <button className="rounded bg-red-600 px-2 py-1 text-xs">Rifiuta</button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card id="users">
        <SectionTitle title="Users Table" subtitle="Vista completa utenti" />
        <div className="space-y-2 text-sm">
          {users.map((u) => (
            <div key={u.id} className="grid grid-cols-5 items-center rounded-lg bg-black/20 px-3 py-2">
              <span>@{u.username || "N/A"}</span>
              <span>Lv. {u.profile?.currentLevel || 1}</span>
              <span>{Number(u.balance?.amount || 0).toFixed(2)} NXF</span>
              <span className={u.isActive ? "text-green-400" : "text-red-400"}>{u.isActive ? "Active" : "Blocked"}</span>
              <form method="POST" action="/api/admin/toggle-user">
                <input type="hidden" name="userId" value={u.id} />
                <button className="rounded bg-blue-600 px-2 py-1 text-xs">
                  {u.isActive ? "Blocca" : "Attiva"}
                </button>
              </form>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
