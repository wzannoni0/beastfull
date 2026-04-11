import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 text-[#00d4ff] border border-[#00d4ff]/30",
        secondary: "bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30",
        success: "bg-green-500/20 text-green-400 border border-green-500/30",
        warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
        destructive: "bg-red-500/20 text-red-400 border border-red-500/30",
        outline: "border border-white/20 text-white/80",
        glow: "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/50 shadow-[0_0_10px_rgba(0,212,255,0.3)]",
        neon: "bg-transparent text-[#00d4ff] border border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.5)]",
        gold: "bg-gradient-to-r from-[#fbbf24]/20 to-[#f59e0b]/20 text-[#fbbf24] border border-[#fbbf24]/30",
        pink: "bg-gradient-to-r from-[#ec4899]/20 to-[#db2777]/20 text-[#ec4899] border border-[#ec4899]/30",
        level1: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
        level2: "bg-green-500/20 text-green-400 border border-green-500/30",
        level3: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
        level4: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
        level5: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
        level6: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
        level7: "bg-pink-500/20 text-pink-400 border border-pink-500/30",
        level8: "bg-gradient-to-r from-[#fbbf24]/20 to-[#f59e0b]/20 text-[#fbbf24] border border-[#fbbf24]/50 shadow-[0_0_15px_rgba(251,191,36,0.4)]",
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  pulse?: boolean
}

function Badge({ className, variant, size, pulse, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), pulse && "animate-pulse", className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
