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
  label = "MONSTER ENERGY",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];
  const glowSize = size === "xl" ? 30 : size === "lg" ? 24 : size === "md" ? 18 : 12;
  const glowSize2 = size === "xl" ? 55 : size === "lg" ? 45 : size === "md" ? 30 : 20;

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

      {/* ── Real Can Image with Monster Energy - 3D curved ── */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ 
          width: s.w, 
          height: s.h, 
          zIndex: 1,
          perspective: "600px",
        }}
      >
        {/* Dark container to mask any white edges */}
        <div
          className="absolute inset-0 rounded-[2rem]"
          style={{
            background: "#0a0a0a",
            boxShadow: "inset 0 0 40px rgba(34,197,94,0.08)",
          }}
        />

        {/* Can with 3D transform */}
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateY(-6deg) rotateX(3deg)",
            transformStyle: "preserve-3d",
            borderRadius: "1.8rem",
            overflow: "hidden",
          }}
        >
          {/* Real Monster Energy can image from URL */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Monster_Energy_drink.jpg/800px-Monster_Energy_drink.jpg"
            alt="Monster Energy Can"
            fill
            className="object-contain"
            style={{
              filter: `
                drop-shadow(0 0 ${glowSize}px rgba(34,197,94,0.5))
                drop-shadow(0 0 ${glowSize2}px rgba(22,163,74,0.3))
                drop-shadow(0 15px 30px rgba(0,0,0,0.6))
                brightness(1.05) contrast(1.1)
              `,
            }}
            priority
            sizes="(max-width: 768px) 180px, 350px"
          />
        </div>

        {/* Edge mask overlay - darkens any white borders */}
        <div
          className="absolute inset-0 rounded-[2rem] pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 32%, #0a0a0a 68%)",
            zIndex: 2,
          }}
        />

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