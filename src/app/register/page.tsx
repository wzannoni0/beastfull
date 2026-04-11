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
    <div className="premium-page premium-page-animated mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10">
      <div className="real-ai-bg real-ai-bg-register absolute inset-0 -z-10" />
      <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_1fr]">
        <section className="glass-card hidden rounded-[2rem] p-8 lg:block animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">BEASTFULL ONBOARDING AI</p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight">Create your premium identity</h2>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Registrazione avanzata con referral obbligatorio, visual premium e LUNA 3D al centro dell&apos;esperienza.
          </p>

          <div className="mt-8">
            <div className="animate-can-glow-subtle">
              <PremiumCanAI label="REGISTER LUNA CORE" power={82} size="lg" />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Flow premium:</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-300">
              <li>• Referral code validato</li>
              <li>• Sponsor assegnato automaticamente</li>
              <li>• Team energy attivata subito</li>
            </ul>
          </div>
        </section>

        <section className="glass-card glass-card-hover w-full rounded-[2rem] p-6 sm:p-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Join LUNA CORE</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">Create your Identity</h1>
          <p className="mt-1 text-sm text-slate-300">Referral obbligatorio per entrare.</p>

          <div className="my-6 lg:hidden">
            <PremiumCanAI label="MOBILE REGISTER LUNA" power={74} size="sm" />
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-300/50"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-300/50"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-300/50"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-300/50"
              placeholder="Conferma Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-blue-400/40 bg-black/35 px-4 py-3 outline-none transition focus:border-fuchsia-300/60"
              placeholder="Referral Code (obbligatorio)"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              required
            />
            <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 px-4 py-3 font-semibold shadow-[0_0_24px_rgba(99,102,241,0.35)]">
              Register
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-300">{message}</p>
          <div className="mt-5 text-sm text-slate-400">
            Hai già un account? <Link href="/login">Login</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
