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
    <div
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(4,8,20,.9), rgba(9,8,24,.76)), url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1.5rem",
      }}
    >
      <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_1fr]">
        <section className="glass-card hidden rounded-3xl p-8 lg:block">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">BEASTFULL ONBOARDING AI</p>
          <h2 className="mt-3 text-4xl font-black leading-tight">Create your premium Beast identity</h2>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Registrazione avanzata con referral obbligatorio, visual premium e BEASTCOLA AI CAN al centro dell’esperienza.
          </p>

          <div className="mt-8">
            <PremiumCanAI label="REGISTER AI CORE" power={82} size="lg" />
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

        <section className="glass-card w-full rounded-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Join Beastfull</p>
          <h1 className="mt-2 text-3xl font-black">Create your Beast</h1>
          <p className="mt-1 text-sm text-slate-300">Referral obbligatorio per entrare.</p>

          <div className="my-6 lg:hidden">
            <PremiumCanAI label="MOBILE REGISTER AI" power={74} size="sm" />
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none"
              placeholder="Conferma Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border border-blue-400/40 bg-black/30 px-4 py-3 outline-none"
              placeholder="Referral Code (obbligatorio)"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              required
            />
            <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 font-semibold">
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
