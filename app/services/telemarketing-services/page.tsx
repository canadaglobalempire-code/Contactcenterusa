import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Telemarketing Services | Contact Center USA",
  description:
    "US-based telemarketing services with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "telemarketing services",
    "telemarketing bpo usa",
    "outbound telemarketing outsourcing",
    "telemarketing companies usa",
    "b2b telemarketing services",
    "cold calling services",
    "tcpa compliant telemarketing",
    "telemarketing call center",
  ],
  alternates: { canonical: "/services/telemarketing-services" },
};

const features = [
  {
    title: "Cold Calling & Prospecting",
    desc: "Trained telemarketing agents who deliver compelling pitches, handle objections naturally, and generate interest with prospects who have never heard of your brand — turning cold lists into warm conversations.",
  },
  {
    title: "Campaign Strategy & Script Development",
    desc: "End-to-end campaign planning including audience segmentation, script writing, A/B testing, and ongoing optimization to ensure every calling campaign performs at its peak from day one through completion.",
  },
  {
    title: "Lead Qualification & Handoff",
    desc: "Systematic lead qualification that screens prospects against your criteria, gathers key intelligence, and delivers sales-ready leads to your team with detailed notes — no more wasted follow-up calls.",
  },
  {
    title: "Market Research & Surveys",
    desc: "Phone-based market research and customer surveys that gather quantitative and qualitative insights to inform your product development, marketing strategy, and competitive positioning decisions.",
  },
  {
    title: "Event & Webinar Promotion",
    desc: "Targeted outreach campaigns to drive registrations and attendance for trade shows, webinars, product launches, and corporate events — with confirmation calls and reminder sequences that maximize show rates.",
  },
  {
    title: "Do-Not-Call Compliance Management",
    desc: "Rigorous TCPA compliance with automated DNC list scrubbing, consent management, call time restrictions, and detailed audit trails that protect your business from regulatory penalties and reputational damage.",
  },
];

const benefits = [
  "TCPA & TSR-compliant calling",
  "Professional, US-based callers",
  "Custom script development & A/B testing",
  "Real-time campaign dashboards",
  "Predictive dialer technology",
  "Flexible campaign scaling",
];

const stats = [
  { value: 320, suffix: "K+", label: "Calls Made Monthly" },
  { value: 12, suffix: "%", label: "Average Contact-to-Lead Rate" },
  { value: 100, suffix: "%", label: "DNC Compliance Rate" },
  { value: 4.5, suffix: "x", label: "ROI on Campaign Spend", decimals: 1 },
];

const testimonial = {
  quote:
    "Contact Center USA ran our product launch telemarketing campaign and delivered 4.5x ROI. Their agents were professional, persistent, and fully compliant. We've since made them our ongoing telemarketing partner for all outbound campaigns.",
  name: "M.J.",
  title: "Marketing Director",
  company: "A National Business Services Company",
  initials: "MJ",
};

