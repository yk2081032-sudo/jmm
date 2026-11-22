import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/hero-black-saloon.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { REASONS } from "@/lib/site";

const TITLE = "About Jadoon Movers | Professional Car Hire";
const DESCRIPTION =
  "Jadoon Movers is a car hire company built on clean cars, clear terms and personal service. Learn how we look after every customer.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Strength. Reliability. Service.">
        The lion in our logo stands for what we promise every customer: a car you can rely on and a team that stands
        behind it.
      </PageHero>

      <section className="py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <img
            src={aboutImg}
            alt="Black Jadoon Movers hire saloon at dusk"
            width={1536}
            height={1024}
            loading="lazy"
            className="panel aspect-[4/3] w-full object-cover"
          />
          <div>
            <p className="eyebrow text-silver">Who we are</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A car hire company that keeps things simple.</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Jadoon Movers rents out clean, comfortable cars for every kind of trip — a day in town, a week away, a
                business meeting or moving day.
              </p>
              <p>
                We explain the price and the rental terms before you book, hand over a car that&apos;s been cleaned and
                checked, and stay on the end of the phone while you have it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-24">
        <div className="container-site">
          <p className="eyebrow text-silver">What you can expect</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => (
              <div key={r.title} className="panel p-7">
                <r.icon className="size-6 text-silver" />
                <h3 className="mt-5 text-2xl">{r.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
