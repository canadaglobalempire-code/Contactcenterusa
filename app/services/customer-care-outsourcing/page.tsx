import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Customer Care Outsourcing Services | Contact Center USA",
  description:
    "US-based customer care outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "customer care outsourcing",
    "customer care bpo usa",
    "outsourced customer care services",
    "customer care outsourcing company",
    "customer care call center usa",
    "retention outsourcing services",
    "loyalty program outsourcing",
    "outsourced customer retention services",
  ],
  alternates: { canonical: "/services/customer-care-outsourcing" },
};

const features = [
  {
    title: "Proactive Retention Programs",
    desc: "Data-driven retention campaigns that identify at-risk customers before they churn, delivering personalized outreach with tailored offers and solutions that keep your most valuable accounts engaged.",
  },
  {
    title: "Loyalty Program Management",
    desc: "End-to-end loyalty program support including enrollment, point tracking, reward redemption, tier management, and member communications — creating experiences that turn customers into advocates.",
  },
  {
    title: "Complaint Resolution & Escalation",
    desc: "Empathetic agents trained in conflict resolution who de-escalate frustrated customers, resolve issues on the first contact, and turn negative experiences into opportunities to strengthen brand loyalty.",
  },
  {
    title: "Customer Satisfaction Surveys",
    desc: "Post-interaction and periodic satisfaction surveys conducted via phone, email, and SMS that capture actionable feedback, measure NPS and CSAT, and identify trends to improve your overall customer experience.",
  },
  {
    title: "Win-Back & Re-Engagement Campaigns",
    desc: "Strategic win-back campaigns targeting lapsed customers with personalized messaging, special incentives, and empathetic outreach that acknowledges their past experience and demonstrates meaningful improvements.",
  },
  {
    title: "VIP & Concierge Support",
    desc: "White-glove support tiers for your highest-value customers with dedicated agents, priority routing, extended service hours, and proactive account management that makes every VIP feel truly valued.",
  },
];

const benefits = [
  "Reduced customer churn rates",
  "Dedicated account-based care teams",
  "Omnichannel support (phone, email, chat)",
  "NPS & CSAT tracking dashboards",
  "Bilingual English/Spanish agents",
  "24/7 customer care availability",
];

const stats = [
  { value: 27, suffix: "%", label: "Reduction in Customer Churn" },
  { value: 94, suffix: "%", label: "Customer Satisfaction Score" },
  { value: 89, suffix: "%", label: "First-Contact Resolution Rate" },
  { value: 4.2, suffix: "M+", label: "Customer Interactions Annually", decimals: 1 },
];

const testimonial = {
  quote:
    "Since outsourcing our customer care to Contact Center USA, our churn rate dropped 27% and our NPS climbed from 38 to 62. Their agents genuinely care about our customers — it shows in every interaction.",
  name: "J.P.",
  title: "Director of Customer Success",
  company: "A Fast-Growing Subscription Services Company",
  initials: "JP",
};

