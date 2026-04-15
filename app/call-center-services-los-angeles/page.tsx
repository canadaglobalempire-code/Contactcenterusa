import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Los Angeles | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Los Angeles, CA. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
  alternates: { canonical: "/call-center-services-los-angeles" },
};

export default function LosAngelesPage() {
  return (
    <CityPageTemplate
      city="Los Angeles"
      state="California"
      stateAbbr="CA"
      description="Los Angeles is a global powerhouse where entertainment, technology, and entrepreneurship converge. From the studios of Hollywood and the creative campuses of Culver City to the booming tech corridor of Silicon Beach in Playa Vista, LA businesses span nearly every industry imaginable. With a population of 3.9 million and a sprawling metro area of over 13 million, the City of Angels presents enormous opportunities for businesses that can deliver outstanding customer experiences across its diverse and trend-setting consumer base."
      businessLandscape="The Los Angeles business ecosystem thrives on innovation and brand-building. Entertainment companies need around-the-clock support for global audiences, while ecommerce brands based in LA's thriving DTC scene require scalable customer service that can handle viral growth. Healthcare systems serving the vast LA County population need HIPAA-compliant support, and real estate firms navigating the competitive Southern California market need responsive, professional agents. Contact Center USA delivers all of this with 100% US-based teams who understand the culture, creativity, and ambition that define doing business in Los Angeles."
      industries={["entertainment", "tech", "healthcare", "ecommerce", "real estate"]}
      population="3.9M"
      businesses="500K+"
    />
  );
}
