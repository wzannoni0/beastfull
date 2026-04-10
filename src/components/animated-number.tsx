"use client";

import { useEffect, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function AnimatedNumber({
  value,
  duration = 1200,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedNumberProps) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplayed(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value, duration, decimals]);

  return <span>{prefix}{displayed}{suffix}</span>;
}
