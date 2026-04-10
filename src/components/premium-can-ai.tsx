"use client";

type PremiumCanAIProps = {
  label?: string;
  power?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showPing?: boolean;
};

const sizeMap = {
  sm: { h: 160, w: 160, barW: "w-32", labelSize: "text-[9px]" },
  md: { h: 240, w: 240, barW: "w-40", labelSize: "text-[10px]" },
  lg: { h: 340, w: 340, barW: "w-48", labelSize: "text-[11px]" },
  xl: { h: 440, w: 440, barW: "w-56", labelSize: "text-xs" },
};

export function PremiumCanAI({
  label = "LUNA CORE",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* ── Ambient glow layers - Moon silver/blue ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 1.6,
          height: s.h * 1.6,
          background: "radial-gradient(circle, rgba(200,200,220,0.4) 0%, rgba(100,120,180,0.25) 40%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow-subtle will-change-transform"
        style={{
          width: s.w * 1.2,
          height: s.h * 1.2,
          background: "radial-gradient(circle, rgba(150,170,200,0.2) 0%, rgba(80,100,150,0.12) 40%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animationDelay: "0.6s",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={{
          width: s.w * 0.7,
          height: s.h * 0.7,
          background: "radial-gradient(circle, rgba(180,190,210,0.2) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      {/* ── Ping sonar rings ── */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border-2 border-slate-400/40 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.3, height: s.w * 1.3, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-slate-300/25 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.05, height: s.w * 1.05, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── 3D Moon ── */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ 
          width: s.w, 
          height: s.h, 
          zIndex: 1,
          perspective: "600px",
        }}
      >
        {/* Dark container */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "#050510",
            boxShadow: "inset 0 0 30px rgba(150,150,180,0.1)",
          }}
        />

        {/* Moon sphere with 3D effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 25%, #d4d4dc 0%, #a0a0b0 20%, #606070 50%, #303040 80%, #151520 100%)",
            boxShadow: `
              inset -${s.w * 0.12}px 0 ${s.w * 0.25}px rgba(0,0,0,0.6),
              inset ${s.w * 0.08}px ${s.w * 0.08}px ${s.w * 0.12}px rgba(255,255,255,0.15),
              0 0 ${s.w * 0.08}px rgba(200,200,220,0.3)
            `,
            transform: "rotateY(-12deg) rotateX(8deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Moon craters */}
          <div className="absolute inset-0" style={{ opacity: 0.4 }}>
            {/* Large craters */}
            <div className="absolute rounded-full bg-black/20" style={{ top: '20%', left: '25%', width: s.w * 0.15, height: s.w * 0.15 }} />
            <div className="absolute rounded-full bg-black/25" style={{ top: '45%', left: '60%', width: s.w * 0.2, height: s.w * 0.2 }} />
            <div className="absolute rounded-full bg-black/15" style={{ top: '65%', left: '30%', width: s.w * 0.12, height: s.w * 0.12 }} />
            {/* Medium craters */}
            <div className="absolute rounded-full bg-black/20" style={{ top: '30%', left: '70%', width: s.w * 0.08, height: s.w * 0.08 }} />
            <div className="absolute rounded-full bg-black/15" style={{ top: '70%', left: '55%', width: s.w * 0.1, height: s.w * 0.1 }} />
            <div className="absolute rounded-full bg-black/20" style={{ top: '15%', left: '50%', width: s.w * 0.07, height: s.w * 0.07 }} />
          </div>

          {/* Moon dark side shadow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.5) 70%)",
            }}
          />

          {/* Highlight on moon edge */}
          <div
            className="absolute top-[15%] left-[20%] w-[30%] h-[20%] rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Moon orbit ring */}
        <div
          className="absolute inset-0 rounded-full border border-slate-400/20"
          style={{
            animation: "orbit-ring 15s linear infinite",
            transform: "rotateX(70deg)",
          }}
        />

        {/* Edge mask */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 38%, #050510 68%)",
            zIndex: 2,
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{
            width: s.w * 0.5,
            height: 14,
            background: "radial-gradient(ellipse, rgba(180,180,200,0.4) 0%, rgba(100,100,120,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Floating particles - moon dust */}
        <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-slate-300/60 animate-pulse" />
        <div className="absolute top-1/4 -left-4 w-1.5 h-1.5 rounded-full bg-slate-400/50 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 -right-6 w-2 h-2 rounded-full bg-slate-300/40 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* ── Power bar ── */}
      <div className={`mt-6 ${s.barW} space-y-2 relative z-10`}>
        <div className="flex items-center justify-between px-0.5">
          <span className={`${s.labelSize} uppercase tracking-[0.22em] text-slate-400 font-medium`}>
            Power
          </span>
          <span className={`${s.labelSize} font-bold text-slate-300`}>{power}%</span>
        </div>
        <div className="power-bar-track h-2 rounded-full bg-white/10 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 shadow-[0_0_10px_rgba(180,180,200,0.3)]" 
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