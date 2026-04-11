import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    glow?: "cyan" | "violet" | "pink" | "gold" | "none"
    glass?: boolean
    hover?: boolean
  }
>(({ className, glow = "none", glass = false, hover = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-white/10 bg-black/40 transition-all duration-300",
      glass && "backdrop-blur-xl bg-white/5",
      glow === "cyan" && "shadow-[0_0_30px_rgba(0,212,255,0.15)] border-[#00d4ff]/30",
      glow === "violet" && "shadow-[0_0_30px_rgba(139,92,246,0.15)] border-[#8b5cf6]/30",
      glow === "pink" && "shadow-[0_0_30px_rgba(236,72,153,0.15)] border-[#ec4899]/30",
      glow === "gold" && "shadow-[0_0_30px_rgba(251,191,36,0.15)] border-[#fbbf24]/30",
      hover && "hover:bg-white/5 hover:scale-[1.02] hover:border-white/20 cursor-pointer",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-lg font-bold leading-none tracking-tight text-white", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-white/60", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
