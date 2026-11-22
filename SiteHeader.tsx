import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { ContactButtons } from "./ContactButtons";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Our fleet" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-border bg-secondary">
        <div className="container-site flex h-9 items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-silver" />
            Car hire in {SITE.area}
          </span>
          <div className="flex items-center gap-5">
            <a href={SITE.emailHref} className="hidden items-center gap-1.5 hover:text-foreground sm:flex">
              <Mail className="size-3.5 text-silver" />
              {SITE.email}
            </a>
            <a href={SITE.phoneTel} className="flex items-center gap-1.5 font-semibold text-foreground hover:text-silver">
              <Phone className="size-3.5 text-silver" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container-site flex h-20 items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                className="relative px-4 py-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:bg-silver" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="silver" size="lg" className="hidden md:inline-flex">
              <a href={SITE.phoneTel}>
                <Phone />
                {SITE.phoneDisplay}
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outlineSilver"
                  size="icon"
                  className="size-11 lg:hidden [&_svg]:size-6"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[85%] max-w-sm flex-col gap-6 border-border bg-background p-6">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
                <nav className="flex flex-col" aria-label="Mobile">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="border-b border-border py-4 font-display text-2xl font-semibold"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <ContactButtons size="lg" stacked />
                <a href={SITE.emailHref} className="text-sm text-muted-foreground underline underline-offset-4">
                  {SITE.email}
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
