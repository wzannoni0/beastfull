"use client";

import { useMemo } from "react";

interface FizzCanProps {
  balance: number;
  level: number;
  size?: "sm" | "md" | "lg" | "xl";
  showLevel?: boolean;
  showBubbles?: boolean;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function FizzCan({ 
  balance, 
  level, 
  size = "md", 
  showLevel = true,
  showBubbles = true 
}: FizzCanProps) {
  const fillPercentage = useMemo(() => {
    if (level >= 8) return 95;
    if (level <= 1) return Math.min(15, (balance / 100) * 100);
    const levelThresholds = [0, 100, 400, 800, 1500, 3000, 6000, 12000];
    const current = levelThresholds[level - 1] || 0;
    const next = levelThresholds[level] || 12000;
    const progress = ((balance - current) / (next - current)) * 100;
    return Math.min(90, Math.max(20, progress + (level - 1) * 10));
  }, [balance, level]);

  const sizeMap = {
    sm: { width: 80, height: 120, fontSize: "0.6rem", bubzSize: "1rem" },
    md: { width: 120, height: 180, fontSize: "0.8rem", bubzSize: "1.4rem" },
    lg: { width: 160, height: 240, fontSize: "1rem", bubzSize: "1.8rem" },
    xl: { width: 200, height: 300, fontSize: "1.2rem", bubzSize: "2.2rem" },
  };

  const s = sizeMap[size];
  const glowIntensity = level >= 6 ? "1" : level >= 4 ? "0.7" : level >= 2 ? "0.4" : "0.2";
  const glowColor = level >= 6 ? "#a855f7" : level >= 4 ? "#8b5cf6" : "#00d4ff";

  const bubbles = useMemo(() => {
    if (!showBubbles) return [];
    const count = level >= 4 ? 8 : level >= 2 ? 5 : 3;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 20 + seededRandom(i * 1) * 60,
      size: 4 + seededRandom(i * 2) * 6,
      delay: seededRandom(i * 3) * 2,
      duration: 2 + seededRandom(i * 4) * 2,
    }));
  }, [level, showBubbles]);

  return (
    <div 
      className="can-container" 
      style={{ width: s.width, height: s.height }}
    >
      <div 
        className="can-glow" 
        style={{ 
          opacity: glowIntensity,
          background: `radial-gradient(circle, ${glowColor}33 0%, transparent 70%)`,
        }} 
      />
      
      <div className="can-body">
        <div 
          className="can-fill" 
          style={{ height: `${fillPercentage}%` }}
        >
          {showBubbles && (
            <div className="can-bubbles">
              {bubbles.map((b) => (
                <div
                  key={b.id}
                  className="bubble"
                  style={{
                    left: `${b.left}%`,
                    width: b.size,
                    height: b.size,
                    animationDelay: `${b.delay}s`,
                    animationDuration: `${b.duration}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="can-label" style={{ width: s.width * 0.8 }}>
          <div className="logo" style={{ fontSize: s.fontSize, letterSpacing: "3px" }}>
            FizzUp
          </div>
          <div className="bubz" style={{ fontSize: s.bubzSize }}>
            BUBZ
          </div>
        </div>

        {level >= 5 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                style={{
                  top: `${20 + seededRandom(i * 5) * 60}%`,
                  left: `${20 + seededRandom(i * 7) * 60}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {showLevel && (
        <div 
          className={`level-badge level-${level}`}
          style={{ 
            fontSize: size === "sm" ? "0.6rem" : size === "xl" ? "0.9rem" : "0.75rem"
          }}
        >
          <span>LV.{level}</span>
        </div>
      )}
    </div>
  );
}
