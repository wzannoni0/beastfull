"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: "sm" | "md" | "lg" | "xl"
    ring?: "none" | "cyan" | "violet" | "gold"
  }
>(({ className, size = "md", ring = "none", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  }
  const ringClasses = {
    none: "",
    cyan: "ring-2 ring-[#00d4ff]/50 ring-offset-2 ring-offset-[#09090b]",
    violet: "ring-2 ring-[#8b5cf6]/50 ring-offset-2 ring-offset-[#09090b]",
    gold: "ring-2 ring-[#fbbf24]/50 ring-offset-2 ring-offset-[#09090b]",
  }
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        sizeClasses[size],
        ringClasses[ring],
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
    variant?: "default" | "gradient" | "solid"
  }
>(({ className, variant = "gradient", ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full font-bold text-white",
      variant === "default" && "bg-white/10",
      variant === "gradient" && "bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20",
      variant === "solid" && "bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6]",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
