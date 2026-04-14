import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Dallas | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Dallas, TX. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function DallasPage() {
  return (
    <CityPageTemplate
      city="Dallas"
      state="Texas"
      stateAbbr="TX"
      description="Dallas is a corporate powerhouse and the economic anchor of the Dallas-Fort Worth metroplex — the fourth-largest metro area in the United States. The city's Uptown district and Arts District house the headquarters of AT&T, Texas Instruments, and numerous other Fortune 500 companies. With no state income tax, a central geographic location, and a pro-business regulatory environment, Dallas has attracted a wave of corporate relocations from California and the Northeast, making it one of the fastest-growing business centers in the country."
      businessLandscape="The Dallas business ecosystem spans financial services firms in the Park Cities, telecom giants along the Telecom Corridor in Richardson, healthcare systems throughout North Texas, and a burgeoning real estate development market fueled by the region's explosive population growth. Companies in the DFW metroplex need call center partners who can handle high-volume operations with the professionalism and efficiency that Texas business culture demands. Contact Center USA provides Dallas businesses with scalable, US-based call center solutions that support everything from customer service and sales to technical support and appointment setting."
      industries={["finance", "tech", "telecom", "healthcare", "real estate"]}
      population="1.3M"
      businesses="200K+"
    />
  );
}
