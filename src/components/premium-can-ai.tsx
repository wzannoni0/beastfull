"use client";

type PremiumCanAIProps = {
  label?: string;
  power?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showPing?: boolean;
};

const sizeMap = {
  sm: { h: 180, w: 180, barW: "w-32", labelSize: "text-[9px]" },
  md: { h: 260, w: 260, barW: "w-40", labelSize: "text-[10px]" },
  lg: { h: 360, w: 360, barW: "w-48", labelSize: "text-[11px]" },
  xl: { h: 460, w: 460, barW: "w-56", labelSize: "text-xs" },
};

export function PremiumCanAI({
  label = "AI CORE",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* ── Ambient glow layers - AI cyan/blue ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 1.8,
          height: s.h * 1.8,
          background: "radial-gradient(circle, rgba(0,212,255,0.5) 0%, rgba(61,127,255,0.3) 40%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow-subtle will-change-transform"
        style={{
          width: s.w * 1.4,
          height: s.h * 1.4,
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(61,127,255,0.15) 40%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animationDelay: "0.6s",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={{
          width: s.w * 0.8,
          height: s.h * 0.8,
          background: "radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      {/* ── Ping sonar rings ── */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border-2 border-cyan-400/40 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.4, height: s.w * 1.4, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-blue-400/25 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.1, height: s.w * 1.1, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── AI Globe / Mappamondo ── */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ 
          width: s.w, 
          height: s.h, 
          zIndex: 1,
          perspective: "800px",
        }}
      >
        {/* Outer ring glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `
              0 0 ${s.w * 0.15}px rgba(0,212,255,0.4),
              0 0 ${s.w * 0.3}px rgba(61,127,255,0.2),
              inset 0 0 ${s.w * 0.2}px rgba(0,212,255,0.1)
            `,
          }}
        />

        {/* Main globe sphere */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #1e3a5f 0%, #0a1628 50%, #030810 100%)",
            boxShadow: `
              inset -${s.w * 0.15}px 0 ${s.w * 0.3}px rgba(0,0,0,0.5),
              inset ${s.w * 0.1}px ${s.w * 0.1}px ${s.w * 0.15}px rgba(0,212,255,0.2),
              0 0 ${s.w * 0.1}px rgba(0,212,255,0.3)
            `,
            transform: "rotateY(-15deg) rotateX(10deg)",
            transformStyle: "preserve-3d",
            overflow: "hidden",
          }}
        >
          {/* Globe grid lines - longitude */}
          <div className="absolute inset-0" style={{ opacity: 0.3 }}>
            {[...Array(8)].map((_, i) => (
              <div
                key={`lon-${i}`}
                className="absolute top-0 bottom-0 w-px"
                style={{
                  left: `${12.5 * i + 6}%`,
                  background: "linear-gradient(180deg, transparent, rgba(0,212,255,0.4) 20%, rgba(0,212,255,0.4) 80%, transparent)",
                }}
              />
            ))}
          </div>
          
          {/* Globe grid lines - latitude */}
          <div className="absolute inset-0" style={{ opacity: 0.3 }}>
            {[...Array(5)].map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-0 right-0 h-px"
                style={{
                  top: `${20 * i + 10}%`,
                  background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4) 20%, rgba(0,212,255,0.4) 80%, transparent)",
                }}
              />
            ))}
          </div>

          {/* AI Brain / Neural network overlay */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.6 }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Neural nodes */}
              <circle cx="50" cy="20" r="4" fill="#00d4ff" className="animate-pulse">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="40" r="3" fill="#3d7fff" className="animate-pulse">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="70" cy="40" r="3" fill="#3d7fff" className="animate-pulse">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="40" cy="65" r="3" fill="#8b5cf6" className="animate-pulse">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="65" r="3" fill="#8b5cf6" className="animate-pulse">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="85" r="4" fill="#00d4ff" className="animate-pulse">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite" />
              </circle>
              
              {/* Neural connections */}
              <line x1="50" y1="20" x2="30" y2="40" stroke="rgba(0,212,255,0.5)" strokeWidth="1" />
              <line x1="50" y1="20" x2="70" y2="40" stroke="rgba(0,212,255,0.5)" strokeWidth="1" />
              <line x1="30" y1="40" x2="40" y2="65" stroke="rgba(61,127,255,0.5)" strokeWidth="1" />
              <line x1="70" y1="40" x2="60" y2="65" stroke="rgba(61,127,255,0.5)" strokeWidth="1" />
              <line x1="40" y1="65" x2="50" y2="85" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
              <line x1="60" y1="65" x2="50" y2="85" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
              <line x1="30" y1="40" x2="60" y2="65" stroke="rgba(61,127,255,0.3)" strokeWidth="0.5" />
              <line x1="70" y1="40" x2="40" y2="65" stroke="rgba(61,127,255,0.3)" strokeWidth="0.5" />
            </svg>
          </div>

          {/* AI text overlay */}
          <div className="absolute top-[8%] left-0 right-0 text-center">
            <span 
              className="font-bold tracking-wider"
              style={{ 
                fontSize: s.w * 0.09,
                color: "#00d4ff",
                textShadow: "0 0 10px rgba(0,212,255,0.8)",
              }}
            >
              AI
            </span>
          </div>

          {/* Glowing equator */}
          <div
            className="absolute top-1/2 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent)",
              boxShadow: "0 0 10px rgba(0,212,255,0.5)",
            }}
          />
        </div>

        {/* Orbiting ring 1 */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/30"
          style={{
            animation: "orbit-ring 8s linear infinite",
            transform: "rotateX(70deg)",
          }}
        />
        
        {/* Orbiting ring 2 */}
        <div
          className="absolute inset-0 rounded-full border border-blue-400/20"
          style={{
            animation: "orbit-ring 12s linear infinite reverse",
            transform: "rotateX(-70deg)",
          }}
        />

        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-cyan-400/70 animate-pulse" />
        <div className="absolute top-1/4 -left-4 w-1.5 h-1.5 rounded-full bg-blue-400/60 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 -right-6 w-2 h-2 rounded-full bg-purple-400/50 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 -left-8 w-1 h-1 rounded-full bg-cyan-300/50 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ── Power bar ── */}
      <div className={`mt-6 ${s.barW} space-y-2 relative z-10`}>
        <div className="flex items-center justify-between px-0.5">
          <span className={`${s.labelSize} uppercase tracking-[0.22em] text-slate-400 font-medium`}>
            Power
          </span>
          <span className={`${s.labelSize} font-bold text-cyan-400`}>{power}%</span>
        </div>
        <div className="power-bar-track h-2 rounded-full bg-white/10 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-cyan-600 via-blue-400 to-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.5)]" 
            style={{ width: `${power}%` }} 
          />
        </div>
      </div>

      {/* ── Label ── */}
      {label && (
        <p className={`mt-3 text-center ${s.labelSize} uppercase tracking-[0.28em] text-slate-500 relative z-10 font-medium`}>
          {label}
        </p>
      )}
    </div>
  );
}