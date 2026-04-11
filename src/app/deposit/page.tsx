"use client";

import { FormEvent, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";

export default function DepositPage() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Crypto Wallet");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/deposit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount), method }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Errore invio richiesta");
      setLoading(false);
      return;
    }

    setMessage("Richiesta inviata con successo");
    setAmount("");
    setLoading(false);
  }

  return (
    <AppShell title="Deposit" subtitle="NXF transfer protocol">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Transfer Request" subtitle="NXF storage initialization" />
          <form className="space-y-3" onSubmit={onSubmit}>
            <input
              className="input-premium hud-corner font-mono text-sm"
              placeholder="NXF_AMOUNT"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <select
              className="input-premium hud-corner font-mono text-sm"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>Crypto Wallet</option>
              <option>Bank Transfer</option>
            </select>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary glitch-hover uppercase font-black tracking-widest text-xs sm:text-sm"
            >
              {loading ? "PROCESSING..." : "EXECUTE_TRANSFER ⚡"}
            </button>
          </form>
          {message && <p className="mt-3 text-xs sm:text-sm font-mono text-cyan-300">{message}</p>}
        </Card>
        <Card>
          <SectionTitle title="Info" subtitle="Protocol details" />
          <p className="text-xs sm:text-sm text-slate-400 font-mono">Requests stored in secure database.</p>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-2">Check status from Admin panel.</p>
        </Card>
      </div>
    </AppShell>
  );
}
