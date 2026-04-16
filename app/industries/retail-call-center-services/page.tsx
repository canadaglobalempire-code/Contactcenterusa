import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Retail Call Center Services | Order Support & Customer Retention | Contact Center USA",
  description:
    "Retail call center services including order tracking, returns processing, customer retention, upselling, peak season support, and loyalty programs. Trusted by retailers nationwide.",
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
    />
  );
}
