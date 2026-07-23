import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "BPO Companies in Colorado | Call Center Outsourcing CO";
const description =
  "Compare BPO companies in Colorado for SaaS support, aerospace, healthcare, and outdoor retail. US-based teams on Mountain time. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in colorado",
    "bpo services in colorado",
    "call center companies in colorado",
    "contact center outsourcing colorado",
    "denver call center services",
    "denver bpo services",
    "colorado springs call center",
    "colorado customer service outsourcing",
  ],
  alternates: { canonical: "/locations/colorado" },
  openGraph: { title, description, url: "/locations/colorado", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Colorado BPO",
    heading: "Mountain Time Is a Strategic Advantage",
    accent: "Strategic Advantage",
    body: [
      "Colorado's position in Mountain Time is genuinely useful for national support operations. A single Denver-aligned shift reaches East Coast customers through their afternoon and West Coast customers from mid-morning, which is why companies running nationwide programs frequently anchor coverage here rather than on either coast.",
      "The state's economy reinforces that: a substantial Denver–Boulder technology cluster, aerospace and defense concentration around Colorado Springs, and an outdoor recreation industry whose brands need product-literate support rather than script readers.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "Local Colorado Call Center vs Nationwide US BPO",
    intro: "How a Denver-metro provider compares to a distributed nationwide partner.",
    leftTitle: "Local Denver-Area Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "National Timezone Reach",
        left: "Mountain-time base genuinely covers both coasts within one extended shift.",
        right: "Mountain-aligned pods plus follow-the-sun coverage for true 24/7 national programs.",
        leftYes: true,
      },
      {
        label: "Agent Cost",
        left: "Denver wage growth has been among the steepest in the Mountain West.",
        right: "Nationwide talent pool with cost structures below current Denver metro rates.",
        leftYes: false,
      },
      {
        label: "Technical Support Depth",
        left: "Boulder and Denver providers can staff technical roles, at technology-market wages.",
        right: "Tier 1–3 technical support recruited nationally at sustainable cost.",
        leftYes: false,
      },
      {
        label: "Wildfire & Blizzard Continuity",
        left: "Front Range wildfire and blizzard events have caused single-site disruptions.",
        right: "Distributed US workforce — Colorado weather events never take your queue offline.",
        leftYes: false,
      },
      {
        label: "Seasonal Outdoor Retail Surge",
        left: "Fixed headcount limits surge for ski season and outdoor gear peaks.",
        right: "Elastic capacity sized to Colorado's seasonal retail and tourism cycles.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Competitive Front Range market; 30–60 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Colorado team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Colorado",
    intro: "The Colorado sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "laptop", stat: "Tech", title: "Technology & SaaS", body: "Tier 1–3 technical support and customer success for Denver–Boulder software companies." },
      { icon: "plane", stat: "Aerospace", title: "Aerospace & Defense", body: "Cleared-adjacent B2B support and technical help desk for Colorado Springs employers." },
      { icon: "shopping-bag", stat: "Outdoor", title: "Outdoor & Consumer Brands", body: "Product-literate support and seasonal surge handling for Colorado outdoor retailers." },
      { icon: "heart-pulse", stat: "HIPAA", title: "Healthcare", body: "Patient scheduling and HIPAA-compliant intake for Front Range health systems." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "A Colorado BPO Partner for Product-Led Support",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Colorado's leading industries share a requirement that trips up generic call centers: agents need to actually understand the product. Outdoor gear buyers ask fit and technical-spec questions, SaaS users ask configuration questions, and neither is answerable from a decision tree.",
      "Contact Center USA staffs Colorado programs with agents trained on your product rather than on generic call flow, with Mountain-time alignment that reaches both coasts and elastic capacity for the state's pronounced seasonal cycles.",
    ],
    bullets: [
      "Product-trained agents for technical and specification-heavy support",
      "Mountain-time alignment reaching both coasts within one shift",
      "Elastic capacity for ski season, outdoor retail, and tourism peaks",
      "Tier 1–3 technical support for Denver–Boulder technology clients",
      "Wildfire and blizzard-resilient distributed workforce",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Colorado?",
    accent: "BPO companies in Colorado",
    body: "Whether you are a Boulder software company, a Colorado Springs defense supplier, or a Denver consumer brand, Contact Center USA can stand up a dedicated Mountain-time team in under 48 hours.",
    ctaLabel: "Get a Free Colorado BPO Quote",
    ctaHref: "/contact",
  },
];

export default function ColoradoPage() {
  return (
    <StatePageTemplate
      state="Colorado"
      stateAbbr="CO"
      slug="colorado"
      timezone="Mountain Time"
      overview={[
        "Colorado occupies a genuinely useful position for national customer operations. Mountain Time lets a single extended shift reach East Coast customers through their afternoon and West Coast customers from mid-morning, which is why companies running nationwide programs often anchor coverage on the Front Range rather than on a coast.",
        "The state's industry mix pushes support requirements toward technical depth. The Denver–Boulder technology corridor, the aerospace and defense concentration around Colorado Springs, and a substantial outdoor recreation industry all need agents who can hold a product conversation, not just route a ticket.",
        "Contact Center USA supports Colorado businesses with 100% US-based inbound, outbound, technical support, and back-office teams on Mountain time, with product-specific training and elastic capacity for the state's seasonal cycles.",
      ]}
      metros={[
        { name: "Denver", focus: "The state's commercial center and a growing technology hub. SaaS support, financial servicing, and large-scale customer operations." },
        { name: "Boulder", focus: "Dense software, aerospace, and research cluster. Tier 1–3 technical support and product-literate customer success." },
        { name: "Colorado Springs", focus: "Aerospace, defense, and cybersecurity employers. B2B technical support and government-adjacent services." },
        { name: "Fort Collins", focus: "University-driven talent base with technology manufacturing and consumer brands." },
        { name: "Aurora", focus: "Healthcare systems and a large diverse residential base. Patient access and multilingual consumer support." },
        { name: "Vail & Mountain Resorts", focus: "Ski and hospitality operations with pronounced winter and summer seasonal swings." },
      ]}
      industries={[
        { name: "SaaS & Technology", href: "/industries/saas-technology-support", note: "Tier 1–3 technical support and customer success for Denver–Boulder software companies." },
        { name: "Ecommerce & Retail", href: "/industries/ecommerce-customer-service-outsourcing", note: "Product-literate support and seasonal surge handling for Colorado outdoor and consumer brands." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "HIPAA-compliant scheduling and patient intake for Front Range health systems." },
        { name: "Travel & Hospitality", href: "/industries/travel-hospitality-call-center", note: "Reservations and guest services for Colorado mountain resorts and tourism operators." },
      ]}
      faqs={[
        {
          question: "Why do national programs often anchor coverage in Mountain Time?",
          answer:
            "A single extended Mountain-time shift overlaps meaningfully with both coasts — reaching Eastern customers through their afternoon and Pacific customers from mid-morning. That makes it possible to cover the continental US with fewer shift handoffs than a coast-anchored model requires.",
        },
        {
          question: "Can you provide product-trained agents rather than script readers?",
          answer:
            "Yes, and for Colorado's leading industries it is usually essential. Outdoor gear customers ask fit and specification questions and SaaS users ask configuration questions — neither is answerable from a decision tree. We train agents on your actual product and documentation.",
        },
        {
          question: "Do you support aerospace and defense employers in Colorado Springs?",
          answer:
            "We support B2B technical help desk and customer support programs for aerospace and defense suppliers. We do not staff roles requiring active security clearances, so cleared work stays in-house while the surrounding commercial support layer can be outsourced.",
        },
        {
          question: "Can you handle ski season and outdoor retail surges?",
          answer:
            "Yes. Colorado's seasonal swings are pronounced — mountain resort and outdoor gear volume can multiply during peak windows. Capacity scales up for those periods and back down afterward without fixed year-round headcount.",
        },
        {
          question: "Are your agents located in Colorado?",
          answer:
            "Our agents are distributed across the United States. Colorado clients get Mountain-time-aligned teams trained on their product and market, without single-site exposure to Front Range wildfire and blizzard events. All agents are 100% US-based.",
        },
        {
          question: "How quickly can a Colorado program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Mountain-time team typically in place within two weeks — compared to 30–60 day ramps common in the competitive Front Range hiring market.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Colorado", href: "/blog/top-10-bpo-companies-colorado" }}
      seoContent={seoContent}
    />
  );
}
