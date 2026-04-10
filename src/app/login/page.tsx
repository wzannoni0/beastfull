"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { PremiumCanAI } from "@/components/premium-can-ai";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setMessage("✅ Accesso completato. Redirect in corso…");
      window.location.href = "/dashboard";
      return;
    }

    const data = await res.json();
    setMessage(data.error ?? "Credenziali non valide");
    setLoading(false);
  }

  return (
    <div className="premium-page premium-page-animated real-ai-bg real-ai-bg-login relative flex min-h-screen w-full items-center justify-center px-4 py-12">
      {/* ── Particle orbs ── */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-600/12 blur-3xl animate-orb" />
      <div className="pointer-events-none absolute right-[6%] bottom-[14%] h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl animate-orb" style={{ animationDelay: "2.5s" }} />
      <div className="pointer-events-none absolute left-[42%] bottom-[5%] h-48 w-48 rounded-full bg-violet-600/10 blur-3xl animate-orb" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 w-full max-w-5xl">
        {/* ── Top brand strip ── */}
        <div className="mb-8 flex items-center justify-center gap-2 animate-fade-in">
          <span className="text-[10px] uppercase tracking-[0.32em] text-blue-300/70">NEXAFORCE Protocol</span>
          <span className="h-1 w-1 rounded-full bg-blue-400/50" />
          <span className="text-[10px] uppercase tracking-[0.32em] text-fuchsia-300/70">NEXACOLA AI</span>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-[1fr_460px]">

          {/* ══ LEFT: Real can showcase ══ */}
          <section
            className="glass-card hidden rounded-[2.4rem] p-10 lg:flex flex-col items-center justify-center gap-8 animate-slide-left"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Headline */}
            <div className="text-center space-y-3">
              <p className="text-[10px] uppercase tracking-[0.30em] text-blue-300">NEXAFORCE AI IDENTITY</p>
              <h2 className="text-4xl font-black leading-tight tracking-tight">
                Power your access<br />
                <span className="gradient-text">with AI energy</span>
              </h2>
              <p className="text-sm text-slate-400 max-w-xs mx-auto">
                Login premium con energia visiva NEXACOLA — glow dinamico, can evolution e progressione totale.
              </p>
            </div>

            {/* ── REAL NEXACOLA CAN ── */}
            <PremiumCanAI label="LOGIN AI CORE" power={74} size="lg" showPing />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {[
                { v: "74%",  l: "Can Power",    c: "text-blue-300" },
                { v: "Lv.4", l: "Current Rank", c: "text-violet-300" },
                { v: "48h",  l: "Streak Left",  c: "text-cyan-300" },
              ].map((s) => (
                <div key={s.l} className="stat-card">
                  <p className={`text-xl font-black ${s.c}`}>{s.v}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══ RIGHT: Login form ══ */}
          <section
            className="glass-card glass-card-hover w-full rounded-[2.4rem] p-7 sm:p-9 animate-slide-right flex flex-col"
            style={{ animationDelay: "0.18s" }}
          >
            {/* Header */}
            <div className="mb-7">
              <p className="text-[10px] uppercase tracking-[0.26em] text-blue-300">NEXAFORCE Access</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Welcome back</h1>
              <p className="mt-1 text-sm text-slate-400">Charge your Force — sign in to continue</p>
            </div>

            {/* Mobile can */}
            <div className="mb-6 flex justify-center lg:hidden animate-scale-in">
              <PremiumCanAI label="NEXACOLA AI" power={68} size="md" showPing />
            </div>

            {/* Demo credentials */}
            <div className="mb-6 rounded-2xl border border-blue-300/20 bg-blue-500/8 p-4 text-xs">
              <p className="font-bold text-blue-200 mb-1.5 tracking-wide uppercase text-[10px]">🔑 Demo Access</p>
              <div className="space-y-1 text-slate-300">
                <p>User:  <span className="text-white font-mono">demo@nexaforce.app</span> / <span className="text-white font-mono">Demo123!</span></p>
                <p>Admin: <span className="text-white font-mono">admin@nexaforce.app</span> / <span className="text-white font-mono">Admin123!</span></p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4 flex-1">
              <div className="space-y-3">
                <input
                  className="input-premium"
                  placeholder="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="input-premium"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Accesso in corso…
                  </span>
                ) : (
                  "Entra in NEXAFORCE ⚡"
                )}
              </button>
            </form>

            {/* Message */}
            {message && (
              <p className={`mt-4 text-sm text-center ${message.startsWith("✅") ? "text-emerald-300" : "text-red-400"}`}>
                {message}
              </p>
            )}

            {/* Footer links */}
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <Link href="/register" className="hover:text-blue-300 transition-colors">
                ✦ Crea account
              </Link>
              <button type="button" className="hover:text-fuchsia-300 transition-colors">
                Password dimenticata?
              </button>
            </div>
          </section>
        </div>

        {/* Bottom disclaimer */}
        <p className="mt-8 text-center text-[10px] text-slate-600 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          © 2026 NEXAFORCE Protocol • NEXACOLA AI Engine • All rights reserved
        </p>
      </div>
    </div>
  );
}
