import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Retail Call Center Services | Retail BPO USA | Retail Customer Service Outsourcing | Contact Center USA",
  description:
    "US-based retail call center services and retail BPO USA. Retail customer service outsourcing across order support, returns, retention, and peak season — 97% CSAT and 30% higher AOV.",
  keywords: [
    "retail call center services",
    "retail bpo usa",
    "retail customer service outsourcing",
    "ecommerce call center services",
    "retail customer support bpo",
    "outsourced retail customer service",
    "retail contact center services",
    "retail cx outsourcing",
  ],
  alternates: { canonical: "/industries/retail-call-center-services" },
};

const features = [
  {
    title: "Order Tracking & Status Updates",
    desc: "Real-time order support that keeps customers informed at every stage — from purchase confirmation through delivery — reducing inbound inquiries and building trust with proactive status notifications.",
  },
  {
    title: "Returns & Exchange Processing",
    desc: "Streamlined returns handling that guides customers through your policies, processes RMA requests, coordinates shipping labels, and ensures timely refunds — turning potential frustrations into retention opportunities.",
  },
  {
    title: "Customer Retention Programs",
    desc: "Proactive outreach and save-desk strategies that identify at-risk customers, address concerns before they churn, and deploy targeted offers to keep your best shoppers loyal and engaged with your brand.",
  },
  {
    title: "Upselling & Cross-Selling",
    desc: "Revenue-generating conversations where trained agents recommend complementary products, premium upgrades, and bundle deals based on purchase history and customer preferences — boosting average order value naturally.",
  },
  {
    title: "Peak Season & Holiday Support",
    desc: "Elastic staffing models that scale your support team during Black Friday, holiday rushes, flash sales, and product launches — ensuring every customer gets fast, friendly service when demand spikes.",
  },
  {
    title: "Loyalty Program Management",
    desc: "Full-service loyalty program support including enrollment, points inquiries, reward redemptions, tier upgrades, and personalized member communications that drive repeat purchases and lifetime value.",
  },
];

const benefits = [
  "24/7 omnichannel customer support",
  "E-commerce platform integrations",
  "Bilingual English/Spanish agents",
  "Rapid scaling for peak seasons",
  "PCI-compliant payment processing",
  "Real-time reporting & analytics",
];

const stats = [
  { value: 97, suffix: "%", label: "Customer Satisfaction Rate" },
  { value: 25, suffix: "%", label: "Increase in Customer Retention" },
  { value: 3, suffix: "M+", label: "Retail Interactions Handled" },
  { value: 30, suffix: "%", label: "Higher Average Order Value" },
];

const testimonial = {
  quote:
    "Contact Center USA handles our entire customer service operation across three brands. During last holiday season, they scaled from 40 to 120 agents in two weeks and maintained a 97% satisfaction score. They are a true extension of our team.",
  name: "J.P.",
  title: "VP of Customer Operations",
  company: "A National Retail Brand",
  initials: "JP",
};

