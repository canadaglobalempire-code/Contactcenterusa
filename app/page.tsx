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
  title: "US Call Center Services | Outsourcing & BPO Quotes",
  description:
    "Compare US-based call center services for inbound support, outbound sales, customer care, technical support, live chat, and lead response. Get a fast quote.",
  keywords: [
    "call center services",
    "contact center services",
    "call center outsourcing",
    "US-based call center",
    "BPO call center services",
    "inbound call center services",
    "outbound call center services",
    "customer service outsourcing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "US Call Center Services | Outsourcing & BPO Quotes",
    description:
      "Compare US-based call center services for inbound support, outbound sales, customer care, technical support, live chat, and lead response.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "US Call Center Services | Outsourcing & BPO Quotes",
    description:
      "Compare US-based call center services for inbound support, outbound sales, customer care, technical support, live chat, and lead response.",
  },
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
