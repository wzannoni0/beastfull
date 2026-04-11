import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, iconPosition = "left", ...props }, ref) => {
    return (
      <div className="relative">
        {icon && iconPosition === "left" && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-xl border-2 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40",
            "transition-all duration-300 backdrop-blur-sm",
            "focus:outline-none focus:ring-0",
            error
              ? "border-red-500/50 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              : "border-white/10 focus:border-[#00d4ff]/50 shadow-[0_0_10px_rgba(0,212,255,0.1)]",
            icon && iconPosition === "left" && "pl-12",
            icon && iconPosition === "right" && "pr-12",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && iconPosition === "right" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
            {icon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
