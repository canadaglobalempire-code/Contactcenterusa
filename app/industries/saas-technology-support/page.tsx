import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "SaaS Customer Support Outsourcing | US Tier 1-3 Teams";
const description =
  "SaaS customer support outsourcing with US-based agents: onboarding, Tier 1-3 troubleshooting, billing questions and churn-risk follow-up. Get a quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "saas customer support outsourcing",
    "saas customer support",
    "saas technical support",
    "technology bpo usa",
    "tier 1 technical support",
    "help desk outsourcing",
    "developer support outsourcing",
    "it support bpo",
    "enterprise saas support",
  ],
  alternates: { canonical: "/industries/saas-technology-support" },
  ...pageMeta(title, description, "/industries/saas-technology-support"),
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
  name: "D.K.",
  title: "Head of Customer Success",
  company: "A Fast-Growing SaaS Platform",
  initials: "DK",
};

const faqs = [
  {
    question: "What does SaaS customer support outsourcing include?",
    answer:
      "It usually covers onboarding help, Tier 1 and Tier 2 troubleshooting with structured escalation to your engineers, billing and subscription questions within rules you set, and tagging of churn-risk signals for your customer success team. Our agents work inside your help desk, such as Zendesk, Freshdesk, Intercom, HubSpot Service Hub or Jira Service Management.",
  },
  {
    question: "How should we measure an outsourced SaaS support team?",
    answer:
      "Track first response time by channel, resolution time, first-contact resolution and CSAT, and pair them with quality checks such as reopened tickets, escalations engineering sends back as incomplete, and QA reviews of real conversations. Set targets from your own baseline and review them weekly while the team ramps up.",
  },
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Technology BPO in USA",
    heading: "The SaaS technical support partner engineering teams choose when every unresolved ticket drags down NPS and product velocity.",
    accent: "product velocity",
    body: [
      "Contact Center USA is one of the best SaaS technical support providers in the USA — a 100% US-based technology BPO USA operation delivering SaaS customer support outsourcing for venture-backed startups, PE-backed scale-ups, and enterprise SaaS platforms.",
      "For SaaS operators evaluating technical support outsourcing, the priorities are clear: first-contact resolution, ticketing fluency, developer-grade API knowledge, and a team that keeps engineers out of the support queue so they can ship product.",
    ],
    stats: [
      { stat: "92%", label: "First-contact resolution across Tier 1 technical support engagements" },
      { stat: "4.8/5", label: "Average CSAT score maintained across active SaaS support programs" },
      { stat: "24/7", label: "Global help desk coverage with blended voice, chat, email, and API support" },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "SaaS Support Guide",
    heading: "What SaaS customer support covers",
    image: "/images/cc-agent-laptop.jpg",
    imagePosition: "left",
    body: [
      "SaaS customer support is everything a subscriber needs from you between signing up and renewing. It starts with onboarding: account setup, first configuration, data imports and the first time a user tries the feature they bought the product for. It continues with troubleshooting in tiers. Tier 1 resolves known issues from the knowledge base, Tier 2 reproduces harder problems and checks logs and settings, and Tier 3 works with your engineers on bugs and integration faults.",
      "Two areas are easy to forget when you scope an outsourced team. Billing and subscription questions, such as plan changes, failed payments, invoices, refunds and cancellations, need clear rules about what an agent may approve. And every conversation carries churn-risk signals: repeated tickets on the same problem, a drop in usage, questions about exporting data or cancelling, or a key user leaving. A good SaaS support team tags those signals and passes them to customer success while there is still time to act.",
    ],
    bullets: [
      "Onboarding calls, walkthroughs and setup help for new accounts",
      "Tier 1 to Tier 3 troubleshooting with reproduction steps for engineering",
      "Billing, plan change, renewal and cancellation requests within your rules",
      "API, integration and webhook questions from developer users",
      "Churn-risk tagging and handoff to your customer success team",
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Measuring Support",
    heading: "How outsourced SaaS customer support is measured",
    image: "/images/cc-agent-monitor.jpg",
    imagePosition: "right",
    body: [
      "Agree the measures before launch, and agree how each one is calculated. First response time (FRT) is how long a customer waits for the first human reply, measured per channel because chat, email and in-app messages carry different expectations. Resolution time is how long a ticket takes to close, and first-contact resolution is the share of tickets closed without a follow-up or an escalation. Customer satisfaction (CSAT) is the score customers give after a conversation.",
      "Read them together. A team can cut first response time with quick replies that do not help, or lift its resolution rate by closing tickets too early, so pair speed with quality: reopened tickets, escalations that engineering sends back as incomplete, and QA reviews of real conversations. Set targets from your own current baseline and your plan tiers rather than borrowed benchmarks, and review them weekly during the first months.",
    ],
    bullets: [
      "First response time by channel and by plan tier",
      "Resolution time and first-contact resolution",
      "CSAT after each conversation, with the comments read",
      "Reopen rate and the quality of escalations",
      "Backlog age and ticket volume against forecast",
    ],
  },
  {
    pattern: "flow",
    eyebrow: "Handover Checklist",
    heading: "What to Hand to an Outsourced SaaS Support Team",
    intro:
      "An outsourced team is only as good as what it is given on day one. These five items decide how quickly agents can resolve tickets without pulling in your engineers.",
    steps: [
      {
        title: "Product Access",
        body: "A sandbox or demo account per agent, least-privilege admin views of customer settings, and release notes for recent changes.",
      },
      {
        title: "Ticket Taxonomy & Macros",
        body: "Your categories, tags and priority rules, the top issues by volume, and the macros and knowledge base articles that answer them.",
      },
      {
        title: "Escalation Matrix",
        body: "Severity definitions, who owns each product area, what a complete bug report contains, and when each team can be reached.",
      },
      {
        title: "Billing Rules",
        body: "What agents may change or approve on plans, credits, refunds and cancellations, and when a request goes to finance.",
      },
      {
        title: "Churn-Risk Playbook",
        body: "The signals to tag, the handoff route to customer success, and any retention offers agents are allowed to make.",
      },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Support Team vs. Contact Center USA BPO",
    intro:
      "Every SaaS company weighs the same decision: hire and manage an internal support org, or outsource Tier 1-2 to a specialized technology BPO. Here's how the two compare on the factors that drive CSAT, churn, and engineering efficiency.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Ticketing Platform Fluency",
        left: "Support hires ramp on Zendesk or Intercom from scratch; 30-60 day time-to-productive.",
        right: "Active agents in Zendesk, Freshdesk, Intercom, HubSpot Service Hub, Jira Service Management.",
        leftYes: false,
      },
      {
        label: "SOC 2 & GDPR Data Handling",
        left: "SOC 2 scope includes every support laptop and network endpoint your team touches.",
        right: "SOC 2 Type II certified facilities with documented data handling controls.",
        leftYes: false,
      },
      {
        label: "24/7 Follow-the-Sun Coverage",
        left: "Round-the-clock coverage requires multi-region hiring that rarely pencils for early-stage SaaS.",
        right: "24/7/365 coverage already in production across all time zones.",
        leftYes: false,
      },
      {
        label: "Engineering Escalation Discipline",
        left: "Tier 1 agents escalate anything unfamiliar; engineering inboxes fill with low-quality tickets.",
        right: "Structured escalation with reproduction steps, logs, and severity classification.",
        leftYes: false,
      },
      {
        label: "Developer & API Support",
        left: "Developer-facing issues require senior CSMs or engineers to respond — costly and slow.",
        right: "Technically proficient agents trained on API docs, SDKs, webhooks, and integration patterns.",
        leftYes: false,
      },
      {
        label: "Scaling with User Growth",
        left: "Hiring cycles can't keep up with viral or product-launch-driven ticket spikes.",
        right: "Pre-trained bench scales 2-5x within weeks to absorb growth and launch spikes.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our SaaS Customer Support Outsourcing Onboarding Process",
    intro:
      "Every SaaS startup, scale-up, and enterprise platform we support flows through the same five-stage workflow — engineered to stand up a production-ready support team without burying your engineering team in onboarding.",
    steps: [
      {
        title: "Product & Workflow Discovery",
        body: "Feature walkthroughs, top-issue analysis, and ticket taxonomy captured directly from your CX leads.",
      },
      {
        title: "Tooling Integration",
        body: "Zendesk, Freshdesk, Intercom, Jira, GitHub Issues, and product telemetry connections configured with least-privilege access.",
      },
      {
        title: "Macro & Escalation Buildout",
        body: "Tier 1-2 macros, escalation templates, reproduction step checklists, and severity rubrics.",
      },
      {
        title: "Technical Certification",
        body: "Product certification, API and integration training, and shadow shifts before live ticket ownership.",
      },
      {
        title: "Go-Live & Continuous Improvement",
        body: "Phased ramp with weekly CSAT/FCR reviews, monthly retro with your CX lead, and quarterly knowledge base refresh.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Technology Sub-Segments We Serve",
    intro:
      "Technology isn't one market — it spans vertical SaaS, horizontal platforms, developer tools, and enterprise IT. Our SaaS customer support outsourcing programs are tuned to each.",
    items: [
      {
        icon: "laptop",
        stat: "SaaS",
        title: "Vertical & Horizontal SaaS",
        body: "Tier 1-2 support for CRM, HR tech, fintech apps, martech, and other vertical SaaS categories.",
      },
      {
        icon: "wrench",
        stat: "DevTools",
        title: "Developer Tools & Platforms",
        body: "API docs support, SDK troubleshooting, webhook debugging, and developer community moderation.",
      },
      {
        icon: "shield",
        stat: "Security",
        title: "Cybersecurity & IT Management",
        body: "MSP, MDR, EDR, and IT management platform support with incident triage and escalation workflows.",
      },
      {
        icon: "factory",
        stat: "Enterprise",
        title: "Enterprise Software & Hardware",
        body: "Multi-tier enterprise support with named account coordination and SLA-bound response.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why SaaS Companies Choose Contact Center USA for Technology BPO USA Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore SaaS support drags on NPS because of language friction, time-zone-bound escalations, and inconsistent product knowledge across agent cohorts. Generic domestic help desks miss the technical depth modern SaaS products require — every misrouted ticket lands on your engineering team.",
      "Contact Center USA is different: a 100% US-based SaaS technical support operation with native fluency in major ticketing platforms, structured engineering handoffs, and the technical discipline to keep developers focused on shipping.",
    ],
    bullets: [
      "100% US-based voice, chat, email, and in-app support agents",
      "SOC 2 Type II certified facilities with documented data handling controls",
      "Native experience on Zendesk, Freshdesk, Intercom, Jira, HubSpot Service Hub",
      "Developer-grade API, SDK, webhook, and integration troubleshooting support",
      "24/7/365 follow-the-sun coverage with structured engineering escalation",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better technology BPO partner?",
    accent: "better technology BPO",
    body: "Whether you're a Series A startup protecting engineering focus, a scale-up racing churn, a developer tools company scaling API support, or an enterprise platform consolidating support vendors — we can show you the CSAT, FCR, and engineering-time-saved impact before you commit. Request a free consultation and we'll walk through product discovery, tooling integration, and go-live timeline.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Help Desk Support",
    desc: "Multi-tiered technical help desk services for software and hardware products.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Live Chat Support",
    desc: "Real-time chat support for SaaS products with technical troubleshooting capabilities.",
    href: "/services/live-chat-outsourcing",
  },
  {
    title: "Back-Office Support",
    desc: "Ticket triage, QA testing, and administrative support for technology teams.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Player Support & Trust and Safety for the Gaming Industry",
    desc: "US-based player support for game studios and esports platforms.",
    href: "/industries/gaming-esports-support",
  },
  {
    title: "Comprehensive Content Moderation for Safe Online Communities",
    desc: "US-based content moderation for UGC platforms and marketplaces.",
    href: "/solutions/content-moderation-services",
  },
  {
    title: "SaaS Customer Retention Strategy",
    desc: "How a B2B SaaS company cut churn 28% and lifted NPS from 32 to 67 with proactive US-based customer success support — the baseline, the fix, and…",
    href: "/case-studies/saas-customer-retention",
  },
];

export default function TechnologyPage() {
  return (
    <ServicePageTemplate
      badge="Technology Call Center Services"
      title="SaaS Customer Support Outsourcing for Technology Companies"
      titleHighlight="SaaS Customer Support Outsourcing"
      subtitle="Scalable Tier 1-3 technical support, SaaS onboarding, and 24/7 help desk services that let your engineering team focus on building great products."
      description="Technology companies need support partners who speak their language. Our agents understand SaaS workflows, API integrations, and technical troubleshooting at a level that keeps your users productive and your engineering team focused. From startup to enterprise, we scale with you — delivering fast, accurate support that protects your product reputation."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-row.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
