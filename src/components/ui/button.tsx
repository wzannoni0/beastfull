import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white shadow-lg shadow-[#00d4ff]/20 hover:shadow-[#00d4ff]/40 hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white shadow-lg shadow-red-500/20",
        success:
          "bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white shadow-lg shadow-green-500/20",
        warning:
          "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black shadow-lg shadow-yellow-500/20",
        outline:
          "border-2 border-[#00d4ff]/50 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-[#00d4ff]",
        ghost:
          "text-white/80 hover:text-white hover:bg-white/10",
        link: "text-[#00d4ff] underline-offset-4 hover:underline",
        glass:
          "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 shadow-lg",
        neon:
          "bg-transparent text-[#00d4ff] border-2 border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.5),0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.7),0_0_40px_rgba(0,212,255,0.5)]",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-12 w-12",
        "icon-sm": "h-10 w-10",
        "icon-lg": "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  pulse?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, pulse, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), pulse && "animate-pulse")}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
