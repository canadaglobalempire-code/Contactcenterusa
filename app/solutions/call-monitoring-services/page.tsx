import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Monitoring Services | Contact Center USA",
  description:
    "US-based call monitoring services with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "call monitoring services",
    "call quality monitoring bpo",
    "call center qa services",
    "call monitoring outsourcing",
    "qa scorecards bpo",
    "speech analytics services",
    "pci compliant call recording",
    "contact center quality assurance",
  ],
  alternates: { canonical: "/solutions/call-monitoring-services" },
};

const features = [
  {
    title: "Live Call Monitoring & Whisper Coaching",
    desc: "Supervisors can listen to calls in real time and provide whisper coaching to agents without the customer hearing, enabling on-the-spot corrections and faster skill development across your team.",
  },
  {
    title: "Automated Call Recording & Storage",
    desc: "Every inbound and outbound call is automatically recorded, encrypted, and stored in compliance with PCI-DSS and HIPAA standards. Easily search, retrieve, and export recordings for training or dispute resolution.",
  },
  {
    title: "Custom QA Scorecards",
    desc: "We build tailored quality assurance scorecards aligned to your brand standards, compliance requirements, and customer experience goals — then score every evaluated interaction consistently against those benchmarks.",
  },
  {
    title: "Speech Analytics & Sentiment Detection",
    desc: "AI-powered speech analytics identify trending topics, detect customer sentiment in real time, and flag calls that need immediate supervisor attention — turning raw call data into actionable business intelligence.",
  },
  {
    title: "Agent Performance Dashboards",
    desc: "Interactive dashboards give supervisors and managers instant visibility into agent-level metrics including QA scores, adherence trends, first-call resolution rates, and coaching completion tracking.",
  },
  {
    title: "Compliance & Regulatory Auditing",
    desc: "Automated compliance monitoring ensures every call meets TCPA, PCI-DSS, HIPAA, and industry-specific regulatory requirements. Flagged calls are routed for immediate review to mitigate risk before it escalates.",
  },
];

const benefits = [
  "Real-time call listening and coaching",
  "PCI-DSS and HIPAA compliant recording",
  "AI-powered speech analytics",
  "Custom QA scorecards and benchmarks",
  "Agent performance trend reporting",
  "Automated compliance flagging",
];

const stats = [
  { value: 40, suffix: "%", label: "Improvement in QA Scores" },
  { value: 99.9, suffix: "%", label: "Call Recording Uptime", decimals: 1 },
  { value: 2, suffix: "M+", label: "Calls Monitored Annually" },
  { value: 25, suffix: "%", label: "Reduction in Compliance Issues" },
];

const testimonial = {
  quote:
    "Since partnering with Contact Center USA for call monitoring, our QA scores have improved by 40% and compliance violations dropped to near zero. Their scorecards and coaching workflows transformed how we develop our agents.",
  name: "K.L.",
  title: "Director of Quality Assurance",
  company: "A National Insurance Provider",
  initials: "KL",
};

