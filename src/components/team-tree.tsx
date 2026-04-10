"use client";

import { teamMembers } from "@/lib/mock";

export function TeamTree() {
  return (
    <div className="relative flex flex-col items-center gap-6 py-6">
      {/* Root node */}
      <div className="glass-card glass-card-hover neon-border neon-border-animated rounded-xl px-6 py-4 text-center animate-fade-in-up">
        <p className="text-sm font-bold">You</p>
        <p className="text-xs text-blue-300">Root • Beast Core</p>
      </div>

      {/* SVG connection lines */}
      <svg
        className="absolute left-1/2 top-0 -z-10 overflow-visible"
        style={{ height: "calc(100% - 40px)", width: "100%", transform: "translateX(-50%)" }}
        preserveAspectRatio="none"
      >
        {teamMembers.slice(0, 6).map((_, i) => {
          const xPositions = [15, 30, 50, 70, 85];
          const x = xPositions[i] ?? 50;
          return (
            <line
              key={i}
              x1="50%"
              y1="0"
              x2={`${x}%`}
              y2="100%"
              stroke="rgba(153,170,255,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>

      {/* Child nodes grid */}
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
        {teamMembers.slice(0, 6).map((member, i) => (
          <div
            key={member.username}
            className="glass-card glass-card-hover neon-border neon-border-animated rounded-xl px-4 py-3 text-center animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            <div className="flex items-center justify-center gap-1.5">
              <span className={`inline-block h-2 w-2 rounded-full ${member.status === "Attivo" ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
              <p className="text-sm font-semibold">@{member.username}</p>
            </div>
            <p className="mt-1 text-xs text-slate-300">Lv.{member.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
