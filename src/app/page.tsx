import Link from "next/link";
import { LEVELS } from "@/lib/levels";
import { PremiumCanAI } from "@/components/premium-can-ai";
import { Zap, Users, Award, TrendingUp, Shield, Cpu, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="premium-page mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-4 py-6 sm:px-8 lg:px-12">

      {/* Top navbar */}
      <header className="glass-card hud-corner sticky top-4 z-30 mb-12 flex items-center justify-between p-4 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg shadow-[0_0_30px_rgba(0,243,255,0.5)] animate-pulse">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 -z-10 animate-pulse" />
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-[0.5em] text-cyan-400 font-black">LUNA_OS</p>
            <p className="text-lg font-black tracking-tighter uppercase leading-none">Neural_Matrix</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/login" className="btn-ghost text-[10px] uppercase font-black tracking-widest px-4 py-2">
            ACCESS
          </Link>
          <Link href="/register" className="btn-primary text-[10px] uppercase font-black tracking-widest px-4 py-2 relative overflow-hidden">
            <span className="relative z-10">CONNECT</span>
          </Link>
        </div>
      </header>

      <main className="space-y-16 pb-16">

        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0,243,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10 w-full">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 glass-card hud-corner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-black">SYSTEM ONLINE</span>
                </div>

                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                  <span className="block text-white">ENTER THE</span>
                  <span className="block gradient-text text-glow mt-2">NEURAL</span>
                  <span className="block text-white mt-2">NETWORK</span>
                </h1>

                <p className="text-lg text-slate-400 max-w-lg font-mono leading-relaxed">
                  <span className="text-cyan-400">{" > "}</span> Advanced platform with neural interface, 
                  8-level progression system and real-time team synchronization.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/register" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-black uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(0,243,255,0.4)] hover:shadow-[0_0_60px_rgba(0,243,255,0.6)] transition-all duration-300 hover:scale-105">
                    Initialize Link
                    <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link href="/dashboard" className="px-8 py-4 glass-card hud-corner font-black uppercase tracking-widest text-sm hover:bg-cyan-500/10 transition-all">
                    View Dashboard
                  </Link>
                </div>

                <div className="flex gap-8 pt-8 border-t border-cyan-500/20">
                  {[
                    { value: "12.4K", label: "Active Nodes", icon: Users },
                    { value: "+87%", label: "Growth Rate", icon: TrendingUp },
                    { value: "8", label: "Evolution Levels", icon: Award },
                  ].map(({ value, label, icon: Icon }) => (
                    <div key={label} className="space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Icon className="w-4 h-4" />
                        <span className="text-2xl font-black">{value}</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: "20s" }} />
                  <div className="absolute w-[350px] h-[350px] rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
                  <div className="absolute w-[300px] h-[300px] rounded-full border border-pink-500/20 animate-spin" style={{ animationDuration: "25s" }} />
                </div>
                
                <div className="relative z-10">
                  <PremiumCanAI label="LUNA_OS v8.0" power={92} size="xl" showPing />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-black">CORE FEATURES</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
              System <span className="gradient-text">Capabilities</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Cpu, title: "Neural Processing", desc: "Advanced AI-driven neural network for optimal performance and real-time processing.", color: "cyan" },
              { icon: Network, title: "Matrix Sync", desc: "Synchronize with your team network for exponential growth and shared rewards.", color: "purple" },
              { icon: Shield, title: "Quantum Security", desc: "Military-grade encryption protecting all your data and transactions.", color: "pink" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group glass-card hud-corner p-8 space-y-6 hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/5 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider">{title}</h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed">{desc}</p>
                <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* LEVELS PROGRESSION */}
        <section className="glass-card hud-corner p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-black mb-2">EVOLUTION PATH</p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                8-Level <span className="gradient-text">Progression</span>
              </h2>
            </div>
            <Link href="/register" className="btn-primary text-xs uppercase tracking-widest">
              Start Evolution
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEVELS.map((level, i) => (
              <div
                key={level.id}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 glass-card hud-corner h-full space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-cyan">LV.{level.id}</span>
                    <span className="text-[8px] text-slate-500 uppercase tracking-widest">Tier</span>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-wider">{level.name}</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Reward</span>
                      <span className="text-cyan-400">{level.rewardPerDay.toFixed(2)} NXF</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Required</span>
                      <span className="text-slate-300">{level.minBalance} NXF</span>
                    </div>
                  </div>
                  <div className="h-1 bg-black/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-power-shimmer"
                      style={{ width: `${(i + 1) * 12.5}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,243,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
          
          <div className="relative glass-card hud-corner p-12 sm:p-16 text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
              Ready to <span className="gradient-text">Connect?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-mono">
              Join thousands of users in the neural network. Initialize your node today and start your evolution journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register" className="px-12 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-black uppercase tracking-widest text-lg shadow-[0_0_50px_rgba(0,243,255,0.5)] hover:shadow-[0_0_80px_rgba(0,243,255,0.7)] transition-all duration-300 hover:scale-105">
                Initialize Now
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-card hud-corner p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-black uppercase tracking-wider">LUNA_OS v8.0</span>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
            LUNA_NETWORK // NEURAL_INTERFACE // QUANTUM_SECURE
          </p>
        </footer>
      </main>
    </div>
  );
}
