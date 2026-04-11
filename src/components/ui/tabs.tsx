"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: "default" | "pills" | "underline"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "bg-white/5 rounded-xl p-1",
    pills: "gap-2",
    underline: "border-b border-white/10",
  }
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn("inline-flex items-center gap-1", variantClasses[variant], className)}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: "default" | "pills" | "underline"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00d4ff] data-[state=active]:to-[#8b5cf6] data-[state=active]:text-white data-[state=active]:shadow-lg text-white/60",
    pills: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00d4ff] data-[state=active]:to-[#8b5cf6] data-[state=active]:text-white rounded-full text-white/60",
    underline: "data-[state=active]:text-[#00d4ff] data-[state=active]:border-b-2 data-[state=active]:border-[#00d4ff] rounded-none text-white/60",
  }
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-4 focus-visible:outline-none", className)}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
