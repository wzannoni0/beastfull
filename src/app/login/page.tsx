"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = "/dashboard";
      return;
    }

    const data = await res.json();
    setMessage(data.error ?? "Invalid credentials");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 flex flex-col justify-center px-12">
          <h1 className="text-4xl font-semibold text-white">
            Welcome back
            <span className="block gradient-text">Beastfull</span>
          </h1>
          <p className="mt-4 text-neutral-400 max-w-md">
            Sign in to access your dashboard, manage your team, and track your growth progress.
          </p>
        </div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <span className="text-lg font-bold text-white">B</span>
            </div>
            <span className="text-xl font-semibold text-white">Beastfull</span>
          </div>

          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-white">Sign in</h2>
            <p className="mt-2 text-neutral-400">Enter your credentials to continue</p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  className="input-premium"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Password</label>
                <input
                  type="password"
                  className="input-premium"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-premium btn-primary w-full"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {message && (
              <p className="mt-4 text-sm text-red-400 text-center">{message}</p>
            )}

            <p className="mt-8 text-center text-sm text-neutral-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-white hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}