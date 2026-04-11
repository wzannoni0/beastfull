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
      setMessage(data.error ?? "Error submitting request");
      setLoading(false);
      return;
    }

    setMessage("Request submitted successfully!");
    setAmount("");
    setLoading(false);
  }

  return (
    <AppShell title="Deposit" subtitle="Add funds to your account">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Make a Deposit" subtitle="Choose your payment method" />
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Amount (NXF)</label>
              <input
                type="number"
                className="input-premium"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Payment Method</label>
              <select
                className="input-premium"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option>Crypto Wallet</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-premium btn-primary w-full"
            >
              {loading ? "Processing..." : "Submit Request"}
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-sm ${message.includes("success") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </Card>

        <Card>
          <SectionTitle title="How it works" />
          <div className="mt-4 space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">1</div>
              <div>
                <p className="text-sm font-medium text-white">Submit Request</p>
                <p className="text-xs text-neutral-500 mt-1">Enter the amount and select payment method</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">2</div>
              <div>
                <p className="text-sm font-medium text-white">Wait for Approval</p>
                <p className="text-xs text-neutral-500 mt-1">Admin will review your request</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">3</div>
              <div>
                <p className="text-sm font-medium text-white">Receive Funds</p>
                <p className="text-xs text-neutral-500 mt-1">Balance will be updated after approval</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}