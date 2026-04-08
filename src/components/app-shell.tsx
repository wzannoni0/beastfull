import Link from "next/link";
import { Bell, Flame, Trophy } from "lucide-react";
import { demoUser, levelState } from "@/lib/mock";

const nav = [
  ["Dashboard", "/dashboard"],
  ["Calendario", "/calendar"],
  ["Team", "/team"],
  ["Attività", "/activity"],
  ["Deposito", "/deposit"],
  ["Prelievo", "/withdrawal"],
  ["Profilo", "/profile"],
  ["Admin", "/admin"],
] as const;

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <aside className="glass-card hidden w-64 shrink-0 rounded-3xl p-4 lg:block">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Beastfull</p>
        <p className="mt-1 text-lg font-bold">BEASTCOLA OS</p>
        <nav className="mt-6 space-y-1 text-sm">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-xl px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-5">
        <header className="glass-card rounded-2xl p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-black">{title}</h1>
              {subtitle ? <p className="text-sm text-slate-300">{subtitle}</p> : null}
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="rounded-xl border border-white/15 px-3 py-2">Lvl {levelState.current.id}</span>
              <span className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 font-semibold">
                {demoUser.balance.toFixed(2)} BZT
              </span>
              <button className="relative rounded-xl border border-white/15 p-2">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 inline-block h-2 w-2 rounded-full bg-blue-400" />
              </button>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="rounded-lg bg-white/5 px-2 py-1">@{demoUser.username}</span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1">
              <Flame className="h-3.5 w-3.5 text-orange-300" /> {demoUser.streak} streak
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1">
              <Trophy className="h-3.5 w-3.5 text-violet-300" /> {levelState.current.name}
            </span>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
