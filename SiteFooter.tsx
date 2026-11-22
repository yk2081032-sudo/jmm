import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/jadoon-movers-mark.png";
import { SITE, FLEET } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary pb-24 md:pb-0">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
        <div className="space-y-5">
          <Link to="/" aria-label="Jadoon Movers — home" className="inline-block">
            <img src={logoImg} alt="Jadoon Movers logo" width={580} height={580} className="w-24" />
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            Clean, comfortable hire cars with clear terms and a team you can actually talk to.
          </p>
        </div>
        <div>
          <h3 className="eyebrow mb-5 text-silver">Pages</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/fleet" className="text-muted-foreground hover:text-foreground">Our fleet</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-5 text-silver">Fleet</h3>
          <ul className="space-y-3 text-sm">
            {FLEET.map((c) => (
              <li key={c.slug}>
                <Link to="/fleet" hash={c.slug} className="text-muted-foreground hover:text-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-5 text-silver">Contact</h3>
          <a href={SITE.phoneTel} className="flex items-center gap-3 font-display text-2xl font-semibold hover:text-silver">
            <Phone className="size-5 text-silver" />
            {SITE.phoneDisplay}
          </a>
          <a href={SITE.emailHref} className="mt-3 flex items-center gap-3 break-all text-sm hover:text-silver">
            <Mail className="size-5 shrink-0 text-silver" />
            {SITE.email}
          </a>
          <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="size-5 shrink-0 text-silver" />
            Car hire in {SITE.area}
          </p>
        </div>
      </div>
      <div className="silver-rule opacity-40" aria-hidden />
      <div className="container-site flex flex-col justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <span>{SITE.tagline}</span>
      </div>
    </footer>
  );
}
