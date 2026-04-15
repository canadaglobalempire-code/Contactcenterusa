import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";

export const metadata: Metadata = {
  title: "Call Center Services in Jacksonville | Contact Center USA",
  description:
    "Contact Center USA provides US-based call center outsourcing services in Jacksonville, FL. 24/7 inbound & outbound support, AI automation, and omnichannel solutions. Get a free quote.",
  alternates: { canonical: "/call-center-services-jacksonville" },
};

export default function JacksonvillePage() {
  return (
    <CityPageTemplate
      city="Jacksonville"
      state="Florida"
      stateAbbr="FL"
      description="Jacksonville is the largest city by area in the contiguous United States and a rising star in the Southeast business corridor. Situated at the mouth of the St. Johns River with one of the deepest natural harbors on the Atlantic coast, Jax has built a powerful economy around financial services, logistics, and military operations at Naval Station Mayport and Naval Air Station Jacksonville. With 950,000 residents and no state income tax, the city attracts businesses looking for a strategic East Coast location with lower costs and a strong, diverse talent pool."
      businessLandscape="Jacksonville's economy is anchored by major financial institutions like FIS, Fidelity National Financial, and Southeastern Grocers, alongside a robust healthcare sector led by Mayo Clinic Florida and Baptist Health. The city's port and logistics operations make it a critical node in the national supply chain, while its insurance industry presence has earned it the nickname 'The Insurance City.' Contact Center USA serves Jacksonville businesses with US-based agents who understand the financial services compliance landscape, military community needs, and the professional standards that Northeast Florida companies expect from their customer support partners."
      industries={["finance", "logistics", "healthcare", "insurance", "military"]}
      population="950K"
      businesses="100K+"
    />
  );
}
