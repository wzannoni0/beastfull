"use client";

import { FormEvent, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";

export default function WithdrawalPage() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/withdrawal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Errore invio richiesta");
      setLoading(false);
      return;
    }

    setMessage("Richiesta prelievo inviata con successo");
    setAmount("");
    setLoading(false);
  }

  return (
    <AppShell title="Withdrawal" subtitle="NXF extraction protocol">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Extraction Request" subtitle="NXF withdrawal sequence" />
          <form className="space-y-3" onSubmit={onSubmit}>
            <input
              className="input-premium hud-corner font-mono text-sm"
              placeholder="NXF_AMOUNT"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary glitch-hover uppercase font-black tracking-widest text-xs sm:text-sm"
            >
              {loading ? "PROCESSING..." : "EXECUTE_EXTRACTION ⚡"}
            </button>
          </form>
          {message && <p className="mt-3 text-xs sm:text-sm font-mono text-cyan-300">{message}</p>}
        </Card>
        <Card>
          <SectionTitle title="Info" subtitle="Protocol validation" />
          <p className="text-xs sm:text-sm text-slate-400 font-mono">Withdrawal validates available balance.</p>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-2">Check status from Admin panel.</p>
        </Card>
      </div>
    </AppShell>
  );
}
