"use client";

import { useMemo } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  maxOpacity: number;
}

export function StarsBackground() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const r1 = seededRandom(i * 3 + 1);
      const r2 = seededRandom(i * 3 + 2);
      const r3 = seededRandom(i * 3 + 3);
      const r4 = seededRandom(i * 4 + 4);
      return {
        id: i,
        x: r1 * 100,
        y: r2 * 100,
        size: r3 > 0.85 ? 2 : 1,
        duration: 3 + r4 * 3,
        delay: r1 * 4,
        maxOpacity: 0.15 + r2 * 0.15,
      };
    });
  }, []);

  return (
    <div className="stars-container" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.size === 2 ? "large" : ""}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            "--duration": `${star.duration}s`,
            "--delay": `${star.delay}s`,
            "--max-opacity": star.maxOpacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
