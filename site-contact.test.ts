import { describe, expect, it } from "vitest";
import { SITE, FLEET, RATE_LABEL, enquiryMailto } from "@/lib/site";

describe("Jadoon Movers contact details", () => {
  it("call links dial the business phone number", () => {
    expect(SITE.phoneTel).toBe("tel:+923134788809");
    expect(SITE.phoneDisplay).toBe("+92 313 4788809");
  });

  it("email links open a message to the bookings address", () => {
    expect(SITE.email).toBe("ayanalijadoon786@gmail.com");
    expect(SITE.emailHref).toBe("mailto:ayanalijadoon786@gmail.com");
  });

  it("enquiry form opens an email to the business with the details filled in", () => {
    const href = enquiryMailto({
      name: "Sam Khan",
      phone: "07123 456789",
      carType: "SUV",
      dates: "1–3 March",
      message: "Need a child seat",
    });
    expect(href.startsWith("mailto:ayanalijadoon786@gmail.com?subject=")).toBe(true);
    const params = new URLSearchParams(href.split("?")[1]);
    expect(params.get("subject")).toBe("Car hire enquiry – SUV");
    expect(params.get("body")).toContain("Name: Sam Khan");
    expect(params.get("body")).toContain("Dates needed: 1–3 March");
  });
});

describe("Fleet", () => {
  it("offers economy, saloon, SUV, executive and van", () => {
    expect(FLEET.map((c) => c.slug)).toEqual(["economy", "saloon", "suv", "executive", "van"]);
  });

  it("shows no invented prices — every car asks for today's rate", () => {
    expect(RATE_LABEL).toBe("Ask for today's rate");
    for (const car of FLEET) {
      expect(JSON.stringify({ ...car, image: "" })).not.toMatch(/£\s?\d/);
    }
  });
});
