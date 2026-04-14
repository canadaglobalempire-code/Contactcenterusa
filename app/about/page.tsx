import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { AboutMission } from "./AboutMission";
import { AboutValues } from "./AboutValues";
import { AboutHistory } from "./AboutHistory";
import { AboutCTA } from "./AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Contact Center USA — over 30 years of experience providing US-based call center outsourcing services. 3,000+ employees delivering world-class customer service.",
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
