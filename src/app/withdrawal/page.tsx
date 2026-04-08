import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";

export default function WithdrawalPage() {
  return (
    <AppShell title="Prelievo" subtitle="Struttura premium pronta da completare">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Nuova richiesta prelievo" subtitle="Solo UI + struttura" />
          <div className="space-y-3">
            <div className="rounded-xl bg-black/20 px-4 py-3 text-sm text-slate-300">Saldo disponibile: 1280.00 BZT</div>
            <input className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" placeholder="Importo" />
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold">Invia richiesta</button>
          </div>
        </Card>
        <Card>
          <SectionTitle title="Info" />
          <p className="text-sm text-slate-300">Richieste elaborate in ordine cronologico.</p>
        </Card>
      </div>
    </AppShell>
  );
}
