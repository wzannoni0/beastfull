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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/8 blur-[60px]" />
      </div>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-[#0c0c0c]/90 backdrop-blur-xl hidden lg:flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-white/5">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Beastfull</p>
                <p className="text-[10px] text-neutral-500">Growth Platform</p>
              </div>
            </Link>
          </div>

          {/* User Card */}
          {me && (
            <div className="p-4 mx-4 mt-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{me.username.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">@{me.username}</p>
                  <p className="text-xs text-neutral-500">Level {me.level}</p>
                </div>
              </div>
              <div className="mt-3 p-2 rounded-lg bg-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Balance</span>
                  <span className="font-semibold text-white">{me.balance.toFixed(2)} NXF</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {nav.map(({ label, href, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-white" : "text-neutral-500"}`} />
                  {label}
                </Link>
              );
            })}

            {isAdmin && (
              <>
                <div className="my-4 h-px bg-white/10" />
                {adminNav.map(({ label, href, icon: Icon }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        active
                          ? "bg-white/10 text-white"
                          : "text-neutral-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? "text-white" : "text-neutral-500"}`} />
                      {label}
                    </Link>
                  );
                })}
              </>
            )}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/5">
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 w-full transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </form>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          {/* Top Bar */}
          <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0c0c0c]/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 lg:px-8">
              <div>
                <h1 className="text-xl font-semibold text-white">{title}</h1>
                {subtitle && <p className="text-sm text-neutral-500 mt-0.5">{subtitle}</p>}
              </div>

              {/* Balance Display */}
              {me && (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-xs text-neutral-500">Balance</span>
                    <span className="text-sm font-semibold text-white">{me.balance.toFixed(2)} NXF</span>
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Page Content */}
          <div className="p-4 lg:p-8">{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-white/10 bg-[#0c0c0c]/95 backdrop-blur-xl">
        <div className="flex items-center justify-around py-2">
          {nav.slice(0, 5).map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  active ? "text-white" : "text-neutral-500"
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