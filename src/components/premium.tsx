import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"section">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <section
      className={clsx(
        "glass-card glass-card-hover rounded-[1.6rem] p-5 sm:p-6",
        "relative overflow-hidden border border-white/9 corner-accent",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-[13px] text-slate-400">{subtitle}</p>
      )}
      <div className="mt-2 h-px w-10 bg-gradient-to-r from-blue-400/60 to-transparent" />
    </div>
  );
}

type BadgeVariant = "blue" | "violet" | "pink" | "gold" | "cyan" | "success";

export function PremiumBadge({ variant = "blue", children }: { variant?: BadgeVariant; children: React.ReactNode }) {
  const variants: Record<BadgeVariant, string> = {
    blue: "badge-blue",
    violet: "badge-violet",
    pink: "badge-pink",
    gold: "badge-gold",
    cyan: "badge-cyan",
    success: "border-emerald-400/40 text-emerald-200 bg-emerald-500/14",
  };
  return (
    <span className={clsx("badge", variants[variant])}>{children}</span>
  );
}
