import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE, FLEET, enquiryMailto } from "@/lib/site";

const TITLE = "Contact Jadoon Movers | Call or Email to Book a Hire Car";
const DESCRIPTION =
  "Book a hire car with Jadoon Movers. Call or email us with your dates and the car you need, and we'll confirm availability and today's rate.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const fieldClass = "h-12 border-border bg-background text-base";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    window.location.href = enquiryMailto({
      name: get("name"),
      phone: get("phone"),
      carType: get("carType"),
      dates: get("dates"),
      message: get("message"),
    });
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Book your car.">
        Call or email with your dates and the type of car you need. We&apos;ll confirm availability and give you
        today&apos;s rate.
      </PageHero>

      <section className="py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-5">
            <a href={SITE.phoneTel} className="panel group flex items-center gap-5 p-7 transition-colors hover:border-silver/60">
              <span className="bg-silver-gradient grid size-14 shrink-0 place-items-center rounded-full text-primary-foreground">
                <Phone className="size-6" />
              </span>
              <span>
                <span className="eyebrow block text-muted-foreground">Call us</span>
                <span className="mt-1 block font-display text-3xl font-semibold md:text-4xl">{SITE.phoneDisplay}</span>
                <span className="mt-1 block text-sm text-silver">Tap to call</span>
              </span>
            </a>
            <a href={SITE.emailHref} className="panel group flex items-center gap-5 p-7 transition-colors hover:border-silver/60">
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-silver/60 text-silver">
                <Mail className="size-6" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-muted-foreground">Email us</span>
                <span className="mt-1 block break-all font-display text-2xl font-semibold md:text-3xl">{SITE.email}</span>
                <span className="mt-1 block text-sm text-silver">Tap to email</span>
              </span>
            </a>
            <div className="panel flex items-center gap-5 p-7">
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-border text-silver">
                <MapPin className="size-6" />
              </span>
              <span>
                <span className="eyebrow block text-muted-foreground">Where we are</span>
                <span className="mt-1 block text-lg">Car hire in {SITE.area}</span>
              </span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="panel space-y-5 p-7 md:p-10" aria-label="Enquiry">
            <div>
              <h2 className="text-3xl md:text-4xl">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill this in and it will open your email app with everything ready to send to {SITE.email}.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" name="name" required autoComplete="name" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carType">Type of car</Label>
                <select
                  id="carType"
                  name="carType"
                  defaultValue=""
                  className="h-12 w-full rounded-md border border-border bg-background px-3 text-base"
                >
                  <option value="">Not sure yet</option>
                  {FLEET.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dates">Dates needed</Label>
                <Input id="dates" name="dates" placeholder="e.g. 12–15 March" required className={fieldClass} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Anything else?</Label>
              <Textarea id="message" name="message" rows={4} className="border-border bg-background text-base" />
            </div>
            <Button type="submit" variant="silver" size="xl" className="w-full sm:w-auto">
              <Send /> Open email to send
            </Button>
            {sent ? (
              <p className="text-sm text-muted-foreground" role="status">
                Your email app should now be open. If it didn&apos;t open, email us at{" "}
                <a href={SITE.emailHref} className="text-silver underline underline-offset-4">{SITE.email}</a> or call{" "}
                <a href={SITE.phoneTel} className="text-silver underline underline-offset-4">{SITE.phoneDisplay}</a>.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
