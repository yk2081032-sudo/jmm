import { Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

/** Always-visible call + email bar on phones. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-secondary/95 p-2 backdrop-blur md:hidden">
      <a
        href={SITE.phoneTel}
        className="bg-silver-gradient flex h-13 items-center justify-center gap-2 rounded-md text-base font-bold text-primary-foreground"
      >
        <Phone className="size-5" />
        Call now
      </a>
      <a
        href={SITE.emailHref}
        className="flex h-13 items-center justify-center gap-2 rounded-md border border-silver/60 text-base font-bold text-foreground"
      >
        <Mail className="size-5" />
        Email
      </a>
    </div>
  );
}
