import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Ecommerce Customer Service | Contact Center USA",
  description:
    "US-based ecommerce customer service support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "ecommerce customer service",
    "ecommerce bpo usa",
    "online retail customer support",
    "shopify customer service outsourcing",
    "dtc brand customer support",
    "ecommerce live chat support",
    "order support outsourcing",
    "returns processing bpo",
  ],
  alternates: { canonical: "/industries/ecommerce-customer-service-outsourcing" },
};

const features = [
  {
    title: "Order Support & Tracking",
    desc: "End-to-end order management including placement assistance, real-time tracking updates, and proactive communication about shipping delays to keep customers informed and satisfied.",
  },
  {
    title: "Returns & Exchange Processing",
    desc: "Streamlined returns and exchanges with clear RMA workflows, instant label generation, and empathetic agents who turn return experiences into retention opportunities.",
  },
  {
    title: "Peak Season Scalability",
    desc: "Rapidly scale your support team during Black Friday, Cyber Monday, and holiday seasons with pre-trained agents ready to handle 3-5x normal call volumes without sacrificing quality.",
  },
  {
    title: "Live Chat & Multichannel Support",
    desc: "Real-time live chat, email, and social media support that meets shoppers on their preferred channels, reducing cart abandonment and boosting conversion rates.",
  },
  {
    title: "Product Knowledge & Upselling",
    desc: "Agents trained on your catalog who can answer detailed product questions, suggest complementary items, and identify cross-sell opportunities to increase average order value.",
  },
  {
    title: "Chargeback & Dispute Resolution",
    desc: "Expert handling of payment disputes and chargebacks with proper documentation, evidence gathering, and timely responses to protect your revenue and merchant reputation.",
  },
];

const benefits = [
  "24/7 omnichannel support",
  "Peak season surge capacity",
  "Cart abandonment recovery",
  "Platform integrations (Shopify, WooCommerce)",
  "Real-time order tracking assistance",
  "Dedicated account management",
];

const stats = [
  { value: 35, suffix: "%", label: "Reduction in Cart Abandonment" },
  { value: 98, suffix: "%", label: "Customer Satisfaction Score" },
  { value: 5, suffix: "x", label: "Peak Season Scalability" },
  { value: 45, suffix: "s", label: "Average Response Time" },
];

const testimonial = {
  quote:
    "During our biggest Black Friday ever, Contact Center USA scaled our support team seamlessly. Customer satisfaction actually went up during our highest-volume period. They are an essential partner.",
  name: "J.P.",
  title: "VP of Customer Experience",
  company: "A Top Ecommerce Retailer",
  initials: "JP",
};

