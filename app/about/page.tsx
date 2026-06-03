import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { AboutMission } from "./AboutMission";
import { AboutValues } from "./AboutValues";
import { AboutHistory } from "./AboutHistory";
import { AboutCTA } from "./AboutCTA";

export const metadata: Metadata = {
  title: "About Contact Center USA | US-Based Call Center Partner",
  description:
    "Learn about Contact Center USA, our US-based call center outsourcing approach, leadership experience, industries served, and customer support values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutHistory />
      <AboutCTA />
    </>
  );
}
