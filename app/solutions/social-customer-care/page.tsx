import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Social Customer Care | Contact Center USA",
  description:
    "US-based social customer care with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "social customer care",
    "social media customer service bpo",
    "social cx outsourcing",
    "social media cx services",
    "outsourced social customer care",
    "social care outsourcing",
    "social media support bpo",
    "omnichannel social care",
  ],
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Social Customer Care in USA",
    heading: "The social media customer service BPO brands trust when reputation moves at internet speed.",
    accent: "internet speed",
    body: [
      "Contact Center USA is one of the best social customer care providers in the USA — a 100% US-based social CX outsourcing partner delivering real-time response, reputation management, review reply, and crisis containment across every platform your customers use.",
      "For CX and marketing leaders searching for a social media customer service BPO that can actually keep up with viral cycles, we staff domestic social care specialists, integrate with Sprinklr, Sprout, Khoros, and Hootsuite, and work within your approved playbooks under tight SLAs.",
    ],
    stats: [
      { stat: "< 30 min", label: "Median first response across Facebook, X, Instagram, and TikTok" },
      { stat: "35%", label: "Average lift in measured social sentiment within first 90 days" },
      { stat: "1M+", label: "Social interactions, DMs, and reviews resolved annually" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Social Team vs. Social CX Outsourcing BPO",
    intro:
      "Most brands run social care inside a small community team that can't scale with viral spikes or crises. Here's how that model stacks up against a specialized social customer care BPO.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Response Speed Under Spike",
        left: "Hours to days when volume spikes, PTO hits, or a post goes viral — backlog grows fast.",
        right: "Under 30 minutes, 24/7, with surge capacity that absorbs spikes without SLA breach.",
        leftYes: false,
      },
      {
        label: "After-Hours & Weekend Coverage",
        left: "Dark coverage from 6pm to 9am and weekends — customers wait and sentiment drops.",
        right: "24/7/365 follow-the-sun coverage with the same playbooks and approval tiers overnight.",
        leftYes: false,
      },
      {
        label: "Cost per Interaction",
        left: "In-house community managers cost $65–$90K fully loaded with limited deflection leverage.",
        right: "30–45% lower cost per resolved interaction with tiered triage and macro automation.",
        leftYes: false,
      },
      {
        label: "Crisis Response Readiness",
        left: "Ad hoc escalation paths; approval chains slow; crisis playbooks often theoretical.",
        right: "Tiered escalation to your comms and legal teams with pre-approved crisis macros.",
        leftYes: false,
      },
      {
        label: "Reputation & Review Coverage",
        left: "Google, Yelp, Trustpilot, and app-store reviews usually go weeks without response.",
        right: "All reviews acknowledged within 24 hours with public reply and private resolution.",
        leftYes: false,
      },
      {
        label: "Reporting & Insight",
        left: "Platform-native dashboards only — limited correlation between social and CX KPIs.",
        right: "Unified reporting on response time, sentiment, CSAT, and escalation drivers.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Social Customer Care Engagement Flow",
    intro:
      "Every social CX outsourcing program runs through the same five-stage flow — engineered to stand up on-brand, on-policy social care in weeks, not quarters.",
    steps: [
      {
        title: "Voice & Policy Design",
        body: "We codify your brand voice, approved responses, and escalation tiers into a shared social playbook.",
      },
      {
        title: "Platform Integration",
        body: "Agents provisioned inside your Sprinklr, Sprout, Khoros, or Hootsuite with role-based permissions.",
      },
      {
        title: "Team Training & Certification",
        body: "Domestic social care specialists certified on your brand voice, product, and crisis protocols before go-live.",
      },
      {
        title: "Monitor, Respond & Escalate",
        body: "24/7 monitoring of mentions, DMs, comments, and reviews with tiered escalation to your comms team.",
      },
      {
        title: "Insight & Optimize",
        body: "Weekly reports on response time, sentiment, volume, and root cause — feeding back into product and CX.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries That Rely on Our Social Customer Care",
    intro:
      "Social care risk profiles differ sharply by vertical. Our social CX outsourcing pods are staffed with specialists in the industries most exposed to public sentiment.",
    items: [
      {
        icon: "shopping-bag",
        stat: "DTC",
        title: "Retail & Ecommerce",
        body: "Order, return, and shipping inquiries handled across Instagram, TikTok, X, and Reddit at peak-season scale.",
      },
      {
        icon: "plane",
        stat: "IROP",
        title: "Travel & Hospitality",
        body: "Real-time social response to flight delays, cancellations, and hotel issues with approved compensation matrices.",
      },
      {
        icon: "signal",
        stat: "Telecom",
        title: "Telecom, Cable & Media",
        body: "Outage communication, billing disputes, and retention on X and Facebook where telecom complaints go public.",
      },
      {
        icon: "landmark",
        stat: "FinServ",
        title: "Financial & FinTech Brands",
        body: "Compliance-aware social response on app stores, Twitter, and Reddit with strict PII and disclosure controls.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Social Customer Care",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most social media customer service BPO vendors either use offshore teams that miss cultural nuance or small boutique shops that can't handle a real crisis. Either way, response lag and off-brand replies erode the sentiment your marketing team paid to build.",
      "Contact Center USA is different: a 100% US-based social CX outsourcing partner with domestic specialists, 24/7 surge capacity, and deep integrations into Sprinklr, Sprout Social, Khoros, and Hootsuite. We work inside your playbooks, under your brand, with the speed the feed demands.",
    ],
    bullets: [
      "100% US-based social care specialists — native English and culturally fluent",
      "24/7/365 coverage with surge capacity for viral spikes and campaigns",
      "Certified on Sprinklr, Sprout Social, Khoros, Hootsuite, and Salesforce Service Cloud",
      "Tiered escalation to comms, legal, and exec teams with pre-approved macros",
      "Unified reporting on response time, sentiment, CSAT, and recurring themes",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better social customer care partner?",
    accent: "better social customer care",
    body: "If your social inbox is backed up, your reviews are unanswered, or your brand is one viral thread away from a crisis, request a free social CX audit. We'll benchmark response time, sentiment, and coverage before you change anything.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
