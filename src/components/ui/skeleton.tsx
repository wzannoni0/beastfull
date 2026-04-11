"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular"
  width?: string | number
  height?: string | number
}

function Skeleton({ className, variant = "rectangular", width, height, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-white/5",
        variant === "circular" && "rounded-full",
        variant === "text" && "rounded h-4",
        variant === "rectangular" && "rounded-xl",
        className
      )}
      style={{ width, height }}
      {...props}
    />
  )
}

function SkeletonCard() {
  return (
    <div className="space-y-4 p-6 rounded-2xl border border-white/10 bg-black/40">
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rectangular" height={80} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width={80} height={32} />
        <Skeleton variant="rectangular" width={80} height={32} />
      </div>
    </div>
  )
}

function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="space-y-2 flex-1">
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="40%" />
          </div>
          <Skeleton variant="rectangular" width={60} height={24} />
        </div>
      ))}
    </div>
  )
}

export { Skeleton, SkeletonCard, SkeletonList }
