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

      {/* ── Ambient glow layers - Cyberpunk neon ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 1.6,
          height: s.h * 1.6,
          background: "radial-gradient(circle, rgba(0,243,255,0.25) 0%, rgba(188,19,254,0.15) 40%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(0,243,255,0.15) 0%, rgba(255,0,85,0.1) 40%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(0,243,255,0.2) 0%, transparent 70%)",
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
            style={{ width: s.w * 1.3, height: s.w * 1.3, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-pink-400/30 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.05, height: s.w * 1.05, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── 3D Neon Moon ── */}
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
            background: "#050505",
            boxShadow: "inset 0 0 30px rgba(0,243,255,0.1)",
          }}
        />

        {/* Neon Moon sphere with 3D effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 25%, #00f3ff 0%, #bc13fe 35%, #ff0055 60%, #050505 100%)",
            boxShadow: `
              inset -${s.w * 0.12}px 0 ${s.w * 0.25}px rgba(0,0,0,0.6),
              inset ${s.w * 0.08}px ${s.w * 0.08}px ${s.w * 0.12}px rgba(0,243,255,0.3),
              0 0 ${s.w * 0.08}px rgba(0,243,255,0.4),
              0 0 ${s.w * 0.15}px rgba(188,19,254,0.3)
            `,
            transform: "rotateY(-12deg) rotateX(8deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Neon grid lines */}
          <div className="absolute inset-0" style={{ opacity: 0.3 }}>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0,243,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,243,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: `${s.w * 0.1}px ${s.w * 0.1}px`,
            }} />
          </div>

          {/* Digital craters */}
          <div className="absolute inset-0" style={{ opacity: 0.5 }}>
            <div className="absolute rounded-full bg-black/30" style={{ top: '20%', left: '25%', width: s.w * 0.15, height: s.w * 0.15, boxShadow: 'inset 0 0 10px rgba(0,243,255,0.5)' }} />
            <div className="absolute rounded-full bg-black/35" style={{ top: '45%', left: '60%', width: s.w * 0.2, height: s.w * 0.2, boxShadow: 'inset 0 0 15px rgba(188,19,254,0.5)' }} />
            <div className="absolute rounded-full bg-black/25" style={{ top: '65%', left: '30%', width: s.w * 0.12, height: s.w * 0.12, boxShadow: 'inset 0 0 8px rgba(255,0,85,0.4)' }} />
            <div className="absolute rounded-full bg-black/30" style={{ top: '30%', left: '70%', width: s.w * 0.08, height: s.w * 0.08, boxShadow: 'inset 0 0 6px rgba(0,243,255,0.4)' }} />
          </div>

          {/* Neon glow overlay */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(0,243,255,0.15) 0%, transparent 50%, rgba(255,0,85,0.1) 100%)",
            }}
          />

          {/* Highlight on moon edge */}
          <div
            className="absolute top-[15%] left-[20%] w-[30%] h-[20%] rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(0,243,255,0.4) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Neon orbit ring */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/40"
          style={{
            animation: "orbit-ring 15s linear infinite",
            transform: "rotateX(70deg)",
            boxShadow: "0 0 15px rgba(0,243,255,0.2)",
          }}
        />

        {/* Edge mask */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 38%, #050505 68%)",
            zIndex: 2,
          }}
        />

        {/* Neon bottom glow */}
        <div
          className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{
            width: s.w * 0.5,
            height: 14,
            background: "radial-gradient(ellipse, rgba(0,243,255,0.6) 0%, rgba(188,19,254,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Floating neon particles */}
        <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-cyan-400/80 animate-pulse shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
        <div className="absolute top-1/4 -left-4 w-1.5 h-1.5 rounded-full bg-pink-400/70 animate-pulse shadow-[0_0_6px_rgba(255,0,85,0.7)]" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 -right-6 w-2 h-2 rounded-full bg-purple-400/60 animate-pulse shadow-[0_0_8px_rgba(188,19,254,0.6)]" style={{ animationDelay: "1s" }} />
      </div>

      {/* ── Power bar ── */}
      <div className={`mt-6 ${s.barW} space-y-2 relative z-10`}>
        <div className="flex items-center justify-between px-0.5">
          <span className={`${s.labelSize} uppercase tracking-[0.22em] text-cyan-400 font-black`}>
            CORE_PWR
          </span>
          <span className={`${s.labelSize} font-black text-cyan-300`}>{power}%</span>
        </div>
        <div className="power-bar-track h-2 rounded-full bg-black/60 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(0,243,255,0.5)]" 
            style={{ width: `${power}%` }} 
          />
        </div>
      </div>

      {/* ── Label ── */}
      {label && (
        <p className={`mt-3 text-center ${s.labelSize} uppercase tracking-[0.28em] text-cyan-500/70 relative z-10 font-black font-mono`}>
          [{label}]
        </p>
      )}
    </div>
  );
}