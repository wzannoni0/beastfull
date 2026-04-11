"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string
    variant?: "default" | "gradient" | "glow" | "striped"
    size?: "sm" | "md" | "lg"
  }
>(({ className, value, indicatorClassName, variant = "gradient", size = "md", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  }
  const variantClasses = {
    default: "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]",
    gradient: "bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#ec4899]",
    glow: "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] shadow-[0_0_10px_rgba(0,212,255,0.5)]",
    striped: "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] animate-[ stripes_1s_linear_infinite]",
  }
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-full bg-white/10",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full transition-all duration-500 ease-out rounded-full",
          variantClasses[variant],
          indicatorClassName
        )}
        style={{ width: `${value || 0}%` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
