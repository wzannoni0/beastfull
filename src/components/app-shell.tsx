"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Activity,
  ArrowDownToLine,
  ArrowUpFromLine,
  UserCircle,
  ShieldCheck,
  Bell,
  Flame,
  Trophy,
  Zap,
  ChevronRight,
} from "lucide-react";
import { demoUser, levelState } from "@/lib/mock";
import { PremiumCanAI } from "@/components/premium-can-ai";

const nav = [
  { label: "Dashboard",  href: "/dashboard",   icon: LayoutDashboard },
  { label: "Calendario", href: "/calendar",     icon: CalendarDays },
  { label: "Team",       href: "/team",         icon: Users },
  { label: "Attività",   href: "/activity",     icon: Activity },
  { label: "Deposito",   href: "/deposit",      icon: ArrowDownToLine },
  { label: "Prelievo",   href: "/withdrawal",   icon: ArrowUpFromLine },
  { label: "Profilo",    href: "/profile",      icon: UserCircle },
  { label: "Admin",      href: "/admin",        icon: ShieldCheck },
] as const;

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="premium-page mx-auto flex w-full max-w-[1540px] gap-5 px-4 py-5 sm:px-5 lg:px-7">

      {/* ══════════════════════════════════════
          SIDEBAR
      ══════════════════════════════════════ */}
      <aside className="glass-card hidden w-72 shrink-0 rounded-[1.8rem] p-4 lg:flex flex-col gap-4 sticky top-5 h-fit max-h-[calc(100vh-2.5rem)] overflow-y-auto">

        {/* Brand */}
        <div className="rounded-2xl border border-white/10 bg-black/22 p-4 space-y-0.5">
          <p className="text-[9px] uppercase tracking-[0.32em] text-blue-300">LUNA CORE Command</p>
          <p className="text-xl font-black tracking-tight gradient-text">LUNA OS</p>
          <p className="text-[10px] text-slate-400 leading-relaxed">Realtime growth • team control • moon pulse</p>
        </div>

        {/* Mini can */}
        <div className="flex justify-center pt-1">
          <PremiumCanAI label="" power={demoUser.canPower} size="sm" />
        </div>

        {/* Nav */}
        <nav className="space-y-0.5">
          {nav.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`nav-item group ${active ? "active" : ""}`}
              >
                <Icon className={`h-4 w-4 shrink-0 transition-colors ${active ? "text-blue-300" : "text-slate-500 group-hover:text-slate-200"}`} />
                <span className="flex-1">{label}</span>
                {active && <ChevronRight className="h-3.5 w-3.5 text-blue-400" />}
              </Link>
            );
          })}
        </nav>

        {/* Level badge */}
        <div className="rounded-2xl border border-blue-300/18 bg-gradient-to-br from-blue-600/12 to-fuchsia-600/8 p-4 space-y-2 mt-auto">
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.24em] text-blue-200">Current badge</p>
            <span className="badge badge-blue">Lv.{levelState.current.id}</span>
          </div>
          <p className="text-base font-bold text-white">{levelState.current.name}</p>
          <div className="power-bar-track">
            <div className="power-bar-fill" style={{ width: `${levelState.progress}%` }} />
          </div>
          <p className="text-[10px] text-slate-400">{demoUser.balance.toFixed(2)} NXF balance</p>
        </div>
      </aside>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="flex min-w-0 flex-1 flex-col gap-4">

        {/* Top header bar */}
        <header className="glass-card rounded-[1.6rem] px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-blue-300">Control Hub</p>
              <h1 className="mt-0.5 text-3xl font-black tracking-tight leading-none">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
            </div>

            <div className="flex items-center gap-2">
              {/* Level chip */}
              <div className="hidden sm:flex flex-col items-center rounded-xl border border-white/12 bg-black/22 px-3 py-2 min-w-[56px]">
                <Zap className="h-3.5 w-3.5 text-yellow-400 mb-0.5" />
                <span className="text-[10px] font-bold text-white">Lv {levelState.current.id}</span>
              </div>
              {/* NXF chip */}
              <div className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 px-3 py-2 font-bold text-sm shadow-[0_0_22px_rgba(90,90,255,0.35)]">
                {demoUser.balance.toFixed(2)} <span className="text-white/70 text-xs">NXF</span>
              </div>
              {/* Notifications */}
              <button className="relative rounded-xl border border-white/14 bg-black/22 p-2.5 hover:bg-white/5 transition-colors">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-fuchsia-400 ring-2 ring-[#03050f]" />
              </button>
            </div>
          </div>

          {/* Sub row: user info */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="badge badge-blue">@{demoUser.username}</span>
            <span className="badge badge-violet">
              <Flame className="h-3 w-3 text-orange-300" />
              {demoUser.streak} streak
            </span>
            <span className="badge badge-pink">
              <Trophy className="h-3 w-3 text-fuchsia-200" />
              {levelState.current.name}
            </span>
          </div>

          {/* Mobile nav */}
          <div className="mt-3 flex flex-wrap gap-1.5 lg:hidden">
            {nav.slice(0, 5).map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-slate-300 hover:bg-white/5 transition-colors ${pathname === href ? "!bg-blue-600/20 !border-blue-500/30 !text-white" : ""}`}
              >
                <Icon className="h-3 w-3" />
                {label}
              </Link>
            ))}
          </div>
        </header>

        {/* Page content */}
        {children}
      </div>
    </div>
  );
}
