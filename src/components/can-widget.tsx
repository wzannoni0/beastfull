type CanWidgetProps = {
  level: number;
  canState: string;
  power: number;
  animate?: boolean;
};

export function CanWidget({ level, canState, power, animate }: CanWidgetProps) {
  const visual = { 
    1: { gradient: "from-cyan-400/30 via-slate-500/30 to-black", glow: "shadow-[0_0_35px_rgba(0,243,255,0.25)]", border: "border-cyan-400/40" }, 
    2: { gradient: "from-blue-400/30 via-blue-600/30 to-black", glow: "shadow-[0_0_40px_rgba(59,130,246,0.3)]", border: "border-blue-400/40" }, 
    3: { gradient: "from-cyan-400/30 via-cyan-600/30 to-black", glow: "shadow-[0_0_45px_rgba(34,211,238,0.35)]", border: "border-cyan-400/50" }, 
    4: { gradient: "from-purple-400/30 via-purple-600/30 to-black", glow: "shadow-[0_0_50px_rgba(139,92,246,0.4)]", border: "border-purple-400/50" }, 
    5: { gradient: "from-pink-400/30 via-pink-600/30 to-black", glow: "shadow-[0_0_55px_rgba(236,72,153,0.45)]", border: "border-pink-400/50" }, 
    6: { gradient: "from-fuchsia-400/30 via-fuchsia-600/30 to-black", glow: "shadow-[0_0_60px_rgba(232,121,249,0.5)]", border: "border-fuchsia-400/50" }, 
    7: { gradient: "from-orange-400/30 via-orange-600/30 to-black", glow: "shadow-[0_0_65px_rgba(249,115,22,0.55)]", border: "border-orange-400/50" }, 
    8: { gradient: "from-yellow-400/30 via-yellow-600/30 to-black", glow: "shadow-[0_0_70px_rgba(234,179,8,0.6)]", border: "border-yellow-400/50" } 
  }[level] ?? { gradient: "from-cyan-400/30 via-slate-500/30 to-black", glow: "shadow-[0_0_35px_rgba(0,243,255,0.25)]", border: "border-cyan-400/40" };

  return (
    <div className="glass-card glass-card-hover hud-corner p-4 sm:p-5 border-cyan-500/20">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs sm:text-sm text-cyan-300 font-mono uppercase tracking-widest">CORE_MATRIX</p>
        <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black text-cyan-300 animate-badge-unlock uppercase">
          LV.0{level}
        </span>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-[120px_1fr] sm:items-center">
        <div
          className={`relative mx-auto h-44 sm:h-56 w-28 sm:w-32 rounded-[1.5rem] border ${visual.border} bg-gradient-to-b p-2 ${visual.glow} ${animate ? "animate-can-evolve" : ""}`}
          style={{ backgroundImage: `linear-gradient(180deg, ${visual.gradient.split(" ")[0].replace("/30", "")}40, ${visual.gradient.split(" ")[1].replace("/30", "")}40, #050505)` }}
        >
          <div
            className="h-full w-full rounded-[1.3rem] border border-cyan-400/30 bg-gradient-to-t from-cyan-500/60 via-purple-500/40 to-transparent transition-all duration-700"
            style={{ clipPath: `inset(${100 - power}% 0 0 0 round 1.3rem)` }}
          />
          <div className="absolute inset-0 rounded-[1.5rem] border border-cyan-400/20 animate-orbit" style={{ transform: "rotate(45deg) scale(1.15)" }} />
          <div className="absolute inset-0 rounded-[1.5rem]" style={{
            backgroundImage: `
              linear-gradient(rgba(0,243,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,243,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "8px 8px",
          }} />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <p className="text-base sm:text-lg font-black capitalize tracking-tight uppercase glitch-hover">{canState.replace(" can", "")}</p>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">EVOLUTION_LVL: {level}/8</p>
          <div className="h-2 overflow-hidden rounded-full bg-black/60">
            <div className="h-full animate-power-shimmer" style={{ width: `${power}%` }} />
          </div>
          <p className="text-[10px] sm:text-xs text-cyan-400/70 font-mono animate-counter uppercase tracking-tighter">[ SYSTEM EVOLVING ]</p>
        </div>
      </div>
    </div>
  );
}
