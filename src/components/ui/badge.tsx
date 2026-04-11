import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 text-[#00d4ff] border border-[#00d4ff]/30",
        secondary:
          "bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30",
        destructive:
          "bg-red-500/20 text-red-400 border border-red-500/30",
        success:
          "bg-green-500/20 text-green-400 border border-green-500/30",
        warning:
          "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
        outline: "border border-white/20 text-white/80",
        glow: "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/50 glow-cyan",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
