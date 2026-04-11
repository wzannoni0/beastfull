"use client";

type PremiumCanAIProps = {
  label?: string;
  power?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showPing?: boolean;
};

const sizeMap = {
  sm: { h: 140, w: 140, barW: "w-28", labelSize: "text-[8px]" },
  md: { h: 200, w: 200, barW: "w-36", labelSize: "text-[9px]" },
  lg: { h: 280, w: 280, barW: "w-44", labelSize: "text-[10px]" },
  xl: { h: 360, w: 360, barW: "w-52", labelSize: "text-xs" },
};

export function PremiumCanAI({
  label = "LUNA",
  power = 72,
  size = "lg",
  showPing = false,
}: PremiumCanAIProps) {
  const s = sizeMap[size];

  return (
    <div className="relative mx-auto select-none flex flex-col items-center">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 1.5,
          height: s.h * 1.5,
          background: "radial-gradient(circle, rgba(0,243,255,0.3) 0%, rgba(188,19,254,0.15) 50%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      {/* Ping rings */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border-2 border-cyan-400/40 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.25, height: s.w * 1.25, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
        </>
      )}

      {/* Moon container */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ width: s.w, height: s.h, zIndex: 1 }}
      >
        {/* Main sphere */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 30%, #00f3ff 0%, #bc13fe 40%, #050505 100%)",
            boxShadow: `0 0 ${s.w * 0.15}px rgba(0,243,255,0.4), 0 0 ${s.w * 0.3}px rgba(188,19,254,0.2), inset 0 0 ${s.w * 0.2}px rgba(0,0,0,0.8)`,
            transform: "rotateY(-15deg) rotateX(5deg)",
            transformStyle: "preserve-3d",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,243,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.15) 1px, transparent 1px)`,
            backgroundSize: `${s.w * 0.08}px ${s.w * 0.08}px`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Orbit ring */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/30 animate-orbit"
          style={{ transform: "rotateX(75deg)" }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 rounded-full blur-xl"
          style={{
            width: s.w * 0.6,
            height: 12,
            background: "radial-gradient(ellipse, rgba(0,243,255,0.5) 0%, rgba(188,19,254,0.3) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Power bar */}
      <div className={`mt-5 ${s.barW} space-y-1.5 relative z-10`}>
        <div className="flex items-center justify-between">
          <span className={`${s.labelSize} uppercase tracking-wider text-cyan-400 font-bold`}>
            PWR
          </span>
          <span className={`${s.labelSize} font-bold text-cyan-300`}>{power}%</span>
        </div>
        <div className="power-bar-track h-1.5 rounded-full">
          <div 
            className="h-full rounded-full animate-power-shimmer"
            style={{ width: `${power}%` }}
          />
        </div>
      </div>

      {/* Label */}
      {label && (
        <p className={`mt-2 text-center ${s.labelSize} uppercase tracking-widest text-cyan-500/60 relative z-10 font-bold`}>
          [{label}]
        </p>
      )}
    </div>
  );
}