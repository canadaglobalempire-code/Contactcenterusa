import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "B2C Sales Outsourcing BPO in USA | Outbound Sales BPO USA | Contact Center USA",
  description:
    "B2C sales outsourcing and outbound sales BPO USA services. Consumer sales outsourcing teams handling inbound conversion, outbound campaigns, upsell, DRTV, and e-commerce sales.",
  keywords: [
    "b2c sales outsourcing",
    "outbound sales bpo usa",
    "consumer sales outsourcing",
    "b2c sales bpo",
    "outsourced consumer sales teams",
    "direct response call center",
    "inbound sales outsourcing usa",
    "telesales outsourcing company",
  ],
  alternates: { canonical: "/services/b2c-sales-outsourcing" },
};

const features = [
  {
    title: "Inbound Sales Conversion",
    desc: "Skilled agents who turn inbound inquiries into closed sales by guiding consumers through product selection, answering objections, and creating urgency — maximizing the ROI of your marketing spend.",
  },
  {
    title: "Outbound Consumer Campaigns",
    desc: "Targeted outbound calling campaigns that reach consumers at the right time with the right offer, whether you're launching a new product, running a seasonal promotion, or re-engaging lapsed customers.",
  },
  {
    title: "Upselling & Cross-Selling Programs",
    desc: "Revenue-maximizing programs that train agents to identify upsell and cross-sell opportunities during every interaction, increasing average order value without feeling pushy or scripted.",
  },
  {
    title: "Subscription & Membership Sales",
    desc: "Specialized sales teams for subscription-based businesses that handle trial conversions, membership upgrades, renewal campaigns, and win-back programs to drive recurring revenue growth.",
  },
  {
    title: "Direct Response & DRTV Support",
    desc: "High-capacity direct response teams ready to handle spikes from TV, radio, and digital campaigns with rapid answer times, compelling scripts, and seamless order processing.",
  },
  {
    title: "E-Commerce Sales Support",
    desc: "Dedicated agents who assist online shoppers via phone and chat, reducing cart abandonment, resolving purchase hesitations, and providing personalized product recommendations that drive conversions.",
  },
];

const benefits = [
  "Rapid scaling for seasonal demand",
  "Bilingual English/Spanish agents",
  "PCI-compliant payment processing",
  "Real-time conversion tracking",
  "Custom scripting & A/B testing",
  "Flexible pricing models",
];

const stats = [
  { value: 34, suffix: "%", label: "Increase in Sales Conversion" },
  { value: 2.8, suffix: "M+", label: "Consumer Calls Handled Yearly", decimals: 1 },
  { value: 22, suffix: "%", label: "Higher Average Order Value" },
  { value: 15, suffix: "sec", label: "Average Speed to Answer" },
];

const testimonial = {
  quote:
    "We partnered with Contact Center USA for our holiday campaign and they exceeded every target. Conversion rates jumped 34% and their agents handled the volume spike flawlessly. They truly understand consumer sales.",
  name: "S.M.",
  title: "VP of Sales",
  company: "A National Home Goods Retailer",
  initials: "SM",
};