const faqs = [
  {
    question: "Can you integrate with our e-commerce platform?",
    answer:
      "Yes, we integrate with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom solutions. Our team sets up direct API connections so agents have real-time access to orders, inventory, and customer data.",
  },
  {
    question: "How do you handle peak season demand spikes?",
    answer:
      "We maintain a bench of pre-trained e-commerce agents who are ready to deploy during high-volume periods. We begin ramping up 4-6 weeks before major shopping events, ensuring agents are fully trained on your products and policies before the rush begins.",
  },
  {
    question: "Do you offer live chat support for our website?",
    answer:
      "Absolutely. We provide live chat agents who engage shoppers in real time, answer product questions, assist with checkout issues, and proactively reach out to visitors showing exit intent — all proven to reduce cart abandonment and increase conversions.",
  },
  {
    question: "How do your agents learn about our products?",
    answer:
      "We develop comprehensive product knowledge bases from your catalog, run hands-on training sessions, and use AI-assisted tools that give agents instant access to product specs, availability, and comparison data during live customer interactions.",
  },
  {
    question: "What metrics do you track for e-commerce support?",
    answer:
      "We track CSAT, first-contact resolution, average handle time, cart recovery rate, upsell conversion, and NPS. You receive real-time dashboards and weekly performance reports with actionable insights to continuously improve the customer experience.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Ecommerce BPO in USA",
    heading: "The ecommerce customer service partner online retailers choose when every minute of response time moves revenue.",
    accent: "moves revenue",
    body: [
      "Contact Center USA is one of the best ecommerce customer service providers in the USA — a 100% US-based ecommerce BPO USA operation delivering online retail customer support for DTC brands, marketplaces, Shopify Plus stores, subscription boxes, and omnichannel retailers.",
      "For ecommerce brands evaluating online retail customer support partners, the stakes are measurable: every minute of response delay increases abandonment, every mishandled return erodes LTV, and every peak season without surge capacity caps the year's growth. We solve all three.",
    ],
    stats: [
      { stat: "45s", label: "Average first-response time across chat, voice, and email queues" },
      { stat: "5x Peak", label: "Black Friday / Cyber Monday surge capacity without CSAT degradation" },
      { stat: "35%", label: "Average reduction in cart abandonment after live chat activation" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Ecommerce Support vs. Contact Center USA BPO",
    intro:
      "Every ecommerce brand weighs the same decision: hire and manage support internally, or partner with a specialized ecommerce BPO USA operator. Here's how the two compare on the factors that drive conversion, retention, and margin.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Platform Integration Depth",
        left: "Shopify, WooCommerce, or Magento access depends on internal admin hands and IT tickets.",
        right: "Active integrations with Shopify Plus, WooCommerce, Magento, BigCommerce, Amazon Seller Central, and Gorgias.",
        leftYes: false,
      },
      {
        label: "Peak Season Scalability",
        left: "Seasonal hires ramp on 4-8 week cycles; Black Friday planning starts in Q3 and still falls short.",
        right: "Pre-trained ecommerce bench scales 3-5x for BFCM, holiday, and product launch events.",
        leftYes: false,
      },
      {
        label: "Channel Coverage (Voice, Chat, Email, Social)",
        left: "Channel silos with different ticketing tools and inconsistent response SLAs.",
        right: "Unified omnichannel queues with blended agents in Zendesk, Gorgias, Freshdesk, Intercom.",
        leftYes: false,
      },
      {
        label: "Returns, RMA & Chargeback Handling",
        left: "Return workflows handled part-time; chargeback response deadlines routinely missed.",
        right: "Specialist queues for returns, exchanges, and chargeback disputes with evidence packaging.",
        leftYes: false,
      },
      {
        label: "Cart Abandonment & Upsell Recovery",
        left: "Proactive chat and cart outreach deprioritized when volume spikes hit.",
        right: "Dedicated proactive chat agents trained to recover carts and drive upsell/cross-sell.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fixed salaries, benefits, and tooling regardless of seasonal traffic patterns.",
        right: "Per-ticket or per-FTE pricing that flexes with your actual volume curve.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Ecommerce Customer Service Onboarding Process",
    intro:
      "Every DTC brand, marketplace, and omnichannel retailer we support flows through the same five-stage workflow — engineered to stand up a production-ready online retail customer support team before your next peak.",
    steps: [
      {
        title: "Brand & Catalog Discovery",
        body: "Deep-dive on products, voice, policies, and margin-sensitive workflows like returns and exchanges.",
      },
      {
        title: "Platform Integration",
        body: "Connections to Shopify, WooCommerce, Magento, Amazon Seller Central, and ticketing tools like Gorgias and Zendesk.",
      },
      {
        title: "Macro & Workflow Buildout",
        body: "Response macros, return authorization rules, proactive chat triggers, and escalation paths aligned to brand voice.",
      },
      {
        title: "Agent Onboarding",
        body: "Product training, platform certification, and shadow shifts across voice, chat, email, and social channels.",
      },
      {
        title: "Go-Live & Peak Planning",
        body: "Phased launch with real-time CSAT monitoring and BFCM / holiday surge playbook ready from day one.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Ecommerce Sub-Segments We Serve",
    intro:
      "Ecommerce is a diverse portfolio of business models. Our online retail customer support programs are tuned to the margin, repeat-rate, and service expectations of each sub-segment.",
    items: [
      {
        icon: "shopping-bag",
        stat: "DTC",
        title: "DTC Brands & CPG",
        body: "Subscription-friendly support for beauty, apparel, food & beverage, and household DTC brands.",
      },
      {
        icon: "store",
        stat: "Marketplace",
        title: "Marketplaces & Amazon Sellers",
        body: "Amazon Seller Central, eBay, Walmart, Target Plus case management, A-to-z claim response, and review recovery.",
      },
      {
        icon: "laptop",
        stat: "Shopify",
        title: "Shopify Plus & DTC Platforms",
        body: "Native Shopify Plus, Gorgias, and Recharge workflows for subscription, cross-sell, and loyalty programs.",
      },
      {
        icon: "truck",
        stat: "Retail",
        title: "Omnichannel Retailers",
        body: "Buy-online-pickup-in-store, curbside, ship-from-store, and in-store appointment support at scale.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Retailers Choose Contact Center USA for Online Retail Customer Support",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore ecommerce support frequently damages brand voice, handles returns mechanically, and creates CSAT drag that compounds across thousands of interactions. Low-cost domestic operators lack the platform fluency and surge infrastructure to handle BFCM — the very period that makes or breaks a retail year.",
      "Contact Center USA is different: a 100% US-based ecommerce BPO USA operation with platform-native agents, proactive chat programs that recover carts in real time, and peak-season capacity modeled on your actual demand curve.",
    ],
    bullets: [
      "100% US-based voice, chat, email, and social support agents",
      "Active integrations with Shopify Plus, Gorgias, Zendesk, Freshdesk, Klaviyo, Recharge",
      "BFCM and product launch surge capacity of 3-5x baseline — no CSAT cliff",
      "Proactive chat programs that recover carts and drive measurable upsell revenue",
      "Returns, exchanges, and chargeback response workflows built into daily operations",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better ecommerce BPO partner?",
    accent: "better ecommerce BPO",
    body: "Whether you're a DTC brand scaling past your founder-led support team, a Shopify Plus store preparing for holiday, a marketplace seller fighting Amazon case backlogs, or an omnichannel retailer consolidating channels — we can show you the conversion, CSAT, and margin impact before you commit. Request a free consultation and we'll walk through integration scope, channel mix, and peak season planning.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Live Chat Support",
    desc: "Real-time chat agents who convert browsers into buyers on your website.",
    href: "/services/live-chat",
  },
  {
    title: "Outbound Sales",
    desc: "Proactive outreach for cart recovery, upselling, and customer win-back campaigns.",
    href: "/services/outbound",
  },
  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock support so your customers get help whenever they shop.",
    href: "/services/24-7-support",
  },
];

export default function EcommercePage() {
  return (
    <ServicePageTemplate
      badge="E-Commerce Call Center Services"
      title="Call Center Solutions Built for E-Commerce Success"
      titleHighlight="E-Commerce Success"
      subtitle="Scalable customer support that reduces cart abandonment, streamlines returns, and delivers the fast, friendly service online shoppers expect."
      description="E-commerce never sleeps, and neither do we. Our agents are trained on your products, integrated with your platform, and ready to handle everything from order inquiries to complex returns. Whether it is a quiet Tuesday or Black Friday chaos, we deliver consistent, brand-aligned support that turns one-time buyers into loyal customers."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-pair.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