const faqs = [
  {
    question: "How do your agents learn our brand voice and customer care standards?",
    answer:
      "We build a comprehensive brand playbook during onboarding that covers your tone, values, policies, and common scenarios. Agents complete certified training modules, shadow experienced team members, and must pass quality assessments before handling live interactions. Ongoing coaching and call monitoring keep standards consistently high.",
  },
  {
    question: "Can you support customers across multiple channels?",
    answer:
      "Yes. Our customer care teams operate across phone, email, live chat, SMS, and social media from a unified platform. This ensures consistent experiences regardless of how customers reach you, with full conversation history visible to agents across every channel.",
  },
  {
    question: "How do you measure customer satisfaction and program success?",
    answer:
      "We track CSAT, NPS, Customer Effort Score (CES), first-contact resolution rate, average handle time, and retention metrics. You receive real-time dashboards and weekly performance reviews with trend analysis and actionable recommendations to continuously improve the customer experience.",
  },
  {
    question: "Do you offer dedicated or shared agent models?",
    answer:
      "We offer both. Dedicated teams work exclusively on your account and develop deep product expertise. Shared teams are ideal for lower volumes or after-hours coverage. Many clients use a hybrid model — dedicated agents during peak hours and shared overflow for evenings, weekends, and holidays.",
  },
  {
    question: "How do you handle sensitive customer complaints and escalations?",
    answer:
      "Our agents follow structured escalation paths tailored to your policies. Tier 1 agents are empowered to resolve common issues immediately. Complex or sensitive cases route to senior agents or your internal team based on predefined criteria. Every escalation is tracked, timed, and reported to ensure nothing falls through the cracks.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Customer Care Outsourcing BPO in USA",
    heading: "The customer care outsourcing partner US brands trust to protect revenue and loyalty.",
    accent: "protect revenue and loyalty",
    body: [
      "Contact Center USA is one of the best customer care outsourcing providers in the USA — a 100% US-based customer care BPO USA operation delivering outsourced customer care services that lower churn, lift NPS, and protect lifetime value across every channel.",
      "For CX, support, and success leaders looking for the best customer care BPO in USA, we run omnichannel retention, loyalty, VIP, and complaint-resolution programs that make your customer care feel premium — not outsourced.",
    ],
    stats: [
      { stat: "-27%", label: "Lower customer churn within 12 months of launching outsourced customer care" },
      { stat: "94%", label: "CSAT across customer care outsourcing programs we run today" },
      { stat: "89%", label: "First-contact resolution on complaint and escalation queues" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Customer Care Teams vs. Outsourced Customer Care BPO",
    intro:
      "Customer care economics are brutal: attrition, holidays, and overnight coverage crush in-house teams. Here's how staying internal compares to partnering with a dedicated customer care BPO USA operation.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "24/7 Coverage & Overnight Support",
        left: "Expensive to staff in-house — shift premiums, attrition, and skeleton weekend crews erode CX.",
        right: "Always-on outsourced customer care services with real 24/7/365 coverage including holidays.",
        leftYes: false,
      },
      {
        label: "Cost per Interaction",
        left: "Fully-loaded in-house cost per contact is 30–50% higher than an optimized customer care BPO.",
        right: "Per-minute, per-contact, or FTE commercials tuned to actual volume — not peak staffing.",
        leftYes: false,
      },
      {
        label: "Retention & Save Rates",
        left: "Save queues handled by generalists — save rates swing by agent, not by playbook.",
        right: "Dedicated retention specialists with scripted save offers lifting save rates by 20–40%.",
        leftYes: false,
      },
      {
        label: "Omnichannel Coverage",
        left: "Phone, email, chat, and social are run by different teams with siloed history.",
        right: "Unified outsourced customer care services across voice, email, chat, SMS, and social.",
        leftYes: false,
      },
      {
        label: "Quality Assurance Program",
        left: "Ad-hoc call listening by managers already pulled in ten directions.",
        right: "Dedicated QA team scoring every queue weekly with calibration back to supervisors.",
        leftYes: false,
      },
      {
        label: "Scalability on Spikes",
        left: "Ticket volume spikes during outages, holidays, or launches overwhelm fixed headcount.",
        right: "Flex capacity inside the customer care BPO absorbs 2–5x volume spikes on demand.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Customer Care Outsourcing Process",
    intro:
      "Every outsourced customer care program runs on the same five-stage framework — built to lift CSAT, lower churn, and make customers feel genuinely taken care of.",
    steps: [
      {
        title: "CX Discovery & KPI Design",
        body: "We map your journeys, contact drivers, escalation paths, and KPIs (CSAT, NPS, FCR, churn) before we touch a call.",
      },
      {
        title: "Brand Playbook & Training",
        body: "Brand voice playbook, policy library, and certified training modules for every agent in the customer care BPO.",
      },
      {
        title: "Omnichannel Launch",
        body: "Voice, email, chat, SMS, and social queues stood up inside our customer care outsourcing platform.",
      },
      {
        title: "Proactive & VIP Programs",
        body: "Retention outreach, win-back, loyalty management, and VIP concierge lines running alongside reactive support.",
      },
      {
        title: "Measure, Coach, Improve",
        body: "QA scoring, voice-of-customer analytics, and weekly business reviews drive continuous improvement.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Outsourced Customer Care Services",
    intro:
      "Each industry has its own regulatory, tone, and SLA demands. Our customer care outsourcing teams are purpose-staffed for the sectors they serve.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Health Plans",
        body: "HIPAA-compliant outsourced customer care services for members, patients, and providers across care journeys.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Financial Services & FinTech",
        body: "PCI-compliant customer care BPO for banks, cards, lenders, and FinTech platforms needing high-trust support.",
      },
      {
        icon: "shopping-bag",
        stat: "CCPA",
        title: "Retail, E-Commerce & Subscription",
        body: "Order, returns, loyalty, and VIP customer care with surge-ready staffing for peak seasons and launches.",
      },
      {
        icon: "signal",
        stat: "CPNI",
        title: "Telecom, SaaS & Streaming",
        body: "Tier 1/2 support, retention, and win-back programs for subscription-driven telecom, SaaS, and streaming brands.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Brands Pick Us Among Customer Care BPO USA Providers",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore customer care vendors show up in CSAT scores — accent bias, cultural distance, and scripted rigidity frustrate US consumers and quietly push churn up. Low-cost domestic customer care BPO shops cut corners on QA and brand training, making every escalation a risk to your reputation.",
      "Contact Center USA is different: a US-based customer care outsourcing operation with career CX agents, structured QA, and dedicated customer success managers who treat your NPS like it's their own number.",
    ],
    bullets: [
      "100% US-based outsourced customer care services, no offshore routing",
      "Bilingual English/Spanish agents across every queue",
      "Omnichannel platform: voice, email, chat, SMS, social",
      "Dedicated customer success manager, QA lead, and ops manager per account",
      "Retention, loyalty, VIP, and complaint specialists as modular add-ons",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with an outsourced customer care team that actually protects retention?",
    accent: "outsourced customer care team",
    body: "Whether you're replacing an underperforming vendor, adding 24/7 coverage, or standing up a retention program, request a free consultation. We'll benchmark your current CSAT, churn, and cost-per-contact — and show exactly what a Contact Center USA customer care outsourcing program would unlock.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Customer Service Outsourcing",
    desc: "Comprehensive customer service programs that cover every touchpoint in the customer journey.",
    href: "/solutions/customer-service-outsourcing",
  },
  {
    title: "Customer Experience Analytics",
    desc: "Data-driven insights to measure, understand, and improve your overall customer experience.",
    href: "/services/customer-experience-analytics",
  },
  {
    title: "Omnichannel Contact Center",
    desc: "Unified multi-channel support that delivers consistent customer care across phone, chat, email, and social.",
    href: "/services/omnichannel-contact-center-solutions",
  },
];

export default function CustomerCareOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="Customer Care Outsourcing"
      title="Customer Care Outsourcing BPO in USA"
      titleHighlight="Customer Care Outsourcing BPO"
      subtitle="Outsourced customer care services and customer care BPO USA programs that lower churn, lift CSAT, and protect lifetime value across every channel."
      description="Exceptional customer care is the single greatest driver of retention and lifetime value. Our outsourced customer care teams combine emotional intelligence with operational excellence to resolve issues, strengthen relationships, and protect your revenue. From proactive retention outreach to VIP concierge support, we help you deliver the kind of care that earns five-star reviews and word-of-mouth referrals."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-blue.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
