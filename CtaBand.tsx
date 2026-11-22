import { SITE } from "@/lib/site";
import { ContactButtons } from "./ContactButtons";

export function CtaBand({
  title = "Ready when you are.",
  body = "Call or email with your dates and the car you're after. We'll confirm availability and give you today's rate.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="silver-rule absolute inset-x-0 top-0 opacity-60" aria-hidden />
      <div className="container-site flex flex-col items-start justify-between gap-10 py-20 md:flex-row md:items-center md:py-24">
        <div className="max-w-xl">
          <p className="eyebrow text-silver">Book your car</p>
          <h2 className="mt-4 text-4xl md:text-6xl">{title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{body}</p>
          <a href={SITE.emailHref} className="mt-4 inline-block text-sm text-silver underline underline-offset-4">
            {SITE.email}
          </a>
        </div>
        <ContactButtons />
      </div>
    </section>
  );
}
