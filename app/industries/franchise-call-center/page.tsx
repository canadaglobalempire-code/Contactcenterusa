import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Franchise Call Center | Central Intake & Territory Routing",
  description:
    "US-based call center for franchise networks. Central lead intake, territory routing to franchisees, brand-consistent handling, and network-wide reporting.",
  keywords: [
    "franchise call center",
    "franchise lead routing",
    "multi location answering service",
    "franchise central intake",
    "territory based call routing",
    "franchisee lead distribution",
    "brand consistent phone answering",
    "franchise network call handling",
    "multi unit call center",
    "franchise development call support",
  ],
  alternates: { canonical: "/industries/franchise-call-center" },
};

const features = [
  {
    title: "Central Intake with Territory Routing",
    desc: "One national number for the whole brand, with calls routed to the correct franchisee by the caller's postcode, service area boundaries, and your own territory map — instead of a customer guessing which location to call.",
  },
  {
    title: "Brand-Consistent Call Handling",
    desc: "Every caller hears the same greeting, the same qualification questions, and the same service standard regardless of which territory they land in — the consistency a franchisor writes into the brand standards and can almost never enforce location by location.",
  },
  {
    title: "Lead Distribution & Accountability",
    desc: "Qualified leads delivered to franchisees with full intake detail and a timestamp, plus reporting on what each location received. Disputes about lead quality and volume stop being anecdotal.",
  },
  {
    title: "Network-Wide Reporting",
    desc: "Call volume, answer rate, conversion, and missed-call data by location, giving franchise leadership a genuine view of performance across the network instead of relying on self-reported numbers.",
  },
  {
    title: "Overflow & After-Hours for Franchisees",
    desc: "Individual locations rarely justify their own after-hours coverage. Handled centrally across the network, it becomes affordable for everyone and removes the most common source of lost leads.",
  },
  {
    title: "Franchise Development Enquiries",
    desc: "A separate qualified line for prospective franchisees, screening on capital, territory interest, and timeline before anything reaches your development team.",
  },
];

const benefits = [
  "One national number with territory-aware routing",
  "100% US-based agents",
  "Consistent brand standard across every location",
  "Timestamped lead delivery with per-location reporting",
  "Affordable after-hours coverage shared across the network",
  "Bilingual English/Spanish customer contact",
];

const stats = [
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 24, suffix: "/7", label: "Network Coverage Available" },
  { value: 1, suffix: " number", label: "Central Intake for the Whole Brand" },
  { value: 2, suffix: " languages", label: "English and Spanish Customer Contact" },
];

