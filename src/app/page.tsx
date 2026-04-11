import Link from "next/link";
import { LEVELS } from "@/lib/levels";
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-50" />
      <div className="fixed inset-0 bg-radial-gradient" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
              <span className="text-lg font-bold text-white">B</span>
            </div>
            <span className="text-lg font-semibold text-white">Beastfull</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/register" className="btn-premium btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Platform Live
              </div>
              <h1 className="text-5xl font-semibold leading-tight text-white lg:text-6xl">
                The future of
                <span className="block gradient-text">team growth.</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-400 max-w-lg">
                A premium platform for building your team, tracking progress, and earning rewards. Level up your network today.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/register" className="btn-premium btn-primary">
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/dashboard" className="btn-premium btn-secondary">
                  View Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="animate-fade-in-up stagger-1">
                  <p className="text-2xl font-semibold text-white">12.4k+</p>
                  <p className="text-sm text-neutral-500">Active Users</p>
                </div>
                <div className="animate-fade-in-up stagger-2">
                  <p className="text-2xl font-semibold text-white">$2.4M+</p>
                  <p className="text-sm text-neutral-500">Total Rewards</p>
                </div>
                <div className="animate-fade-in-up stagger-3">
                  <p className="text-2xl font-semibold text-white">98%</p>
                  <p className="text-sm text-neutral-500">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative animate-fade-in-up stagger-2">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                <div className="absolute inset-4 rounded-2xl bg-[#0c0c0c] border border-white/10 overflow-hidden">
                  {/* Mock Dashboard */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">J</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">@johndoe</p>
                          <p className="text-xs text-neutral-500">Level 4</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-xs text-neutral-500 mb-1">Total Balance</p>
                      <p className="text-2xl font-semibold text-white">2,847.50 NXF</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-white/5">
                        <p className="text-xs text-neutral-500">Team Members</p>
                        <p className="text-lg font-semibold text-white">24</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <p className="text-xs text-neutral-500">Daily Claim</p>
                        <p className="text-lg font-semibold text-white">+45 NXF</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white">Everything you need</h2>
            <p className="mt-3 text-neutral-400">Powerful tools to grow your team and maximize rewards</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: TrendingUp, title: "Real-time Tracking", desc: "Monitor your team's growth with live analytics and detailed insights." },
              { icon: Users, title: "Team Management", desc: "Build and manage your network with powerful hierarchy tools." },
              { icon: Shield, title: "Secure Platform", desc: "Your data is protected with enterprise-grade security." },
            ].map((f, i) => (
              <div key={f.title} className="card-premium animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white">Growth Levels</h2>
            <p className="mt-3 text-neutral-400">Start from level 1 and evolve to the top</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEVELS.slice(0, 4).map((l, i) => (
              <div key={l.id} className="card-premium animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 rounded-md bg-white/10 text-xs font-medium text-white">Level {l.id}</span>
                </div>
                <p className="text-lg font-medium text-white">{l.name}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{l.rewardPerDay.toFixed(0)} <span className="text-sm text-neutral-500">NXF/day</span></p>
                <p className="mt-1 text-xs text-neutral-500">Min: {l.minBalance} NXF</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/register" className="btn-premium btn-secondary">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white">Ready to start?</h2>
          <p className="mt-3 text-neutral-400">Join thousands of users growing their network today</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-premium btn-primary">
              Create Account
            </Link>
            <Link href="/login" className="btn-premium btn-secondary">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© 2024 Beastfull. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}