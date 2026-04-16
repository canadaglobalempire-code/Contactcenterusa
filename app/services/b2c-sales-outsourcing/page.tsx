import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "B2C Sales Outsourcing | Consumer Sales & Direct Response | Contact Center USA",
  description:
    "B2C sales outsourcing services including consumer outreach, direct sales, upselling, cross-selling, and retention campaigns. Convert more customers with expert sales agents.",
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
      title="Consumer Sales Teams That Convert Shoppers Into Loyal Customers"
      titleHighlight="Loyal Customers"
      subtitle="From inbound order-taking to outbound campaigns, our B2C sales agents deliver the personalized experience today's consumers demand."
      description="Winning in consumer sales requires speed, empathy, and the ability to scale on demand. Our outsourced B2C sales teams combine persuasive selling skills with genuine customer care to drive conversions across every channel. Whether you need inbound sales support, outbound campaign execution, or always-on e-commerce assistance, we deliver agents who sound like your brand and sell like your best reps."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-smile.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
