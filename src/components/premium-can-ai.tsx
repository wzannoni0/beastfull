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
  xl: { h: 320, w: 320, barW: "w-52", labelSize: "text-xs" },
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

      {/* Outer glow rings */}
      <div
        className="pointer-events-none absolute rounded-full animate-can-glow will-change-transform"
        style={{
          width: s.w * 1.8,
          height: s.h * 1.8,
          background: "radial-gradient(circle, rgba(0,243,255,0.15) 0%, rgba(188,19,254,0.08) 40%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      
      <div
        className="pointer-events-none absolute rounded-full will-change-transform"
        style={{
          width: s.w * 1.5,
          height: s.h * 1.5,
          background: "radial-gradient(circle, rgba(255,0,85,0.1) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animation: "glow-pulse 3s ease-in-out infinite",
        }}
      />

      {/* Ping rings */}
      {showPing && (
        <>
          <div
            className="pointer-events-none absolute rounded-full border border-cyan-400/40 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.4, height: s.w * 1.4, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-purple-400/30 animate-ping-ring will-change-transform"
            style={{ width: s.w * 1.2, height: s.w * 1.2, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animationDelay: "0.5s" }}
          />
        </>
      )}

      {/* Main moon container */}
      <div
        className="relative animate-can-float will-change-transform"
        style={{ width: s.w, height: s.h, zIndex: 1 }}
      >
        {/* Core sphere with multiple layers */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 30%, #00f3ff 0%, #bc13fe 35%, #ff0055 60%, #050505 100%)",
            boxShadow: `
              0 0 ${s.w * 0.2}px rgba(0,243,255,0.6),
              0 0 ${s.w * 0.4}px rgba(188,19,254,0.4),
              0 0 ${s.w * 0.6}px rgba(255,0,85,0.2),
              inset 0 0 ${s.w * 0.3}px rgba(0,0,0,0.9)
            `,
            transform: "rotateY(-15deg) rotateX(5deg)",
            transformStyle: "preserve-3d",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,243,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.2) 1px, transparent 1px)`,
            backgroundSize: `${s.w * 0.07}px ${s.w * 0.07}px`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Rotating orbit rings */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/25"
          style={{ transform: "rotateX(75deg)", animation: "orbit-ring 20s linear infinite" }}
        />
        <div
          className="absolute inset-0 rounded-full border border-purple-400/20"
          style={{ transform: "rotateX(75deg) rotateY(45deg)", animation: "orbit-ring 15s linear infinite reverse" }}
        />
        <div
          className="absolute inset-0 rounded-full border border-pink-400/15"
          style={{ transform: "rotateX(75deg) rotateY(-45deg)", animation: "orbit-ring 25s linear infinite" }}
        />

        {/* Inner glow */}
        <div
          className="absolute inset-[15%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,243,255,0.3) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* Power bar */}
      <div className={`mt-5 ${s.barW} space-y-1.5 relative z-10`}>
        <div className="flex items-center justify-between">
          <span className={`${s.labelSize} uppercase tracking-wider text-cyan-400 font-bold`}>
            CORE_PWR
          </span>
          <span className={`${s.labelSize} font-bold text-cyan-300`}>{power}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden bg-black/60">
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
