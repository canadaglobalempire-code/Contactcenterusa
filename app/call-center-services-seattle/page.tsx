import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Seattle | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Seattle, WA. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function SeattlePage() {
  return (
    <CityPageTemplate
      city="Seattle"
      state="Washington"
      stateAbbr="WA"
      description="Seattle is a global technology capital and the home of Amazon, Microsoft, Boeing, and Starbucks — companies that have shaped entire industries. The Emerald City's South Lake Union neighborhood has become the epicenter of Amazon's sprawling campus, while the Eastside cities of Redmond and Bellevue house Microsoft and a growing roster of cloud computing, gaming, and AI companies. With 750,000 residents, no state income tax, and a workforce that ranks among the most educated in the nation, Seattle offers businesses access to world-class talent and a culture of relentless innovation."
      businessLandscape="Seattle's business community sets the global standard for customer experience — after all, this is the city that invented one-click shopping and two-day delivery. Tech and ecommerce companies here need call center partners who can keep pace with innovation and integrate with sophisticated platforms. Boeing and the aerospace supply chain require precision communication and security protocols. Healthcare systems like UW Medicine and Swedish Medical need compliant patient support across the Puget Sound region. Contact Center USA serves Seattle businesses with US-based agents who embody the Pacific Northwest's values of quality, sustainability, and customer-first thinking."
      industries={["tech", "ecommerce", "aerospace", "healthcare", "logistics"]}
      population="750K"
      businesses="120K+"
    />
  );
}
