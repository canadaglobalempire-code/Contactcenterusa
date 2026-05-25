import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Sales Outsourcing | Contact Center USA",
  description:
    "US-based sales outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "sales outsourcing",
    "sales bpo usa",
    "outsourced sales team",
    "sdr outsourcing",
    "outsourced sales development",
    "b2b sales outsourcing",
    "sales outsourcing companies",
    "outsourced sales reps usa",
  ],
  alternates: { canonical: "/solutions/sales-outsourcing" },
};

const features = [
  {
    title: "SDR & Lead Qualification",
    desc: "Dedicated sales development representatives prospect, qualify, and nurture leads through your pipeline. We follow your ideal customer profile and qualification criteria to deliver sales-ready opportunities your closers can convert.",
  },
  {
    title: "Full-Cycle Sales Management",
    desc: "From first touch through closed deal, our trained sales professionals manage the entire sales cycle — including discovery calls, product demonstrations, proposal delivery, negotiation, and contract execution on your behalf.",
  },
  {
    title: "Appointment Setting Campaigns",
    desc: "Targeted outbound campaigns that book qualified meetings with decision-makers. We handle prospect research, personalized outreach, objection handling, and calendar coordination to keep your closers focused on selling.",
  },
  {
    title: "Pipeline Management & CRM Administration",
    desc: "We maintain your CRM with accurate, real-time data on every prospect and opportunity. Pipeline reporting, deal stage management, and forecasting analytics give you full visibility into your revenue trajectory.",
  },
  {
    title: "Upsell & Cross-Sell Programs",
    desc: "Maximize customer lifetime value with systematic upsell and cross-sell programs. Our agents identify expansion opportunities within your existing customer base and execute targeted offers that increase average revenue per account.",
  },
  {
    title: "Sales Training & Playbook Development",
    desc: "We build and continuously refine sales playbooks, call scripts, objection-handling guides, and competitive battle cards. Our training team ensures every rep is equipped to represent your brand and close deals effectively.",
  },
];

const benefits = [
  "Dedicated SDR and sales teams",
  "Full-cycle sales from prospecting to close",
  "CRM management and pipeline reporting",
  "Upsell and cross-sell revenue programs",
  "Custom playbooks and battle cards",
  "Performance-based compensation options",
];

const stats = [
  { value: 3, suffix: "x", label: "Pipeline Growth for Clients" },
  { value: 45, suffix: "%", label: "Reduction in Cost Per Acquisition" },
  { value: 200, suffix: "K+", label: "Qualified Meetings Set Annually" },
  { value: 28, suffix: "%", label: "Average Close Rate" },
];

const testimonial = {
  quote:
    "Contact Center USA built and manages our entire SDR function. Our pipeline tripled in the first year and cost per acquisition dropped 45%. They operate like an extension of our sales team, not an outsourced vendor.",
  name: "M.J.",
  title: "SVP of Revenue",
  company: "A B2B Technology Company",
  initials: "MJ",
};

