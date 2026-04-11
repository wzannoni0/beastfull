"use client";

import { FormEvent, useState, useEffect } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";

export default function WithdrawalPage() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => setBalance(data.balance || 0))
      .catch(() => {});
  }, []);

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
      setMessage(data.error ?? "Error submitting request");
      setLoading(false);
      return;
    }

    setMessage("Withdrawal request submitted successfully!");
    setAmount("");
    setLoading(false);
  }

  return (
    <AppShell title="Withdrawal" subtitle="Withdraw funds from your account">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Request Withdrawal" subtitle="Enter amount to withdraw" />
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
            <p className="text-sm text-neutral-400">Available Balance</p>
            <p className="text-2xl font-semibold text-white">{balance.toFixed(2)} NXF</p>
          </div>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Amount (NXF)</label>
              <input
                type="number"
                className="input-premium"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                max={balance}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || Number(amount) > balance}
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
          <SectionTitle title="Withdrawal Info" />
          <div className="mt-4 space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">1</div>
              <div>
                <p className="text-sm font-medium text-white">Enter Amount</p>
                <p className="text-xs text-neutral-500 mt-1">Must be less than or equal to your balance</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">2</div>
              <div>
                <p className="text-sm font-medium text-white">Admin Review</p>
                <p className="text-xs text-neutral-500 mt-1">Your request will be reviewed by admin</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">3</div>
              <div>
                <p className="text-sm font-medium text-white">Receive Funds</p>
                <p className="text-xs text-neutral-500 mt-1">Approved requests will be processed</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}