const faqs = [
  {
    question: "Can you integrate with our e-commerce platform and OMS?",
    answer:
      "Yes. We integrate with all major e-commerce platforms including Shopify, Magento, BigCommerce, Salesforce Commerce Cloud, and custom-built systems. Our IT team handles the integration to provide agents with real-time access to order data, inventory levels, and customer history.",
  },
  {
    question: "How do you handle peak season staffing?",
    answer:
      "We use predictive modeling based on your historical data and promotional calendar to forecast demand. Our flexible staffing model includes a trained reserve pool that can be activated within days. We typically begin peak season preparation 6-8 weeks in advance to ensure seamless scaling.",
  },
  {
    question: "Do your agents handle upselling and cross-selling?",
    answer:
      "Absolutely. Our agents are trained in consultative selling techniques specific to retail. Using your product catalog and recommendation rules, they naturally suggest complementary items, upgrades, and promotions during service interactions — increasing AOV without being pushy.",
  },
  {
    question: "How do you maintain brand consistency across channels?",
    answer:
      "We develop comprehensive brand playbooks in partnership with your team covering voice, tone, policies, and escalation paths for every channel — phone, chat, email, and social. Regular quality monitoring and calibration sessions ensure agents deliver a consistent experience everywhere.",
  },
  {
    question: "What reporting and analytics do you provide?",
    answer:
      "We provide real-time dashboards and customizable reports covering KPIs like first-contact resolution, average handle time, CSAT, NPS, conversion rates, and revenue generated. Monthly business reviews highlight trends, root-cause analysis, and actionable recommendations to improve your customer experience.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Retail Call Center Services in USA",
    heading: "The retail BPO USA brands trust from Black Friday through post-holiday returns.",
    accent: "Black Friday through post-holiday returns",
    body: [
      "Contact Center USA is one of the best retail call center services providers in the USA — a 100% US-based retail BPO USA partner delivering order support, returns processing, retention outreach, and peak-season surge capacity for national retail and ecommerce brands.",
      "For retail CX and operations leaders searching for retail customer service outsourcing that can absorb a holiday spike without breaking CSAT, we staff domestic agents, integrate directly with Shopify, Magento, Salesforce Commerce Cloud, and custom OMS platforms, and deliver 97% satisfaction across millions of interactions every year.",
    ],
    stats: [
      { stat: "97%", label: "Measured CSAT across millions of retail interactions annually" },
      { stat: "30%", label: "Lift in average order value from trained upsell and cross-sell" },
      { stat: "3x", label: "Peak-to-base staffing flex for BFCM and holiday seasons" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Retail Team vs. Retail Customer Service Outsourcing",
    intro:
      "Most retail CX leaders weigh the same trade-off: keep seasonal support in-house or partner with a specialized retail BPO. Here's how the models compare on the KPIs that actually show up in P&L and customer reviews.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Peak Season Scalability",
        left: "Hire, train, and manage 2–3x seasonal agents in-house — then lay off in January.",
        right: "Trained reserve pool scaled up in days and back down after peak — no layoffs.",
        leftYes: false,
      },
      {
        label: "Cost per Interaction",
        left: "$8–$12 per contact fully loaded when admin, facility, and seasonal ramp are included.",
        right: "30–45% lower blended cost per resolved contact with tiered deflection and macros.",
        leftYes: false,
      },
      {
        label: "24/7 Omnichannel Coverage",
        left: "Dark after hours; limited chat and social coverage; no reliable holiday overnight staffing.",
        right: "24/7/365 coverage across phone, chat, email, and social with unified queues.",
        leftYes: false,
      },
      {
        label: "E-commerce Platform Depth",
        left: "Agents often untrained on OMS, returns platforms, and loyalty stack — escalations pile up.",
        right: "Certified on Shopify, Magento, BigCommerce, Salesforce Commerce, and OMS platforms.",
        leftYes: false,
      },
      {
        label: "AOV & Retention Impact",
        left: "Transactional service only; no trained upsell, save desk, or retention motion.",
        right: "Trained AOV and save desk — 30% AOV lift and 25% retention lift on average.",
        leftYes: false,
      },
      {
        label: "Reporting & Insight",
        left: "Quarterly reports with limited CSAT and FCR visibility; no cohort analysis.",
        right: "Real-time dashboards on CSAT, FCR, AHT, conversion, and revenue per contact.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Retail Customer Service Outsourcing Lifecycle",
    intro:
      "Every retail BPO engagement runs through the same five-stage lifecycle — engineered to scale from pilot to peak in weeks.",
    steps: [
      {
        title: "Retail Ops Audit",
        body: "We shadow your current retail CX operation, map volume drivers, and benchmark CSAT, AHT, and cost per contact.",
      },
      {
        title: "Stack Integration",
        body: "Agents provisioned on your Shopify, OMS, returns, and CRM stack with role-based access before go-live.",
      },
      {
        title: "Team Build & Training",
        body: "Domestic retail specialists trained on your brand voice, policies, and product catalog with certification before production.",
      },
      {
        title: "Launch & Peak Prep",
        body: "Controlled pilot followed by capacity planning for BFCM, holiday, and launch events — trained reserve pool on standby.",
      },
      {
        title: "Measure & Optimize",
        body: "Weekly dashboards on CSAT, FCR, AOV, and retention with monthly QBRs driving continuous improvement.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Segments",
    heading: "Retail Segments We Support",
    intro:
      "Retail CX is not one thing. Our retail BPO USA pods are staffed and trained for the specific dynamics of each retail segment.",
    items: [
      {
        icon: "shopping-bag",
        stat: "DTC",
        title: "DTC & Ecommerce Brands",
        body: "Order, shipping, returns, and cart recovery for DTC brands running on Shopify and Salesforce Commerce.",
      },
      {
        icon: "store",
        stat: "Omni",
        title: "Omnichannel Retailers",
        body: "Unified support across brick-and-mortar, app, and web with BOPIS, returns, and loyalty handling.",
      },
      {
        icon: "briefcase",
        stat: "B2B",
        title: "B2B & Wholesale Retail",
        body: "Account-based order entry, PO handling, and buyer support for wholesale and B2B retail programs.",
      },
      {
        icon: "dollar",
        stat: "Luxury",
        title: "Luxury & Specialty Retail",
        body: "White-glove concierge support, VIP clienteling, and high-touch returns for luxury and premium brands.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Retail BPO USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most retail customer service outsourcing vendors run offshore teams that don't understand US shipping carriers, return policies, or the emotional texture of a holiday-season escalation. The CSAT drops, the return fraud rises, and the reviews on Trustpilot tell the rest of the story.",
      "Contact Center USA is different: a 100% US-based retail BPO USA partner with domestic specialists trained on your stack, your policies, and your brand voice. We absorb BFCM and holiday spikes without breaking SLA, lift AOV through trained upsell motions, and keep returns fraud in check with disciplined verification.",
    ],
    bullets: [
      "100% US-based retail specialists — fluent in US carriers, policies, and brands",
      "Certified on Shopify, Magento, BigCommerce, Salesforce Commerce, and OMS platforms",
      "3x peak-to-base capacity flex for BFCM and holiday seasons",
      "Trained AOV, save desk, and loyalty retention motions",
      "PCI-DSS-aligned payment handling and return fraud verification",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better retail call center services partner?",
    accent: "better retail call center services",
    body: "If your CSAT is slipping under peak volume, your return rate is rising, or your AOV is flat despite traffic growth, request a free retail CX assessment. We'll benchmark cost, CSAT, and conversion before you change vendors.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Live Chat Outsourcing",
    desc: "Real-time chat support for online shoppers with proactive engagement to reduce cart abandonment.",
    href: "/services/live-chat-outsourcing",
  },
  {
    title: "Social Media Support",
    desc: "Monitor and respond to customer inquiries across social platforms to protect your brand reputation.",
    href: "/solutions/social-media-customer-support",
  },
  {
    title: "CX Analytics",
    desc: "Data-driven insights to optimize your retail customer experience and drive repeat purchases.",
    href: "/services/customer-experience-analytics",
  },
];

export default function RetailPage() {
  return (
    <ServicePageTemplate
      badge="Retail Call Center Services"
      title="Professional Call Center Solutions for the Retail Industry"
      titleHighlight="Retail Industry"
      subtitle="From order tracking and returns to customer retention and peak season support, we help retailers deliver exceptional shopping experiences that drive loyalty and revenue."
      description="Our retail call center combines deep industry expertise with advanced technology to support brands of all sizes. Whether you need order management, returns processing, upselling programs, or holiday surge staffing, our trained agents represent your brand with the care and knowledge your customers expect."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-call.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