const faqs = [
  {
    question: "How does territory routing work?",
    answer:
      "We load your territory map — postcodes, service area boundaries, and any overlap or priority rules you have agreed with franchisees — and route each caller to the owning location based on where they actually are. Where territories overlap or a location is unsold, calls follow the fallback rules you define rather than being handled inconsistently.",
  },
  {
    question: "Why not let each franchisee answer their own calls?",
    answer:
      "Many will, and this does not have to replace that. But most single-location franchisees cannot staff a phone through evenings, weekends, and their own busy operating hours, and the result across a network is wildly inconsistent answer rates. Central intake gives the whole brand a standard, and gives franchisees coverage none of them could afford individually.",
  },
  {
    question: "Can franchisees keep their local flexibility?",
    answer:
      "Yes. Location-specific hours, pricing, promotions, and service availability are all maintained per franchisee, so agents give accurate local answers rather than a generic corporate script. What stays consistent is the greeting, the qualification standard, and the handling quality.",
  },
  {
    question: "How do you handle lead disputes?",
    answer:
      "With data. Every lead is delivered with full intake detail and a timestamp, and reporting shows exactly what each location received and when. Lead volume and quality arguments between franchisor and franchisee are usually arguments about missing information, and this removes the ambiguity from both sides.",
  },
  {
    question: "Can you screen franchise development enquiries?",
    answer:
      "Yes, on a separate line. Prospective franchisee enquiries are screened on available capital, territory interest, relevant experience, and timeline before anything reaches your development team, so they spend their time on genuinely qualified candidates rather than working through general interest.",
  },
  {
    question: "What reporting does the franchisor get?",
    answer:
      "Call volume, answer and abandon rates, conversion, and lead delivery by location, rolled up to a network view. For most franchisors this is the first genuinely comparable performance data they have had across locations, because it does not depend on each franchisee reporting their own numbers.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Franchise Call Center Services",
    heading: "Brand standards end at the moment somebody picks up the phone.",
    accent: "the moment somebody picks up the phone",
    body: [
      "Contact Center USA provides central intake for franchise networks with US-based agents — one national number, territory-aware routing to the right franchisee, one consistent standard, and reporting the franchisor can actually trust.",
      "A franchisor can specify signage, uniforms, and pricing down to the detail, and still have no control at all over whether a customer's call is answered. Across a network that variance is usually the largest uncontrolled factor in performance.",
    ],
    stats: [
      { stat: "1", label: "National number routed to the correct territory automatically" },
      { stat: "24/7", label: "After-hours coverage shared affordably across the network" },
      { stat: "100%", label: "US-based agents applying one brand standard" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Every Franchisee Answering Their Own Phone vs. Central Intake",
    intro:
      "The default arrangement gives each location full responsibility for its own calls. It is simple to set up and produces the widest possible variance in customer experience.",
    leftTitle: "Each Location Answering Separately",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Brand Consistency",
        left: "Greeting and handling vary completely between locations.",
        right: "One greeting, one qualification standard, network-wide.",
        leftYes: false,
      },
      {
        label: "After-Hours Coverage",
        left: "Unaffordable for a single location, so almost nobody has it.",
        right: "Shared across the network and affordable for every franchisee.",
        leftYes: false,
      },
      {
        label: "Wrong-Location Calls",
        left: "Customers guess, call the wrong store, and get bounced around.",
        right: "Routed to the owning territory on the first call.",
        leftYes: false,
      },
      {
        label: "Lead Accountability",
        left: "Disputes over lead volume and quality with no shared record.",
        right: "Timestamped delivery with per-location reporting.",
        leftYes: false,
      },
      {
        label: "Network Visibility",
        left: "Franchisor relies on self-reported numbers from each location.",
        right: "Comparable answer, abandon, and conversion data across all sites.",
        leftYes: false,
      },
      {
        label: "Unsold Territories",
        left: "Calls into unsold areas are simply lost.",
        right: "Captured and held under your fallback rules for future placement.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From National Number to the Right Franchisee",
    intro:
      "Setup centers on the territory map and the balance between brand consistency and local flexibility that your franchise agreement already defines.",
    steps: [
      {
        title: "Territory Map Load",
        body: "We load postcodes, service boundaries, overlap rules, and fallback handling for unsold territories.",
      },
      {
        title: "Brand Standard Definition",
        body: "Greeting, qualification questions, and handling standards documented once for the whole network.",
      },
      {
        title: "Local Detail Capture",
        body: "Per-location hours, pricing, promotions, and service availability maintained so answers stay accurate.",
      },
      {
        title: "Routing & Delivery Launch",
        body: "Calls routed to the owning franchisee with timestamped lead delivery and full intake detail.",
      },
      {
        title: "Network Reporting",
        body: "Answer rate, abandon rate, and conversion reported per location and rolled up for leadership.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Networks We Support",
    heading: "Across Franchise Categories",
    intro:
      "Home services franchises and retail franchises have different call profiles, but the same structural problem: no control over the phone.",
    items: [
      {
        icon: "wrench",
        stat: "Services",
        title: "Home Services Franchises",
        body: "Emergency and service call intake routed by territory with after-hours dispatch coverage.",
      },
      {
        icon: "heart-pulse",
        stat: "Health",
        title: "Health & Wellness",
        body: "Membership and consultation enquiries routed to the nearest studio or clinic.",
      },
      {
        icon: "store",
        stat: "Retail",
        title: "Retail & Food Franchises",
        body: "Location enquiries, catering and group orders, and guest recovery across units.",
      },
      {
        icon: "briefcase",
        stat: "B2B",
        title: "B2B & Professional Franchises",
        body: "Commercial enquiry qualification and appointment setting for territory owners.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why the Phone Is the Last Unmanaged Brand Standard",
    image: "/images/cc-office-wide.jpg",
    imagePosition: "right",
    body: [
      "Franchisors control almost everything about the customer experience except the single interaction that decides most transactions. One location answers in two rings; another sends every call to voicemail on a Saturday. Both carry your brand.",
      "Contact Center USA provides central intake that makes the phone a managed standard: one national number, territory-aware routing, consistent handling, and per-location reporting — while franchisees keep local hours, pricing, and promotions accurate on every call.",
    ],
    bullets: [
      "One national number routed by your own territory map",
      "Consistent greeting and qualification across every location",
      "Local hours, pricing, and promotions kept accurate per franchisee",
      "Timestamped lead delivery that ends volume and quality disputes",
      "Comparable performance data across the whole network",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Make the phone a brand standard you can actually enforce.",
    accent: "a brand standard you can actually enforce",
    body: "Send us your location count, territory map, and call volume. We will scope central intake with territory routing and network-wide reporting.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center Services",
    desc: "The inbound engine behind central intake across a multi-location network.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Home Services Call Center",
    desc: "Trade-specific dispatch and triage for home services franchise networks.",
    href: "/industries/home-services-call-center",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound appointment setting delivered consistently across every territory.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Donor Care & Fundraising Support for Nonprofits",
    desc: "US-based call center for nonprofits and foundations.",
    href: "/industries/nonprofit-call-center",
  },
  {
    title: "Candidate Screening & Shift Coverage for Staffing Agencies",
    desc: "US-based call center for staffing agencies and recruiters.",
    href: "/industries/staffing-recruiting-call-center",
  },
  {
    title: "Office Support Services",
    desc: "Outsourced office support: scheduling, data entry, document handling and virtual assistant coverage from US-based staff.",
    href: "/solutions/office-support-services",
  },
];

export default function FranchiseCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Franchise Call Center"
      title="Central Intake & Territory Routing for Franchise Networks"
      titleHighlight="Franchise Networks"
      subtitle="Franchisors use our US-based agents to run one national number, route every caller to the owning territory, apply a single brand standard, and finally get comparable data across locations."
      description="A franchisor can control signage, pricing, and uniforms, and still have no control over whether a customer's call gets answered — which across a network is usually the biggest uncontrolled variable in performance. We run central intake on one national number, route by your territory map, apply one greeting and qualification standard everywhere, keep each location's hours and promotions accurate, and report answer and conversion rates per location."
      features={features}
      benefits={benefits}
      image="/images/cc-team-collab.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
