import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Phoenix | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Phoenix, AZ. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
};

export default function PhoenixPage() {
  return (
    <CityPageTemplate
      city="Phoenix"
      state="Arizona"
      stateAbbr="AZ"
      description="Phoenix is one of the fastest-growing cities in America, a sunbelt metropolis that has transformed from a retirement destination into a thriving technology and business hub. The Valley of the Sun is now home to major semiconductor manufacturers, financial services firms along the Camelback Corridor, and a booming real estate market that consistently ranks among the nation's most active. With 1.6 million residents and a metro area exceeding 4.8 million, Phoenix offers businesses a dynamic market with a young, growing workforce and lower operating costs than coastal cities."
      businessLandscape="Phoenix's rapid growth has created intense demand for scalable customer support solutions. Tech companies in Scottsdale and Tempe are scaling fast and need call center partners that can grow with them. Healthcare systems serving the Valley's expanding population require HIPAA-compliant support, while the financial services sector needs agents who can handle complex inquiries with expertise and care. Contact Center USA helps Phoenix businesses compete at the highest level by providing US-based call center services that match the city's ambition and pace of growth."
      industries={["tech", "healthcare", "real estate", "finance", "education"]}
      population="1.6M"
      businesses="200K+"
    />
  );
}
