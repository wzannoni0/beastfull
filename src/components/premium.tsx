import clsx from "clsx";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={clsx("glass-card rounded-2xl p-5", className)}>{children}</section>;
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle ? <p className="text-sm text-slate-300">{subtitle}</p> : null}
    </div>
  );
}
