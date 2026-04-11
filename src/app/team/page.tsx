"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { Copy } from "lucide-react";

type TeamMember = {
  id: string;
  username: string;
  level: number;
  balance: number;
  joinedAt: string;
};

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => {
        setReferralCode(data.referralCode || data.username?.toUpperCase() || "");
      })
      .catch(() => {});

    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data.members || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const referralLink = `https://beastfull.vercel.app/register?ref=${referralCode}`;

  return (
    <AppShell title="Team" subtitle="Manage your network">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Your Team" subtitle={`${teamMembers.length} members`} />
          {loading ? (
            <p className="mt-4 text-center text-neutral-500">Loading...</p>
          ) : teamMembers.length > 0 ? (
            <div className="mt-4 space-y-3">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">{member.username.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">@{member.username}</p>
                      <p className="text-xs text-neutral-500">Level {member.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">{member.balance.toFixed(2)} NXF</p>
                    <p className="text-xs text-neutral-500">{member.joinedAt}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-center text-neutral-500 py-8">No team members yet. Share your referral link to invite others!</p>
          )}
        </Card>

        <Card>
          <SectionTitle title="Share Referral Link" subtitle="Invite new members" />
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs text-neutral-500 mb-2">Your Referral Code</p>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-lg font-mono text-white">{referralCode}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-2">Share Link</p>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs font-mono text-neutral-400 break-all">{referralLink}</p>
              </div>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(referralLink)}
              className="btn-premium btn-secondary w-full"
            >
              <Copy className="w-4 h-4" />
              Copy Link
            </button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}