export const canVisuals: Record<number, {
  gradient: string;
  border: string;
  glow: string;
  label: string;
  glowColor: string;
}> = {
  1: { gradient: "from-slate-300/30 via-slate-500/30 to-slate-900", border: "border-slate-300/40", glow: "shadow-[0_0_35px_rgba(148,163,184,0.2)]", label: "Starter Can", glowColor: "rgba(148,163,184,0.2)" },
  2: { gradient: "from-blue-400/30 via-blue-600/30 to-slate-900", border: "border-blue-300/40", glow: "shadow-[0_0_40px_rgba(59,130,246,0.25)]", label: "Charged Can", glowColor: "rgba(59,130,246,0.25)" },
  3: { gradient: "from-cyan-400/30 via-cyan-600/30 to-slate-900", border: "border-cyan-300/40", glow: "shadow-[0_0_45px_rgba(34,211,238,0.28)]", label: "Boosted Can", glowColor: "rgba(34,211,238,0.28)" },
  4: { gradient: "from-violet-400/30 via-violet-600/30 to-slate-900", border: "border-violet-300/40", glow: "shadow-[0_0_50px_rgba(139,92,246,0.3)]", label: "Neon Can", glowColor: "rgba(139,92,246,0.3)" },
  5: { gradient: "from-purple-400/30 via-purple-600/30 to-slate-900", border: "border-purple-300/40", glow: "shadow-[0_0_55px_rgba(168,85,247,0.35)]", label: "Beast Can", glowColor: "rgba(168,85,247,0.35)" },
  6: { gradient: "from-fuchsia-400/30 via-fuchsia-600/30 to-slate-900", border: "border-fuchsia-300/40", glow: "shadow-[0_0_60px_rgba(232,121,249,0.4)]", label: "Hyper Beast Can", glowColor: "rgba(232,121,249,0.4)" },
  7: { gradient: "from-orange-400/30 via-orange-600/30 to-slate-900", border: "border-orange-300/40", glow: "shadow-[0_0_65px_rgba(249,115,22,0.45)]", label: "Titan Beast Can", glowColor: "rgba(249,115,22,0.45)" },
  8: { gradient: "from-yellow-400/30 via-yellow-600/30 to-slate-900", border: "border-yellow-300/40", glow: "shadow-[0_0_70px_rgba(234,179,8,0.5)]", label: "Legendary Beast Can", glowColor: "rgba(234,179,8,0.5)" },
};
