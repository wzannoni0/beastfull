"use client";

import Image from "next/image";

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
  label = "AI CORE",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];
  const glowSize = size === "xl" ? 25 : size === "lg" ? 20 : size === "md" ? 15 : 10;
  const glowSize2 = size === "xl" ? 50 : size === "lg" ? 40 : size === "md" ? 28 : 18;

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* ── Ambient glow layers - AI cyan/blue ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 1.6,
          height: s.h * 1.6,
          background: "radial-gradient(circle, rgba(0,212,255,0.45) 0%, rgba(61,127,255,0.25) 40%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(61,127,255,0.12) 40%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
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
            className="pointer-events-none absolute rounded-full border border-blue-400/25 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.05, height: s.w * 1.05, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── Real Globe / Mappamondo ── */}
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
            background: "#03050f",
            boxShadow: "inset 0 0 30px rgba(0,212,255,0.1)",
          }}
        />

        {/* Real globe image */}
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateY(-8deg) rotateX(5deg)",
            transformStyle: "preserve-3d",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Solarsystemscope_texture_8k_earth_daymap.jpg/1200px-Solarsystemscope_texture_8k_earth_daymap.jpg"
            alt="Real Globe Earth"
            fill
            className="object-contain"
            style={{
              filter: `
                drop-shadow(0 0 ${glowSize}px rgba(0,212,255,0.5))
                drop-shadow(0 0 ${glowSize2}px rgba(61,127,255,0.3))
                drop-shadow(0 15px 30px rgba(0,0,0,0.6))
                brightness(1.08) contrast(1.05)
              `,
            }}
            priority
            sizes="(max-width: 768px) 180px, 350px"
          />
        </div>

        {/* Edge mask to remove white borders */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 35%, #03050f 68%)",
            zIndex: 2,
          }}
        />

        {/* Orbiting ring */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/25"
          style={{
            animation: "orbit-ring 10s linear infinite",
            transform: "rotateX(60deg)",
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{
            width: s.w * 0.5,
            height: 14,
            background: "radial-gradient(ellipse, rgba(0,212,255,0.5) 0%, rgba(61,127,255,0.25) 50%, transparent 100%)",
          }}
        />

        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-cyan-400/70 animate-pulse" />
        <div className="absolute top-1/4 -left-4 w-1.5 h-1.5 rounded-full bg-blue-400/60 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 -right-6 w-2 h-2 rounded-full bg-violet-400/50 animate-pulse" style={{ animationDelay: "1s" }} />
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