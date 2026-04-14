import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Charlotte | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Charlotte, NC. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function CharlottePage() {
  return (
    <CityPageTemplate
      city="Charlotte"
      state="North Carolina"
      stateAbbr="NC"
      description="Charlotte is the second-largest banking center in the United States, trailing only New York City in total banking assets. The Queen City is headquarters to Bank of America and Truist Financial, and hosts major operations for Wells Fargo, creating a financial services ecosystem that employs hundreds of thousands of professionals. With 880,000 residents and one of the fastest growth rates among major US cities, Charlotte has diversified beyond banking into technology, healthcare, and energy, attracting companies drawn to its talent pipeline, quality of life, and strategic Southeast location."
      businessLandscape="Charlotte's Uptown financial district and South End innovation corridor form the backbone of a business community that values professionalism, compliance, and customer trust. Banking and financial services companies need call center partners who understand regulatory requirements like Dodd-Frank, SOC 2, and PCI-DSS. The city's growing healthcare sector, anchored by Atrium Health and Novant Health, requires HIPAA-compliant patient communication. And Charlotte's emerging tech scene needs agile, scalable support. Contact Center USA serves Charlotte businesses with US-based agents trained in financial services protocols and the Southern hospitality that characterizes business in the Carolinas."
      industries={["banking", "finance", "tech", "healthcare", "energy"]}
      population="880K"
      businesses="100K+"
    />
  );
}
