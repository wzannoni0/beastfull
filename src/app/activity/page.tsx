import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";
import { getServerSession } from "@/lib/server-session";
import { prisma } from "@/lib/prisma";
import { TrendingUp, ArrowDownLeft, ArrowUpRight, Gift } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ActivityPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  const transactions = await prisma.transaction.findMany({
    where: { userId: session.userId },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "CLAIM":
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case "DEPOSIT":
        return <ArrowDownLeft className="w-4 h-4 text-blue-400" />;
      case "WITHDRAWAL":
        return <ArrowUpRight className="w-4 h-4 text-orange-400" />;
      case "BONUS":
      case "ADMIN_ADJUSTMENT":
        return <Gift className="w-4 h-4 text-purple-400" />;
      default:
        return <TrendingUp className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <AppShell title="Activity" subtitle="Your transaction history">
      <Card>
        <SectionTitle title="Recent Transactions" subtitle={`${transactions.length} transactions`} />
        {transactions.length > 0 ? (
          <div className="mt-4 space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    {getIcon(tx.type)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{tx.description}</p>
                    <p className="text-xs text-neutral-500">{new Date(tx.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <p className={`text-sm font-semibold ${tx.type === "WITHDRAWAL" ? "text-red-400" : "text-green-400"}`}>
                  {tx.type === "WITHDRAWAL" ? "-" : "+"}{Number(tx.amount).toFixed(2)} NXF
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-center text-neutral-500 py-8">No transactions yet</p>
        )}
      </Card>
    </AppShell>
  );
}