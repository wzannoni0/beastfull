'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 30px rgba(0, 243, 255, 0.3), 0 0 60px rgba(188, 19, 254, 0.2)'
      }}
      className={`card-cyberpunk ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function GlowButton({ children, onClick, href, variant = 'primary', className = '' }: GlowButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-cyberpunk' : 'btn-cyberpunk-secondary';

  const motionProps = {
    whileHover: {
      scale: 1.05,
      boxShadow: variant === 'primary'
        ? '0 0 20px rgba(0, 243, 255, 0.6), 0 0 40px rgba(0, 243, 255, 0.4), 0 0 60px rgba(0, 243, 255, 0.2)'
        : '0 0 20px rgba(188, 19, 254, 0.6), 0 0 40px rgba(188, 19, 254, 0.4)'
    },
    whileTap: { scale: 0.95 }
  };

  if (href) {
    return (
      <motion.a href={href} className={`${baseClass} ${className}`} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={`${baseClass} ${className}`} {...motionProps}>
      {children}
    </motion.button>
  );
}

interface TextGlowProps {
  children: ReactNode;
  color?: 'cyan' | 'purple' | 'pink';
  className?: string;
}

export function TextGlow({ children, color = 'cyan', className = '' }: TextGlowProps) {
  const colorMap = {
    cyan: 'text-glow-cyan',
    purple: 'text-glow-purple',
    pink: 'text-glow-pink'
  };

  return (
    <span className={`${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
}

interface PulseDotProps {
  color?: 'cyan' | 'purple' | 'pink';
}

export function PulseDot({ color = 'cyan' }: PulseDotProps) {
  const colorMap = {
    cyan: 'bg-[#00f3ff] shadow-[0_0_10px_#00f3ff,0_0_20px_#00f3ff]',
    purple: 'bg-[#bc13fe] shadow-[0_0_10px_#bc13fe,0_0_20px_#bc13fe]',
    pink: 'bg-[#ff0055] shadow-[0_0_10px_#ff0055,0_0_20px_#ff0055]'
  };

  return (
    <span className={`relative inline-flex h-3 w-3 ${colorMap[color]} rounded-full`}>
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorMap[color]} opacity-75`} />
    </span>
  );
}
