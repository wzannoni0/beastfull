type CanWidgetProps = {
  level: number;
  canState: string;
  power: number;
};

const levelGlow: Record<number, string> = {
  1: "shadow-[0_0_35px_rgba(59,130,246,0.20)]",
  2: "shadow-[0_0_40px_rgba(59,130,246,0.25)]",
  3: "shadow-[0_0_45px_rgba(79,70,229,0.28)]",
  4: "shadow-[0_0_50px_rgba(99,102,241,0.30)]",
  5: "shadow-[0_0_55px_rgba(124,58,237,0.35)]",
  6: "shadow-[0_0_60px_rgba(139,92,246,0.40)]",
  7: "shadow-[0_0_65px_rgba(168,85,247,0.45)]",
  8: "shadow-[0_0_70px_rgba(192,132,252,0.5)]",
};

export function CanWidget({ level, canState, power }: CanWidgetProps) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <p className="text-sm text-slate-300">Can Power</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
        <div
          className={`mx-auto h-56 w-32 rounded-[2rem] border border-blue-300/40 bg-gradient-to-b from-blue-400/30 via-violet-500/30 to-slate-900 p-2 ${levelGlow[level] ?? levelGlow[1]}`}
        >
          <div
            className="h-full w-full rounded-[1.6rem] border border-white/20 bg-gradient-to-t from-blue-500/60 to-transparent"
            style={{ clipPath: `inset(${100 - power}% 0 0 0 round 1.3rem)` }}
          />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold">{canState}</p>
          <p className="text-sm text-slate-300">Livello visuale: {level}/8</p>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${power}%` }} />
          </div>
          <p className="text-xs text-slate-400">Your can is evolving</p>
        </div>
      </div>
    </div>
  );
}
