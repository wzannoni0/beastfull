import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { getServerSession } from "@/lib/server-session";

export const dynamic = "force-dynamic";

const users = [
  { username: "beast.alpha", level: 4, balance: 1280, status: "Active" },
  { username: "nova.z", level: 2, balance: 180, status: "Active" },
  { username: "void.pulse", level: 1, balance: 40, status: "Blocked" },
];

export default async function AdminPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  if (session.role !== "ADMIN") redirect("/dashboard");

  return (
    <AppShell title="Admin Panel" subtitle="Professional control center">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <SectionTitle title="Global Stats" />
          <p className="text-sm text-slate-300">Utenti totali: 3</p>
          <p className="text-sm text-slate-300">Utenti attivi: 2</p>
          <p className="text-sm text-slate-300">Claim giornalieri: 18</p>
        </Card>
        <Card>
          <SectionTitle title="Filtri" />
          <input className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2" placeholder="Cerca utente" />
          <select className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2">
            <option>Tutti i livelli</option>
            <option>Livello 1-3</option>
            <option>Livello 4-8</option>
          </select>
        </Card>
        <Card>
          <SectionTitle title="Azioni rapide" />
          <div className="space-y-2">
            <button className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm">Modifica saldo</button>
            <button className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm">Modifica livello</button>
            <button className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm">Attiva / Disattiva utente</button>
          </div>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Users Table" subtitle="Vista completa utenti" />
        <div className="space-y-2 text-sm">
          {users.map((u) => (
            <div key={u.username} className="grid grid-cols-4 rounded-lg bg-black/20 px-3 py-2">
              <span>@{u.username}</span>
              <span>Lv. {u.level}</span>
              <span>{u.balance} NXF</span>
              <span>{u.status}</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
