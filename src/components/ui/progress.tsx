"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string
  }
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-white/10",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      asChild
    >
      <motion.div
        className={cn(
          "h-full w-full flex-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] transition-all",
          indicatorClassName
        )}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (value || 0) / 100 }}
        style={{ transformOrigin: "left" }}
      />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
