import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Philadelphia | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Philadelphia, PA. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
  alternates: { canonical: "/call-center-services-philadelphia" },
};

export default function PhiladelphiaPage() {
  return (
    <CityPageTemplate
      city="Philadelphia"
      state="Pennsylvania"
      stateAbbr="PA"
      description="Philadelphia is a city where history meets innovation. America's birthplace has evolved into a modern economic powerhouse, anchored by world-renowned healthcare institutions like Penn Medicine and Jefferson Health, elite universities including UPenn and Drexel, and a pharmaceutical corridor that houses some of the world's largest drug companies. With 1.6 million residents and a strategic position between New York and Washington D.C., Philly offers businesses access to a massive Northeast corridor market of over 50 million consumers."
      businessLandscape="The Philadelphia business community is diverse and deeply rooted, from the corporate towers of Center City and the research labs of University City to the logistics operations along the Delaware River waterfront. Healthcare and life sciences companies need compliant, empathetic customer support. Financial firms along Market Street require agents who can handle sensitive transactions. And the growing tech scene in neighborhoods like Northern Liberties and Fishtown needs agile support that can scale quickly. Contact Center USA serves Philadelphia businesses with US-based agents who bring the grit, reliability, and straight-talking professionalism that defines the City of Brotherly Love."
      industries={["healthcare", "education", "finance", "pharma", "tech"]}
      population="1.6M"
      businesses="200K+"
    />
  );
}
