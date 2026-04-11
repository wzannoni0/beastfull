"use client";

import { teamMembers } from "@/lib/mock";

export function TeamTree() {
  return (
    <div className="relative flex flex-col items-center gap-6 py-6">
      {/* Root node */}
      <div className="glass-card glass-card-hover hud-corner gradient-border-animated px-6 py-4 text-center animate-fade-in-up">
        <p className="text-sm font-black text-white uppercase font-mono">YOU</p>
        <p className="text-xs text-cyan-300 font-mono">ROOT • BEAST_CORE</p>
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
              stroke="rgba(0,243,255,0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>

      {/* Child nodes grid */}
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
        {teamMembers.slice(0, 6).map((member, i) => (
          <div
            key={member.username}
            className="glass-card glass-card-hover hud-corner gradient-border-animated px-4 py-3 text-center animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            <div className="flex items-center justify-center gap-1.5">
              <span className={`inline-block h-2 w-2 rounded-full ${member.status === "Attivo" ? "bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,243,255,0.8)]" : "bg-pink-400 shadow-[0_0_8px_rgba(255,0,85,0.8)]"}`} />
              <p className="text-xs sm:text-sm font-semibold text-white font-mono">@{member.username}</p>
            </div>
            <p className="mt-1 text-[10px] sm:text-xs text-cyan-300 font-mono">LV.0{member.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
