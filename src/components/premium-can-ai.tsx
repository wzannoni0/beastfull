type PremiumCanAIProps = {
  label?: string;
  power?: number;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-44 w-24",
  md: "h-56 w-32",
  lg: "h-72 w-40",
};

export function PremiumCanAI({
  label = "BEASTCOLA AI CORE",
  power = 72,
  size = "md",
}: PremiumCanAIProps) {
  return (
    <div className="relative mx-auto w-fit [perspective:1200px]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -inset-8 -z-10 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute -inset-6 -z-10 rounded-full bg-violet-500/20 blur-2xl" />

      <div
        className={`relative ${sizeMap[size]} rounded-[2.2rem] border border-slate-200/20 bg-gradient-to-br from-slate-100/20 via-slate-300/10 to-slate-950 p-2 shadow-[0_20px_80px_rgba(50,100,255,0.35)] [transform:rotateY(-14deg)_rotateX(6deg)]`}
      >
        <div className="absolute inset-[6px] rounded-[1.9rem] bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-60 blur-[1px]" />
        <div className="absolute right-[10px] top-[16px] h-[calc(100%-32px)] w-[12px] rounded-full bg-white/10 blur-sm" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-white/20 bg-[linear-gradient(160deg,rgba(255,255,255,0.22),rgba(255,255,255,0.03)_18%,rgba(8,10,20,0.82)_52%,rgba(5,7,18,0.98)_100%)]">
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-slate-200/35 to-transparent" />
          <div className="absolute left-1/2 top-[10px] h-4 w-16 -translate-x-1/2 rounded-full border border-white/20 bg-slate-300/20" />

          <div
            className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(77,151,255,0.6)_12%,rgba(91,103,255,0.88)_58%,rgba(153,76,255,0.95)_100%)] transition-all duration-700"
            style={{ height: `${power}%` }}
          />

          <div className="absolute inset-x-4 bottom-[22%] h-20 rounded-full bg-cyan-300/20 blur-2xl" />
          <div className="absolute inset-y-0 left-[14%] w-[18px] bg-gradient-to-r from-white/25 to-transparent opacity-80" />
          <div className="absolute inset-y-0 right-[18%] w-[10px] bg-gradient-to-r from-white/12 to-transparent opacity-60" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.28),transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(99,102,241,.22),transparent_28%)]" />

          <div className="absolute left-1/2 top-1/2 flex w-[72%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-[1.4rem] border border-white/15 bg-black/35 px-3 py-4 backdrop-blur-md">
            <div className="text-[10px] font-bold tracking-[0.34em] text-cyan-100">BEASTCOLA</div>
            <div className="text-3xl font-black italic tracking-tight text-white drop-shadow-[0_0_18px_rgba(120,160,255,0.45)]">
              AI
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            <div className="text-[9px] uppercase tracking-[0.28em] text-slate-300">Power Core</div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] uppercase tracking-[0.28em] text-slate-300">{label}</p>
    </div>
  );
}
