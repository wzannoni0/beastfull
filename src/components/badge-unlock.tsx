"use client";

import { levels } from "@/lib/levels";

type BadgeProps = {
  levelId: number;
  earned?: boolean;
  size?: "sm" | "md";
};

const badgeColors: Record<number, string> = {
  1: "from-slate-400 to-slate-500",
  2: "from-blue-400 to-blue-600",
  3: "from-cyan-400 to-cyan-600",
  4: "from-violet-400 to-violet-600",
  5: "from-purple-400 to-purple-600",
  6: "from-fuchsia-400 to-fuchsia-600",
  7: "from-orange-400 to-orange-600",
  8: "from-yellow-400 to-yellow-600",
};

const badgeGlow: Record<number, string> = {
  1: "shadow-[0_0_8px_rgba(148,163,184,0.4)]",
  2: "shadow-[0_0_10px_rgba(59,130,246,0.4)]",
  3: "shadow-[0_0_10px_rgba(34,211,238,0.4)]",
  4: "shadow-[0_0_12px_rgba(139,92,246,0.4)]",
  5: "shadow-[0_0_14px_rgba(168,85,247,0.4)]",
  6: "shadow-[0_0_16px_rgba(232,121,249,0.4)]",
  7: "shadow-[0_0_18px_rgba(249,115,22,0.4)]",
  8: "shadow-[0_0_20px_rgba(234,179,8,0.5)]",
};

export function Badge({ levelId, earned = true, size = "sm" }: BadgeProps) {
  const level = levels.find((l) => l.id === levelId);
  if (!level) return null;

  const color = badgeColors[levelId] ?? badgeColors[1];
  const glow = badgeGlow[levelId] ?? badgeGlow[1];

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-bold
        bg-gradient-to-br ${color}
        ${glow}
        ${size === "md" ? "text-sm px-4 py-2" : "text-xs"}
        ${earned ? "" : "opacity-30 grayscale"}
        ${earned ? "animate-badge-unlock" : ""}`}
      style={{ animationDelay: earned ? `${levelId * 0.08}s` : "0s" }}
    >
      <span>{level.name}</span>
    </div>
  );
}
