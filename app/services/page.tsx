import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Contact Center USA",
  description:
    "Explore Contact Center USA's full suite of services — from AI automation and omnichannel solutions to fraud prevention and CX analytics. US-based contact center excellence.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
