import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_80%_at_85%_0%,oklch(1_0_0/8%),transparent_70%)]"
        aria-hidden
      />
      <div className="container-site relative py-20 md:py-28">
        <p className="eyebrow animate-rise text-silver">{eyebrow}</p>
        <h1 className="animate-rise mt-5 max-w-3xl text-5xl md:text-7xl [animation-delay:80ms]">{title}</h1>
        {children ? (
          <div className="animate-rise mt-6 max-w-2xl text-lg text-muted-foreground [animation-delay:160ms]">{children}</div>
        ) : null}
      </div>
      <div className="silver-rule absolute inset-x-0 bottom-0 opacity-50" aria-hidden />
    </section>
  );
}
