"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
import { PremiumCanAI } from "@/components/premium-can-ai";

type MeData = {
  username: string;
  role: "USER" | "ADMIN";
  level: number;
  streak: number;
  badge: string;
  balance: number;
};

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
  const [me, setMe] = useState<MeData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (mounted && data) setMe(data);
      })
      .catch(() => undefined);
    return () => {
      mounted = false;
    };
  }, []);

  const currentLevel = me?.level ?? 1;
  const currentBalance = me?.balance ?? 0;
  const currentUsername = me?.username ?? "user";
  const currentStreak = me?.streak ?? 0;
  const currentBadge = me?.badge ?? "Spark";
  const currentProgress = Math.min(100, Math.max(5, currentBalance / 100 + 20));

  return (
    <div className="premium-page mx-auto flex w-full max-w-[1540px] gap-5 px-4 py-5 sm:px-5 lg:px-7">
      <div className="scanlines" />
      {/* ══════════════════════════════════════
          SIDEBAR
      ══════════════════════════════════════ */}
      <aside className="glass-card hud-corner hidden w-72 shrink-0 p-4 lg:flex flex-col gap-4 sticky top-5 h-fit max-h-[calc(100vh-2.5rem)] overflow-y-auto border-cyan-500/20">

        {/* Brand */}
        <div className="hud-corner border border-cyan-500/30 bg-black/40 p-4 space-y-0.5">
          <p className="text-[9px] uppercase tracking-[0.4em] text-cyan-400 font-black">LUNA_NET Command</p>
          <p className="text-xl font-black tracking-tight gradient-text glitch-hover uppercase">LUNA_OS_v.8</p>
          <p className="text-[10px] text-slate-400 leading-relaxed font-mono uppercase tracking-tighter">Realtime growth • node control • live data</p>
        </div>

        {/* Mini can */}
        <div className="flex justify-center pt-1">
          <PremiumCanAI label="" power={Math.min(100, Math.max(10, currentBalance / 100 + 20))} size="sm" />
        </div>

        {/* Nav */}
        <nav className="space-y-0.5">
          {nav.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`nav-item group hud-corner ${active ? "active" : ""} font-mono uppercase tracking-widest text-[11px]`}
              >
                <Icon className={`h-4 w-4 shrink-0 transition-colors ${active ? "text-cyan-300" : "text-slate-500 group-hover:text-cyan-200"}`} />
                <span className="flex-1">{label}</span>
                {active && <ChevronRight className="h-3.5 w-3.5 text-cyan-400" />}
              </Link>
            );
          })}
        </nav>

        {/* Level badge */}
        <div className="hud-corner border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-4 space-y-2 mt-auto">
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.24em] text-cyan-200 font-black">CURRENT_NODE_ID</p>
            <span className="badge badge-blue font-mono">Lv.{currentLevel}</span>
          </div>
          <p className="text-base font-black text-white uppercase tracking-wider">{currentBadge}</p>
          <div className="power-bar-track bg-black/40">
            <div className="power-bar-fill shadow-[0_0_15px_rgba(0,243,255,0.5)]" style={{ width: `${currentProgress}%` }} />
          </div>
          <p className="text-[10px] text-slate-400 font-mono">{currentBalance.toFixed(2)} NXF_STORAGE</p>
        </div>
      </aside>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="flex min-w-0 flex-1 flex-col gap-4">

        {/* Top header bar */}
        <header className="glass-card hud-corner px-5 py-4 border-cyan-500/20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[9px] uppercase tracking-[0.32em] text-cyan-300 font-black">NEURAL_INTERFACE_LINK</p>
              <h1 className="mt-0.5 text-3xl font-black tracking-tight leading-none uppercase glitch-hover">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-slate-400 font-mono uppercase tracking-tighter">{subtitle}</p>}
            </div>

            <div className="flex items-center gap-2">
              {/* Level chip */}
              <div className="hidden sm:flex flex-col items-center hud-corner border border-cyan-500/30 bg-black/40 px-3 py-2 min-w-[56px]">
                <Zap className="h-3.5 w-3.5 text-cyan-400 mb-0.5 animate-pulse" />
                <span className="text-[10px] font-black text-white font-mono">NODE_0{currentLevel}</span>
              </div>
              {/* NXF chip */}
              <div className="hud-corner bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 px-4 py-2 font-black text-sm shadow-[0_0_25px_rgba(0,243,255,0.3)] uppercase tracking-widest">
                {currentBalance.toFixed(2)} <span className="text-white/70 text-xs">NXF</span>
              </div>
              {/* Notifications */}
              <div className="relative hud-corner border border-cyan-500/30 bg-black/40 p-2.5 cursor-pointer hover:bg-cyan-500/10 transition-colors">
                <Bell className="h-4 w-4 text-cyan-400" />
                <span className="absolute -right-0 -top-0 h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(255,0,85,0.8)]" />
              </div>
            </div>
          </div>

          {/* Sub row: user info */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="badge badge-blue font-mono uppercase">ID: {currentUsername}</span>
            <span className="badge badge-violet font-mono uppercase">
              <Flame className="h-3 w-3 text-cyan-300" />
              {currentStreak} SYNC_STREAK
            </span>
            <span className="badge badge-pink font-mono uppercase">
              <Trophy className="h-3 w-3 text-pink-200" />
              {currentBadge}_RANK
            </span>
          </div>

          {/* Mobile nav */}
          <div className="mt-3 flex flex-wrap gap-1.5 lg:hidden">
            {nav.slice(0, 5).map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 hud-corner border border-cyan-500/20 bg-black/40 px-3 py-2 text-[10px] text-slate-400 font-black uppercase tracking-widest hover:bg-cyan-500/10 transition-colors ${pathname === href ? "!border-cyan-500 !text-cyan-400 bg-cyan-500/10" : ""}`}
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
