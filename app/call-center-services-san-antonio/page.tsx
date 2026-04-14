import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in San Antonio | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in San Antonio, TX. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function SanAntonioPage() {
  return (
    <CityPageTemplate
      city="San Antonio"
      state="Texas"
      stateAbbr="TX"
      description="San Antonio is a city shaped by its rich military heritage and vibrant tourism economy. Home to Joint Base San Antonio — the largest joint military installation in the Department of Defense — and the iconic River Walk that draws millions of visitors annually, the city blends tradition with forward-looking economic development. With 1.5 million residents and one of the lowest costs of living among major US cities, San Antonio has become a magnet for businesses seeking growth without the overhead of coastal markets."
      businessLandscape="San Antonio's economy is driven by a unique mix of military and defense contracting, healthcare systems including the South Texas Medical Center, a thriving tourism and hospitality sector centered around the Alamo and River Walk, and an emerging technology corridor along the I-35 innovation zone. Bilingual customer support is essential here, as the city's predominantly Hispanic population expects seamless English and Spanish service. Contact Center USA provides San Antonio businesses with bilingual, US-based agents who understand the local culture, military community needs, and the hospitality-driven service standards that make this city special."
      industries={["military", "healthcare", "tourism", "tech", "energy"]}
      population="1.5M"
      businesses="150K+"
    />
  );
}
