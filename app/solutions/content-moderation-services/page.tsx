import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Content Moderation Services | Contact Center USA",
  description:
    "US-based content moderation services with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "content moderation services",
    "content moderation outsourcing",
    "trust safety bpo usa",
    "ugc moderation services",
    "social media content moderation",
    "marketplace content moderation",
    "ai content moderation",
    "brand safety moderation",
  ],
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Content Moderation Services in USA",
    heading: "The trust safety BPO that keeps your community safe without killing its voice.",
    accent: "without killing its voice",
    body: [
      "Contact Center USA is one of the best content moderation services providers in the USA — a US-based trust safety BPO with trained moderators, resilience programs, and AI triage layered into every content stream we touch.",
      "For platforms searching for content moderation outsourcing that scales without regressing on accuracy, we deliver human-in-the-loop moderation across text, image, video, and livestream — at millisecond response times and with audit-ready evidence on every decision.",
    ],
    stats: [
      { stat: "50M+", label: "Pieces of user-generated content moderated every year" },
      { stat: "99.5%", label: "Policy-accuracy rate verified by independent QA calibration" },
      { stat: "<15min", label: "Average response time on escalated and high-severity content" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Moderation vs. Content Moderation Outsourcing",
    intro:
      "Growing platforms hit the same wall: moderation volume scales faster than internal hiring, moderator wellbeing suffers, and policy drift creeps in. Here's how a dedicated trust safety BPO compares to running content moderation services in-house.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Hiring & Ramp Speed",
        left: "60–120 days to hire, train, and certify a single moderator — slow to match viral spikes.",
        right: "Pre-certified moderator pool; 2-week ramp on new queues, hours for surge capacity.",
        leftYes: false,
      },
      {
        label: "Coverage Hours",
        left: "Business-hours coverage with brittle on-call rotations for nights and weekends.",
        right: "24/7/365 follow-the-sun moderation from US-based ops with multilingual support.",
        leftYes: false,
      },
      {
        label: "Moderator Wellbeing",
        left: "Ad-hoc wellness support; exposure limits informal; burnout-driven attrition.",
        right: "Clinical-grade resilience program: exposure caps, counselors, mandatory rotation.",
        leftYes: false,
      },
      {
        label: "AI + Human Pipeline",
        left: "Off-the-shelf classifiers; humans review everything the model flags in bulk.",
        right: "Tuned classifiers, severity triage, and human review budgets aligned to risk.",
        leftYes: false,
      },
      {
        label: "Policy Calibration",
        left: "Policy drift between individuals; calibration audits done quarterly at best.",
        right: "Weekly calibration, locked decision trees, measured inter-rater reliability above 95%.",
        leftYes: false,
      },
      {
        label: "Cost at Scale",
        left: "Fixed headcount; expensive overtime for surges; benefits + facilities burden.",
        right: "Per-ticket or per-hour pricing that flexes with volume — pay for what you moderate.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Trust & Safety Moderation Process",
    intro:
      "Every partnership runs on the same five-stage workflow — engineered for speed, accuracy, and moderator wellbeing.",
    steps: [
      {
        title: "Policy Onboarding",
        body: "We internalize your community guidelines, legal overlays (DSA, COPPA, CSAM), and escalation playbooks into structured decision trees.",
      },
      {
        title: "AI Pre-Filtering",
        body: "Tuned classifiers remove obvious violations and triage remaining content by severity, so human reviewers spend time where it matters.",
      },
      {
        title: "Human Review",
        body: "Trained US-based moderators apply policy to borderline cases with time-in-queue SLAs and wellness-protected shifts.",
      },
      {
        title: "Escalation & Crisis Response",
        body: "High-severity content (imminent harm, CSAM, viral brand risk) escalated to senior leads and your internal trust team within minutes.",
      },
      {
        title: "Calibration & Reporting",
        body: "Weekly QA calibration, monthly policy reviews, and executive dashboards on volume, accuracy, wellbeing, and community health.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Platforms That Rely on Our Content Moderation Outsourcing",
    intro:
      "Every platform carries its own risk profile and regulatory posture. Our moderator teams are specialized by vertical, with trained reviewers and custom policies for each.",
    items: [
      {
        icon: "shopping-bag",
        stat: "PCI DSS",
        title: "Marketplaces & Ecommerce",
        body: "Counterfeit listings, policy-violating products, review fraud, and seller onboarding KYC checks at platform scale.",
      },
      {
        icon: "radio",
        stat: "DSA",
        title: "Social & Creator Platforms",
        body: "Posts, comments, DMs, livestreams, and creator content reviewed under DSA, COPPA, and platform-specific obligations.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "Gaming & Dating Apps",
        body: "In-game chat, profile moderation, image verification, and grooming/harassment detection with child-safety escalation.",
      },
      {
        icon: "tv",
        stat: "FTC",
        title: "Ad, Influencer & Streaming",
        body: "Brand-safety review of ad placements, influencer posts, and livestream content against FTC and IAB standards.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Trust & Safety Moderation",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most content moderation outsourcing vendors compete on throughput alone — pushing moderators to unsafe exposure limits, tolerating policy drift, and under-investing in the engineering infrastructure required to keep pace with modern platforms. That model breaks when platforms face regulator scrutiny, viral events, or brand-risk incidents.",
      "Contact Center USA is different: a US-based trust safety BPO that treats moderator wellbeing and policy integrity as first-class product metrics, with AI triage, calibration engineering, and clinical support baked into every program.",
    ],
    bullets: [
      "US-based moderation ops with multilingual coverage on demand",
      "Clinical resilience program with exposure caps and counselors",
      "Tuned AI triage with human review budgets aligned to severity",
      "DSA, COPPA, CSAM, FTC, and platform-specific policy expertise",
      "24/7/365 coverage with surge capacity inside of hours",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better content moderation partner?",
    accent: "better content moderation",
    body: "If your moderation queue is backing up, your policy calibration is drifting, or your current trust safety BPO is short on wellbeing infrastructure, request a free moderation program review. We'll benchmark accuracy, SLA, and cost before you move a single ticket.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
