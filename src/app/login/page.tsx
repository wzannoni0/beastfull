"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Zap, Loader2 } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", referral: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!isLogin && !form.name) errs.name = "Username required"
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required"
    if (!form.password || form.password.length < 6) errs.password = "Password must be 6+ characters"
    if (!isLogin && form.password !== form.confirmPassword) errs.confirmPassword = "Passwords don't match"
    if (!isLogin && !form.referral) errs.referral = "Referral code required"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] relative z-10"
      >
        {/* Logo */}
        <motion.div
          className="text-center mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-2xl"
            animate={{ boxShadow: ["0 0 30px rgba(0,212,255,0.4)", "0 0 60px rgba(0,212,255,0.6)", "0 0 30px rgba(0,212,255,0.4)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-black text-white mb-2 gradient-text">FizzUp</h1>
          <p className="text-white/60">Premium BUBZ Token System</p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex bg-white/5 rounded-xl p-1.5 mb-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-lg font-bold transition-all duration-300 ${
              isLogin ? "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white shadow-lg" : "text-white/60"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-lg font-bold transition-all duration-300 ${
              !isLogin ? "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white shadow-lg" : "text-white/60"
            }`}
          >
            Sign Up
          </button>
        </motion.div>

        {/* Form */}
        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? "login" : "register"}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
          >
            <Card className="p-6 mb-4" glow="cyan">
              <div className="space-y-4">
                {!isLogin && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                    <Label htmlFor="name" required>Username</Label>
                    <Input
                      id="name"
                      placeholder="cryptoking"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      error={!!errors.name}
                      icon={<User className="w-5 h-5" />}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </motion.div>
                )}

                <div>
                  <Label htmlFor="email" required>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    error={!!errors.email}
                    icon={<Mail className="w-5 h-5" />}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="password" required>Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      error={!!errors.password}
                      icon={<Lock className="w-5 h-5" />}
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                </div>

                {!isLogin && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                    <div>
                      <Label htmlFor="confirmPassword" required>Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={form.confirmPassword}
                        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                        error={!!errors.confirmPassword}
                        icon={<Lock className="w-5 h-5" />}
                      />
                      {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="referral" required>Referral Code</Label>
                      <Input
                        id="referral"
                        placeholder="FIZZUP-XXXX"
                        value={form.referral}
                        onChange={(e) => setForm({ ...form, referral: e.target.value })}
                        error={!!errors.referral}
                        icon={<User className="w-5 h-5" />}
                      />
                      {errors.referral && <p className="text-red-400 text-xs mt-1">{errors.referral}</p>}
                    </div>
                  </motion.div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded bg-white/10 border-white/20" />
                      <span className="text-white/60 text-sm">Remember me</span>
                    </label>
                    <button type="button" className="text-[#00d4ff] text-sm hover:underline">Forgot?</button>
                  </div>
                )}
              </div>
            </Card>

            <Button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold"
              loading={loading}
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.form>
        </AnimatePresence>

        {/* Social login */}
        <motion.div
          className="flex items-center gap-4 my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/40 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="outline" className="h-12">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </Button>
          <Button variant="outline" className="h-12">
            <svg className="w-5 h-5 mr-2" fill="#fff" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </Button>
        </motion.div>

        <motion.p
          className="text-center text-white/60 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link href={isLogin ? "/register" : "/login"} className="text-[#00d4ff] font-semibold hover:underline">
            {isLogin ? "Sign up" : "Sign in"}
          </Link>
        </motion.p>
      </motion.div>
    </div>
  )
}
