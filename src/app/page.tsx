'use client';

import Link from "next/link";
import { LEVELS } from "@/lib/levels";
import { PremiumCanAI } from "@/components/premium-can-ai";
import { Zap, Users, Award, TrendingUp, Shield, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Scene3D } from "@/components/scene-3d";
import { CyberpunkParticles } from "@/components/cyberpunk-particles";
import { AnimatedCard, GlowButton, TextGlow, PulseDot } from "@/components/animated-ui";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="premium-page mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-4 py-6 sm:px-8 lg:px-12">
      
      <Scene3D />
      <CyberpunkParticles />

      <header className="glass-card hud-corner sticky top-4 z-30 mb-12 flex items-center justify-between p-4 backdrop-blur-xl animate-fade-in">
        <div className="flex items-center gap-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg shadow-[0_0_30px_rgba(0,243,255,0.5)] animate-pulse">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 -z-10 animate-pulse" />
          </motion.div>
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

        <motion.section 
          className="relative min-h-[85vh] flex items-center"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[200px]"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="relative z-10 w-full">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              
              <motion.div className="space-y-8" variants={fadeInUp}>
                <motion.div 
                  className="inline-flex items-center gap-3 px-4 py-2 glass-card hud-corner"
                  variants={fadeInUp}
                >
                  <PulseDot color="cyan" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-black">SYSTEM ONLINE</span>
                </motion.div>

                <motion.h1 
                  className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight"
                  variants={fadeInUp}
                >
                  <span className="block text-white">ENTER THE</span>
                  <span className="block text-glow-cyan mt-2">NEURAL</span>
                  <span className="block gradient-text mt-2 animate-neon-flicker">NETWORK</span>
                </motion.h1>

                <motion.p 
                  className="text-lg text-slate-400 max-w-lg font-mono leading-relaxed"
                  variants={fadeInUp}
                >
                  <span className="text-cyan-400">{"> "}</span> Advanced platform with neural interface, 
                  8-level progression system and real-time team synchronization.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={fadeInUp}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(0,243,255,0.6)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/register" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-black uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all duration-300 block">
                      Initialize Link
                      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/dashboard" className="px-8 py-4 glass-card hud-corner font-black uppercase tracking-widest text-sm hover:bg-cyan-500/10 transition-all block text-center">
                      View Dashboard
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="flex gap-8 pt-8 border-t border-cyan-500/20"
                  variants={fadeInUp}
                >
                  {[
                    { value: "12.4K", label: "Active Nodes", icon: Users },
                    { value: "+87%", label: "Growth Rate", icon: TrendingUp },
                    { value: "8", label: "Evolution Levels", icon: Award },
                  ].map(({ value, label, icon: Icon }) => (
                    <motion.div 
                      key={label} 
                      className="space-y-2"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Icon className="w-4 h-4" />
                        <span className="text-2xl font-black">{value}</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-[400px] h-[400px] rounded-full border border-cyan-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-[350px] h-[350px] rounded-full border border-purple-500/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-[300px] h-[300px] rounded-full border border-pink-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f3ff]"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                      style={{
                        transformOrigin: '200px center',
                      }}
                    />
                  ))}
                </div>
                
                <motion.div 
                  className="relative z-10"
                  animate={{ 
                    y: [0, -15, 0],
                    rotateY: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <PremiumCanAI label="LUNA_OS v8.0" power={92} size="xl" showPing />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-4">
            <motion.p 
              className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              CORE FEATURES
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl font-black uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              System <span className="gradient-text">Capabilities</span>
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Cpu, title: "Neural Processing", desc: "Advanced AI-driven neural network for optimal performance and real-time processing.", color: "cyan" },
              { icon: Network, title: "Matrix Sync", desc: "Synchronize with your team network for exponential growth and shared rewards.", color: "purple" },
              { icon: Shield, title: "Quantum Security", desc: "Military-grade encryption protecting all your data and transactions.", color: "pink" },
            ].map(({ icon: Icon, title, desc, color }, index) => (
              <AnimatedCard key={title} delay={index * 0.1}>
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/5 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <h3 className="text-xl font-black uppercase tracking-wider"><TextGlow color={color as "cyan" | "purple" | "pink"}>{title}</TextGlow></h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed">{desc}</p>
                <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
              </AnimatedCard>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="glass-card hud-corner p-8 sm:p-12 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-black mb-2">EVOLUTION PATH</p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                8-Level <span className="gradient-text">Progression</span>
              </h2>
            </div>
            <GlowButton href="/register">
              <span>Start Evolution</span>
            </GlowButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEVELS.map((level, i) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <AnimatedCard delay={i * 0.05}>
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
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(i + 1) * 12.5}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                    />
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,243,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
          
          <motion.div 
            className="relative glass-card hud-corner p-12 sm:p-16 text-center space-y-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-black uppercase tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to <span className="gradient-text text-glow">Connect?</span>
            </motion.h2>
            <motion.p 
              className="text-slate-400 max-w-2xl mx-auto font-mono"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Join thousands of users in the neural network. Initialize your node today and start your evolution journey.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(0,243,255,0.7)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/register" className="px-12 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-black uppercase tracking-widest text-lg shadow-[0_0_50px_rgba(0,243,255,0.5)] transition-all duration-300 block">
                  Initialize Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

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
