import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "BPO Companies in Tennessee | Healthcare Call Center TN";
const description =
  "Compare BPO companies in Tennessee for healthcare RCM, patient intake, logistics, and back office. HIPAA-compliant US-based teams. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in tennessee",
    "bpo services in tennessee",
    "healthcare bpo companies tennessee",
    "call center companies in tennessee",
    "contact center outsourcing tennessee",
    "nashville bpo services",
    "memphis call center outsourcing",
    "tennessee call center services",
  ],
  alternates: { canonical: "/locations/tennessee" },
  openGraph: { title, description, url: "/locations/tennessee", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Tennessee BPO",
    heading: "Nashville Is a Healthcare Management Capital",
    accent: "Healthcare Management Capital",
    body: [
      "Nashville is home to an unusually dense cluster of healthcare management companies — hospital operators, physician practice groups, revenue cycle firms, and health IT vendors. That concentration makes Tennessee's BPO market distinctly healthcare-shaped: patient access, insurance verification, revenue cycle support, and HIPAA-governed intake dominate the work.",
      "Memphis adds a second specialization. As a global air-cargo and logistics hub, it drives demand for shipment exception handling and B2B supply chain support that runs on overnight cycles rather than business hours.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "Local Tennessee Call Center vs Nationwide US BPO",
    intro: "How a single-metro Tennessee provider compares to a distributed nationwide partner.",
    leftTitle: "Local Nashville or Memphis Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "HIPAA & Healthcare Compliance",
        left: "Nashville providers often have healthcare familiarity, but formal HIPAA programs vary.",
        right: "Documented HIPAA program with BAAs, access controls, and audited call monitoring.",
        leftYes: true,
      },
      {
        label: "Revenue Cycle Depth",
        left: "Available from specialist Nashville firms, rarely from general call centers.",
        right: "Dedicated RCM-adjacent support: eligibility, verification, and patient balance programs.",
        leftYes: false,
      },
      {
        label: "Overnight Logistics Coverage",
        left: "Memphis cargo cycles peak overnight; local staffing for those hours is expensive.",
        right: "Follow-the-sun US coverage makes overnight logistics support routine, not a premium.",
        leftYes: false,
      },
      {
        label: "Tornado & Severe Weather Continuity",
        left: "Tennessee sits in an active severe-weather corridor; single-site outages have occurred.",
        right: "Distributed US workforce across multiple states — no single-site weather exposure.",
        leftYes: false,
      },
      {
        label: "Agent Cost",
        left: "Nashville wage growth has been among the fastest in the Southeast.",
        right: "Nationwide talent pool with cost structures below current Nashville metro rates.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Competitive Nashville market; 30–60 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Tennessee team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Tennessee",
    intro: "The Tennessee sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "heart-pulse", stat: "HIPAA", title: "Healthcare & Hospital Systems", body: "Patient access, insurance verification, and HIPAA-compliant intake for Nashville healthcare operators." },
      { icon: "truck", stat: "Logistics", title: "Logistics & Air Cargo", body: "Overnight exception handling and B2B shipment support for the Memphis cargo hub." },
      { icon: "dollar", stat: "RCM", title: "Revenue Cycle Support", body: "Eligibility checks, patient balance calls, and billing inquiry handling for provider groups." },
      { icon: "store", stat: "Retail", title: "Retail & Consumer", body: "Order support and customer service for Tennessee retail and distribution operations." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "A Tennessee BPO Partner Built for Healthcare Programs",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Healthcare programs fail on compliance, not on friendliness. Patient access work touches PHI on nearly every call, which means BAAs, access controls, retention policy, and call monitoring have to be documented before the first call is taken — not retrofitted after an audit finding.",
      "Contact Center USA supports Tennessee healthcare operators with a documented HIPAA program, agents trained on patient access and insurance verification workflows, and the QA rigor that provider groups expect from a revenue-adjacent vendor.",
    ],
    bullets: [
      "Documented HIPAA program with signed BAAs and role-based access controls",
      "Patient access, eligibility, and insurance verification workflows",
      "Overnight coverage for Memphis logistics and air-cargo exception handling",
      "Central-time alignment with 24/7 coverage available",
      "Statewide support — Nashville, Memphis, Knoxville, and Chattanooga",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Tennessee?",
    accent: "BPO companies in Tennessee",
    body: "Whether you are a Nashville provider group, a Memphis logistics operator, or a Knoxville services business, Contact Center USA can stand up a dedicated Central-time team in under 48 hours.",
    ctaLabel: "Get a Free Tennessee BPO Quote",
    ctaHref: "/contact",
  },
];

export default function TennesseePage() {
  return (
    <StatePageTemplate
      state="Tennessee"
      stateAbbr="TN"
      slug="tennessee"
      timezone="Central Time"
      overview={[
        "Tennessee's outsourcing market is defined by two specialized clusters. Nashville hosts an unusually dense concentration of healthcare management companies — hospital operators, physician groups, revenue cycle firms, and health IT vendors — which makes healthcare BPO the state's signature category.",
        "Memphis provides the second anchor as a global air-cargo and logistics hub, driving demand for overnight shipment exception handling and B2B supply chain support. Knoxville and Chattanooga add manufacturing, energy, and a growing services base.",
        "Contact Center USA supports Tennessee businesses with 100% US-based inbound, outbound, and back-office teams on Central time, with the documented HIPAA program that the state's healthcare sector requires.",
      ]}
      metros={[
        { name: "Nashville", focus: "A national healthcare management center. Patient access, insurance verification, revenue cycle support, and provider-group intake programs." },
        { name: "Memphis", focus: "Global air-cargo and logistics hub. Overnight exception handling, shipment tracking, and B2B supply chain support." },
        { name: "Knoxville", focus: "Manufacturing, energy, and university-driven services. B2B support and technical help desk programs." },
        { name: "Chattanooga", focus: "Logistics, insurance, and a growing technology base supported by the city's fiber infrastructure." },
        { name: "Clarksville", focus: "Military-adjacent population at Fort Campbell plus manufacturing. Consumer support and government services programs." },
        { name: "Johnson City & Tri-Cities", focus: "Regional healthcare systems and manufacturing serving Northeast Tennessee." },
      ]}
      industries={[
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "Patient access, scheduling, and HIPAA-compliant intake for Nashville healthcare operators." },
        { name: "Logistics & Shipping", href: "/industries/logistics-shipping-call-center", note: "Overnight exception handling and tracking support for the Memphis cargo hub." },
        { name: "Insurance", href: "/industries/insurance-call-center-outsourcing", note: "Claims intake and policyholder servicing for Tennessee carriers." },
        { name: "Retail & Ecommerce", href: "/industries/ecommerce-customer-service-outsourcing", note: "Order support and returns handling for Tennessee retail and distribution businesses." },
      ]}
      faqs={[
        {
          question: "Why is Tennessee known for healthcare BPO?",
          answer:
            "Nashville hosts an unusually dense cluster of healthcare management companies — hospital operators, physician practice groups, revenue cycle firms, and health IT vendors. That concentration created a local ecosystem of healthcare-literate outsourcing demand, and it is why healthcare programs dominate Tennessee's BPO market.",
        },
        {
          question: "What HIPAA safeguards do you have in place?",
          answer:
            "We operate a documented HIPAA program covering signed Business Associate Agreements, role-based access controls, call recording and retention policy, and audited quality monitoring. These are established before a program takes its first call rather than added after an audit finding.",
        },
        {
          question: "Can you support revenue cycle work?",
          answer:
            "We support revenue-cycle-adjacent programs including insurance eligibility checks, benefit verification, patient balance calls, and billing inquiry handling. We are not a coding or claims adjudication vendor, but we handle the patient-facing communication layer around those functions.",
        },
        {
          question: "Do you offer overnight coverage for Memphis logistics clients?",
          answer:
            "Yes. Memphis air-cargo operations peak overnight, and staffing those hours locally carries a significant premium. Because our workforce is distributed across US timezones, overnight logistics coverage is routine rather than a surcharge.",
        },
        {
          question: "Are your agents located in Tennessee?",
          answer:
            "Our agents are distributed across the United States. Tennessee clients get teams scheduled to Central time and trained on their market and compliance requirements, without single-site weather exposure in an active severe-weather corridor. All agents are 100% US-based.",
        },
        {
          question: "How quickly can a Tennessee program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Central-time team typically in place within two weeks — compared to the 30–60 day ramps common in the competitive Nashville hiring market.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Tennessee", href: "/blog/top-10-bpo-companies-tennessee" }}
      seoContent={seoContent}
    />
  );
}
