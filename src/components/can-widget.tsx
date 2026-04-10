type CanWidgetProps = {
  level: number;
  canState: string;
  power: number;
  animate?: boolean;
};

export function CanWidget({ level, canState, power, animate }: CanWidgetProps) {
  const visual = { 1: { gradient: "from-slate-300/30 via-slate-500/30 to-slate-900", glow: "shadow-[0_0_35px_rgba(148,163,184,0.2)]" }, 2: { gradient: "from-blue-400/30 via-blue-600/30 to-slate-900", glow: "shadow-[0_0_40px_rgba(59,130,246,0.25)]" }, 3: { gradient: "from-cyan-400/30 via-cyan-600/30 to-slate-900", glow: "shadow-[0_0_45px_rgba(34,211,238,0.28)]" }, 4: { gradient: "from-violet-400/30 via-violet-600/30 to-slate-900", glow: "shadow-[0_0_50px_rgba(139,92,246,0.3)]" }, 5: { gradient: "from-purple-400/30 via-purple-600/30 to-slate-900", glow: "shadow-[0_0_55px_rgba(168,85,247,0.35)]" }, 6: { gradient: "from-fuchsia-400/30 via-fuchsia-600/30 to-slate-900", glow: "shadow-[0_0_60px_rgba(232,121,249,0.4)]" }, 7: { gradient: "from-orange-400/30 via-orange-600/30 to-slate-900", glow: "shadow-[0_0_65px_rgba(249,115,22,0.45)]" }, 8: { gradient: "from-yellow-400/30 via-yellow-600/30 to-slate-900", glow: "shadow-[0_0_70px_rgba(234,179,8,0.5)]" } }[level] ?? { gradient: "from-slate-300/30 via-slate-500/30 to-slate-900", glow: "shadow-[0_0_35px_rgba(148,163,184,0.2)]" };

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-300">Can Power</p>
        <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-xs font-semibold text-blue-200 animate-badge-unlock">
          Lv.{level}
        </span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
        <div
          className={`relative mx-auto h-56 w-32 rounded-[2rem] border border-blue-300/40 bg-gradient-to-b p-2 ${visual.glow} ${animate ? "animate-can-evolve" : ""}`}
          style={{ backgroundImage: `linear-gradient(180deg, ${visual.gradient.split(" ")[0].replace("/30", "")}40, ${visual.gradient.split(" ")[1].replace("/30", "")}40, #020911)` }}
        >
          <div
            className="h-full w-full rounded-[1.6rem] border border-white/20 bg-gradient-to-t from-blue-500/60 to-transparent transition-all duration-700 animate-power-shimmer"
            style={{ clipPath: `inset(${100 - power}% 0 0 0 round 1.3rem)` }}
          />
          {/* Orbiting ring */}
          <div className="absolute inset-0 rounded-[2rem] border border-blue-300/20 animate-orbit" style={{ transform: "rotate(45deg) scale(1.15)" }} />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-black capitalize tracking-tight">{canState.replace(" can", "")}</p>
          <p className="text-sm text-slate-300">Livello visuale: {level}/8</p>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full animate-power-shimmer" style={{ width: `${power}%` }} />
          </div>
          <p className="text-xs text-slate-400 animate-counter">Your can is evolving</p>
        </div>
      </div>
    </div>
  );
}
