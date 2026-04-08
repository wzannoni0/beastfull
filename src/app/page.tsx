import Link from "next/link";
import { LEVELS } from "@/lib/levels";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 sm:px-8">
      <header className="glass-card neon-border sticky top-4 z-30 mb-8 flex items-center justify-between rounded-2xl px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Beastfull</p>
          <p className="font-semibold">Power your Beast</p>
        </div>
        <div className="flex gap-3 text-sm">
          <Link href="/login" className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/5">
            Login
          </Link>
          <Link href="/register" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 font-semibold">
            Registrati
          </Link>
        </div>
      </header>

      <main className="space-y-8">
        <section className="glass-card grid gap-8 rounded-3xl p-8 lg:grid-cols-2 lg:p-12">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-300">BEASTCOLA • BZT</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              Power your Beast. <br /> Grow your Can. <br /> Rule your Team.
            </h1>
            <p className="max-w-xl text-slate-300">
              Join Beastfull and build your daily progression through team energy, consistency, and level growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold">
                Charge your Beast
              </Link>
              <Link href="/dashboard" className="rounded-xl border border-white/20 px-5 py-3">
                View Demo Dashboard
              </Link>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <p className="mb-2 text-sm text-slate-300">Your can is evolving</p>
            <div className="mx-auto h-64 w-40 rounded-[2rem] border border-blue-300/40 bg-gradient-to-b from-blue-400/30 via-violet-500/30 to-slate-900 p-2 shadow-[0_0_60px_rgba(106,114,255,0.35)]">
              <div className="h-full w-full rounded-[1.6rem] border border-white/20 bg-gradient-to-t from-blue-500/35 to-transparent" />
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-slate-400">Legendary Beast Form</p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            "Daily claim una volta ogni 24h",
            "Referral obbligatorio con sponsor",
            "Progressione livelli con downgrade automatico",
          ].map((f) => (
            <article key={f} className="glass-card rounded-2xl p-5 text-sm text-slate-300">
              {f}
            </article>
          ))}
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="mb-4 text-2xl font-bold">Sistema livelli (8 step)</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {LEVELS.map((l) => (
              <div key={l.id} className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm">
                <p className="font-semibold">
                  Lv.{l.id} — {l.name}
                </p>
                <p className="text-slate-300">Reward: {l.rewardPerDay.toFixed(2)} BZT/day</p>
                <p className="text-slate-400">Min saldo: {l.minBalance} BZT</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
