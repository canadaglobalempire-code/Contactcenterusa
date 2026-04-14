import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Columbus | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Columbus, OH. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function ColumbusPage() {
  return (
    <CityPageTemplate
      city="Columbus"
      state="Ohio"
      stateAbbr="OH"
      description="Columbus is Ohio's capital and largest city, a Midwestern gem that has quietly become one of the country's most innovative business centers. Home to Ohio State University — one of the largest universities in the nation — Columbus boasts a young, educated workforce that fuels its growing technology sector. The city is also the insurance capital of the Midwest, with Nationwide, Progressive, and dozens of other carriers headquartered here. With 900,000 residents and a cost of living well below the national average, Columbus offers businesses an ideal combination of talent, affordability, and market access."
      businessLandscape="Columbus's business ecosystem is remarkably balanced, spanning insurance and financial services downtown, a booming tech scene in the Short North and Grandview districts, healthcare systems led by Ohio State Wexner Medical Center and OhioHealth, and an education sector powered by more than a dozen colleges and universities. The city's central location provides easy access to 60% of the US population within a day's drive, making it a natural hub for customer service operations. Contact Center USA provides Columbus businesses with dependable, US-based call center support that reflects the Midwestern values of integrity, hard work, and genuine customer care."
      industries={["insurance", "finance", "tech", "healthcare", "education"]}
      population="900K"
      businesses="100K+"
    />
  );
}
