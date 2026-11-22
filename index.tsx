import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import heroImg from "@/assets/hero-black-saloon.jpg";
import { ContactButtons } from "@/components/site/ContactButtons";
import { CtaBand } from "@/components/site/CtaBand";
import { CarCard } from "@/components/site/CarCard";
import { Button } from "@/components/ui/button";
import { SITE, FLEET, REASONS, STEPS } from "@/lib/site";

const TITLE = "Jadoon Movers | Premium Car Hire — Economy to Executive";
const DESCRIPTION =
  "Hire a clean, comfortable car from Jadoon Movers — economy, saloon, SUV, executive and vans. Clear terms, flexible hire. Call or email to book.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRental",
          name: SITE.name,
          telephone: SITE.phoneTel.replace("tel:", ""),
          email: SITE.email,
        }),
      },
    ],
  }),
  component: Index,
});

const FEATURED = ["economy", "suv", "executive"];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroImg}
          alt="Gloss-black luxury saloon parked on wet tarmac at dusk"
          width={1536}
          height={1024}
          className="absolute inset-0 -z-20 size-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 [background:var(--gradient-fade)]" aria-hidden />
        <div className="absolute inset-0 -z-10 [background:var(--gradient-fade-up)]" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-background/55 md:hidden" aria-hidden />
        <div className="container-site flex min-h-[78vh] flex-col justify-center py-20 md:min-h-[86vh]">
          <p className="eyebrow animate-rise text-silver">{SITE.tagline} · {SITE.area}</p>
          <h1 className="animate-rise mt-6 max-w-2xl text-6xl sm:text-7xl lg:text-8xl [animation-delay:80ms]">
            Drive with <span className="text-silver italic">confidence.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-lg text-lg text-muted-foreground md:text-xl [animation-delay:160ms]">
            Clean, comfortable hire cars — from city runabouts to executive saloons — with clear terms and a team you
            can talk to.
          </p>
          <div className="animate-rise mt-10 [animation-delay:240ms]">
            <ContactButtons />
          </div>
          <div className="animate-rise mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6 [animation-delay:320ms]">
            <a href={SITE.phoneTel} className="flex items-center gap-2 hover:text-foreground">
              <Phone className="size-4 text-silver" /> {SITE.phoneDisplay}
            </a>
            <a href={SITE.emailHref} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="size-4 text-silver" /> {SITE.email}
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow text-silver">Why Jadoon Movers</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Car hire, done properly.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => (
              <div key={r.title} className="bg-background p-8">
                <span className="grid size-12 place-items-center rounded-full border border-silver/40">
                  <r.icon className="size-5 text-silver" />
                </span>
                <h3 className="mt-6 text-2xl">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured cars */}
      <section className="border-y border-border bg-secondary py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-silver">Featured cars</p>
              <h2 className="mt-4 text-4xl md:text-6xl">The right car for the journey.</h2>
            </div>
            <Button asChild variant="outlineSilver" size="lg">
              <Link to="/fleet">
                View the full fleet <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {FLEET.filter((c) => FEATURED.includes(c.slug)).map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* How renting works */}
      <section className="py-24">
        <div className="container-site">
          <p className="eyebrow text-silver">How renting works</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">Three simple steps.</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t border-silver/40 pt-8">
                <span className="text-silver font-display text-6xl font-semibold">0{i + 1}</span>
                <h3 className="mt-4 text-3xl">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
