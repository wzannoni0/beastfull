"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]">
      <div className="relative mb-8">
        <div className="h-32 w-32 rounded-full border-4 border-cyan-500/20 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-b-pink-500 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse" />
        </div>
      </div>

      <div className="w-64 space-y-2">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-cyan-400">INITIALIZING</span>
          <span className="text-purple-400">{Math.min(100, Math.round(progress))}%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-black/50">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-100"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
      </div>

      <div className="mt-8 text-[10px] font-mono text-slate-500">
        LUNA_OS v8.0.0 // LUNA_NETWORK
      </div>

      <div className="absolute bottom-8 text-[8px] font-mono text-slate-600">
        <span className="animate-pulse">▸</span> Establishing neural connection...
      </div>
    </div>
  );
}
