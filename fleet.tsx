import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CarSpecs } from "@/components/site/CarCard";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { SITE, FLEET, RATE_LABEL } from "@/lib/site";

const TITLE = "Our Fleet — Economy, Saloon, SUV, Executive & Vans | Jadoon Movers";
const DESCRIPTION =
  "Browse the Jadoon Movers hire fleet: economy cars, saloons, SUVs, executive cars and vans. See seats, luggage and transmission, then call or email for today's rate.";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <PageHero eyebrow="Our fleet" title="Choose your car.">
        Five classes of car to suit every trip. Rates change with dates and demand, so call or email and we&apos;ll give
        you today&apos;s price.
      </PageHero>

      <section className="py-20">
        <div className="container-site space-y-8">
          {FLEET.map((car, i) => (
            <article
              key={car.slug}
              id={car.slug}
              className="panel grid scroll-mt-36 overflow-hidden md:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                <img
                  src={car.image}
                  alt={car.imageAlt}
                  width={1200}
                  height={800}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="eyebrow text-muted-foreground">{car.example}</p>
                <h2 className="mt-3 text-4xl md:text-5xl">{car.name}</h2>
                <p className="mt-4 text-muted-foreground">{car.summary}</p>
                <div className="mt-6">
                  <CarSpecs car={car} />
                </div>
                <div className="silver-rule my-8 opacity-40" aria-hidden />
                <p className="text-silver font-display text-2xl font-semibold">{RATE_LABEL}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="silver" size="lg">
                    <a href={SITE.phoneTel}>
                      <Phone /> Call for a rate
                    </a>
                  </Button>
                  <Button asChild variant="outlineSilver" size="lg">
                    <a
                      href={`${SITE.emailHref}?subject=${encodeURIComponent(`Rate enquiry – ${car.name}`)}`}
                    >
                      <Mail /> Email about this car
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure which car?" body="Tell us where you're going and how many are travelling — we'll suggest the right fit." />
    </>
  );
}
