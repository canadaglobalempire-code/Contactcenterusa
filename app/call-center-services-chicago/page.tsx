import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Chicago | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Chicago, IL. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function ChicagoPage() {
  return (
    <CityPageTemplate
      city="Chicago"
      state="Illinois"
      stateAbbr="IL"
      description="Chicago stands as the economic engine of the Midwest, a city built on commerce, industry, and relentless ambition. The Loop serves as the nerve center of a financial district that rivals New York, while the Chicago Board of Trade and CME Group make it the derivatives capital of the world. Beyond finance, the city's manufacturing heritage has evolved into a modern logistics and technology hub, with companies along the I-90 corridor and in Fulton Market driving innovation. With 2.7 million residents and a deep talent pool, Chicago businesses need customer support that matches their no-nonsense work ethic."
      businessLandscape="Chicago's central location and world-class infrastructure make it a natural headquarters for companies that serve the entire nation. From the trading firms of LaSalle Street to the tech campuses of the West Loop and the healthcare networks stretching across Chicagoland, businesses here demand reliability and professionalism in every customer interaction. Contact Center USA provides Chicago companies with dedicated US-based agents who understand Midwestern values of hard work, honesty, and follow-through — qualities that translate directly into higher customer satisfaction and retention."
      industries={["finance", "manufacturing", "tech", "logistics", "healthcare"]}
      population="2.7M"
      businesses="400K+"
    />
  );
}
