"use client";

import Image from "next/image";

type PremiumCanAIProps = {
  label?: string;
  power?: number;
  size?: "sm" | "md" | "lg";
  showPing?: boolean;
};

const sizeMap = {
  sm: { h: 180, w: 90, barW: "w-28", labelSize: "text-[9px]" },
  md: { h: 240, w: 120, barW: "w-36", labelSize: "text-[10px]" },
  lg: { h: 320, w: 160, barW: "w-44", labelSize: "text-[11px]" },
};

export function PremiumCanAI({
  label = "NEXACOLA AI CORE",
  power = 72,
  size = "md",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];
  const glowSize = size === "lg" ? 24 : size === "md" ? 18 : 12;
  const glowSize2 = size === "lg" ? 45 : size === "md" ? 32 : 20;

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* ── Ambient glow layers ── */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 2,
          height: s.h,
          background: "radial-gradient(ellipse, rgba(61,127,255,0.25) 0%, rgba(112,72,255,0.15) 55%, transparent 100%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow-subtle will-change-transform"
        style={{
          width: s.w * 1.4,
          height: s.h * 0.7,
          background: "radial-gradient(ellipse, rgba(239,74,255,0.12) 0%, transparent 70%)",
          top: "55%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animationDelay: "0.6s",
        }}
      />

      {/* ── Ping sonar rings ── */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border border-blue-400/25 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.6, height: s.w * 1.6, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-fuchsia-400/15 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.3, height: s.w * 1.3, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.8s" }}
          />
        </>
      )}

      {/* ── Real NEXACOLA can ── */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ width: s.w, height: s.h, zIndex: 1 }}
      >
        {/* Bottom reflection */}
        <div
          className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 rounded-full blur-xl"
          style={{
            width: s.w * 0.6,
            height: 16,
            background: "rgba(61,127,255,0.4)",
          }}
        />

        <Image
          src="/nexacola-can.png"
          alt="NEXACOLA AI Energy Can"
          fill
          className="object-contain"
          style={{
            mixBlendMode: "multiply",
            filter: `
              drop-shadow(0 0 ${glowSize}px rgba(61,127,255,0.5))
              drop-shadow(0 0 ${glowSize2}px rgba(112,72,255,0.25))
              brightness(1.06) contrast(1.04) saturate(1.08)
            `,
          }}
          priority
          sizes="(max-width: 768px) 160px, 240px"
        />
      </div>

      {/* ── Power bar ── */}
      <div className={`mt-4 ${s.barW} space-y-1.5 relative z-10`}>
        <div className="flex items-center justify-between px-0.5">
          <span className={`${s.labelSize} uppercase tracking-[0.22em] text-slate-400`}>
            Power
          </span>
          <span className={`${s.labelSize} font-bold text-cyan-300`}>{power}%</span>
        </div>
        <div className="power-bar-track">
          <div className="power-bar-fill" style={{ width: `${power}%` }} />
        </div>
      </div>

      {/* ── Label ── */}
      {label && (
        <p className={`mt-2 text-center ${s.labelSize} uppercase tracking-[0.28em] text-slate-500 relative z-10`}>
          {label}
        </p>
      )}
    </div>
  );
}
