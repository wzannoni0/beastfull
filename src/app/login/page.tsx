"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { PremiumCanAI } from "@/components/premium-can-ai";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage("Accesso in corso...");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setMessage("Login completato. Vai alla dashboard.");
      window.location.href = "/dashboard";
      return;
    }

    const data = await res.json();
    setMessage(data.error ?? "Credenziali non valide");
  }

  return (
    <div
      className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-10"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(5,8,18,.88), rgba(10,10,22,.76)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1.5rem",
      }}
    >
      <div className="grid w-full gap-6 lg:grid-cols-2">
        <section className="glass-card hidden rounded-3xl p-8 lg:block">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">BEASTFULL AI IDENTITY</p>
          <h2 className="mt-3 text-4xl font-black leading-tight">Power access with your BeastCan AI</h2>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Login premium con energia visiva BEASTCOLA, glow dinamico e focus totale sulla tua progressione.
          </p>
          <div className="mt-8">
            <PremiumCanAI label="LOGIN AI CORE" power={74} size="lg" />
          </div>
        </section>

        <section className="glass-card w-full rounded-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Beastfull Access</p>
          <h1 className="mt-2 text-3xl font-black">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-300">Charge your Beast</p>

          <div className="my-6 lg:hidden">
            <PremiumCanAI label="MOBILE LOGIN AI" power={68} size="sm" />
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
            <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 font-semibold">
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-300">{message}</p>
          <div className="mt-5 flex justify-between text-sm text-slate-400">
            <Link href="/register">Registrazione</Link>
            <button type="button">Recupero password</button>
          </div>
        </section>
      </div>
    </div>
  );
}
