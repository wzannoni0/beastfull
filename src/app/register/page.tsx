"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { PremiumCanAI } from "@/components/premium-can-ai";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Le password non coincidono");
      return;
    }

    setMessage("Registrazione in corso...");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, referralCode }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Registrazione fallita");
      return;
    }

    setMessage(`Account creato! Entrato nel team di ${data.sponsorUsername}.`);
    window.location.href = "/dashboard";
  }

  return (
    <div className="premium-page premium-page-animated mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 relative">
      <div className="scanlines" />
      <div className="real-ai-bg real-ai-bg-register absolute inset-0 -z-10" />
      <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_1fr]">
        <section className="glass-card hud-corner hidden p-8 lg:block animate-fade-in-up border-cyan-500/20" style={{ animationDelay: "0.1s" }}>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300 font-black">NEURAL_NETWORK_REGISTRATION</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black leading-tight tracking-tight uppercase glitch-hover">Initialize_Your_Node</h2>
          <p className="mt-3 max-w-md text-sm text-slate-300 font-mono">
            [SYS_INIT] Registrazione avanzata con referral obbligatorio, visual premium e LUNA 3D al centro dell&apos;esperienza.
          </p>

          <div className="mt-8">
            <div className="animate-can-glow-subtle">
              <PremiumCanAI label="LUNA_OS_v.8" power={82} size="lg" />
            </div>
          </div>

          <div className="mt-8 hud-corner border border-cyan-500/30 bg-black/50 p-4 text-sm">
            <p className="font-black text-cyan-300 uppercase tracking-wider">[ PROTOCOL_STEPS ]</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-300 font-mono">
              <li>{">"} 01 - Referral code validation</li>
              <li>{">"} 02 - Sponsor auto-assignment</li>
              <li>{">"} 03 - Team energy activation</li>
            </ul>
          </div>
        </section>

        <section className="glass-card hud-corner w-full p-5 sm:p-7 animate-fade-in-up border-pink-500/20" style={{ animationDelay: "0.25s" }}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300 font-black">NODE_GENERATION</p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight uppercase glitch-hover">Create_Identity</h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400 font-mono">Input referral_code to synchronize network</p>

          <div className="my-5 lg:hidden">
            <PremiumCanAI label="MOBILE_NODE" power={74} size="sm" />
          </div>

          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <input
              className="input-premium hud-corner font-mono text-xs sm:text-sm"
              placeholder="NODE_USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="input-premium hud-corner font-mono text-xs sm:text-sm"
              placeholder="NEURAL_EMAIL@LUNA_NET"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="input-premium hud-corner font-mono text-xs sm:text-sm"
              placeholder="ENCRYPT_KEY"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="input-premium hud-corner font-mono text-xs sm:text-sm"
              placeholder="CONFIRM_KEY"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input
              className="input-premium hud-corner font-mono text-xs sm:text-sm border-cyan-500/40 focus:border-pink-500/60"
              placeholder="REFERRAL_CODE [REQUIRED]"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              required
            />
            <button className="btn-primary w-full glitch-hover uppercase font-black tracking-widest text-xs sm:text-sm">
              EXECUTE_NODE_INIT ⚡
            </button>
          </form>

          {message && <p className="mt-3 text-xs text-center font-mono uppercase text-pink-300">{message}</p>}
          <div className="mt-4 text-xs sm:text-sm text-slate-400 font-mono">
            Existing node? <Link href="/login" className="text-cyan-400 hover:text-cyan-300">LINK_ACCESS</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
