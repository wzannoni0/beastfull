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
      <div className="scanlines" />
      {/* ── Particle orbs ── */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-600/15 blur-3xl animate-orb" />
      <div className="pointer-events-none absolute right-[6%] bottom-[14%] h-64 w-64 rounded-full bg-pink-600/10 blur-3xl animate-orb" style={{ animationDelay: "2.5s" }} />
      <div className="pointer-events-none absolute left-[42%] bottom-[5%] h-48 w-48 rounded-full bg-purple-600/10 blur-3xl animate-orb" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 w-full max-w-5xl">
        {/* ── Top brand strip ── */}
        <div className="mb-8 flex items-center justify-center gap-2 animate-fade-in font-mono">
          <span className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-black">LUNA_NET Protocol</span>
          <span className="h-1 w-1 rounded-full bg-cyan-400/50" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400">ACCESS_TERMINAL</span>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-[1fr_460px]">

          {/* ══ LEFT: Real can showcase ══ */}
          <section
            className="glass-card hidden hud-corner p-10 lg:flex flex-col items-center justify-center gap-8 animate-slide-left"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Headline */}
            <div className="text-center space-y-3">
              <p className="text-[10px] uppercase tracking-[0.30em] text-cyan-300 font-black">SYSTEM_IDENTITY_VERIFICATION</p>
              <h2 className="text-4xl font-black leading-tight tracking-tight uppercase glitch-hover">
                Authorize Access<br />
                <span className="gradient-text">Neural_Interface</span>
              </h2>
                <p className="text-sm text-slate-400 max-w-xs mx-auto font-mono">
                  [RECOGNITION_PHASE] Login premium con Luna 3D — glow dinamico, moon evolution e progressione totale.
                </p>
            </div>

            {/* ── LUNA 3D ── */}
            <PremiumCanAI label="LUNA_NET_v.8" power={74} size="lg" showPing />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {[
                { v: "74%",  l: "CORE_LOAD",    c: "text-cyan-300" },
                { v: "Lv.4", l: "NODE_RANK", c: "text-purple-300" },
                { v: "48h",  l: "UP_TIME",  c: "text-pink-300" },
              ].map((s) => (
                <div key={s.l} className="stat-card hud-corner bg-black/50 border-cyan-500/20">
                  <p className={`text-xl font-black ${s.c} font-mono`}>{s.v}</p>
                  <p className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-tighter">{s.l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══ RIGHT: Login form ══ */}
          <section
            className="glass-card hud-corner w-full p-7 sm:p-9 animate-slide-right flex flex-col"
            style={{ animationDelay: "0.18s" }}
          >
            {/* Header */}
            <div className="mb-7">
              <p className="text-[10px] uppercase tracking-[0.26em] text-cyan-300 font-black">LUNA_NET_OS Login</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight uppercase glitch-hover">Establish Link</h1>
              <p className="mt-1 text-sm text-slate-400 font-mono">Input credentials for decryption</p>
            </div>

            {/* Mobile can */}
            <div className="mb-6 flex justify-center lg:hidden animate-scale-in">
              <PremiumCanAI label="LUNA_NET" power={68} size="md" showPing />
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4 flex-1">
              <div className="space-y-3">
                <input
                  className="input-premium hud-corner font-mono"
                  placeholder="USER_ID@LUNA_NET"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="input-premium hud-corner font-mono"
                  placeholder="ENCRYPTED_KEY"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full glitch-hover uppercase font-black tracking-widest"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    DECRYPTING...
                  </span>
                ) : (
                  "INITIALIZE_SESSION ⚡"
                )}
              </button>
            </form>

            {/* Message */}
            {message && (
              <p className={`mt-4 text-[10px] text-center font-mono uppercase ${message.startsWith("✅") ? "text-cyan-300" : "text-pink-500"}`}>
                {message}
              </p>
            )}

            {/* Footer links */}
            <div className="mt-6 flex items-center justify-between text-[10px] text-slate-500 font-mono uppercase tracking-tighter">
              <Link href="/register" className="hover:text-cyan-300 transition-colors">
                ✦ GENERATE_NEW_NODE
              </Link>
              <span className="opacity-40">ENCRYPTION_v.2.4.0</span>
            </div>
          </section>
        </div>

        {/* Bottom disclaimer */}
        <p className="mt-8 text-center text-[10px] text-slate-600 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          © 2026 LUNA CORE Protocol • 3D Moon Engine • All rights reserved
        </p>
      </div>
    </div>
  );
}
