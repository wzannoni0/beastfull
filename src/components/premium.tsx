import clsx from "clsx";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"section">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <section
      className={clsx(
        "card-cyberpunk",
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
      <h2 className="text-xl font-black uppercase tracking-wider text-white">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-cyan-400 font-mono">{"> "}{subtitle}</p>
      )}
    </div>
  );
}

export function PremiumBadge({ variant = "default", children }: { variant?: "default" | "success" | "warning" | "error"; children: React.ReactNode }) {
  const variants = {
    default: "bg-white/10 text-white/80 border-white/10",
    success: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    error: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <motion.span 
      className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border", variants[variant])}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
}

export function Button({ variant = "primary", className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  const variants = {
    primary: "btn-cyberpunk",
    secondary: "btn-cyberpunk-secondary",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/10",
  };
  return (
    <button 
      className={clsx(variants[variant], className)} 
      {...props}
    >
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
    <label className={clsx("text-sm font-medium text-neutral-300 uppercase tracking-wider", className)} {...props}>
      {children}
    </label>
  );
}

export function StatCard({ label, value, icon, trend }: { label: string; value: string; icon?: React.ReactNode; trend?: { value: string; positive: boolean } }) {
  return (
    <motion.div 
      className="card-cyberpunk"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-400 uppercase tracking-widest text-[10px]">{label}</p>
          <p className="mt-1 text-2xl font-black text-white">{value}</p>
          {trend && (
            <p className={clsx("mt-1 text-xs font-mono", trend.positive ? "text-cyan-400" : "text-red-400")}>
              {trend.positive ? "+" : ""}{trend.value}
            </p>
          )}
        </div>
        {icon && (
          <motion.div 
            className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            {icon}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function Avatar({ src, fallback, className }: { src?: string | null; fallback?: string; className?: string }) {
  return (
    <div className={clsx("relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30", className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sm font-bold text-cyan-400">
          {fallback || "?"}
        </div>
      )}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={clsx("animate-pulse bg-gradient-to-r from-cyan-500/10 via-white/5 to-cyan-500/10 rounded", className)} />
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={clsx("h-px bg-gradient-to-r from-cyan-500/50 via-white/10 to-transparent", className)} />;
}

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span 
      className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20", className)}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: React.ReactNode }) {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <h1 className="text-2xl font-black uppercase tracking-wider text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-cyan-400 font-mono">{"> "}{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </motion.div>
  );
}
