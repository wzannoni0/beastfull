"use client";

import { FormEvent, useState } from "react";
import { useToast } from "@/components/toast-provider";
import { playClaimTone, playErrorTone } from "@/lib/sounds";

type ClaimFormProps = {
  rewardPerDay: number;
};

export function ClaimForm({ rewardPerDay }: ClaimFormProps) {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    playClaimTone();

    try {
      const res = await fetch("/api/claim", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        playErrorTone();
        addToast({ type: "error", title: "Claim fallito", message: data.error });
        setLoading(false);
        return;
      }

      addToast({
        type: "success",
        title: "Claim completato!",
        message: `+${rewardPerDay.toFixed(2)} NXF aggiunti al balance`,
      });
      window.location.href = "/dashboard";
    } catch {
      playErrorTone();
      addToast({ type: "error", title: "Errore", message: "Qualcosa è andato storto" });
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full glitch-hover uppercase font-black tracking-widest text-xs sm:text-sm"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            PROCESSING...
          </span>
        ) : (
          "CLAIM_DAILY_NXF ⚡"
        )}
      </button>
    </form>
  );
}
