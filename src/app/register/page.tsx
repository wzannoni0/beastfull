import Link from "next/link";
import "@/app/globals.css";

export default function RegisterPage() {
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
          <Link href="/login" className="text-purple-400 text-sm font-medium">Sign in</Link>
        </div>
      </nav>

      <div className="scroll-area">
        {/* Hero */}
        <div className="text-center py-12">
          <h1 className="text-white font-bold text-3xl mb-3 glow-text">Join Nexus</h1>
          <p className="text-purple-300/70 text-sm">Create your premium account</p>
        </div>

        {/* Avatar Selection */}
        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                i === 2 ? 'border-purple-500 scale-110 shadow-lg shadow-purple-500/50' : 'border-purple-500/30 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=100&q=80`}
                alt={`Avatar ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="card p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="text-purple-300/80 text-xs font-medium mb-2 block">USERNAME</label>
              <input
                type="text"
                placeholder="@username"
                className="w-full bg-black/30 border border-purple-500/30 rounded-2xl px-4 py-3.5 text-white placeholder-purple-300/40 outline-none focus:border-purple-500/70 transition-colors"
              />
            </div>
            <div>
              <label className="text-purple-300/80 text-xs font-medium mb-2 block">EMAIL</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-black/30 border border-purple-500/30 rounded-2xl px-4 py-3.5 text-white placeholder-purple-300/40 outline-none focus:border-purple-500/70 transition-colors"
              />
            </div>
            <div>
              <label className="text-purple-300/80 text-xs font-medium mb-2 block">PASSWORD</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black/30 border border-purple-500/30 rounded-2xl px-4 py-3.5 text-white placeholder-purple-300/40 outline-none focus:border-purple-500/70 transition-colors"
              />
            </div>
            <div>
              <label className="text-purple-300/80 text-xs font-medium mb-2 block">REFERRAL CODE</label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full bg-black/30 border border-purple-500/30 rounded-2xl px-4 py-3.5 text-white placeholder-purple-300/40 outline-none focus:border-purple-500/70 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Terms */}
        <p className="text-purple-300/50 text-xs text-center mb-4">
          By signing up, you agree to our{' '}
          <span className="text-purple-400">Terms</span> and{' '}
          <span className="text-purple-400">Privacy Policy</span>
        </p>

        {/* Register Button */}
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base shadow-lg shadow-purple-500/30 active:scale-[0.98] transition-transform">
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-purple-500/20" />
          <span className="text-purple-300/50 text-xs">or continue with</span>
          <div className="flex-1 h-px bg-purple-500/20" />
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="flex-1 card-soft py-4 flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          <button className="flex-1 card-soft py-4 flex items-center justify-center gap-2">
            <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
