import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { AboutMission } from "./AboutMission";
import { AboutValues } from "./AboutValues";
import { AboutHistory } from "./AboutHistory";
import { AboutCTA } from "./AboutCTA";

export const metadata: Metadata = {
  title: "About Contact Center USA | 30+ Years of US-Based BPO",
  description:
    "Learn about Contact Center USA — over 30 years of experience providing US-based call center outsourcing services. 500+ employees delivering world-class customer service.",
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
