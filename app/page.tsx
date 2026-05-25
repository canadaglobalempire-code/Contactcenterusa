import type { Metadata } from "next";
import { Hero2 } from "@/components/sections/Hero2";
import { AwardsCarousel } from "@/components/sections/AwardsCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BuyerAnswerSection } from "@/components/sections/BuyerAnswerSection";
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
  title: "US-Based Call Center Outsourcing | Contact Center USA",
  description: "US-based call center outsourcing for inbound, outbound, customer service, technical support, and lead generation. Request a fast quote today.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero2 />
      <AwardsCarousel />
      <AboutSection />
      <ServicesSection />
      <BuyerAnswerSection />
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
