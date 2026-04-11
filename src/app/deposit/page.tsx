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
    <AppShell title="Deposito" subtitle="Invia richiesta deposito">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Nuova richiesta deposito" subtitle="Salvataggio su database" />
          <form className="space-y-3" onSubmit={onSubmit}>
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
              placeholder="Importo NXF"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <select
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>Crypto Wallet</option>
              <option>Bank Transfer</option>
            </select>
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
          <SectionTitle title="Riepilogo" />
          <p className="text-sm text-slate-300">Le richieste vengono salvate su database.</p>
          <p className="text-sm text-slate-300 mt-2">Controlla lo stato dalla sezione Admin.</p>
        </Card>
      </div>
    </AppShell>
  );
}
