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
  LogOut,
  Zap,
} from "lucide-react";

type MeData = {
  username: string;
  role: "USER" | "ADMIN";
  level: number;
  streak: number;
  badge: string;
  balance: number;
};

const nav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Calendario", href: "/calendar", icon: CalendarDays },
  { label: "Team", href: "/team", icon: Users },
  { label: "Attività", href: "/activity", icon: Activity },
  { label: "Deposito", href: "/deposit", icon: ArrowDownToLine },
  { label: "Prelievo", href: "/withdrawal", icon: ArrowUpFromLine },
  { label: "Profilo", href: "/profile", icon: UserCircle },
] as const;

const adminNav = [
  { label: "Admin", href: "/admin", icon: ShieldCheck },
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

  const isAdmin = me?.role === "ADMIN";

  return (
    <div className="min-h-screen bg-black/95">
      <div className="flex">
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-purple-500/20 bg-black/95 hidden lg:flex flex-col">
          <div className="p-6 border-b border-purple-500/10">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">FizzUp</p>
                <p className="text-[10px] text-[#00d4ff] uppercase tracking-widest">BUBZ System</p>
              </div>
            </Link>
          </div>

          {me && (
            <div className="p-4 mx-4 mt-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-400">{me.username.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">@{me.username}</p>
                  <p className="text-xs text-purple-400">Level {me.level} • {me.badge}</p>
                </div>
              </div>
              <div className="mt-3 p-2 rounded-lg bg-black/30 border border-purple-500/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-300/60">Balance</span>
                  <span className="font-bold text-purple-400">{me.balance.toFixed(2)} NXF</span>
                </div>
              </div>
            </div>
          )}

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {nav.map(({ label, href, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                      : "text-purple-300/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-purple-400" : "text-purple-300/40"}`} />
                  {label}
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400" />
                  )}
                </Link>
              );
            })}

            {isAdmin && (
              <>
                <div className="my-4 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                {adminNav.map(({ label, href, icon: Icon }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        active
                          ? "bg-pink-500/10 text-pink-400 border border-pink-500/30"
                          : "text-pink-300/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? "text-pink-400" : "text-pink-300/40"}`} />
                      {label}
                    </Link>
                  );
                })}
              </>
            )}
          </nav>

          <div className="p-4 border-t border-purple-500/10">
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-purple-300/60 hover:text-red-400 hover:bg-red-500/5 w-full transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </form>
          </div>
        </aside>

        <main className="flex-1 lg:ml-64">
          <header className="sticky top-0 z-40 border-b border-purple-500/20 bg-black/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 lg:px-8">
              <div>
                <h1 className="text-xl font-bold uppercase tracking-wider text-white">{title}</h1>
                {subtitle && <p className="text-sm text-purple-400 mt-0.5 font-mono">{"> "}{subtitle}</p>}
              </div>

              {me && (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <span className="text-xs text-purple-300/60 uppercase tracking-widest">Balance</span>
                    <span className="text-sm font-bold text-purple-400">{me.balance.toFixed(2)} NXF</span>
                  </div>
                </div>
              )}
            </div>
          </header>

          <div className="p-4 lg:p-8">{children}</div>
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-purple-500/20 bg-black/95 backdrop-blur-xl">
        <div className="flex items-center justify-around py-2">
          {nav.slice(0, 5).map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  active ? "text-purple-400" : "text-purple-300/40"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
