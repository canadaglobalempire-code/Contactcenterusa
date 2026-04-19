import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "B2B Sales Outsourcing BPO in USA | Outsourced B2B Sales Teams | Contact Center USA",
  description:
    "B2B sales outsourcing and B2B lead generation BPO USA services. Outsourced B2B sales teams that build pipeline, book qualified meetings, and accelerate revenue for US businesses.",
  keywords: [
    "b2b sales outsourcing",
    "b2b lead generation bpo usa",
    "outsourced b2b sales teams",
    "b2b sales bpo",
    "b2b appointment setting services",
    "b2b sdr outsourcing",
    "outsourced sdr services usa",
    "b2b pipeline generation",
  ],
  alternates: { canonical: "/services/b2b-sales-outsourcing" },
};

const features = [
  {
    title: "Outbound Lead Generation",
    desc: "Targeted outbound prospecting campaigns that identify, qualify, and engage decision-makers within your ideal customer profile — filling your pipeline with high-intent opportunities ready for your closers.",
  },
  {
    title: "Pipeline Management & Nurturing",
    desc: "Systematic pipeline management that tracks every prospect through your sales funnel, delivers timely follow-ups, and nurtures cold leads back to warm status with personalized multi-touch sequences.",
  },
  {
    title: "Appointment Setting & Scheduling",
    desc: "Dedicated appointment setters who book qualified meetings directly onto your sales team's calendars, complete with prospect briefs and key intelligence to maximize every conversation.",
  },
  {
    title: "Account-Based Selling Programs",
    desc: "Strategic account-based selling campaigns that coordinate outreach across multiple stakeholders within target accounts, building consensus and accelerating complex B2B buying cycles.",
  },
  {
    title: "Sales Qualification & Scoring",
    desc: "Rigorous lead qualification using BANT, MEDDIC, or your custom framework to ensure only the most promising opportunities reach your senior sales reps — protecting their time and boosting close rates.",
  },
  {
    title: "CRM Integration & Reporting",
    desc: "Seamless integration with Salesforce, HubSpot, and other major CRM platforms for real-time visibility into pipeline activity, conversion metrics, and ROI tracking across every campaign.",
  },
];

const benefits = [
  "Dedicated B2B-trained sales agents",
  "Custom qualification frameworks",
  "Salesforce & HubSpot integrations",
  "Multi-channel outreach (phone, email, LinkedIn)",
  "Real-time pipeline dashboards",
  "Scalable team size month-to-month",
];

const stats = [
  { value: 42, suffix: "%", label: "Increase in Qualified Leads" },
  { value: 3.2, suffix: "x", label: "Pipeline Growth Rate", decimals: 1 },
  { value: 500, suffix: "K+", label: "B2B Calls Made Annually" },
  { value: 28, suffix: "%", label: "Average Close Rate Improvement" },
];

const testimonial = {
  quote:
    "Contact Center USA built us a dedicated outbound team that generated over 200 qualified meetings in the first quarter. Our pipeline tripled and our sales team can finally focus on closing instead of prospecting.",
  name: "D.C.",
  title: "Chief Revenue Officer",
  company: "A Leading Enterprise SaaS Company",
  initials: "DC",
};

