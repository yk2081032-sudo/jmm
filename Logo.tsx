import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/jadoon-movers-mark.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label="Jadoon Movers — home">
      <img
        src={logoMark}
        alt=""
        width={580}
        height={580}
        className="size-11 transition-transform duration-500 group-hover:scale-105 md:size-12"
      />
      <span className="leading-none">
        <span className="text-silver block font-display text-xl font-bold tracking-[0.18em] md:text-2xl">JADOON</span>
        <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-muted-foreground">
          Movers
        </span>
      </span>
    </Link>
  );
}
