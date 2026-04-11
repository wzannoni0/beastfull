"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CyberpunkParticles } from "@/components/cyberpunk-particles";
import { AnimatedCard, GlowButton, TextGlow } from "@/components/animated-ui";
import { Zap } from "lucide-react";

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

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen relative flex overflow-hidden">
      <CyberpunkParticles />
      
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
        <motion.div 
          className="relative z-10 flex flex-col justify-center px-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl shadow-[0_0_40px_rgba(0,243,255,0.5)]">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.5em] text-cyan-400 font-black">LUNA_OS</p>
              <p className="text-2xl font-black tracking-tighter uppercase">Neural_Matrix</p>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl font-black text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Welcome back,
            <span className="block text-glow-cyan mt-2">Operator</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-neutral-400 max-w-md font-mono text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-cyan-400">{" > "}</span> Access your neural network dashboard, manage your team nodes, and monitor your evolution progress in real-time.
          </motion.p>

          <motion.div 
            className="mt-12 flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "<50ms", label: "Latency" },
              { value: "24/7", label: "Support" },
            ].map(({ value, label }) => (
              <div key={label} className="space-y-2">
                <span className="text-2xl font-black text-cyan-400">{value}</span>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-600/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          className="w-full max-w-md"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="lg:hidden flex items-center gap-3 mb-8"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl shadow-[0_0_30px_rgba(0,243,255,0.5)]">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.5em] text-cyan-400 font-black">LUNA_OS</p>
              <p className="text-lg font-black tracking-tighter uppercase">Neural_Matrix</p>
            </div>
          </motion.div>

          <AnimatedCard>
            <motion.h2 
              className="text-3xl font-black uppercase tracking-tight"
              variants={fadeInUp}
            >
              <TextGlow color="cyan">Sign In</TextGlow>
            </motion.h2>
            <motion.p 
              className="mt-2 text-neutral-400 font-mono"
              variants={fadeInUp}
            >
              Enter your credentials to access the network
            </motion.p>

            <motion.form onSubmit={onSubmit} className="mt-8 space-y-5" variants={fadeInUp}>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  className="input-premium"
                  placeholder="operator@network.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider">Password</label>
                <input
                  type="password"
                  className="input-premium"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <GlowButton className="w-full">
                  <span>{loading ? "Authenticating..." : "Access Network"}</span>
                </GlowButton>
              </motion.div>
            </motion.form>

            {message && (
              <motion.p 
                className="mt-4 text-sm text-red-400 text-center font-mono"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="text-red-500">{" > "}</span> {message}
              </motion.p>
            )}

            <motion.p 
              className="mt-8 text-center text-sm text-neutral-400"
              variants={fadeInUp}
            >
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Initialize connection
              </Link>
            </motion.p>
          </AnimatedCard>
        </motion.div>
      </div>
    </div>
  );
}
