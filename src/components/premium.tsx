import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"section">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <section
      className={clsx(
        "card-premium glass-card glass-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
}

export function PremiumBadge({ variant = "default", children }: { variant?: "default" | "success" | "warning" | "error"; children: React.ReactNode }) {
  const variants = {
    default: "bg-white/10 text-white/80 border-white/10",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    error: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", variants[variant])}>
      {children}
    </span>
  );
}

export function Button({ variant = "primary", className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/10",
  };
  return (
    <button className={clsx("btn-premium", variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={clsx("input-premium", className)} {...props} />
  );
}

export function Label({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={clsx("text-sm font-medium text-neutral-300", className)} {...props}>
      {children}
    </label>
  );
}

export function StatCard({ label, value, icon, trend }: { label: string; value: string; icon?: React.ReactNode; trend?: { value: string; positive: boolean } }) {
  return (
    <div className="card-premium">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-400">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
          {trend && (
            <p className={clsx("mt-1 text-xs", trend.positive ? "text-green-400" : "text-red-400")}>
              {trend.positive ? "+" : ""}{trend.value}
            </p>
          )}
        </div>
        {icon && <div className="text-neutral-500">{icon}</div>}
      </div>
    </div>
  );
}

export function Avatar({ src, fallback, className }: { src?: string | null; fallback?: string; className?: string }) {
  return (
    <div className={clsx("relative w-10 h-10 rounded-full overflow-hidden bg-white/10 border border-white/10", className)}>
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sm font-medium text-white">
          {fallback || "?"}
        </div>
      )}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={clsx("animate-pulse bg-white/10 rounded", className)} />
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={clsx("h-px bg-white/10", className)} />;
}

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-white/80", className)}>
      {children}
    </span>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}