const faqs = [
  {
    question: "How does live call monitoring work without disrupting the customer?",
    answer:
      "Our platform supports silent monitoring, whisper coaching, and barge-in capabilities. Supervisors join the call in listen-only mode by default. Whisper mode lets them coach the agent privately, and barge-in allows direct intervention when needed — all invisible to the customer unless the supervisor chooses otherwise.",
  },
  {
    question: "Are call recordings stored securely and in compliance with regulations?",
    answer:
      "Yes. All recordings are encrypted at rest and in transit, stored in SOC 2 Type II certified data centers, and retained according to your specific compliance requirements. We support PCI-DSS, HIPAA, TCPA, and industry-specific regulations with configurable retention policies.",
  },
  {
    question: "Can you customize QA scorecards for our specific needs?",
    answer:
      "Absolutely. We work with your quality and training teams to build scorecards that reflect your brand voice, compliance obligations, and customer experience priorities. Scorecards can be weighted, categorized, and updated as your standards evolve.",
  },
  {
    question: "What kind of insights does speech analytics provide?",
    answer:
      "Our speech analytics engine detects customer sentiment, identifies trending keywords and phrases, flags compliance risks, and surfaces coaching opportunities. You receive automated reports highlighting call drivers, escalation patterns, and areas where targeted training can improve outcomes.",
  },
  {
    question: "How quickly can we get started with call monitoring services?",
    answer:
      "Most clients are fully operational within two to three weeks. We handle platform configuration, scorecard development, agent calibration sessions, and supervisor training during onboarding to ensure your monitoring program delivers value from day one.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Monitoring Services in USA",
    heading: "The call center QA services partner for brands that refuse to ship a bad interaction.",
    accent: "refuse to ship a bad interaction",
    body: [
      "Contact Center USA is one of the best call monitoring services providers in the USA — a 100% US-based call quality monitoring BPO with certified QA analysts, custom scorecards, and enterprise-grade recording infrastructure across every channel.",
      "For enterprises searching for the best call center QA services in the USA, we deliver consistent quality uplift, defensible compliance evidence, and agent-development programs that actually move QA scores and CSAT in the same direction.",
    ],
    stats: [
      { stat: "40%", label: "Average lift in QA scores within 90 days of program launch" },
      { stat: "2M+", label: "Calls monitored and scored annually across client portfolios" },
      { stat: "99.9%", label: "Recording platform uptime with PCI-DSS & HIPAA controls" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House QA Team vs. Outsourced Call Monitoring Services",
    intro:
      "Internal QA teams work — until they don't. Sampling drops, calibration drifts, and compliance coverage lags volume. Here's how a dedicated call quality monitoring BPO compares to running call center QA services in-house.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Monitoring Coverage",
        left: "3–5% of calls sampled on average — gaps across channels, shifts, and agents.",
        right: "100% call capture with 10–20% human-evaluated plus AI coverage of every interaction.",
        leftYes: false,
      },
      {
        label: "Scorecard Calibration",
        left: "Inconsistent inter-rater reliability; scorecards rarely refreshed against current policy.",
        right: "Weekly calibration sessions, locked scorecards, and drift-detection on analyst scoring.",
        leftYes: false,
      },
      {
        label: "Speech Analytics",
        left: "Point-solution licenses under-utilized; models not tuned to your portfolio.",
        right: "Tuned topic, sentiment, and compliance models with dedicated analytics engineers.",
        leftYes: false,
      },
      {
        label: "Compliance Evidence",
        left: "Ad-hoc reports produced reactively when regulators or clients ask.",
        right: "Audit-ready TCPA, PCI-DSS, HIPAA, and state-specific compliance dashboards, always on.",
        leftYes: false,
      },
      {
        label: "Coaching Linkage",
        left: "Scores land in a spreadsheet; supervisors lack time to coach.",
        right: "Targeted coaching tickets with verbatim clips pushed to supervisors within 24 hours.",
        leftYes: false,
      },
      {
        label: "Cost to Scale",
        left: "$80–$120K fully loaded per QA FTE plus platform licensing and hidden admin time.",
        right: "Flat per-evaluated-interaction pricing; scale up or down without fixed headcount.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Call Quality Monitoring Process",
    intro:
      "Every engagement flows through the same rigorous five-stage workflow — designed to improve agent behavior, not just produce scores.",
    steps: [
      {
        title: "Program Design",
        body: "We build scorecards mapped to your brand voice, regulatory obligations, and CX metrics — then calibrate with your leadership team.",
      },
      {
        title: "Recording & Ingest",
        body: "Secure capture across voice, chat, email, and SMS with PCI-DSS tokenization and HIPAA-grade encryption at rest and in transit.",
      },
      {
        title: "AI + Human Evaluation",
        body: "Speech analytics triages 100% of calls; certified analysts human-score a statistically valid sample plus every AI-flagged risk call.",
      },
      {
        title: "Coaching & Feedback",
        body: "Actionable coaching tickets with verbatim clips pushed to supervisors, paired with agent-facing acknowledgment and goal tracking.",
      },
      {
        title: "Reporting & Calibration",
        body: "Executive dashboards, weekly trend reports, and monthly calibration sessions keep scoring consistent and the program evolving.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries That Rely on Our Call Center QA Services",
    intro:
      "Every regulated industry has its own QA overlays and compliance evidence requirements. Our scorecards and analytics models are tuned for the sectors most exposed to call center risk.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Pharma",
        body: "PHI handling audits, Medicare Marketing Guideline monitoring, and empathy scoring for patient-facing interactions.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Financial Services",
        body: "Card-holder data redaction, Reg E/Z disclosure checks, and fraud-indicator monitoring across contact channels.",
      },
      {
        icon: "shield",
        stat: "TCPA",
        title: "Insurance & Collections",
        body: "Consent capture evidence, mini-Miranda disclosure tracking, and Reg F 7-in-7 cadence monitoring.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Technology",
        body: "Technical accuracy scoring, escalation adherence, and renewal/churn-signal detection across tier 1 and tier 2 support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Call Monitoring Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Generic BPO QA teams apply the same scorecard to every client, miss industry-specific regulatory overlays, and deliver reports your supervisors never open. Offshore QA vendors struggle with US accents, idioms, and compliance context — leading to inconsistent scoring and missed risk signals on your most sensitive calls.",
      "Contact Center USA is different: a US-based call quality monitoring BPO with analysts trained on your industry, scorecards calibrated to your policies, and coaching workflows engineered so QA actually changes behavior on the floor.",
    ],
    bullets: [
      "100% US-based QA analysts with industry-specific certifications",
      "PCI-DSS, HIPAA, SOC 2 Type II, and TCPA compliance built in",
      "AI-assisted monitoring covering 100% of calls, not 3% samples",
      "Scorecards calibrated weekly with measured inter-rater reliability",
      "Coaching tickets, not PDFs — QA that actually reaches the floor",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to raise the bar on call quality monitoring?",
    accent: "raise the bar",
    body: "If your QA coverage is spotty, compliance evidence is reactive, or your scorecards haven't been calibrated in a year, book a free call monitoring assessment. We'll benchmark your program and show expected QA, CSAT, and compliance lift before you move a single recording.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with custom scripts, intelligent routing, and quality-monitored agents.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Customer Experience Management",
    desc: "End-to-end CX strategy including journey mapping, NPS programs, and voice-of-customer analytics.",
    href: "/solutions/customer-experience-management",
  },
  {
    title: "Technical Support Outsourcing",
    desc: "Tiered technical support with monitored quality and compliance across every interaction.",
    href: "/solutions/technical-support-outsourcing",
  },
];

export default function CallMonitoringServicesPage() {
  return (
    <ServicePageTemplate
      badge="Call Monitoring Services"
      title="Professional Call Monitoring & Quality Assurance Solutions"
      titleHighlight="Quality Assurance"
      subtitle="Elevate agent performance, ensure compliance, and deliver consistently exceptional customer experiences with our comprehensive call monitoring platform."
      description="Our call monitoring services combine real-time listening, AI-powered analytics, and custom QA scorecards to give you complete visibility into every customer interaction. From live whisper coaching to automated compliance auditing, we provide the tools and expertise to continuously improve your contact center quality."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-monitor.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
