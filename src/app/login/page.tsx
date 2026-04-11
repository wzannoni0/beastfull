import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function LoginPage() {
  return (
    <div className="app-container">
      <nav className="nav-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">NEXUS</p>
              <p className="text-purple-300/70 text-xs">Premium</p>
            </div>
          </div>
          <Link href="/" className="text-purple-400 text-sm font-medium">Skip</Link>
        </div>
      </nav>

      <div className="scroll-area">
        {/* Hero */}
        <div className="text-center py-10">
          <h1 className="text-white font-bold text-3xl mb-2" style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}>
            Welcome Back
          </h1>
          <p className="text-purple-300/70 text-sm">Sign in to continue your journey</p>
        </div>

        {/* Avatar Preview */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-2 border-black/90">
              <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-6 mb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-purple-500/20 border-purple-500/50" />
                <span className="text-purple-300/70 text-xs">Remember me</span>
              </label>
              <Button variant="ghost" size="sm" className="text-xs text-purple-400 h-auto p-0">Forgot?</Button>
            </div>
          </div>
        </Card>

        {/* Login Button */}
        <Button className="w-full h-12 text-base">Sign In</Button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-5">
          <div className="flex-1 h-px bg-purple-500/20" />
          <span className="text-purple-300/50 text-xs">or continue with</span>
          <div className="flex-1 h-px bg-purple-500/20" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3 mb-6">
          <Card className="flex-1 p-4 cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-white text-sm font-medium">Google</span>
            </div>
          </Card>
          <Card className="flex-1 p-4 cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-center gap-2">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-white text-sm font-medium">GitHub</span>
            </div>
          </Card>
        </div>

        {/* Register Link */}
        <p className="text-center text-purple-300/60 text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-purple-400 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
