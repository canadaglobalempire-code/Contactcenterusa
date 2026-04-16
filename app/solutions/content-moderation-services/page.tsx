import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Content Moderation Services | Social Media & UGC | Contact Center USA",
  description:
    "Content moderation services for social media, user-generated content, and online communities. Protect your brand with human-reviewed moderation, AI filtering, and 24/7 coverage.",
  alternates: { canonical: "/solutions/content-moderation-services" },
};

const features = [
  {
    title: "Social Media Content Moderation",
    desc: "Trained moderators review posts, comments, and messages across all major social platforms in real time — removing harmful content, enforcing community guidelines, and protecting your brand reputation around the clock.",
  },
  {
    title: "User-Generated Content Review",
    desc: "Every piece of user-submitted content including reviews, photos, videos, and forum posts is screened against your policies before publication, ensuring your platform stays safe, compliant, and welcoming for all users.",
  },
  {
    title: "AI-Assisted Filtering & Escalation",
    desc: "Machine learning models pre-filter high-volume content streams, automatically removing clear violations and escalating borderline cases to human moderators for nuanced review — maximizing speed without sacrificing accuracy.",
  },
  {
    title: "Brand Safety & Ad Compliance",
    desc: "We monitor ad placements, sponsored content, and influencer posts to ensure they meet your brand safety standards, FTC disclosure requirements, and platform-specific advertising policies.",
  },
  {
    title: "Community Management Support",
    desc: "Beyond moderation, our team engages with your community by responding to questions, fostering positive discussions, and escalating product feedback to your internal teams to keep your audience engaged and loyal.",
  },
  {
    title: "Crisis Detection & Rapid Response",
    desc: "Real-time monitoring detects emerging brand crises, viral complaints, and reputation threats as they develop. Our team alerts your PR and communications team immediately with context and recommended actions.",
  },
];

const benefits = [
  "24/7 real-time content screening",
  "Multi-platform coverage and support",
  "AI-assisted pre-filtering at scale",
  "FTC and ad compliance monitoring",
  "Custom community guideline enforcement",
  "Crisis detection and rapid alerting",
];

const stats = [
  { value: 99.5, suffix: "%", label: "Content Accuracy Rate", decimals: 1 },
  { value: 50, suffix: "M+", label: "Posts Moderated Annually" },
  { value: 15, suffix: "min", label: "Average Response Time" },
  { value: 60, suffix: "%", label: "Reduction in Harmful Content" },
];

const testimonial = {
  quote:
    "Contact Center USA handles content moderation across our platform and social channels. Harmful content removal is down 60% and our community engagement scores have never been higher. Their moderators truly understand our brand voice.",
  name: "D.P.",
  title: "Head of Trust & Safety",
  company: "A Leading Online Marketplace",
  initials: "DP",
};

const faqs = [
  {
    question: "What types of content can you moderate?",
    answer:
      "We moderate all forms of digital content including text posts, comments, images, videos, live streams, reviews, forum discussions, and private messages. Our teams cover social media platforms, e-commerce marketplaces, dating apps, gaming communities, and any platform with user-generated content.",
  },
  {
    question: "How do you handle nuanced or borderline content decisions?",
    answer:
      "Borderline cases are escalated to senior moderators who specialize in contextual judgment. We maintain detailed decision trees built with your team, conduct regular calibration sessions, and provide audit trails for every moderation decision to ensure consistency.",
  },
  {
    question: "Can you moderate content in multiple languages?",
    answer:
      "Yes. We provide moderation in over 20 languages including English, Spanish, French, German, Portuguese, Mandarin, and Arabic. Native-speaking moderators ensure cultural context and local nuance are factored into every decision.",
  },
  {
    question: "How do you protect moderator wellbeing when reviewing harmful content?",
    answer:
      "We take moderator wellbeing seriously. Our program includes mandatory rotation schedules, access to mental health counselors, wellness checks, content exposure limits, and ongoing resilience training. We follow industry best practices for psychological safety.",
  },
  {
    question: "What reporting and analytics do you provide?",
    answer:
      "You receive real-time dashboards and weekly reports covering moderation volume, violation types, response times, accuracy rates, trending content issues, and community health metrics. Custom reports can be configured to match your internal KPIs.",
  },
];

const relatedServices = [
  {
    title: "Social Customer Care",
    desc: "Respond to customer inquiries and complaints across social media channels with trained agents.",
    href: "/solutions/social-customer-care",
  },
  {
    title: "Back-Office Outsourcing",
    desc: "Scalable back-office support for data processing, document review, and administrative tasks.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Customer Experience Management",
    desc: "End-to-end CX programs that turn community insights into measurable business improvements.",
    href: "/solutions/customer-experience-management",
  },
];

export default function ContentModerationServicesPage() {
  return (
    <ServicePageTemplate
      badge="Content Moderation Services"
      title="Comprehensive Content Moderation for Safe Online Communities"
      titleHighlight="Safe Online Communities"
      subtitle="Protect your brand, users, and platform with human-powered moderation backed by AI filtering and 24/7 global coverage."
      description="Our content moderation services combine trained human moderators with AI-assisted filtering to keep your digital platforms safe, compliant, and welcoming. From social media and user-generated content to ad compliance and crisis detection, we provide the scale and expertise to moderate millions of interactions while preserving your community culture."
      features={features}
      benefits={benefits}
      image="/images/cc-team-plan.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