const faqs = [
  {
    question: "How do you train agents on our specific B2B product or service?",
    answer:
      "We run an intensive onboarding program where your team provides product training, competitive positioning, and ideal customer profiles. Our agents study your value propositions, objection-handling guides, and CRM workflows before making a single call. We also hold weekly calibration sessions to refine messaging.",
  },
  {
    question: "What lead qualification methodology do you use?",
    answer:
      "We adapt to your preferred framework — whether that's BANT, MEDDIC, SPIN, or a custom qualification model. During onboarding, we collaborate with your sales leadership to define exactly what constitutes a qualified lead, then build scoring criteria and disposition workflows around those requirements.",
  },
  {
    question: "Can you integrate with our existing CRM and sales tools?",
    answer:
      "Yes. We integrate natively with Salesforce, HubSpot, Pipedrive, and other major CRMs. Our team logs every touchpoint, updates lead statuses in real time, and syncs notes so your sales reps have full context before every meeting. We also support sales engagement tools like Outreach and SalesLoft.",
  },
  {
    question: "How quickly can you ramp up a dedicated sales team?",
    answer:
      "Typical ramp time is 2-3 weeks from contract signing to first outbound calls. We begin recruiting and training agents immediately, and most programs are at full capacity within 30 days. For urgent needs, we can deploy experienced agents from our bench in as little as 5 business days.",
  },
  {
    question: "What kind of reporting and visibility do we get?",
    answer:
      "You receive daily activity reports, weekly pipeline reviews, and monthly performance summaries. Our dashboards track calls made, conversations held, meetings booked, leads qualified, and conversion rates at every stage. We also provide call recordings and disposition data for full transparency.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best B2B Sales Outsourcing BPO in USA",
    heading: "The B2B sales outsourcing partner US revenue teams trust to build predictable pipeline.",
    accent: "predictable pipeline",
    body: [
      "Contact Center USA is one of the best B2B sales outsourcing companies in the USA — a 100% US-based B2B lead generation BPO operating outsourced B2B sales teams that plug straight into your CRM, your ICP, and your revenue motion.",
      "For CROs and VP Sales leaders searching for the best B2B lead generation BPO in USA, we deliver qualified meetings, managed pipeline, and full-funnel SDR coverage without the 6-month ramp and headcount risk of building internally.",
    ],
    stats: [
      { stat: "+42%", label: "More sales-qualified leads within 90 days of launch" },
      { stat: "3.2x", label: "Average pipeline lift across B2B outsourced sales programs" },
      { stat: "2–3 Wks", label: "From signed SOW to first outbound dials on your behalf" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House SDR Teams vs. Outsourced B2B Sales BPO",
    intro:
      "Every revenue leader eventually faces the same build-vs-buy decision: keep scaling SDRs internally or partner with an outsourced B2B sales team. Here's how the models compare on the metrics that actually determine pipeline, cost, and speed to revenue.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to First Qualified Meeting",
        left: "90–180 days after hiring, training, tooling, and ramp — assuming the first SDR hire works out.",
        right: "Qualified meetings on the calendar within 3–4 weeks of kickoff on most B2B outsourced sales programs.",
        leftYes: false,
      },
      {
        label: "Fully-Loaded Cost per SDR",
        left: "$85K–$130K fully loaded (base, commission, benefits, management, tools) for an unproven ramp.",
        right: "Variable per-meeting or monthly retainer pricing with the outsourced B2B sales team — no fixed headcount.",
        leftYes: false,
      },
      {
        label: "Tooling & Tech Stack",
        left: "You buy dialer, sales engagement, data, intent, and CRM add-ons separately for each rep.",
        right: "All B2B lead generation BPO tooling — dialer, cadences, data enrichment, intent — included.",
        leftYes: false,
      },
      {
        label: "Pipeline Consistency",
        left: "Pipeline cratered by attrition, PTO, ramp gaps, and inconsistent activity from individual reps.",
        right: "Managed team with coverage plans, QA, and activity SLAs that keep your pipeline on a curve.",
        leftYes: false,
      },
      {
        label: "ICP & Messaging Iteration",
        left: "Managers test messaging reactively — changes take weeks to propagate across the team.",
        right: "Weekly calibration, A/B tested scripts, and data-backed ICP refinement across the full program.",
        leftYes: false,
      },
      {
        label: "Scalability of the Team",
        left: "Every new SDR is a recruiting cycle — you cannot pause, flex, or re-target without layoffs.",
        right: "Scale outsourced B2B sales teams up, down, or into new segments without touching your payroll.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our B2B Lead Generation BPO Playbook",
    intro:
      "Every B2B sales outsourcing engagement flows through the same five-stage playbook — engineered to shorten your ramp, protect your brand, and deliver pipeline you can forecast on.",
    steps: [
      {
        title: "ICP & GTM Alignment",
        body: "Discovery workshops to lock in ideal customer profile, personas, qualification criteria, and handoff SLAs with your AEs.",
      },
      {
        title: "Data, Tech & Messaging",
        body: "Enriched target lists, compliant dialer configuration, sequences, and messaging approved by your brand and sales leadership.",
      },
      {
        title: "SDR Team Buildout",
        body: "Dedicated US-based SDRs onboarded on your product, disco script, objection library, and CRM disposition rules.",
      },
      {
        title: "Pipeline Execution",
        body: "Phone, email, and LinkedIn cadences executed daily — activity logged into Salesforce or HubSpot in real time.",
      },
      {
        title: "Calibration & Scale",
        body: "Weekly QBRs on meeting show rate, SQL conversion, and pipeline influenced — then we double down on what converts.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "B2B Sectors We Run Outsourced Sales Programs For",
    intro:
      "Different B2B sectors sell with different motions. Our outsourced B2B sales teams are staffed and scripted around the regulatory, procurement, and stakeholder dynamics of each vertical.",
    items: [
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Enterprise Software",
        body: "Outbound SDR teams running demo-booking motions for mid-market and enterprise SaaS, integrated with Salesforce and HubSpot.",
      },
      {
        icon: "landmark",
        stat: "GLBA",
        title: "FinTech & Financial Services",
        body: "Compliant B2B lead generation BPO campaigns for payments, lending, treasury, and banking platforms targeting finance buyers.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & HealthTech",
        body: "HIPAA-aware outsourced B2B sales teams calling into provider networks, payers, and med-device procurement committees.",
      },
      {
        icon: "factory",
        stat: "ITAR",
        title: "Industrial, Manufacturing & Logistics",
        body: "Long-cycle B2B sales outsourcing into operations, supply chain, and plant-level buyers with technical qualification.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why CROs Pick Us as Their B2B Lead Generation BPO",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore SDR shops underperform on US B2B buyers because of accent bias, weak product fluency, and shallow objection handling. Generic outsourced B2B sales teams rip through lists without understanding the buying committee, and burn your domain reputation in the process.",
      "Contact Center USA is different: a US-based B2B sales outsourcing operation with career SDRs, dedicated sales enablement coaches, and a quality program built for complex B2B conversations — not a call factory. Your outsourced team feels like your best-performing SDR pod, not a vendor.",
    ],
    bullets: [
      "100% US-based B2B SDRs — not offshore boiler-room outreach",
      "Career sales talent with 2+ years of B2B outbound experience",
      "Dedicated sales manager, QA lead, and enablement coach per account",
      "Salesforce, HubSpot, Outreach, SalesLoft, Gong integrations",
      "Per-meeting, per-SQL, or retainer commercials — aligned to outcomes",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to plug in outsourced B2B sales teams that actually build pipeline?",
    accent: "outsourced B2B sales teams",
    body: "If your SDR funnel is stuck, your ramp is too slow, or your existing B2B lead generation BPO is under-delivering, book a free consultation. We'll benchmark your current pipeline motion, model expected meeting volume, and show you exactly what a Contact Center USA B2B sales outsourcing program would deliver.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Comprehensive lead generation campaigns with multi-channel outreach and qualified appointment booking.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Outbound Call Center",
    desc: "High-volume outbound calling programs for sales, surveys, and customer engagement campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Customer Acquisition Outsourcing",
    desc: "End-to-end customer acquisition services that drive growth across every stage of the buyer journey.",
    href: "/services/customer-acquisition-outsourcing",
  },
];

export default function B2BSalesOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="B2B Sales Outsourcing"
      title="B2B Sales Outsourcing BPO in USA"
      titleHighlight="B2B Sales Outsourcing BPO"
      subtitle="Outsourced B2B sales teams and B2B lead generation BPO USA programs that build pipeline, book qualified meetings, and accelerate revenue for your sales org."
      description="Scaling a B2B sales organization is expensive and time-consuming. Our outsourced sales teams eliminate the overhead of recruiting, training, and managing inside sales reps while delivering consistent pipeline growth. We combine experienced agents, proven playbooks, and deep CRM integration to generate qualified leads and book meetings that convert — so your closers can focus on what they do best."
      features={features}
      benefits={benefits}
      image="/images/cc-discussion.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
