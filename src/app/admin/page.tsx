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
      include: { user: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.withdrawalRequest.findMany({
      where: { status: "PENDING" },
      include: { user: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.isActive).length;
  const totalBalance = users.reduce((sum, u) => sum + Number(u.balance?.amount || 0), 0);

  return (
    <AppShell title="Admin Panel" subtitle="Manage your platform">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-sm text-neutral-400">Total Users</p>
          <p className="mt-1 text-2xl font-semibold text-white">{totalUsers}</p>
          <p className="text-xs text-neutral-500 mt-1">{activeUsers} active</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-400">Total Balance</p>
          <p className="mt-1 text-2xl font-semibold text-white">{totalBalance.toFixed(2)}</p>
          <p className="text-xs text-neutral-500 mt-1">NXF</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-400">Pending Requests</p>
          <p className="mt-1 text-2xl font-semibold text-white">{deposits.length + withdrawals.length}</p>
          <p className="text-xs text-neutral-500 mt-1">{deposits.length} deposits, {withdrawals.length} withdrawals</p>
        </Card>
      </div>

      {deposits.length > 0 && (
        <Card>
          <SectionTitle title="Pending Deposits" subtitle={`${deposits.length} requests`} />
          <div className="mt-4 space-y-3">
            {deposits.map((d) => (
              <div key={d.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <p className="text-sm font-medium text-white">@{d.user.username}</p>
                  <p className="text-xs text-neutral-500">{d.method}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold text-white">{Number(d.amount).toFixed(2)} NXF</p>
                  <div className="flex gap-2">
                    <form method="POST" action="/api/admin/approve-deposit">
                      <input type="hidden" name="id" value={d.id} />
                      <button className="px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30">Approve</button>
                    </form>
                    <form method="POST" action="/api/admin/reject-deposit">
                      <input type="hidden" name="id" value={d.id} />
                      <button className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30">Reject</button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {withdrawals.length > 0 && (
        <Card>
          <SectionTitle title="Pending Withdrawals" subtitle={`${withdrawals.length} requests`} />
          <div className="mt-4 space-y-3">
            {withdrawals.map((w) => (
              <div key={w.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <p className="text-sm font-medium text-white">@{w.user.username}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold text-white">{Number(w.amount).toFixed(2)} NXF</p>
                  <div className="flex gap-2">
                    <form method="POST" action="/api/admin/approve-withdrawal">
                      <input type="hidden" name="id" value={w.id} />
                      <button className="px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30">Approve</button>
                    </form>
                    <form method="POST" action="/api/admin/reject-withdrawal">
                      <input type="hidden" name="id" value={w.id} />
                      <button className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30">Reject</button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <SectionTitle title="All Users" subtitle={`${users.length} registered`} />
        <div className="mt-4 space-y-2">
          {users.map((u) => (
            <div key={u.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{u.username.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">@{u.username}</p>
                  <p className="text-xs text-neutral-500">Level {u.profile?.currentLevel || 1}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-white">{Number(u.balance?.amount || 0).toFixed(2)} NXF</p>
                <span className={`px-2 py-1 rounded text-xs ${u.isActive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                  {u.isActive ? "Active" : "Blocked"}
                </span>
                <form method="POST" action="/api/admin/toggle-user">
                  <input type="hidden" name="userId" value={u.id} />
                  <button className="px-2 py-1 rounded bg-white/10 text-white text-xs hover:bg-white/20">
                    {u.isActive ? "Block" : "Activate"}
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}