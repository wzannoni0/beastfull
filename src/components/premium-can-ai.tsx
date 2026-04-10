"use client";

type PremiumCanAIProps = {
  label?: string;
  power?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showPing?: boolean;
};

const sizeMap = {
  sm: { h: 200, w: 80, barW: "w-32", labelSize: "text-[9px]" },
  md: { h: 280, w: 110, barW: "w-40", labelSize: "text-[10px]" },
  lg: { h: 380, w: 150, barW: "w-48", labelSize: "text-[11px]" },
  xl: { h: 480, w: 190, barW: "w-56", labelSize: "text-xs" },
};

export function PremiumCanAI({
  label = "NEXACOLA AI CORE",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* ── Ambient glow layers ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 3,
          height: s.h * 1.3,
          background: "radial-gradient(ellipse, rgba(61,127,255,0.4) 0%, rgba(112,72,255,0.25) 50%, transparent 70%)",
          top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow-subtle will-change-transform"
        style={{
          width: s.w * 2,
          height: s.h * 1,
          background: "radial-gradient(ellipse, rgba(239,74,255,0.2) 0%, rgba(112,72,255,0.12) 40%, transparent 70%)",
          top: "45%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animationDelay: "0.6s",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={{
          width: s.w * 1.5,
          height: s.h * 0.6,
          background: "radial-gradient(ellipse, rgba(0,212,255,0.2) 0%, transparent 70%)",
          bottom: "5%", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* ── Ping sonar rings ── */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border-2 border-blue-400/30 animate-ping-ring will-change-transform"
            style={{ width: s.w * 2, height: s.w * 2, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-fuchsia-400/20 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.6, height: s.w * 1.6, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── CSS 3D CAN - No white background ── */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ width: s.w, height: s.h, zIndex: 1, perspective: "800px" }}
      >
        {/* Main can body with 3D curved effect */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 15%, #0d1f3c 85%, #061020 100%)",
            boxShadow: `
              inset 0 0 30px rgba(61,127,255,0.15),
              inset -20px 0 40px rgba(0,0,0,0.4),
              0 0 ${s.w * 0.3}px rgba(61,127,255,0.3),
              0 10px 40px rgba(0,0,0,0.5)
            `,
            transform: "rotateY(-8deg) rotateX(5deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Can top - metallic shine */}
          <div
            className="absolute top-0 left-0 right-0 h-[15%]"
            style={{
              background: "linear-gradient(180deg, rgba(61,127,255,0.4) 0%, rgba(61,127,255,0.15) 50%, transparent 100%)",
            }}
          />
          
          {/* Brand text - NEXACOLA */}
          <div
            className="absolute top-[20%] left-0 right-0 flex flex-col items-center"
            style={{ fontSize: s.w * 0.22 }}
          >
            <span className="font-black tracking-wider text-white drop-shadow-lg" style={{ textShadow: "0 0 10px rgba(61,127,255,0.8)" }}>
              NEXACOLA
            </span>
          </div>
          
          {/* Energy line / lightning bolt */}
          <div
            className="absolute top-[38%] left-1/2 -translate-x-1/2 flex items-center gap-1"
            style={{ width: s.w * 0.6 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400" />
            <span className="text-cyan-300 font-bold" style={{ fontSize: s.w * 0.18 }}>⚡</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400" />
          </div>
          
          {/* AI text */}
          <div
            className="absolute top-[50%] left-0 right-0 text-center"
            style={{ fontSize: s.w * 0.14 }}
          >
            <span className="font-bold text-blue-300 tracking-widest" style={{ textShadow: "0 0 8px rgba(61,127,255,0.6)" }}>AI ENERGY</span>
          </div>
          
          {/* Power level indicator bars on can */}
          <div className="absolute top-[65%] left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: s.w * 0.08,
                  height: s.h * 0.08,
                  background: i < (power / 20) 
                    ? `linear-gradient(180deg, #00d4ff, #3d7fff)`
                    : "rgba(255,255,255,0.1)",
                  boxShadow: i < (power / 20) ? "0 0 8px rgba(0,212,255,0.6)" : "none",
                }}
              />
            ))}
          </div>
          
          {/* Bottom reflection */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[20%]"
            style={{
              background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
            }}
          />
          
          {/* Curved edge highlights */}
          <div
            className="absolute top-0 bottom-0 left-0 w-[15%]"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-[15%]"
            style={{
              background: "linear-gradient(270deg, rgba(0,0,0,0.2) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Floating particles around can */}
        <div className="absolute -top-4 -right-4 w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" />
        <div className="absolute top-1/4 -left-6 w-1.5 h-1.5 rounded-full bg-blue-400/50 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 -right-8 w-2 h-2 rounded-full bg-fuchsia-400/50 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 -right-10 w-1 h-1 rounded-full bg-cyan-300/40 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ── Power bar ── */}
      <div className={`mt-6 ${s.barW} space-y-2 relative z-10`}>
        <div className="flex items-center justify-between px-0.5">
          <span className={`${s.labelSize} uppercase tracking-[0.22em] text-slate-400 font-medium`}>
            Power
          </span>
          <span className={`${s.labelSize} font-bold text-cyan-300`}>{power}%</span>
        </div>
        <div className="power-bar-track h-2 rounded-full bg-white/10 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
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