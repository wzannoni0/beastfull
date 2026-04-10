import { AppShell } from "@/components/app-shell";
import { Card, SectionTitle } from "@/components/premium";

export default function DepositPage() {
  return (
    <AppShell title="Deposito" subtitle="Struttura grafica pronta da collegare">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Nuova richiesta deposito" subtitle="UI database-ready" />
          <div className="space-y-3">
            <input className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" placeholder="Importo NXF" />
            <select className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3">
              <option>Metodo deposito</option>
              <option>Crypto Wallet</option>
              <option>Bank Transfer</option>
            </select>
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold">Invia richiesta</button>
          </div>
        </Card>
        <Card>
          <SectionTitle title="Riepilogo" />
          <p className="text-sm text-slate-300">Stato sistema: pronto</p>
          <p className="text-sm text-slate-300">Validazioni UI: attive</p>
        </Card>
      </div>
    </AppShell>
  );
}
