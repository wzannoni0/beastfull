"use client";

import Image from "next/image";

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
  label = "NEXACOLA AI CORE",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];
  const glowSize = size === "xl" ? 30 : size === "lg" ? 24 : size === "md" ? 18 : 12;
  const glowSize2 = size === "xl" ? 55 : size === "lg" ? 45 : size === "md" ? 30 : 20;

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* ── Ambient glow layers ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 2.5,
          height: s.h * 1.2,
          background: "radial-gradient(ellipse, rgba(61,127,255,0.35) 0%, rgba(112,72,255,0.2) 50%, transparent 70%)",
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
          background: "radial-gradient(ellipse, rgba(239,74,255,0.18) 0%, rgba(112,72,255,0.1) 40%, transparent 70%)",
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
          background: "radial-gradient(ellipse, rgba(0,212,255,0.15) 0%, transparent 70%)",
          bottom: "8%", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* ── Ping sonar rings ── */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border-2 border-blue-400/30 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.8, height: s.w * 1.8, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-fuchsia-400/20 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.4, height: s.w * 1.4, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── Real Can with 3D curved effect ── */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ 
          width: s.w, 
          height: s.h, 
          zIndex: 1,
          perspective: "600px",
        }}
      >
        {/* Dark container to mask white edges */}
        <div
          className="absolute inset-0 rounded-[2rem]"
          style={{
            background: "#03050f",
            boxShadow: "inset 0 0 40px rgba(61,127,255,0.08)",
          }}
        />

        {/* Curved can container with 3D transform */}
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateY(-6deg) rotateX(3deg)",
            transformStyle: "preserve-3d",
            borderRadius: "1.8rem",
            overflow: "hidden",
          }}
        >
          <Image
            src="/nexacola-can.png"
            alt="NEXACOLA AI Energy Can"
            fill
            className="object-contain"
            style={{
              filter: `
                drop-shadow(0 0 ${glowSize}px rgba(61,127,255,0.5))
                drop-shadow(0 0 ${glowSize2}px rgba(112,72,255,0.3))
                drop-shadow(0 15px 30px rgba(0,0,0,0.5))
                brightness(1.08) contrast(1.05)
              `,
            }}
            priority
            sizes="(max-width: 768px) 180px, 350px"
          />
        </div>

        {/* Edge mask overlay - darkens white borders */}
        <div
          className="absolute inset-0 rounded-[2rem] pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 30%, #03050f 65%)",
            zIndex: 2,
          }}
        />

        {/* Bottom reflection/glow */}
        <div
          className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{
            width: s.w * 0.65,
            height: 20,
            background: "radial-gradient(ellipse, rgba(61,127,255,0.5) 0%, rgba(112,72,255,0.25) 50%, transparent 100%)",
          }}
        />

        {/* Floating particles around can */}
        <div className="absolute -top-4 -right-4 w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" />
        <div className="absolute top-1/4 -left-6 w-1.5 h-1.5 rounded-full bg-blue-400/50 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 -right-8 w-2 h-2 rounded-full bg-fuchsia-400/50 animate-pulse" style={{ animationDelay: "1s" }} />
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