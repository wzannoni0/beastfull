"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CyberpunkParticles } from "@/components/cyberpunk-particles";
import { AnimatedCard, GlowButton, TextGlow, PulseDot } from "@/components/animated-ui";
import { Zap, Gift, Users, BarChart3, Shield } from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }
    setLoading(true);
    setMessage("Creating account...");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, referralCode }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Registration failed");
      setLoading(false);
      return;
    }

    window.location.href = "/dashboard";
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

  const benefits = [
    { icon: Gift, title: "Daily Rewards", desc: "Claim NXF tokens every day" },
    { icon: Users, title: "Team Building", desc: "Grow your network exponentially" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Track your progress live" },
    { icon: Shield, title: "Quantum Security", desc: "Military-grade protection" },
  ];

  return (
    <div className="min-h-screen relative flex overflow-hidden">
      <CyberpunkParticles />
      
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-pink-600/15 blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
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
            <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-[0_0_40px_rgba(188,19,254,0.5)]">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.5em] text-purple-400 font-black">LUNA_OS</p>
              <p className="text-2xl font-black tracking-tighter uppercase">Neural_Matrix</p>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl font-black text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Start your
            <span className="block text-glow-purple mt-2">Evolution</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-neutral-400 max-w-md font-mono text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-purple-400">{" > "}</span> Join the neural network. Create your node and begin your journey to the top.
          </motion.p>

          <motion.div 
            className="mt-12 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {benefits.map(({ icon: Icon, title, desc }) => (
              <motion.div 
                key={title}
                className="glass-card p-4 space-y-2"
                whileHover={{ scale: 1.02, borderColor: 'rgba(188, 19, 254, 0.5)' }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-bold text-white">{title}</span>
                </div>
                <p className="text-xs text-neutral-500">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm font-medium text-white mb-2 flex items-center gap-2">
              <PulseDot color="purple" />
              <span>Welcome Bonus</span>
            </p>
            <p className="text-xs text-neutral-400">Enter a referral code to connect with your sponsor and unlock bonus rewards.</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-600/20 blur-3xl"
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
            <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-[0_0_30px_rgba(188,19,254,0.5)]">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.5em] text-purple-400 font-black">LUNA_OS</p>
              <p className="text-lg font-black tracking-tighter uppercase">Neural_Matrix</p>
            </div>
          </motion.div>

          <AnimatedCard>
            <motion.h2 
              className="text-3xl font-black uppercase tracking-tight"
              variants={fadeInUp}
            >
              <TextGlow color="purple">Initialize Node</TextGlow>
            </motion.h2>
            <motion.p 
              className="mt-2 text-neutral-400 font-mono"
              variants={fadeInUp}
            >
              Create your account and join the network
            </motion.p>

            <motion.form onSubmit={onSubmit} className="mt-8 space-y-4" variants={fadeInUp}>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider">Username</label>
                <input
                  type="text"
                  className="input-premium"
                  placeholder="operator_name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </motion.div>
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
                <label className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider">Confirm Password</label>
                <input
                  type="password"
                  className="input-premium"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider">Referral Code</label>
                <input
                  type="text"
                  className="input-premium"
                  placeholder="REFERRAL_CODE"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <GlowButton className="w-full" variant="secondary">
                  <span>{loading ? "Initializing..." : "Initialize Node"}</span>
                </GlowButton>
              </motion.div>
            </motion.form>

            {message && (
              <motion.p 
                className={`mt-4 text-sm text-center font-mono ${message.includes("success") || message.includes("creato") ? "text-green-400" : "text-red-400"}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className={message.includes("success") || message.includes("creato") ? "text-green-400" : "text-red-500"}>{" > "}</span> {message}
              </motion.p>
            )}

            <motion.p 
              className="mt-8 text-center text-sm text-neutral-400"
              variants={fadeInUp}
            >
              Already connected?{" "}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Access Network
              </Link>
            </motion.p>
          </AnimatedCard>
        </motion.div>
      </div>
    </div>
  );
}
