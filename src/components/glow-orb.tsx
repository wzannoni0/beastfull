"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GlowOrbProps {
  color?: string
  size?: "sm" | "md" | "lg" | "xl"
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
  blur?: boolean
  className?: string
}

export function GlowOrb({
  color = "#00d4ff",
  size = "lg",
  position = "center",
  blur = true,
  className
}: GlowOrbProps) {
  const sizeMap = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  }

  const positionMap = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={cn(
        "absolute rounded-full",
        sizeMap[size],
        positionMap[position],
        blur && "blur-3xl",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
      }}
    />
  )
}
