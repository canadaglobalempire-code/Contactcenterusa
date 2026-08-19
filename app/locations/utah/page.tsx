import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "Utah Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in Utah for outbound sales, SaaS support, inside sales, and back office on Mountain time. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in utah",
    "bpo services in utah",
    "call center companies in utah",
    "contact center outsourcing utah",
    "salt lake city call center",
    "utah call center services",
    "silicon slopes bpo",
    "utah outbound call center",
  ],
  alternates: { canonical: "/locations/utah" },
  openGraph: { title, description, url: "/locations/utah", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Utah BPO",
    heading: "The Wasatch Front Is Built for Outbound",
    accent: "Built for Outbound",
    body: [
      "The corridor running from Ogden through Salt Lake City to Provo has one of the most distinctive labor markets in US customer operations. A large multilingual talent pool created by widespread international service experience, combined with the Silicon Slopes technology cluster, has made the Wasatch Front a national center for outbound sales, inside sales, and SaaS customer success.",
      "That specialization is why Utah shows up on shortlists for programs other states struggle to staff: multilingual outbound, technical inside sales, and SaaS support that requires agents who can actually hold a product conversation rather than read a script.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "Local Utah Call Center vs Nationwide US BPO",
    intro:
      "Utah has genuine local BPO depth, which makes the comparison sharper here than in most states. These are the real trade-offs.",
    leftTitle: "Local Wasatch Front Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Outbound & Inside Sales Talent",
        left: "Genuinely strong — Utah's outbound talent pool is among the deepest in the country.",
        right: "Purpose-built outbound and SDR pods drawing from Utah and the wider US market.",
        leftYes: true,
      },
      {
        label: "Multilingual Capacity",
        left: "Unusually strong language depth for a state of Utah's size.",
        right: "Multilingual programs staffed nationally, so language coverage is not capped by one metro's pool.",
        leftYes: true,
      },
      {
        label: "Agent Cost",
        left: "Salt Lake and Provo wage growth has tracked the tech boom upward.",
        right: "Nationwide talent pool with cost structures below current Wasatch Front rates.",
        leftYes: false,
      },
      {
        label: "TCPA & Outbound Compliance",
        left: "Varies by provider; high-volume outbound raises real TCPA exposure.",
        right: "Documented TCPA program with consent management and call monitoring built in.",
        leftYes: false,
      },
      {
        label: "Hiring Competition",
        left: "Competing directly against Silicon Slopes tech employers for the same candidates.",
        right: "National recruiting reach removes dependence on one tight metro labor market.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Tight Wasatch Front market typically means 30–45 day ramps.",
        right: "Pilot live in under 48 hours; full Utah-aligned team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding a Utah Program in 5 Steps",
    intro: "From Lehi SaaS companies to Ogden manufacturers, Utah clients onboard through the same process.",
    steps: [
      { title: "Utah Discovery Call", body: "30-minute scoping call covering Mountain-time volumes, outbound compliance, and channel mix." },
      { title: "Solution Design", body: "Staffing plan built for your program type — outbound SDR, inbound support, or blended." },
      { title: "Agent Training", body: "US agents trained on your product, brand voice, and TCPA or industry compliance requirements." },
      { title: "Go Live", body: "Pilot launch in under 48 hours with dedicated client success manager and QA monitoring." },
      { title: "Scale & Optimize", body: "Weekly scorecards on connect rate, conversion, and quality — with elastic capacity for growth." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "The Utah BPO Alternative for Sales-Led Programs",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Utah's outbound-heavy market is an advantage and a risk. The talent is real, but so is the TCPA exposure that comes with high-volume outbound, and the Silicon Slopes hiring boom has made experienced agents harder to retain.",
      "Contact Center USA gives Utah businesses purpose-built outbound and inside-sales pods with documented consent management, plus the inbound and back-office coverage that growing SaaS companies need as they mature past pure acquisition.",
    ],
    bullets: [
      "Dedicated outbound, SDR, and appointment-setting pods with conversion reporting",
      "Documented TCPA consent management and call monitoring for outbound programs",
      "Mountain-time alignment for Wasatch Front business hours",
      "SaaS-literate agents for Tier 1–2 technical support and customer success",
      "No long-term contracts — scale with funding rounds and growth cycles",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Utah?",
    accent: "BPO companies in Utah",
    body: "Whether you are a Lehi SaaS company, a Salt Lake financial firm, or a Provo services business, Contact Center USA can stand up a dedicated Mountain-time team in under 48 hours.",
    ctaLabel: "Get a Free Utah BPO Quote",
    ctaHref: "/contact",
  },
];

export default function UtahPage() {
  return (
    <StatePageTemplate
      state="Utah"
      stateAbbr="UT"
      slug="utah"
      timezone="Mountain Time"
      overview={[
        "Utah punches far above its population in customer operations. The Wasatch Front corridor — Ogden, Salt Lake City, Provo, and Lehi — has long been a national center for outbound sales and inside sales, supported by an unusually deep multilingual talent pool and a culture of early professional sales experience.",
        "The rise of the Silicon Slopes technology cluster added a second layer: SaaS customer success, technical support, and product-literate inside sales. It also tightened the labor market considerably, as BPO operators now compete directly with funded technology employers for the same candidates.",
        "Contact Center USA supports Utah businesses with 100% US-based outbound, inbound, technical support, and back-office teams on Mountain time, with the TCPA discipline that high-volume outbound programs require.",
      ]}
      metros={[
        { name: "Salt Lake City", focus: "The state's commercial and financial center. Financial servicing, healthcare administration, and large-scale inbound and outbound operations." },
        { name: "Provo & Orem", focus: "University-driven talent base with exceptional multilingual depth. Outbound sales, appointment setting, and multilingual support programs." },
        { name: "Lehi & Silicon Slopes", focus: "Dense SaaS and technology cluster. Tier 1–2 technical support, customer success, and product-literate inside sales." },
        { name: "Ogden", focus: "Manufacturing, aerospace suppliers, and logistics. B2B support and back-office processing programs." },
        { name: "St. George", focus: "Fast-growing Southern Utah market with healthcare, tourism, and retiree-facing services." },
        { name: "Park City", focus: "Hospitality and resort operations with sharp seasonal volume swings around ski and summer seasons." },
      ]}
      industries={[
        { name: "SaaS & Technology", href: "/industries/saas-technology-support", note: "Tier 1–2 technical support and customer success for Silicon Slopes software companies." },
        { name: "Financial Services", href: "/industries/financial-services-call-center", note: "Account servicing and compliance-aware support for Salt Lake financial employers." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "Patient scheduling and HIPAA-compliant intake for Utah health systems." },
        { name: "Travel & Hospitality", href: "/industries/travel-hospitality-call-center", note: "Reservations and guest services for Park City and Southern Utah resort operators." },
      ]}
      faqs={[
        {
          question: "Why is Utah known for outbound call centers?",
          answer:
            "The Wasatch Front has an unusually large pool of people with early professional sales experience and second-language fluency, which suits outbound and multilingual programs particularly well. That reputation has drawn outbound-heavy operators to the state for decades, and it is why Utah appears on shortlists for programs other markets struggle to staff.",
        },
        {
          question: "What TCPA risks come with Utah outbound programs?",
          answer:
            "Any high-volume outbound program carries TCPA exposure regardless of state — consent records, calling windows, and do-not-call scrubbing all have to be provably managed. Because Utah programs skew outbound, this comes up more often here. We run documented consent management and call monitoring on every outbound program.",
        },
        {
          question: "Do you support SaaS companies in Silicon Slopes?",
          answer:
            "Yes. Lehi and the surrounding technology corridor generate demand for Tier 1–2 technical support, customer success, and product-literate inside sales. We staff those programs with agents trained on your product rather than generalists working from a script.",
        },
        {
          question: "Are your agents located in Utah?",
          answer:
            "Our agents are distributed across the United States. Utah clients get teams scheduled to Mountain time and trained on their market, without competing head-to-head against Silicon Slopes employers for local headcount. All agents are 100% US-based.",
        },
        {
          question: "Can you handle seasonal resort volume?",
          answer:
            "Yes. Park City and Southern Utah hospitality clients see dramatic seasonal swings. Capacity scales up for peak ski and summer seasons and back down afterward, without fixed year-round headcount.",
        },
        {
          question: "How quickly can a Utah program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Mountain-time team typically in place within two weeks — faster than the 30–45 day ramps common in the tight Wasatch Front hiring market.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Utah", href: "/blog/top-10-bpo-companies-utah" }}
      seoContent={seoContent}
    />
  );
}
