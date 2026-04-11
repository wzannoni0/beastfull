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
    <AppShell title="Prelievo" subtitle="Invia richiesta prelievo">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Nuova richiesta prelievo" subtitle="Salvataggio su database" />
          <form className="space-y-3" onSubmit={onSubmit}>
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
              placeholder="Importo"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold disabled:opacity-60"
            >
              {loading ? "Invio..." : "Invia richiesta"}
            </button>
          </form>
          {message && <p className="mt-3 text-sm text-slate-300">{message}</p>}
        </Card>
        <Card>
          <SectionTitle title="Info" />
          <p className="text-sm text-slate-300">Il prelievo verifica il saldo disponibile.</p>
          <p className="text-sm text-slate-300 mt-2">Controlla lo stato dalla sezione Admin.</p>
        </Card>
      </div>
    </AppShell>
  );
}
