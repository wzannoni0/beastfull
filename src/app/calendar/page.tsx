"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [claimedDays, setClaimedDays] = useState<number[]>([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [streak, setStreak] = useState(12);
  const today = new Date().getDate();
  const canClaim = !claimedDays.includes(today);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleClaim = () => {
    if (canClaim) {
      setClaimedDays([...claimedDays, today]);
      setStreak(streak + 1);
    }
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getStreakBonus = () => {
    if (streak >= 30) return "100%";
    if (streak >= 15) return "50%";
    if (streak >= 7) return "25%";
    return "0%";
  };

  const getNextBonus = () => {
    if (streak < 7) return { days: 7 - streak, bonus: "25%" };
    if (streak < 15) return { days: 15 - streak, bonus: "50%" };
    if (streak < 30) return { days: 30 - streak, bonus: "100%" };
    return null;
  };

  const nextBonus = getNextBonus();

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <nav className="nav-top">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#00d4ff]">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
              <span className="text-white font-black text-sm">FU</span>
            </div>
          </div>
          <div className="w-10" />
        </div>
      </nav>

      <div className="scroll-area">
        {/* Streak Header */}
        <Card className="glow-border mb-4 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30 flex items-center justify-center">
                <span className="text-3xl">🔥</span>
              </div>
              <div>
                <p className="text-white text-3xl font-black">{streak}</p>
                <p className="text-[#00d4ff]/70 text-sm">Day Streak</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">+{getStreakBonus()}</p>
              <p className="text-[#00d4ff]/70 text-xs">Streak Bonus</p>
            </div>
          </div>
        </Card>

        {/* Next Bonus */}
        {nextBonus && (
          <Card className="glow-violet mb-4 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center">
                <span className="text-lg">🎁</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Next Bonus in {nextBonus.days} days</p>
                <p className="text-[#8b5cf6] text-xs">+{nextBonus.bonus} extra reward</p>
              </div>
            </div>
          </Card>
        )}

        {/* Calendar */}
        <Card className="glow-border mb-4 p-5">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={prevMonth}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" fill="none" stroke="#00d4ff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="text-center">
              <p className="text-white font-bold text-lg">{monthNames[currentDate.getMonth()]}</p>
              <p className="text-[#00d4ff]/70 text-sm">{currentDate.getFullYear()}</p>
            </div>
            <button 
              onClick={nextMonth}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" fill="none" stroke="#00d4ff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-[#00d4ff]/50 text-xs font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-grid">
            {[...Array(firstDay)].map((_, i) => (
              <div key={`empty-${i}`} className="calendar-day empty" />
            ))}
            
            {days.map((day) => {
              const isClaimed = claimedDays.includes(day);
              const isToday = day === today;
              const isFuture = day > today;
              const isClaimable = isToday && canClaim;

              let className = "calendar-day";
              if (isClaimed) className += " claimed";
              if (isToday) className += " today";
              if (isFuture) className += " future";
              if (isClaimable) className += " claimable";

              return (
                <div key={day} className={className}>
                  {day}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Claim Button */}
        <Card className={`mb-4 p-5 ${canClaim ? 'glow-border cursor-pointer' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                canClaim 
                  ? 'bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] animate-pulse' 
                  : 'bg-[#00d4ff]/10 border border-[#00d4ff]/30'
              }`}>
                {canClaim ? (
                  <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ) : (
                  <span className="text-2xl">✅</span>
                )}
              </div>
              <div>
                <p className="text-white font-bold text-lg">
                  {canClaim ? "Claim Available!" : "Already Claimed"}
                </p>
                <p className="text-[#00d4ff]/70 text-sm">
                  {canClaim ? "Tap to claim your daily reward" : "Come back tomorrow"}
                </p>
              </div>
            </div>
            {canClaim ? (
              <Button 
                onClick={handleClaim}
                className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] h-12 px-6"
              >
                CLAIM
              </Button>
            ) : (
              <div className={`level-badge level-${Math.min(8, Math.floor(streak / 4) + 1)}`}>
                +{streak >= 30 ? 100 : streak >= 15 ? 50 : streak >= 7 ? 25 : 0}%
              </div>
            )}
          </div>
        </Card>

        {/* Rewards Info */}
        <Card className="mb-4 p-5">
          <h3 className="text-white font-bold mb-4">Daily Rewards</h3>
          <div className="space-y-3">
            {[
              { day: "Base Reward", amount: "2.00 BUBZ", icon: "⚡" },
              { day: "7-Day Streak", amount: "+25% Bonus", icon: "🔥" },
              { day: "15-Day Streak", amount: "+50% Bonus", icon: "⭐" },
              { day: "30-Day Streak", amount: "+100% Bonus", icon: "👑" },
            ].map((reward) => (
              <div key={reward.day} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{reward.icon}</span>
                  <span className="text-white/80 text-sm">{reward.day}</span>
                </div>
                <span className="text-[#00d4ff] font-bold text-sm">{reward.amount}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Motivational */}
        <Card className="glow-violet mb-4 p-5">
          <div className="text-center">
            <p className="text-2xl mb-2">💪</p>
            <p className="text-white font-medium text-sm mb-1">
              Keep the streak alive!
            </p>
            <p className="text-[#00d4ff]/70 text-xs">
              {streak > 0 ? `${streak} days of consistent claiming!` : "Start your streak today!"}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
