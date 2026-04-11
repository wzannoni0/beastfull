import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="app-container">
      <nav className="nav-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-black text-sm">FU</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wider">FizzUp</p>
              <p className="text-[#00d4ff]/70 text-xs">BUBZ System</p>
            </div>
          </div>
          <Link href="/login" className="text-[#00d4ff] text-sm font-medium">Sign in</Link>
        </div>
      </nav>

      <div className="scroll-area">
        {/* Hero */}
        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30 flex items-center justify-center relative">
            <span className="text-4xl">🎯</span>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
              <span className="text-white text-xs">+</span>
            </div>
          </div>
          <h1 
            className="text-white font-black text-3xl mb-2"
            style={{ textShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
          >
            Join FizzUp
          </h1>
          <p className="text-[#00d4ff]/70 text-sm">Start earning BUBZ today</p>
        </div>

        {/* Referral Info */}
        <Card className="glow-violet p-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Join via Referral</p>
              <p className="text-[#00d4ff]/70 text-xs">Required to create account</p>
            </div>
          </div>
        </Card>

        {/* Form Card */}
        <Card className="glow-border p-6 mb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="@username"
                className="bg-black/30 border-[#00d4ff]/20 focus:border-[#00d4ff]/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com"
                className="bg-black/30 border-[#00d4ff]/20 focus:border-[#00d4ff]/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                className="bg-black/30 border-[#00d4ff]/20 focus:border-[#00d4ff]/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                placeholder="••••••••"
                className="bg-black/30 border-[#00d4ff]/20 focus:border-[#00d4ff]/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referral">Referral Code</Label>
              <Input 
                id="referral" 
                type="text" 
                placeholder="Enter referral code"
                className="bg-black/30 border-[#00d4ff]/20 focus:border-[#00d4ff]/60"
              />
            </div>
          </div>
        </Card>

        {/* Terms */}
        <p className="text-[#00d4ff]/50 text-xs text-center mb-4">
          By signing up, you agree to our{' '}
          <span className="text-[#00d4ff]">Terms</span> and{' '}
          <span className="text-[#00d4ff]">Privacy Policy</span>
        </p>

        {/* Register Button */}
        <Button className="w-full h-12 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold text-base">
          Create Account
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-5">
          <div className="flex-1 h-px bg-[#00d4ff]/20" />
          <span className="text-[#00d4ff]/50 text-xs">or continue with</span>
          <div className="flex-1 h-px bg-[#00d4ff]/20" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <Card className="flex-1 p-4 cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </Card>
          <Card className="flex-1 p-4 cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-center">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
