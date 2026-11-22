import type { LucideIcon } from "lucide-react";
import { Sparkles, FileText, CalendarRange, Headset } from "lucide-react";
import economyImg from "@/assets/fleet-economy.jpg";
import saloonImg from "@/assets/fleet-saloon.jpg";
import suvImg from "@/assets/fleet-suv.jpg";
import executiveImg from "@/assets/fleet-executive.jpg";
import vanImg from "@/assets/fleet-van.jpg";

/*
 * All Jadoon Movers business details live here — owner-supplied values only.
 */
const PHONE_DISPLAY = "+92 313 4788809";
const PHONE_E164 = "+923134788809";
const EMAIL = "ayanalijadoon786@gmail.com";

export const SITE = {
  name: "Jadoon Movers",
  tagline: "Premium car hire",
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: `tel:${PHONE_E164}`,
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,
  area: "Pakistan",
} as const;

export type Enquiry = {
  name: string;
  phone: string;
  carType: string;
  dates: string;
  message: string;
};

/** Builds a mailto: link that opens the customer's email app with the enquiry filled in. */
export function enquiryMailto(e: Enquiry): string {
  const subject = `Car hire enquiry${e.carType ? ` – ${e.carType}` : ""}`;
  const body = [
    `Name: ${e.name}`,
    `Phone: ${e.phone}`,
    `Car type: ${e.carType || "Not sure yet"}`,
    `Dates needed: ${e.dates}`,
    "",
    e.message,
  ].join("\n");
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type CarCategory = {
  slug: string;
  name: string;
  summary: string;
  example: string;
  seats: string;
  luggage: string;
  transmission: string;
  image: string;
  imageAlt: string;
};

export const FLEET: CarCategory[] = [
  {
    slug: "economy",
    name: "Economy",
    summary: "Easy to park and light on fuel — ideal for city driving and everyday errands.",
    example: "Compact 5-door hatchback or similar",
    seats: "5 seats",
    luggage: "2 bags",
    transmission: "Manual or automatic",
    image: economyImg,
    imageAlt: "Silver compact hatchback in a dark studio",
  },
  {
    slug: "saloon",
    name: "Saloon",
    summary: "Comfortable and refined for longer journeys, business trips and family visits.",
    example: "Mid-size saloon or similar",
    seats: "5 seats",
    luggage: "3 bags",
    transmission: "Manual or automatic",
    image: saloonImg,
    imageAlt: "Graphite grey saloon car in a dark studio",
  },
  {
    slug: "suv",
    name: "SUV",
    summary: "Space, height and presence — room for the whole family and everything they bring.",
    example: "Large SUV or similar",
    seats: "5–7 seats",
    luggage: "4 bags",
    transmission: "Automatic",
    image: suvImg,
    imageAlt: "Black SUV in a dark studio",
  },
  {
    slug: "executive",
    name: "Executive",
    summary: "Make the right impression for meetings, weddings and special occasions.",
    example: "Executive saloon or similar",
    seats: "5 seats",
    luggage: "3 bags",
    transmission: "Automatic",
    image: executiveImg,
    imageAlt: "Silver executive saloon in a dark studio",
  },
  {
    slug: "van",
    name: "Van",
    summary: "Moving house, collecting furniture or running a job — load up and go.",
    example: "Medium van or similar",
    seats: "3 seats",
    luggage: "Large load space",
    transmission: "Manual",
    image: vanImg,
    imageAlt: "Black medium van in a dark studio",
  },
];

export const RATE_LABEL = "Ask for today's rate";

export type Reason = { icon: LucideIcon; title: string; body: string };

export const REASONS: Reason[] = [
  { icon: Sparkles, title: "Clean, well-kept cars", body: "Every car is cleaned and checked before it's handed over to you." },
  { icon: FileText, title: "Clear terms upfront", body: "We explain the price and the rental terms before you book — no surprises." },
  { icon: CalendarRange, title: "Flexible hire", body: "A day, a week or longer. Tell us what you need and we'll fit around you." },
  { icon: Headset, title: "Talk to a real person", body: "Call or email and speak directly to the Jadoon Movers team." },
];

export const STEPS = [
  { title: "Choose your car", body: "Browse the fleet and pick the type of car that suits your trip." },
  { title: "Call or email us", body: "Tell us your dates. We'll confirm availability and give you today's rate." },
  { title: "Collect and drive", body: "We'll let you know what to bring, hand over the keys and you're on your way." },
];
