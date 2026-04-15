import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in New York | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in New York, NY. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
  alternates: { canonical: "/call-center-services-new-york" },
};

export default function NewYorkPage() {
  return (
    <CityPageTemplate
      city="New York"
      state="New York"
      stateAbbr="NY"
      description="New York City is the undisputed capital of American commerce, home to Wall Street, Madison Avenue, and the headquarters of countless Fortune 500 companies. From the bustling trading floors of Lower Manhattan to the creative agencies of Midtown and the tech startups of Silicon Alley, NYC businesses operate at a speed and scale that demands exceptional customer support. With over 8.3 million residents and a metro area exceeding 20 million, the customer base here is massive, diverse, and expects nothing less than world-class service."
      businessLandscape="The New York business landscape is uniquely demanding. Companies compete on a global stage where customer experience is a key differentiator. Whether you are a fintech startup in the Flatiron District, a healthcare provider in the Upper East Side, or a media company in Hudson Yards, Contact Center USA provides the US-based call center support that keeps your customers engaged and your brand reputation strong. Our agents understand the fast-paced, multicultural nature of doing business in New York and deliver the professionalism your customers expect."
      industries={["finance", "tech", "media", "healthcare", "retail"]}
      population="8.3M"
      businesses="1M+"
    />
  );
}
