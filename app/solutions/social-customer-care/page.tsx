import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Social Customer Care | Social Media CX | Contact Center USA",
  description:
    "Social customer care services including social media response management, reputation monitoring, community engagement, and omnichannel social support. Meet customers where they are.",
  alternates: { canonical: "/solutions/social-customer-care" },
};

const features = [
  {
    title: "Social Media Response Management",
    desc: "Trained agents monitor and respond to customer inquiries, complaints, and mentions across Facebook, X, Instagram, LinkedIn, TikTok, and other platforms — ensuring timely, on-brand replies that resolve issues and protect your reputation.",
  },
  {
    title: "Reputation Monitoring & Alerts",
    desc: "Real-time monitoring of brand mentions, reviews, and sentiment across social media and review sites. Automated alerts notify your team of negative trends, viral complaints, or emerging issues before they escalate into full-blown crises.",
  },
  {
    title: "Direct Message & Inbox Management",
    desc: "We manage your social media inboxes and direct messages at scale, triaging inquiries by type and urgency, resolving routine questions, and escalating complex issues to the right internal teams with full context.",
  },
  {
    title: "Review Response & Management",
    desc: "Professional responses to customer reviews on Google, Yelp, Trustpilot, and industry-specific platforms. We acknowledge feedback, resolve concerns publicly, and follow up privately to convert detractors into advocates.",
  },
  {
    title: "Social Listening & Insights",
    desc: "Beyond reactive support, our social listening captures competitive intelligence, product feedback, industry trends, and customer sentiment data — delivering actionable insights to your marketing, product, and leadership teams.",
  },
  {
    title: "Escalation & Crisis Communication",
    desc: "Defined escalation workflows route sensitive issues to your communications or legal teams immediately. During brand crises, our agents execute your approved response playbooks to maintain consistent messaging across all channels.",
  },
];

const benefits = [
  "Multi-platform social media coverage",
  "Real-time reputation monitoring and alerts",
  "Direct message and inbox management",
  "Review response across major platforms",
  "Social listening and competitive intelligence",
  "Crisis communication playbook execution",
];

const stats = [
  { value: 90, suffix: "%", label: "Responses Within 30 Minutes" },
  { value: 35, suffix: "%", label: "Improvement in Social Sentiment" },
  { value: 1, suffix: "M+", label: "Social Interactions Managed" },
  { value: 4.7, suffix: "/5", label: "Customer Satisfaction on Social", decimals: 1 },
];

const testimonial = {
  quote:
    "Contact Center USA manages our social customer care across every platform. Response times went from hours to minutes, our social sentiment improved 35%, and we turned a channel that used to generate complaints into one that generates loyalty.",
  name: "A.W.",
  title: "VP of Digital Marketing",
  company: "A National Retail Brand",
  initials: "AW",
};

const faqs = [
  {
    question: "Which social media platforms do you support?",
    answer:
      "We support all major platforms including Facebook, X (formerly Twitter), Instagram, LinkedIn, TikTok, YouTube, Pinterest, and Reddit. We also monitor and respond on review platforms like Google Business Profile, Yelp, Trustpilot, and industry-specific review sites.",
  },
  {
    question: "How do you maintain our brand voice across social channels?",
    answer:
      "During onboarding, we develop a detailed brand voice guide with your marketing team covering tone, language, approved responses, and escalation triggers. Agents are trained and tested on your voice before going live, and regular calibration sessions ensure consistency.",
  },
  {
    question: "What tools do you use for social media management?",
    answer:
      "We work with your preferred platform or recommend best-in-class tools including Sprout Social, Hootsuite, Sprinklr, and Khoros. Our agents are proficient across all major social management platforms and can integrate with your existing tech stack.",
  },
  {
    question: "Can you handle social customer care in multiple languages?",
    answer:
      "Yes. We provide social care in English, Spanish, French, Portuguese, and additional languages based on your audience demographics. Native-speaking agents ensure cultural nuance and authenticity in every social interaction.",
  },
  {
    question: "How do you handle sensitive issues or potential PR crises on social media?",
    answer:
      "We maintain pre-approved escalation paths and crisis response playbooks developed with your communications team. Sensitive posts are flagged immediately, routed to designated stakeholders, and handled according to your approved protocols. Our team is trained in de-escalation and public-facing crisis communication.",
  },
];

const relatedServices = [
  {
    title: "Content Moderation Services",
    desc: "Protect your brand and community with comprehensive content moderation across platforms.",
    href: "/solutions/content-moderation-services",
  },
  {
    title: "Customer Experience Management",
    desc: "Integrate social insights into your broader CX strategy for omnichannel excellence.",
    href: "/solutions/customer-experience-management",
  },
  {
    title: "Customer Service Outsourcing",
    desc: "Extend your social care with full-service customer support across phone, email, and chat.",
    href: "/solutions/customer-service-outsourcing",
  },
];

export default function SocialCustomerCarePage() {
  return (
    <ServicePageTemplate
      badge="Social Customer Care"
      title="Social Customer Care That Turns Conversations Into Loyalty"
      titleHighlight="Conversations Into Loyalty"
      subtitle="Meet customers where they are with fast, on-brand social media support that protects your reputation and builds lasting relationships."
      description="Our social customer care services provide dedicated, trained agents who monitor and respond across every social platform your customers use. From real-time response management and reputation monitoring to social listening and crisis communication, we help you turn social media from a risk into a competitive advantage."
      features={features}
      benefits={benefits}
      image="/images/cc-team-huddle.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
