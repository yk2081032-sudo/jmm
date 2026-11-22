import { Phone, Mail } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  size?: ButtonProps["size"];
  className?: string;
  stacked?: boolean;
};

export function ContactButtons({ size = "xl", className, stacked }: Props) {
  return (
    <div className={cn("flex gap-3", stacked ? "flex-col" : "flex-col sm:flex-row", className)}>
      <Button asChild variant="silver" size={size}>
        <a href={SITE.phoneTel} aria-label={`Call ${SITE.phoneDisplay}`}>
          <Phone />
          Call {SITE.phoneDisplay}
        </a>
      </Button>
      <Button asChild variant="outlineSilver" size={size}>
        <a href={SITE.emailHref} aria-label={`Email ${SITE.email}`}>
          <Mail />
          Email us
        </a>
      </Button>
    </div>
  );
}
