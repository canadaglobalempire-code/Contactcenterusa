import type { Metadata } from "next";
import { Hero2 } from "@/components/sections/Hero2";
import { AwardsCarousel } from "@/components/sections/AwardsCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechSection } from "@/components/sections/TechSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { SurgeSection } from "@/components/sections/SurgeSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PatrioticBanner } from "@/components/sections/PatrioticBanner";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Contact Center USA | US-Based Call Center Outsourcing Services",
  description: "Keep America Great by employing Americans. Contact Center USA provides 24/7 US-based call center outsourcing — inbound, outbound, AI automation, and omnichannel solutions. 500+ agents, 30+ years experience, 98% CSAT. Get a free quote today.",
};

export default function Home() {
  return (
    <>
      <Hero2 />
      <AwardsCarousel />
      <AboutSection />
      <ServicesSection />
      <TechSection />
      <IndustriesSection />
      <SurgeSection />
      <ProcessSection />
      <PatrioticBanner />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
