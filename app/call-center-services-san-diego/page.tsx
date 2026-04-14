import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in San Diego | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in San Diego, CA. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function SanDiegoPage() {
  return (
    <CityPageTemplate
      city="San Diego"
      state="California"
      stateAbbr="CA"
      description="San Diego has earned its reputation as a world-class hub for biotechnology, defense, and innovation. The Torrey Pines mesa is home to one of the densest concentrations of biotech and pharmaceutical companies on the planet, while the presence of Naval Base San Diego and Marine Corps Base Camp Pendleton makes it a cornerstone of America's defense industry. With 1.4 million residents, year-round sunshine, and a quality of life that attracts top talent, San Diego combines scientific rigor with entrepreneurial energy in a way few cities can match."
      businessLandscape="San Diego's business community demands precision, compliance, and technical fluency in customer support. Biotech companies in Sorrento Valley need agents who can handle complex product inquiries and maintain strict regulatory compliance. Defense contractors require secure, clearance-aware communication protocols. The city's growing tech sector in downtown's East Village and the tourism industry serving its world-famous beaches and attractions both need scalable, professional support. Contact Center USA delivers specialized, US-based call center services that meet the exacting standards of San Diego's knowledge-driven economy."
      industries={["biotech", "defense", "tech", "tourism", "healthcare"]}
      population="1.4M"
      businesses="150K+"
    />
  );
}
