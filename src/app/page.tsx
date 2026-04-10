import Link from "next/link";
import { LEVELS } from "@/lib/levels";
import { PremiumCanAI } from "@/components/premium-can-ai";
import { Zap, Users, Award, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="premium-page premium-page-animated mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-5 py-6 sm:px-8 lg:px-10">

      {/* ── Top navbar ── */}
      <header className="glass-card neon-border sticky top-4 z-30 mb-10 flex items-center justify-between rounded-[1.8rem] px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-[0_0_16px_rgba(90,90,255,0.45)] animate-pulse-glow">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-blue-300">LUNA CORE Protocol</p>
            <p className="text-sm font-black tracking-tight leading-none">3D Moon Platform</p>
          </div>
        </div>
        <div className="flex gap-2 text-sm">
          <Link href="/login" className="btn-ghost text-sm">Login</Link>
          <Link href="/register" className="btn-primary text-sm">Registrati ⚡</Link>
        </div>
      </header>

      <main className="space-y-8 pb-12">

        {/* ══ HERO SECTION ══ */}
        <section className="glass-card real-ai-bg real-ai-bg-home grid gap-10 overflow-hidden rounded-[2.2rem] p-8 lg:grid-cols-2 lg:p-14 relative">
          {/* Ambient orbs */}
          <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/12 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />
          <div className="pointer-events-none absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-purple-600/8 blur-3xl" />

          {/* Left copy */}
          <div className="relative z-10 flex flex-col justify-center space-y-6 animate-slide-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.30em] text-blue-300 mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
                LUNA • 3D MOON • GLOBAL
              </p>
              <h1 className="text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl xl:text-7xl">
                Connect to<br />
                <span className="gradient-text text-glow">Luna.</span> Sync<br />
                your Team.
              </h1>
            </div>
            <p className="max-w-md text-slate-300 text-base leading-relaxed">
              Una piattaforma premium con Luna 3D: progressione livelli, mappamondo lunare e controllo team in tempo reale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="btn-primary">
                ⚡ Connect to Luna
              </Link>
              <Link href="/dashboard" className="btn-ghost">
                View Demo Dashboard
              </Link>
            </div>

            {/* Stats */}
            <div className="grid max-w-sm grid-cols-3 gap-3">
              {[
                { icon: Users,      v: "12.4k", l: "Utenti attivi",  c: "text-white" },
                { icon: TrendingUp, v: "+87%",  l: "Team pulse",     c: "text-cyan-200" },
                { icon: Award,      v: "266.7", l: "Reward/day",     c: "text-violet-200" },
              ].map(({ icon: Icon, v, l, c }) => (
                <div key={l} className="stat-card gradient-border-animated">
                  <Icon className="h-4 w-4 text-slate-500 mx-auto mb-1" />
                  <p className={`text-xl font-black ${c}`}>{v}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: real can */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-5 animate-slide-right">
            <PremiumCanAI label="LUNA CORE — 3D Moon" power={82} size="lg" showPing />
          </div>
        </section>

        {/* ══ FEATURES ══ */}
        <section className="grid gap-4 md:grid-cols-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            { icon: "✦", t: "Esperienza visual Monster",   d: "Effetti premium glassmorphism, glow verde e animazioni fluide su ogni schermata.", color: "green" },
            { icon: "◈", t: "Referral network profondo",  d: "Crescita a profondità multiple con reward automatici e tracciamento team real-time.", color: "lime" },
            { icon: "⬡", t: "Progressione 8 livelli",    d: "Da Rookie a Legendary con reward crescenti e Monster evolution unica.", color: "green" },
          ].map((f, i) => (
            <article
              key={f.t}
              className={`glass-card glass-card-hover rounded-[1.6rem] p-6 relative overflow-hidden animate-fade-in-up ${f.color === "green" ? "card-glow-blue" : "card-glow-purple"}`}
              style={{ animationDelay: `${0.25 + i * 0.1}s` }}
            >
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${f.color === "green" ? "bg-green-500/8" : "bg-lime-500/8"} blur-2xl pointer-events-none`} />
              <span className="text-2xl mb-3 block text-green-400 font-bold">{f.icon}</span>
              <h3 className="text-base font-black text-white">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.d}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${f.color === "green" ? "via-green-400/30" : "via-lime-400/30"} to-transparent`} />
            </article>
          ))}
        </section>

        {/* ══ LEVELS TABLE ══ */}
        <section className="glass-card rounded-[2rem] p-8 animate-fade-in-up relative overflow-hidden" style={{ animationDelay: "0.35s" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          <div className="mb-6 flex items-end justify-between relative z-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-blue-300 mb-1 flex items-center gap-2">
                <span className="inline-block h-px w-6 bg-gradient-to-r from-blue-400 to-transparent" />
                Progression System
              </p>
              <h2 className="text-3xl font-black tracking-tight">Sistema livelli <span className="gradient-text">8 step</span></h2>
            </div>
            <Link href="/register" className="btn-primary text-sm hidden sm:flex">
              Start Now →
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 relative z-10">
            {LEVELS.map((l, i) => (
              <div
                key={l.id}
                className="glass-card-hover rounded-2xl border border-white/8 bg-black/28 p-4 text-sm relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.4 + i * 0.05}s` }}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />
                <div className="flex items-center justify-between mb-2">
                  <span className="badge badge-blue">Lv.{l.id}</span>
                </div>
                <p className="font-bold text-white">{l.name}</p>
                <p className="mt-1.5 text-cyan-300 font-semibold">{l.rewardPerDay.toFixed(2)} <span className="text-cyan-400/60 text-xs">NXF/day</span></p>
                <p className="text-slate-500 text-xs mt-0.5">Min: {l.minBalance} NXF</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
