import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Technology Call Center Services | SaaS & IT Support | Contact Center USA",
  description:
    "Technology and SaaS call center services including Tier 1-3 technical support, user onboarding, bug reporting, and 24/7 help desk. Scale your support with experts.",
};

const features = [
  {
    title: "Tier 1-3 Technical Support",
    desc: "Multi-tiered support structure with Level 1 agents handling common issues, Level 2 for complex troubleshooting, and Level 3 for escalations requiring deep technical expertise and engineering coordination.",
  },
  {
    title: "User Onboarding & Training",
    desc: "Guided onboarding calls and walkthroughs that help new users get started, configure their accounts, and understand key features — driving adoption and reducing early churn.",
  },
  {
    title: "Bug Report & Issue Management",
    desc: "Structured bug reporting with detailed reproduction steps, severity classification, and direct integration with Jira, GitHub Issues, or your preferred tracking platform for seamless engineering handoffs.",
  },
  {
    title: "SaaS Subscription Support",
    desc: "Complete subscription lifecycle management including plan upgrades, billing inquiries, usage questions, renewal outreach, and proactive churn prevention for SaaS companies.",
  },
  {
    title: "Knowledge Base & Self-Service",
    desc: "Agents contribute to and leverage your knowledge base, deflecting common tickets while ensuring complex issues get human attention — continuously improving your self-service resources.",
  },
  {
    title: "API & Integration Support",
    desc: "Technically proficient agents who can assist developers with API documentation, integration troubleshooting, webhook configuration, and SDK setup to accelerate developer success.",
  },
];

const benefits = [
  "Tier 1-3 technical escalation paths",
  "Jira, GitHub & Zendesk integrations",
  "24/7 global help desk coverage",
  "SaaS metrics tracking (churn, NPS)",
  "Developer-friendly API support",
  "Custom technical training programs",
];

const stats = [
  { value: 92, suffix: "%", label: "First-Contact Resolution" },
  { value: 50, suffix: "%", label: "Reduction in Ticket Backlog" },
  { value: 4.8, suffix: "/5", label: "Average CSAT Score", decimals: 1 },
  { value: 3, suffix: "min", label: "Average Response Time" },
];

const testimonial = {
  quote:
    "Contact Center USA handles our Tier 1 and Tier 2 support flawlessly. Our engineering team can finally focus on building product instead of answering support tickets. First-contact resolution jumped to 92%.",
  name: "David Kim",
  title: "Head of Customer Success",
  company: "CloudStack Technologies",
  initials: "DK",
};

const faqs = [
  {
    question: "Can your agents handle technical troubleshooting for software products?",
    answer:
      "Yes, our technology support agents have backgrounds in IT and software. We train them extensively on your product, APIs, and common technical issues. They handle everything from password resets to complex configuration problems across Tier 1-3 levels.",
  },
  {
    question: "How do you integrate with our ticketing system?",
    answer:
      "We integrate natively with Zendesk, Freshdesk, Jira Service Management, Intercom, and HubSpot Service Hub. For custom systems, we use API connections to ensure tickets, statuses, and customer data sync in real time.",
  },
  {
    question: "Do you provide 24/7 support for global SaaS customers?",
    answer:
      "Absolutely. We operate around the clock with agents available across all time zones. Whether your users are in San Francisco or Singapore, they get fast, knowledgeable support any time they need it.",
  },
  {
    question: "How do you handle product updates and feature changes?",
    answer:
      "We maintain a dedicated training pipeline. When you ship updates, our team leads review release notes, update internal documentation, and conduct agent training sessions before changes go live — ensuring zero knowledge gaps.",
  },
  {
    question: "Can you help reduce our customer churn rate?",
    answer:
      "Yes. Our agents are trained in churn prevention including proactive outreach to at-risk accounts, usage coaching, feature discovery, and escalation to your customer success team when intervention is needed. Clients typically see 15-25% churn reduction.",
  },
];

const relatedServices = [
  {
    title: "Help Desk Support",
    desc: "Multi-tiered technical help desk services for software and hardware products.",
    href: "/services/help-desk",
  },
  {
    title: "Live Chat Support",
    desc: "Real-time chat support for SaaS products with technical troubleshooting capabilities.",
    href: "/services/live-chat",
  },
  {
    title: "Back-Office Support",
    desc: "Ticket triage, QA testing, and administrative support for technology teams.",
    href: "/services/back-office",
  },
];

export default function TechnologyPage() {
  return (
    <ServicePageTemplate
      badge="Technology Call Center Services"
      title="Call Center Solutions for Technology Companies"
      titleHighlight="Technology Companies"
      subtitle="Scalable Tier 1-3 technical support, SaaS onboarding, and 24/7 help desk services that let your engineering team focus on building great products."
      description="Technology companies need support partners who speak their language. Our agents understand SaaS workflows, API integrations, and technical troubleshooting at a level that keeps your users productive and your engineering team focused. From startup to enterprise, we scale with you — delivering fast, accurate support that protects your product reputation."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-row.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
