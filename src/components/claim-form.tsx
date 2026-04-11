"use client";

import { FormEvent, useState } from "react";
import { useToast } from "@/components/toast-provider";

type ClaimFormProps = {
  rewardPerDay: number;
};

export function ClaimForm({ rewardPerDay }: ClaimFormProps) {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/claim", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        addToast({ type: "error", title: "Claim failed", message: data.error });
        setLoading(false);
        return;
      }

      addToast({
        type: "success",
        title: "Claim successful!",
        message: `+${rewardPerDay} NXF added to your balance`,
      });
      window.location.href = "/dashboard";
    } catch {
      addToast({ type: "error", title: "Error", message: "Something went wrong" });
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        disabled={loading}
        className="btn-premium btn-primary w-full"
      >
        {loading ? "Processing..." : `Claim ${rewardPerDay} NXF`}
      </button>
    </form>
  );
}