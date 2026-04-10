"use client";

type PremiumCanAIProps = {
  label?: string;
  power?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showPing?: boolean;
};

const sizeMap = {
  sm: { h: 200, w: 90, barW: "w-32", labelSize: "text-[9px]" },
  md: { h: 280, w: 125, barW: "w-40", labelSize: "text-[10px]" },
  lg: { h: 380, w: 170, barW: "w-48", labelSize: "text-[11px]" },
  xl: { h: 480, w: 215, barW: "w-56", labelSize: "text-xs" },
};

export function PremiumCanAI({
  label = "MONSTER ENERGY",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* ── Ambient glow layers - Monster green ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 2.5,
          height: s.h * 1.2,
          background: "radial-gradient(ellipse, rgba(34,197,94,0.4) 0%, rgba(22,163,74,0.25) 50%, transparent 70%)",
          top: "42%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow-subtle will-change-transform"
        style={{
          width: s.w * 1.8,
          height: s.h * 0.9,
          background: "radial-gradient(ellipse, rgba(134,239,172,0.2) 0%, rgba(74,222,128,0.12) 40%, transparent 70%)",
          top: "48%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animationDelay: "0.6s",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={{
          width: s.w * 1.2,
          height: s.h * 0.5,
          background: "radial-gradient(ellipse, rgba(132,204,22,0.2) 0%, transparent 70%)",
          bottom: "8%", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* ── Ping sonar rings ── */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border-2 border-green-400/30 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.8, height: s.w * 1.8, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-lime-400/20 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.4, height: s.w * 1.4, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── Monster Energy CSS Can ── */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ 
          width: s.w, 
          height: s.h, 
          zIndex: 1,
          perspective: "600px",
        }}
      >
        {/* Main can body - Monster black with green accents */}
        <div
          className="absolute inset-0 rounded-[2rem] overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 15%, #1a1a1a 85%, #0a0a0a 100%)",
            boxShadow: `
              inset 0 0 30px rgba(34,197,94,0.1),
              inset -20px 0 40px rgba(0,0,0,0.5),
              0 0 ${s.w * 0.25}px rgba(34,197,94,0.3),
              0 10px 40px rgba(0,0,0,0.6)
            `,
            transform: "rotateY(-6deg) rotateX(3deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Top - metallic green shine */}
          <div
            className="absolute top-0 left-0 right-0 h-[12%]"
            style={{
              background: "linear-gradient(180deg, rgba(34,197,94,0.5) 0%, rgba(34,197,94,0.2) 50%, transparent 100%)",
            }}
          />
          
          {/* MONSTER logo - iconic slash style */}
          <div
            className="absolute top-[18%] left-0 right-0 flex justify-center items-center"
            style={{ height: s.h * 0.2 }}
          >
            <span 
              className="font-black tracking-wider"
              style={{ 
                fontSize: s.w * 0.28,
                color: "#ffffff",
                textShadow: "0 0 15px rgba(34,197,94,0.8), 2px 2px 0 #22c55e",
                transform: "skewX(-10deg)",
              }}
            >
              MONSTER
            </span>
          </div>
          
          {/* Green slash line */}
          <div
            className="absolute top-[36%] left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #22c55e 20%, #22c55e 80%, transparent 100%)",
              boxShadow: "0 0 10px rgba(34,197,94,0.6)",
            }}
          />
          
          {/* ENERGY text */}
          <div
            className="absolute top-[42%] left-0 right-0 text-center"
            style={{ fontSize: s.w * 0.12 }}
          >
            <span 
              className="font-bold tracking-[0.3em]"
              style={{ 
                color: "#22c55e",
                textShadow: "0 0 8px rgba(34,197,94,0.6)",
              }}
            >
              ENERGY
            </span>
          </div>
          
          {/* M claw logo area */}
          <div
            className="absolute top-[55%] left-0 right-0 flex justify-center"
            style={{ 
              height: s.h * 0.25,
              opacity: 0.9,
            }}
          >
            <div 
              className="relative flex items-center justify-center"
              style={{ 
                width: s.w * 0.5,
                height: s.h * 0.2,
              }}
            >
              {/* Simple M claw representation */}
              <svg viewBox="0 0 100 60" className="w-full h-full" style={{ filter: "drop-shadow(0 0 8px rgba(34,197,94,0.5))" }}>
                <path 
                  d="M10 50 L10 20 L30 40 L50 10 L70 40 L90 20 L90 50" 
                  fill="none" 
                  stroke="#22c55e" 
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M20 55 L80 55" 
                  fill="none" 
                  stroke="#22c55e" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          
          {/* Flavor text */}
          <div
            className="absolute top-[78%] left-0 right-0 text-center"
            style={{ fontSize: s.w * 0.07 }}
          >
            <span className="text-white/70 font-medium tracking-wider">UNLEASH THE BEAST</span>
          </div>
          
          {/* Bottom - dark area */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[15%]"
            style={{
              background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)",
            }}
          />
          
          {/* Left edge highlight */}
          <div
            className="absolute top-0 bottom-0 left-0 w-[10%]"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-[10%]"
            style={{
              background: "linear-gradient(270deg, rgba(0,0,0,0.3) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Bottom reflection/glow */}
        <div
          className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{
            width: s.w * 0.6,
            height: 18,
            background: "radial-gradient(ellipse, rgba(34,197,94,0.5) 0%, rgba(22,163,74,0.25) 50%, transparent 100%)",
          }}
        />

        {/* Floating particles - green theme */}
        <div className="absolute -top-4 -right-4 w-2 h-2 rounded-full bg-green-400/60 animate-pulse" />
        <div className="absolute top-1/4 -left-6 w-1.5 h-1.5 rounded-full bg-lime-400/50 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 -right-8 w-2 h-2 rounded-full bg-green-500/50 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 -right-10 w-1 h-1 rounded-full bg-green-300/40 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ── Power bar ── */}
      <div className={`mt-6 ${s.barW} space-y-2 relative z-10`}>
        <div className="flex items-center justify-between px-0.5">
          <span className={`${s.labelSize} uppercase tracking-[0.22em] text-slate-400 font-medium`}>
            Power
          </span>
          <span className={`${s.labelSize} font-bold text-green-400`}>{power}%</span>
        </div>
        <div className="power-bar-track h-2 rounded-full bg-white/10 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-green-600 via-lime-400 to-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
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