const faqs = [
  {
    question: "How do you train your sales reps on our products and value proposition?",
    answer:
      "We run a comprehensive onboarding program that includes product deep-dives, competitive analysis, buyer persona workshops, and live call shadowing with your team. Reps are certified before making their first call, and ongoing coaching sessions keep skills and knowledge current.",
  },
  {
    question: "Can you work with our existing CRM and sales tools?",
    answer:
      "Yes. We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and Microsoft Dynamics. We also work with sales engagement tools like Outreach, SalesLoft, Apollo, and LinkedIn Sales Navigator.",
  },
  {
    question: "Do you offer performance-based pricing for sales outsourcing?",
    answer:
      "We offer flexible pricing models including per-appointment, per-qualified-lead, base-plus-commission, and fully performance-based structures. We work with you to design a compensation model that aligns our incentives with your revenue goals.",
  },
  {
    question: "How do you ensure quality and brand consistency in sales outreach?",
    answer:
      "Every interaction follows approved messaging and brand guidelines. We record and review calls, conduct weekly calibration sessions with your team, and track quality metrics alongside revenue metrics. Your brand reputation is never compromised for short-term results.",
  },
  {
    question: "What industries do your sales outsourcing teams specialize in?",
    answer:
      "We support sales programs across B2B technology, SaaS, financial services, healthcare, professional services, and manufacturing. Our team leads match industry-experienced reps to your account to ensure domain credibility from day one.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Sales Outsourcing in USA",
    heading: "The sales BPO USA growth teams trust when pipeline and close rate both need to move.",
    accent: "pipeline and close rate",
    body: [
      "Contact Center USA is one of the best sales outsourcing providers in the USA — a 100% US-based outsourced sales team of SDRs, closers, and full-cycle reps operating under your brand, on your CRM, inside your playbooks.",
      "For revenue leaders searching for a sales BPO USA partner that can actually scale pipeline without ballooning cost of acquisition, we deliver trained domestic sales talent, performance-aligned pricing models, and repeatable playbooks that have tripled pipeline for clients across SaaS, financial services, and B2B technology.",
    ],
    stats: [
      { stat: "3x", label: "Average pipeline growth in year one of partnership" },
      { stat: "45%", label: "Reduction in blended cost per acquisition vs. in-house build" },
      { stat: "200K+", label: "Qualified meetings and opportunities set annually across client book" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Sales Build vs. Outsourced Sales Team",
    intro:
      "Every growth leader weighs the same trade-off: build an internal SDR and AE team or partner with a specialized sales BPO. Here's how the two models compare on the economics, ramp time, and pipeline predictability that actually matter.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to First Qualified Meeting",
        left: "4–6 months from hiring kickoff to consistent meeting flow — recruit, ramp, and manage overhead.",
        right: "Qualified meetings in 3–5 weeks from signed SOW — trained reps ready to dial.",
        leftYes: false,
      },
      {
        label: "Fully Loaded Cost per SDR",
        left: "$85–$120K per SDR including salary, commission, benefits, tooling, and management layer.",
        right: "30–45% lower blended cost with per-meeting, per-opportunity, or base-plus-variable pricing.",
        leftYes: false,
      },
      {
        label: "Ramp Risk on New Hires",
        left: "50%+ of in-house SDR hires miss quota or churn in year one — bench never fully productive.",
        right: "Pre-trained reps, proven playbooks, and managed QA — ramp risk lives with us, not you.",
        leftYes: false,
      },
      {
        label: "Pipeline Reporting & Forecasting",
        left: "Inconsistent CRM hygiene; forecasts built on subjective deal stages and rep optimism.",
        right: "Daily dashboards on contacts, meetings, SQLs, and conversion — forecast math, not vibes.",
        leftYes: false,
      },
      {
        label: "Scalability & Flexibility",
        left: "Hiring cycles of 60–90 days; painful to scale down after campaign or market shifts.",
        right: "Scale SDR or closer capacity up or down in days — capacity aligned to pipeline demand.",
        leftYes: false,
      },
      {
        label: "Tech Stack Cost",
        left: "Outreach, SalesLoft, ZoomInfo, dialer, and enablement tools paid per seat regardless of use.",
        right: "Sales engagement, data, and dialer stack included in managed-service pricing.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Sales Outsourcing Engagement Flow",
    intro:
      "Every client goes through the same five-stage engagement — engineered to move from signed SOW to consistent pipeline contribution in under 45 days.",
    steps: [
      {
        title: "ICP & Playbook Design",
        body: "We codify your ideal customer profile, messaging, objection handling, and qualification criteria into a shared playbook.",
      },
      {
        title: "Team Build & Certification",
        body: "Domestic SDRs and closers recruited, trained on your product and positioning, and certified before making a single dial.",
      },
      {
        title: "Stack & CRM Integration",
        body: "We plug into your Salesforce, HubSpot, or Dynamics CRM and configure dialer, cadence, and enablement tools.",
      },
      {
        title: "Pilot & Calibration",
        body: "Controlled two-to-three-week pilot with daily calibration on messaging, rebuttals, and qualification until SQLs convert.",
      },
      {
        title: "Scale & Optimize",
        body: "Full production volume with weekly QBRs on pipeline, conversion rate, and cost per opportunity — continuous improvement baked in.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Support with Outsourced Sales",
    intro:
      "Sales motions differ sharply by industry. Our sales BPO USA pods are specialized by vertical, with reps who speak the language of your buyers from day one.",
    items: [
      {
        icon: "laptop",
        stat: "SaaS",
        title: "B2B Technology & SaaS",
        body: "SDR pods and full-cycle closers for mid-market and enterprise SaaS with PLG, sales-led, and hybrid motions.",
      },
      {
        icon: "landmark",
        stat: "FinTech",
        title: "Financial & FinTech Services",
        body: "Compliance-aware outbound for banking, wealth, lending, and FinTech — licensed reps where required.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Life Sciences",
        body: "HIPAA-trained reps selling into payers, providers, and pharma with credible clinical and operational fluency.",
      },
      {
        icon: "briefcase",
        stat: "B2B",
        title: "Professional & Business Services",
        body: "Consultative outbound for agencies, consultancies, staffing, and business services selling to operators and execs.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA as Your Sales BPO USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most sales outsourcing companies are glorified appointment-setting shops with scripted readers, offshore dialers, and no ownership of close-rate economics. The meetings get set, the pipeline looks good on a spreadsheet, and the opportunities never close.",
      "Contact Center USA is different: a 100% US-based outsourced sales team with domestic SDRs and closers, performance-aligned pricing tied to qualified opportunities and revenue, and playbooks refined across hundreds of client programs. We sell on your CRM, under your brand, with the discipline of a high-performing internal team.",
    ],
    bullets: [
      "100% US-based sales talent — no offshore dialing or nearshore handoffs",
      "Performance-aligned pricing — base plus per-opportunity or revenue-share models",
      "Trained across Salesforce, HubSpot, Outreach, SalesLoft, Apollo, ZoomInfo",
      "Daily dashboards on dials, connects, meetings, SQLs, and win rate",
      "Elastic capacity — ramp pods up for launches, down after campaigns",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better sales outsourcing partner?",
    accent: "better sales outsourcing",
    body: "If your pipeline is flatlining, your SDR ramp is stalling, or your CAC is creeping in the wrong direction, request a free sales outsourcing assessment. We'll pressure-test your ICP, offer, and motion before you sign anything.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Targeted outbound campaigns that fill your sales pipeline with qualified prospects.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Outbound Call Center",
    desc: "High-volume outbound calling programs for prospecting, surveys, and customer outreach.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Customer Experience Management",
    desc: "CX strategy that supports customer retention and expansion revenue.",
    href: "/solutions/customer-experience-management",
  },
];

export default function SalesOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="Sales Outsourcing"
      title="Sales Outsourcing That Scales Your Revenue Without the Overhead"
      titleHighlight="Revenue Without the Overhead"
      subtitle="From SDR teams and appointment setting to full-cycle sales management, we build and run the sales engine that drives your growth."
      description="Our sales outsourcing services give you a dedicated, trained sales force without the cost and complexity of building one in-house. Whether you need SDRs to fill the top of your funnel, appointment setters to book meetings with decision-makers, or full-cycle reps to close deals, we deliver measurable pipeline growth with performance-aligned pricing."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-desk.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
