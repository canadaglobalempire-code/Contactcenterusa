import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import { pageMeta } from "@/lib/seo-config";

const title = "Ecommerce Call Center Outsourcing | US-Based Agents";
const description =
  "Ecommerce call center outsourcing with US-based agents for order status, returns, exchanges and product questions, scaled to your peak seasons. Get a free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ecommerce call center outsourcing",
    "ecommerce call center services",
    "outsourced ecommerce customer service",
    "ecommerce customer support outsourcing",
    "online store call center",
    "wismo call center",
    "ecommerce bpo usa",
  ],
  alternates: { canonical: "/services/ecommerce-call-center-outsourcing" },
  ...pageMeta(title, description, "/services/ecommerce-call-center-outsourcing"),
};

const features = [
  {
    title: "Order Status & WISMO Calls",
    desc: "Where is my order is the most common call an online store receives. Agents check order status in your commerce platform or CRM and answer it on the first call, using the same view your own team sees, so WISMO tickets stop flooding your inbox.",
  },
  {
    title: "Returns, Exchanges & Refunds",
    desc: "Agents walk customers through your return policy, issue return labels within the rules you set, and process exchanges or refund requests with clear notes attached. You set the refund authority limits; the agents work inside them and escalate the edge cases.",
  },
  {
    title: "Pre-Purchase Product Questions",
    desc: "Sizing, compatibility, shipping timelines and stock questions answered before the cart is abandoned. Trained agents use your product catalog and knowledge base to convert hesitant shoppers into completed orders during the same call.",
  },
  {
    title: "Peak Season & Flash Sale Coverage",
    desc: "Black Friday, product launches and holiday peaks are staffing problems you should not have to hire for. Coverage scales up for the surge and back down after, so queue times stay short in the weeks that decide your year.",
  },
  {
    title: "Omni-Channel Support",
    desc: "Phone, email, live chat and SMS handled by the same team with a shared view of the customer, so a shopper who emailed yesterday is not asked to repeat everything on today's call.",
  },
  {
    title: "Marketplace & Channel Coordination",
    desc: "Support for Amazon, Walmart, Shopify and wholesale buyers handled with marketplace-specific rules in mind — response-time targets, case metrics and policy constraints included in how the team works.",
  },
];

const benefits = [
  "US-based agents who sound like your brand, not a script",
  "Coverage that flexes with seasonal peaks without year-round payroll",
  "First-call resolution on order, shipping and returns questions",
  "Integration with Shopify, Amazon, and major help desks",
  "Recorded calls and QA scoring for consistent quality",
  "Clear weekly reporting on volume, CSAT and resolution rates",
];

const stats = [
  { value: 500, suffix: "+", label: "US-Based Agents" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
  { value: 24, suffix: "/7", label: "Availability" },
];

const faqs = [
  {
    question: "What does ecommerce call center outsourcing cover?",
    answer:
      "It covers the customer contacts your store generates: order status and WISMO calls, returns and exchanges, refunds within your rules, pre-purchase product questions, shipping issues, and the email and chat volume that comes with them. Most stores start with the call types that consume the most team hours — usually order status and returns — and expand coverage from there.",
  },
  {
    question: "How do agents handle returns and refunds without giving away the store?",
    answer:
      "You set the rules in writing: what agents can approve on the spot, what needs a supervisor, and what must reach your team. Agents work inside those limits, document every interaction, and escalate the exceptions with notes attached. Stores that define refund authority clearly can let agents resolve most return calls on the first contact without added risk.",
  },
  {
    question: "Can you handle our peak season without us rehiring every year?",
    answer:
      "Yes, and that is one of the main reasons stores outsource. Coverage scales up for Black Friday, product launches and holiday peaks, then back down in January. You agree on the surge plan in advance — hours, agent counts and training dates — so the ramp does not depend on your own hiring cycle.",
  },
  {
    question: "How do agents connect to our store platform?",
    answer:
      "Agents work in your commerce platform and help desk, or in a unified desktop connected to them, with the customer's order history visible on the call. Shopify, Amazon Seller Central, WooCommerce and the major help desks are standard. During onboarding we map which systems agents need, what they can change, and what stays read-only.",
  },
];

const relatedServices = [
  {
    title: "Customer Care Outsourcing",
    desc: "Ongoing customer care programs staffed by US-based agents.",
    href: "/services/customer-care-outsourcing",
  },
  {
    title: "Omnichannel Contact Center Solutions",
    desc: "Phone, chat, email and SMS support delivered as one connected experience.",
    href: "/services/omnichannel-contact-center-solutions",
  },
  {
    title: "Ecommerce Customer Service Outsourcing",
    desc: "How US-based ecommerce support works across channels and marketplaces.",
    href: "/industries/ecommerce-customer-service-outsourcing",
  },
  {
    title: "Digital Customer Experience Services",
    desc: "Chat, social, email and self-service programs for online brands.",
    href: "/services/digital-customer-experience-services",
  },
  {
    title: "Live Chat Outsourcing",
    desc: "Real-time chat coverage for shoppers who would rather type than call.",
    href: "/services/live-chat-outsourcing",
  },
];

export default function EcommerceCallCenterOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="Ecommerce BPO"
      title="Ecommerce Call Center Outsourcing with"
      titleHighlight="US-Based Agents"
      subtitle="Your customers ordered from a store, not a ticket queue. Our US-based agents answer order status, returns, exchanges and product questions in your brand's voice — through the peaks, not just the quiet weeks."
      description="Ecommerce support lives or dies on two things: how fast the customer reaches a person, and whether that person can actually resolve the issue. Our outsourced ecommerce teams work inside your commerce platform and help desk with the order history in front of them, answer WISMO calls on first contact, process returns inside the rules you set, and scale for the peak weeks that decide your year. You keep the brand standards and the refund authority; we keep the queue clear."
      features={features}
      benefits={benefits}
      image="/images/agent-focused.jpg"
      stats={stats}
      faqs={faqs}
      goLiveStat={{ value: "10–15", label: "Business Days to Launch" }}
      relatedServices={relatedServices}
    />
  );
}
