import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "BPO Companies in Washington | Call Center Outsourcing WA";
const description =
  "Compare BPO companies in Washington for cloud and SaaS support, ecommerce, aerospace, and technical help desk across Seattle. US-based teams. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in washington",
    "bpo services in washington state",
    "call center companies in washington",
    "contact center outsourcing washington",
    "seattle bpo services",
    "seattle call center outsourcing",
    "washington call center services",
    "washington customer service outsourcing",
  ],
  alternates: { canonical: "/locations/washington" },
  openGraph: { title, description, url: "/locations/washington", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Washington BPO",
    heading: "The Cloud Capital Demands Technical Support at Scale",
    accent: "Technical Support at Scale",
    body: [
      "Seattle anchors the global cloud computing and ecommerce industry, and that concentration defines Washington's outsourcing market. Support demand here runs heavily technical — Tier 1–3 help desk, developer support, SaaS customer success, and marketplace seller support — the kind of work a scripted generalist cannot handle.",
      "Add a major aerospace manufacturing base and one of the largest ecommerce operations in the world, and Washington programs consistently require product-literate agents rather than commodity call handlers.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "In-State Washington Call Center vs Nationwide US BPO",
    intro: "How an in-state Washington provider compares to a distributed nationwide partner.",
    leftTitle: "In-State Washington Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Technical Support Depth",
        left: "Available at Seattle technology-market wages, which run high.",
        right: "Tier 1–3 technical support recruited nationally at sustainable cost.",
        leftYes: false,
      },
      {
        label: "Agent Cost",
        left: "Among the higher-cost West Coast markets, with rising wage floors.",
        right: "Nationwide talent pool well below Seattle metro seat cost.",
        leftYes: false,
      },
      {
        label: "Pacific-Time Alignment",
        left: "Native Pacific coverage aligned to Seattle business hours.",
        right: "Pacific-aligned pods plus follow-the-sun for global technical programs.",
        leftYes: true,
      },
      {
        label: "24/7 Developer & Marketplace Support",
        left: "Round-the-clock technical coverage carries a shift premium in-state.",
        right: "Follow-the-sun US coverage — overnight WA hours are another region's daytime.",
        leftYes: false,
      },
      {
        label: "Product-Literate Agents",
        left: "Strong local technical talent, competing with the region's tech employers.",
        right: "Product-trained agents recruited nationally without that hiring competition.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Competitive tech labor market; 45–60 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Washington team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Washington",
    intro: "The Washington sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "laptop", stat: "Cloud", title: "Cloud & SaaS", body: "Tier 1–3 technical support and developer help desk for Seattle cloud and software companies." },
      { icon: "shopping-bag", stat: "Ecommerce", title: "Ecommerce & Marketplace", body: "Seller support and order operations for Washington's large ecommerce sector." },
      { icon: "plane", stat: "Aerospace", title: "Aerospace & Manufacturing", body: "B2B support and technical help desk for Puget Sound aerospace suppliers." },
      { icon: "heart-pulse", stat: "HIPAA", title: "Healthcare & Life Sciences", body: "Patient access and HIPAA-compliant intake for Washington health systems." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "A Washington BPO Partner for Product-Led Technical Support",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Washington's leading industries share a hard requirement: agents who genuinely understand the product. Cloud developers, marketplace sellers, and enterprise software users ask questions no decision tree can answer, and the in-state technical labor market is expensive and fiercely contested.",
      "Contact Center USA staffs Washington programs with product-trained agents recruited nationally, Pacific-time aligned with follow-the-sun coverage for global technical programs, at a cost the Seattle market cannot match.",
    ],
    bullets: [
      "Product-trained agents for cloud, SaaS, and developer support",
      "Pacific-time alignment with follow-the-sun for global technical coverage",
      "24/7 marketplace and developer support without Seattle shift premiums",
      "Tier 1–3 technical support recruited outside the contested local market",
      "Statewide coverage — Seattle, Bellevue, Tacoma, Spokane, and Vancouver",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Washington?",
    accent: "BPO companies in Washington",
    body: "Whether you are a Seattle cloud company, a marketplace seller, or a Puget Sound aerospace supplier, Contact Center USA can stand up a dedicated Pacific-time team in under 48 hours.",
    ctaLabel: "Get a Free Washington BPO Quote",
    ctaHref: "/contact",
  },
];

export default function WashingtonPage() {
  return (
    <StatePageTemplate
      state="Washington"
      stateAbbr="WA"
      slug="washington"
      timezone="Pacific Time"
      overview={[
        "Washington's outsourcing market is defined by Seattle's role as a global cloud computing and ecommerce center. Support demand skews heavily technical — Tier 1–3 help desk, developer support, SaaS customer success, and marketplace seller support — where product literacy matters more than raw call volume capacity.",
        "A major Puget Sound aerospace manufacturing base and one of the largest ecommerce operations in the world round out the state's economy. The common thread is a need for agents who can hold a technical conversation rather than route a ticket.",
        "Contact Center USA supports Washington businesses with 100% US-based technical support, customer success, and back-office teams on Pacific time, with product-specific training and follow-the-sun coverage for global programs.",
      ]}
      metros={[
        { name: "Seattle", href: "/call-center-services-seattle", focus: "Global cloud and ecommerce hub. Tier 1–3 technical support, developer help desk, and marketplace seller support." },
        { name: "Bellevue & Eastside", focus: "Dense enterprise software and gaming cluster. Product-literate technical support and B2B customer success." },
        { name: "Tacoma", focus: "Logistics, port operations, and healthcare serving the South Sound. B2B and patient support programs." },
        { name: "Spokane", focus: "Healthcare, education, and back-office operations serving Eastern Washington at lower cost than Puget Sound." },
        { name: "Vancouver, WA", focus: "Manufacturing and technology in the Portland metro's northern edge. B2B technical and support programs." },
        { name: "Everett", focus: "Aerospace manufacturing and suppliers. B2B technical support and supply chain programs." },
      ]}
      industries={[
        { name: "SaaS & Technology", href: "/industries/saas-technology-support", note: "Tier 1–3 technical support and developer help desk for Seattle cloud and software companies." },
        { name: "Ecommerce & Retail", href: "/industries/ecommerce-customer-service-outsourcing", note: "Seller support and order operations for Washington's large ecommerce sector." },
        { name: "Logistics & Shipping", href: "/industries/logistics-shipping-call-center", note: "Port and supply chain support for Seattle and Tacoma logistics operations." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "HIPAA-compliant scheduling and patient intake for Washington health systems." },
      ]}
      faqs={[
        {
          question: "Why is Washington BPO so technical-support focused?",
          answer:
            "Seattle anchors the global cloud computing and ecommerce industry, so a large share of the state's support demand is Tier 1–3 technical help desk, developer support, and marketplace seller support. That work requires product-literate agents rather than scripted generalists.",
        },
        {
          question: "Can you provide product-trained agents for cloud and developer support?",
          answer:
            "Yes, and for Washington's leading industries it is essential. Cloud developers, marketplace sellers, and enterprise software users ask questions that cannot be answered from a decision tree. We train agents on your actual product, APIs, and documentation.",
        },
        {
          question: "How do you handle 24/7 technical coverage cost-effectively?",
          answer:
            "Developer and marketplace support often needs round-the-clock coverage, which carries a shift-differential premium in the expensive Seattle labor market. Because our workforce spans US timezones, Washington's overnight hours fall during another region's normal shift, and follow-the-sun coverage extends globally for international programs.",
        },
        {
          question: "Are your agents located in Washington?",
          answer:
            "Our agents are distributed across the United States. Washington clients get Pacific-time-aligned, product-trained teams at a cost structure the Seattle market cannot match, and without competing head-to-head against the region's technology employers for local headcount. All agents are 100% US-based.",
        },
        {
          question: "Do you support aerospace and manufacturing in Washington?",
          answer:
            "Yes. We provide B2B technical support and supply chain programs for Puget Sound aerospace suppliers and manufacturers. We do not staff roles requiring active security clearances, so cleared work stays in-house while the commercial support layer can be outsourced.",
        },
        {
          question: "How quickly can a Washington program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Pacific-time team typically in place within two weeks — compared to 45–60 day ramps common in Seattle's competitive technical labor market.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Washington", href: "/blog/top-10-bpo-companies-washington" }}
      seoContent={seoContent}
    />
  );
}
