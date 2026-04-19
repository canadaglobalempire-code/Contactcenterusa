import type { Metadata } from "next";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Outbound Call Center Services USA | Outbound BPO USA | Outbound Sales Outsourcing",
  description:
    "US-based outbound call center services and outbound BPO USA. TCPA-compliant outbound sales outsourcing, telemarketing, win-back, and survey campaigns with 200–400% average ROI.",
  keywords: [
    "outbound call center services",
    "outbound bpo usa",
    "outbound sales outsourcing",
    "outbound telemarketing services",
    "tcpa compliant outbound",
    "outbound call center companies",
    "outbound campaign bpo",
    "outsourced outbound sales",
  ],
  alternates: { canonical: "/solutions/outbound-call-center-services" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Outbound Call Center Services in USA",
    heading: "The outbound BPO USA revenue teams trust when dials have to turn into deals.",
    accent: "dials have to turn into deals",
    body: [
      "Contact Center USA is one of the best outbound call center services providers in the USA — a 100% US-based outbound BPO USA partner running TCPA-compliant outbound sales outsourcing, telemarketing, win-back, survey, and appointment-setting campaigns for B2B and B2C brands.",
      "For revenue and marketing leaders searching for outbound sales outsourcing that can actually move pipeline and cost per acquisition in the right direction, we staff domestic outbound agents, scrub against National and state DNC registries daily, and run every campaign through a compliance review before a single dial.",
    ],
    stats: [
      { stat: "200–400%", label: "Typical outbound campaign ROI across client book" },
      { stat: "22%", label: "Average conversion rate on qualified outbound calling programs" },
      { stat: "15–25%", label: "Lapsed-customer recovery rate on win-back campaigns" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Outbound vs. Outbound Call Center Services BPO",
    intro:
      "Every revenue leader weighs the same trade-off: build an outbound team internally or partner with a specialized outbound BPO. Here's how the two models actually compare on the metrics that drive pipeline, CPA, and regulatory risk.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to First Conversion",
        left: "3–5 months to recruit, train, and ramp an in-house outbound team to production.",
        right: "Campaigns live in 2–3 weeks from kickoff — trained reserve pool and proven playbooks.",
        leftYes: false,
      },
      {
        label: "Cost per Qualified Contact",
        left: "$85–$120K per outbound FTE fully loaded; most dial time wasted on busy lines and voicemails.",
        right: "30–45% lower blended cost with predictive dialers, list hygiene, and trained closers.",
        leftYes: false,
      },
      {
        label: "TCPA / DNC Compliance",
        left: "Compliance burden sits on your legal team; inconsistent DNC scrubbing exposes risk.",
        right: "Daily National and state DNC scrubs, consent management, and audited TCPA program.",
        leftYes: false,
      },
      {
        label: "Dialer & Tech Stack",
        left: "Predictive dialer, CRM, and enablement tools paid per seat regardless of use.",
        right: "Enterprise dialer, list hygiene, and engagement stack included in managed-service pricing.",
        leftYes: false,
      },
      {
        label: "Scalability for Campaigns",
        left: "Hiring cycles of 60–90 days kill responsiveness to launch, win-back, or seasonal spikes.",
        right: "Scale outbound capacity up or down in days — aligned to campaign calendar.",
        leftYes: false,
      },
      {
        label: "Reporting & Optimization",
        left: "Weekly reports built in Excel; no real-time visibility into dials, connects, or conversion.",
        right: "Real-time dashboards on dials, connects, conversion, and revenue per call.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our TCPA-Compliant Outbound Campaign Flow",
    intro:
      "Every outbound program runs through the same five-stage flow — engineered to maximize conversion while keeping your brand and your legal team out of TCPA trouble.",
    steps: [
      {
        title: "Campaign Design",
        body: "We co-design targeting, offers, scripts, and rebuttals with your marketing and compliance leaders.",
      },
      {
        title: "List Hygiene & Compliance",
        body: "Lists scrubbed against National DNC, state DNC, and your internal suppression lists before go-live.",
      },
      {
        title: "Team Training",
        body: "Domestic outbound agents certified on product, rebuttals, and TCPA rules before making a single dial.",
      },
      {
        title: "Pilot & A/B Test",
        body: "Controlled two-week pilot with A/B testing on scripts, time of day, and offers before scale.",
      },
      {
        title: "Scale & Optimize",
        body: "Full production with daily dashboards and weekly optimization on conversion, CPA, and ROI.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Power With Outbound BPO USA",
    intro:
      "Outbound motions differ sharply by industry. Our outbound call center services pods are trained on the vertical-specific playbooks that actually convert.",
    items: [
      {
        icon: "laptop",
        stat: "SaaS",
        title: "B2B Technology & SaaS",
        body: "Outbound prospecting, appointment setting, and win-back for mid-market and enterprise SaaS.",
      },
      {
        icon: "landmark",
        stat: "TCPA",
        title: "Financial Services",
        body: "Licensed outbound for banking, lending, insurance, and FinTech under strict TCPA discipline.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Payers",
        body: "Member engagement, HEDIS outreach, and patient recall with HIPAA-compliant outbound.",
      },
      {
        icon: "shopping-bag",
        stat: "DTC",
        title: "Retail & Ecommerce",
        body: "Cart recovery, win-back, and VIP loyalty outbound programs for DTC and retail brands.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Outbound Sales Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most outbound call center services vendors run offshore dial farms with scripted readers and no ownership of TCPA compliance or conversion economics. The dial counts look impressive; the conversion rates and class-action exposure tell a different story.",
      "Contact Center USA is different: a 100% US-based outbound BPO USA partner with domestic agents, daily DNC scrubbing, and playbooks refined across hundreds of campaigns. We don't just dial — we convert, with the compliance discipline your legal team can defend.",
    ],
    bullets: [
      "100% US-based outbound agents — no offshore dialing or nearshore handoffs",
      "Daily National and state DNC scrubs with audited TCPA compliance program",
      "Enterprise predictive dialer, list hygiene, and engagement stack included",
      "Real-time dashboards on dials, connects, conversion, and revenue per call",
      "Elastic capacity — ramp campaigns up for launches and down after peaks",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better outbound call center services partner?",
    accent: "better outbound call center services",
    body: "If your outbound campaigns are plateauing, your CPA is creeping, or your TCPA posture is a liability, request a free outbound assessment. We'll pressure-test targeting, offer, and compliance before you sign anything.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function Page() {
  return <Content seoContent={seoContent} />;
}