const faqs = [
  {
    question: "How do you ensure brand consistency during consumer sales calls?",
    answer:
      "Every agent completes brand immersion training that covers your tone, values, product details, and competitive positioning. We develop custom scripts collaboratively with your team, conduct regular call monitoring, and run weekly calibration sessions to maintain quality and consistency across every consumer interaction.",
  },
  {
    question: "Can you handle large volume spikes from advertising campaigns?",
    answer:
      "Absolutely. We specialize in direct response surge capacity and can scale from baseline staffing to peak capacity within hours. Our workforce management team monitors real-time call volume and deploys overflow agents automatically to ensure no call goes unanswered during campaign launches or seasonal peaks.",
  },
  {
    question: "Do you support PCI-compliant payment processing?",
    answer:
      "Yes. Our facilities and systems are PCI DSS Level 1 compliant. Agents process payments securely using encrypted systems, and we never store sensitive card data. We support all major payment methods and can integrate with your existing payment gateway or merchant processor.",
  },
  {
    question: "What metrics do you track for B2C sales programs?",
    answer:
      "We track conversion rate, average order value, revenue per call, cost per acquisition, upsell/cross-sell attach rates, customer satisfaction scores, and first-call resolution. You receive daily dashboards and weekly performance reviews with actionable insights to continuously optimize results.",
  },
  {
    question: "How fast can you launch a new B2C sales campaign?",
    answer:
      "Most B2C campaigns launch within 2-3 weeks, including script development, agent training, system integration, and testing. For time-sensitive promotions, we offer an accelerated launch track that can have agents taking calls within 7-10 business days.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best B2C Sales Outsourcing BPO in USA",
    heading: "The outbound sales BPO US consumer brands trust to convert on every call.",
    accent: "convert on every call",
    body: [
      "Contact Center USA is one of the best B2C sales outsourcing providers in the USA — a 100% US-based outbound sales BPO and consumer sales outsourcing operation purpose-built for DRTV, e-commerce, subscription, and high-volume consumer campaigns.",
      "For marketing and revenue teams searching for the best outbound sales BPO in USA, we staff, script, QA, and scale consumer sales programs that lift conversion, raise AOV, and absorb the hardest campaign spikes without dropping a call.",
    ],
    stats: [
      { stat: "+34%", label: "Lift in consumer sales conversion on inbound and outbound" },
      { stat: "+22%", label: "Average order value uplift from structured upsell/cross-sell" },
      { stat: "15 sec", label: "Average speed to answer — even during peak DRTV surges" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Consumer Sales Teams vs. Outsourced B2C Sales BPO",
    intro:
      "Consumer sales programs live or die on speed, staffing, and conversion discipline. Here's how keeping it in-house compares to partnering with a dedicated consumer sales outsourcing BPO.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Speed to Answer on Spikes",
        left: "Understaffed during DRTV or ad surges — abandon rates spike and marketing ROI vanishes.",
        right: "Surge-ready outbound sales BPO staffing with real-time capacity added within hours of volume lift.",
        leftYes: false,
      },
      {
        label: "Conversion Rate Consistency",
        left: "Conversion varies by rep, shift, and season — no structured QA or calibration cadence.",
        right: "Structured QA, call scoring, and weekly calibration keep consumer sales conversion on a curve.",
        leftYes: false,
      },
      {
        label: "Cost per Order / Cost per Sale",
        left: "Fixed payroll whether volume is up or down — CPO swings wildly with campaign cycles.",
        right: "Variable per-sale or per-hour consumer sales outsourcing pricing aligned to actual campaign ROI.",
        leftYes: false,
      },
      {
        label: "Upsell & Cross-Sell Discipline",
        left: "Reps forget the upsell under pressure; AOV flatlines or drifts down over the quarter.",
        right: "Built-in upsell/cross-sell scripting and coaching that consistently lifts AOV 15–25%.",
        leftYes: false,
      },
      {
        label: "Bilingual English/Spanish Coverage",
        left: "Limited bilingual capacity means Hispanic segment conversion is often left on the table.",
        right: "Native bilingual agents available by queue — no outsourced handoff to a third team.",
        leftYes: false,
      },
      {
        label: "PCI-Compliant Order Processing",
        left: "In-house PCI DSS compliance is expensive, auditable, and difficult to maintain at scale.",
        right: "PCI DSS Level 1 environments already in place — secure order capture and payment handling.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Consumer Sales Outsourcing Process",
    intro:
      "Every consumer sales program runs through the same five-stage workflow — engineered to keep conversion high, compliance tight, and AOV climbing across the lifecycle of the campaign.",
    steps: [
      {
        title: "Campaign Discovery",
        body: "We map your offer, funnel, media mix, expected volume, and conversion targets before writing a single script.",
      },
      {
        title: "Script & Offer Design",
        body: "Compliance-reviewed scripts with opening, objection, upsell, and close sequences tailored to B2C sales outsourcing best practices.",
      },
      {
        title: "Agent Staffing & Training",
        body: "Bilingual US-based consumer sales agents onboarded on your brand, product, objections, and PCI workflow.",
      },
      {
        title: "Live Campaign Execution",
        body: "Inbound, outbound, and overflow queues running inside our outbound sales BPO with live QA monitoring.",
      },
      {
        title: "Optimize & Scale",
        body: "Daily conversion, AOV, and CPO reporting — scripts and staffing tuned weekly to squeeze more yield out of every impression.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Consumer Sectors We Power with Outbound Sales BPO",
    intro:
      "We staff and script consumer sales outsourcing teams around the regulatory, payment, and buying dynamics of each B2C vertical.",
    items: [
      {
        icon: "shopping-bag",
        stat: "PCI DSS",
        title: "E-Commerce & Retail",
        body: "Cart recovery, DRTV overflow, VIP sales lines, and seasonal surge support for high-volume consumer brands.",
      },
      {
        icon: "tv",
        stat: "FCC",
        title: "DRTV, Infomercial & Media",
        body: "Surge-staffed outbound sales BPO queues that absorb TV, radio, and digital response without drop-offs.",
      },
      {
        icon: "dollar",
        stat: "TCPA",
        title: "Insurance & Financial Consumer Products",
        body: "TCPA-compliant consumer sales outsourcing for Medicare, ACA, auto, home, and personal finance offers.",
      },
      {
        icon: "signal",
        stat: "CPNI",
        title: "Telecom, Streaming & Subscription",
        body: "Trial-to-paid conversion, renewals, win-back, and upgrade selling for telecom, streaming, and SaaS-to-consumer brands.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Consumer Brands Choose Us for B2C Sales Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore consumer sales vendors underperform on US B2C buyers — accent bias, script-bound agents, and weak objection handling leave money on the table. Low-cost domestic outbound sales BPO shops cycle through agents so fast that quality collapses the moment a campaign gets complex.",
      "Contact Center USA is different: a 100% US-based consumer sales outsourcing operation with tenured B2C agents, PCI DSS Level 1 infrastructure, and dedicated sales coaches who obsess over conversion, AOV, and customer lifetime value — not just call volume.",
    ],
    bullets: [
      "100% US-based consumer sales agents — no offshore or nearshore handoffs",
      "Bilingual English/Spanish agents available across all queues",
      "PCI DSS Level 1 order processing and payment handling",
      "DRTV-ready surge staffing with hours-level capacity flex",
      "Per-sale, per-hour, and hybrid commercial models for B2C sales outsourcing",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a consumer sales outsourcing team that converts?",
    accent: "consumer sales outsourcing team",
    body: "Whether you're launching a new consumer offer, scaling DRTV, or replacing an underperforming outbound sales BPO, request a free consultation. We'll model expected conversion lift, AOV, and cost per sale before you commit a single dollar to our B2C sales outsourcing program.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling that converts inquiries into sales with custom routing and scripting.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Telemarketing Services",
    desc: "Outbound telemarketing campaigns for product launches, promotions, and customer re-engagement.",
    href: "/services/telemarketing-services",
  },
  {
    title: "Customer Acquisition Outsourcing",
    desc: "Full-funnel customer acquisition services that drive growth from awareness to conversion.",
    href: "/services/customer-acquisition-outsourcing",
  },
];

export default function B2CSalesOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="B2C Sales Outsourcing"
      title="B2C Sales Outsourcing BPO in USA"
      titleHighlight="B2C Sales Outsourcing BPO"
      subtitle="Consumer sales outsourcing and outbound sales BPO USA teams that convert more shoppers, lift AOV, and absorb DRTV spikes without dropping a call."
      description="Winning in consumer sales requires speed, empathy, and the ability to scale on demand. Our outsourced B2C sales teams combine persuasive selling skills with genuine customer care to drive conversions across every channel. Whether you need inbound sales support, outbound campaign execution, or always-on e-commerce assistance, we deliver agents who sound like your brand and sell like your best reps."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-smile.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
