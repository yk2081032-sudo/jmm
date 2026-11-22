import { Users, Briefcase, Settings2 } from "lucide-react";
import { RATE_LABEL, type CarCategory } from "@/lib/site";

export function CarSpecs({ car }: { car: CarCategory }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
      <li className="flex items-center gap-1.5"><Users className="size-4 text-silver" />{car.seats}</li>
      <li className="flex items-center gap-1.5"><Briefcase className="size-4 text-silver" />{car.luggage}</li>
      <li className="flex items-center gap-1.5"><Settings2 className="size-4 text-silver" />{car.transmission}</li>
    </ul>
  );
}

export function CarCard({ car }: { car: CarCategory }) {
  return (
    <article className="panel group flex flex-col overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <img
          src={car.image}
          alt={car.imageAlt}
          width={1200}
          height={800}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-muted-foreground">{car.example}</p>
        <h3 className="mt-2 text-3xl">{car.name}</h3>
        <div className="mt-4">
          <CarSpecs car={car} />
        </div>
        <p className="mt-auto pt-5 text-sm font-semibold text-silver">{RATE_LABEL}</p>
      </div>
    </article>
  );
}