const faqs = [
  {
    question: "How do you ensure telemarketing compliance with TCPA and TSR regulations?",
    answer:
      "We maintain comprehensive compliance programs including automated DNC list scrubbing against federal and state registries, consent tracking for every contact, calling time window enforcement, and mandatory disclosures in every call. All agents complete TCPA and TSR training, and our compliance team audits campaigns weekly.",
  },
  {
    question: "Can you develop scripts that sound natural rather than robotic?",
    answer:
      "Absolutely. Our script development team creates conversational frameworks rather than rigid word-for-word scripts. Agents are trained to use the framework as a guide while adapting naturally to each conversation. We A/B test different approaches and continuously refine based on conversion data and call recordings.",
  },
  {
    question: "What industries do your telemarketing services support?",
    answer:
      "We support telemarketing campaigns across financial services, healthcare, technology, home services, education, nonprofit, insurance, and many other sectors. Each campaign is staffed with agents who have relevant industry experience and complete specialized training for your specific products, services, and regulatory requirements.",
  },
  {
    question: "How do you handle call lists and data management?",
    answer:
      "We accept call lists in any standard format, clean and de-duplicate the data, scrub against DNC registries, segment by your targeting criteria, and load into our dialing platform. Throughout the campaign, we track dispositions, update records, and provide refreshed data back to you. All data handling is SOC 2 compliant.",
  },
  {
    question: "What reporting do you provide during and after campaigns?",
    answer:
      "You receive real-time dashboards showing calls attempted, contacts reached, conversations completed, leads generated, and conversion rates. Weekly reports include agent performance breakdowns, script effectiveness analysis, and optimization recommendations. Post-campaign, we deliver comprehensive results analysis with ROI calculations and strategic insights for future campaigns.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Telemarketing BPO in USA",
    heading: "The telemarketing services partner that drives pipeline without putting your brand on a TCPA complaint list.",
    accent: "drives pipeline",
    body: [
      "Contact Center USA is one of the best telemarketing services providers in the USA — a 100% US-based telemarketing BPO USA operation that runs compliant, high-conversion outbound telemarketing outsourcing campaigns for B2B, B2C, healthcare, financial services, and nonprofit clients.",
      "If you are evaluating telemarketing companies in the USA for lead generation, appointment setting, market research, or product launch support, our combination of predictive dialer technology, US-based agent pods, and built-in TCPA / TSR compliance delivers campaigns that actually produce qualified conversations.",
    ],
    stats: [
      { stat: "4.5x", label: "Average ROI on outbound telemarketing campaign spend" },
      { stat: "12%", label: "Average contact-to-qualified-lead conversion rate" },
      { stat: "0", label: "Material TCPA / TSR compliance findings across 10+ years" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Telemarketing vs. Outsourced Telemarketing BPO USA",
    intro:
      "Every marketing and sales leader debates the same thing: build an SDR or tele-sales team internally, or run outbound telemarketing outsourcing through a specialist BPO. Here is how the two compare on speed, cost, compliance, and results.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Dials Per Day per Agent",
        left: "50-80 dials — manual dialing, no call list automation.",
        right: "200-300 dials — predictive and power dialer technology, auto-dispositioning.",
        leftYes: false,
      },
      {
        label: "TCPA & TSR Compliance",
        left: "Compliance burden on your legal team — DNC scrubbing often manual or missing.",
        right: "Automated federal, state, and internal DNC scrubbing plus call time enforcement.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "8-12 weeks to hire, train, and productively deploy a new outbound team.",
        right: "New telemarketing campaigns live in 15-20 business days with trained US agents.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fixed salary, benefits, dialer license, and tools — whether volume is flat or spiking.",
        right: "Variable per-hour or per-conversion pricing — scale up and down without fixed cost.",
        leftYes: false,
      },
      {
        label: "Script & A/B Testing",
        left: "Scripts rarely tested — once-a-year refresh at best.",
        right: "Weekly A/B testing of opener, value prop, and offer based on real conversion data.",
        leftYes: false,
      },
      {
        label: "Reporting & Attribution",
        left: "Dispositions manually logged into CRM with inconsistent discipline.",
        right: "Real-time dashboards with agent, list, script, and offer-level conversion attribution.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Outbound Telemarketing Outsourcing Process",
    intro:
      "Every telemarketing services campaign — B2B lead gen, B2C acquisition, or market research — flows through the same five-stage playbook engineered to produce qualified conversations fast.",
    steps: [
      {
        title: "Campaign Strategy & ICP",
        body: "Define ideal customer profile, target list criteria, offer, and success metrics with your team.",
      },
      {
        title: "List Sourcing & DNC Scrubbing",
        body: "Source or enrich call lists, scrub against federal, state, and client-specific DNC registries.",
      },
      {
        title: "Script & Talk Track Design",
        body: "Build conversational frameworks, objection handling, qualification criteria, and A/B variants.",
      },
      {
        title: "Agent Training & Pilot",
        body: "Train US-based telemarketing agents on product, script, and CRM. Run 2-week pilot.",
      },
      {
        title: "Full Launch & Optimization",
        body: "Scale to target volume with weekly A/B testing, QA review, and conversion reporting.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Telemarketing Services",
    intro:
      "Every vertical comes with its own regulatory overlays and buyer behavior. Our telemarketing BPO USA team pre-builds campaign templates for the sectors we serve most.",
    items: [
      {
        icon: "landmark",
        stat: "TCPA",
        title: "Financial Services",
        body: "Outbound for banking, lending, insurance, and wealth management with compliant disclosures.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Insurance",
        body: "Medicare Advantage, dual-eligible, clinical trial recruitment, and member outreach campaigns.",
      },
      {
        icon: "briefcase",
        stat: "B2B",
        title: "B2B Technology & SaaS",
        body: "Outbound SDR-as-a-service, appointment setting for mid-market and enterprise account lists.",
      },
      {
        icon: "home",
        stat: "TSR",
        title: "Home Services & Consumer",
        body: "Home improvement, solar, HVAC, warranty, and subscription acquisition with TSR compliance.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA Among Telemarketing Companies",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore telemarketing providers trip on accent recognition, cultural distance from US buyers, and inconsistent TCPA discipline — and regulators have made TCPA litigation one of the fastest-growing legal risks in B2C marketing. Generic answering services rarely carry sales-trained agents.",
      "Contact Center USA is a US-based telemarketing BPO USA with dedicated telemarketing agent pods, weekly compliance QA, and predictive dialer infrastructure we control end-to-end — so every campaign hits its numbers without putting your brand on a regulatory watch list.",
    ],
    bullets: [
      "100% US-based telemarketing agents — no offshore, no nearshore",
      "Automated DNC scrubbing against federal, state, and client lists",
      "Predictive, power, and preview dialer modes with call recording",
      "Agent coaching and weekly compliance QA by certified reviewers",
      "15-20 business day campaign launch from signed SOW",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to run outbound telemarketing outsourcing that actually converts?",
    accent: "actually converts",
    body: "If your current outbound efforts are stalling, your SDR team cannot keep up with volume, or you need a TCPA-compliant partner for a regulated industry campaign, talk to our telemarketing services team. We will model expected contact rate, conversion, and ROI before you commit a dollar.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Outbound Call Center",
    desc: "Full-service outbound calling operations for sales, collections, surveys, and customer engagement.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "B2B Sales Outsourcing",
    desc: "Dedicated B2B sales teams for lead generation, appointment setting, and pipeline management.",
    href: "/services/b2b-sales-outsourcing",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Multi-channel lead generation programs that fill your pipeline with qualified prospects.",
    href: "/solutions/lead-generation-appointment-setting",
  },
];

export default function TelemarketingServicesPage() {
  return (
    <ServicePageTemplate
      badge="Telemarketing Services"
      title="Telemarketing Services & Telemarketing BPO USA"
      titleHighlight="Telemarketing BPO USA"
      subtitle="One of the leading telemarketing services providers in the USA — our telemarketing BPO USA runs compliant outbound telemarketing outsourcing campaigns that generate leads, drive sales, and gather insights."
      description="Effective telemarketing services require more than just dialing numbers — they take skilled communicators, smart targeting, compelling scripts, and strict compliance management. Our professional telemarketing BPO USA teams combine all four to execute outbound telemarketing outsourcing campaigns that consistently outperform expectations. Whether you need lead generation, appointment setting, event promotion, or market research, we deliver the conversations that move your business forward."
      features={features}
      benefits={benefits}
      image="/images/cc-man-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
