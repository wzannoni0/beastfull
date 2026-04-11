"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=unchecked]:bg-white/10 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#00d4ff] data-[state=checked]:to-[#8b5cf6]",
      "data-[state=unchecked]:shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]",
      "data-[state=checked]:shadow-[0_0_15px_rgba(0,212,255,0.5)]",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300",
        "data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-5"
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
