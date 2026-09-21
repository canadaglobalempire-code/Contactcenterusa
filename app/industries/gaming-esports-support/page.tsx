import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Gaming & Esports Player Support | Game Studio BPO",
  description:
    "US-based player support for game studios and esports platforms. Launch-day surge, account recovery, purchase disputes, and trust & safety moderation.",
  keywords: [
    "gaming player support outsourcing",
    "game studio customer support",
    "esports support services",
    "player support bpo",
    "game launch support",
    "in game purchase disputes",
    "trust and safety moderation gaming",
    "account recovery support",
    "video game customer service outsourcing",
    "live ops player support",
  ],
  alternates: { canonical: "/industries/gaming-esports-support" },
};

const features = [
  {
    title: "Launch & Live-Ops Surge Support",
    desc: "A launch, a major patch, or a season drop produces more tickets in seventy-two hours than the following quarter combined. We stage trained agents against your release calendar so the backlog never becomes the story on launch week.",
  },
  {
    title: "Account Recovery & Security",
    desc: "Compromised accounts are the highest-emotion ticket in gaming — players lose years of progress and purchases. Agents run your verification process carefully, restore access, and handle restoration requests without opening a fraud vector.",
  },
  {
    title: "In-Game Purchase & Refund Disputes",
    desc: "Microtransaction disputes, accidental purchases, unfulfilled currency, and platform refund policy questions across Steam, PlayStation, Xbox, and mobile storefronts — resolved under your published policy, consistently.",
  },
  {
    title: "Trust & Safety Moderation",
    desc: "Report review, chat and voice moderation, cheat and exploit reports, and enforcement actions applied against your community guidelines with the documentation an appeal process requires.",
  },
  {
    title: "Technical Troubleshooting",
    desc: "Crash reports, connectivity and latency complaints, platform-specific bugs, and hardware compatibility issues triaged with proper reproduction detail before anything reaches your engineering team.",
  },
  {
    title: "Community & Social Coverage",
    desc: "Players escalate publicly on Discord, Reddit, X, and Steam forums long before they file a ticket. Monitored coverage in your community voice catches issues while they are still support problems rather than news stories.",
  },
];

const benefits = [
  "Staffing planned around launches and season drops",
  "Player-fluent agents, not generic ticket handlers",
  "Account recovery with careful verification discipline",
  "Trust and safety moderation with appeal documentation",
  "Zendesk, Helpshift, and custom tooling integration",
  "Community coverage on Discord, Reddit, and forums",
];

const stats = [
  { value: 24, suffix: "/7", label: "Launch & Live-Ops Coverage" },
  { value: 10, suffix: "x", label: "Launch-to-Base Ticket Surge Handled" },
  { value: 4, suffix: " platforms", label: "PC, Console, Mobile, and Web" },
  { value: 5, suffix: " channels", label: "Ticket, Chat, Email, Social, Discord" },
];

const faqs = [
  {
    question: "Can you handle a game launch or major patch?",
    answer:
      "Yes, and it is the single most common reason studios bring in outside support. Launch weeks routinely produce ten times normal ticket volume, compressed into seventy-two hours, and a backlog built in that window takes months to clear while review scores absorb the damage. We plan staffing against your release calendar and hold reserve capacity for the opening days.",
  },
  {
    question: "Do your agents actually understand games?",
    answer:
      "Agents assigned to gaming accounts are players. That matters more than it sounds: a support reply that misuses basic terminology, misunderstands what a player lost, or treats a progression wipe as a routine inconvenience tells your community immediately that support does not understand the product. Agents are trained on your specific title, systems, and economy before going live.",
  },
  {
    question: "How do you handle account recovery safely?",
    answer:
      "Account recovery sits directly between two failure modes: locking out a legitimate player who lost years of progress, or handing an account to someone social-engineering their way in. We follow your verification requirements exactly, with no discretion to bypass steps, and escalate ambiguous cases to your team rather than guessing. Every recovery is documented.",
  },
  {
    question: "Can you do trust and safety moderation?",
    answer:
      "Yes. We review player reports, moderate chat and voice, handle cheat and exploit reports, and apply enforcement against your community guidelines. Every action is documented to support an appeal process, and enforcement thresholds stay under your control rather than being set by agent judgment. Moderators working sensitive queues are staffed with wellbeing considerations built into scheduling.",
  },
  {
    question: "Which support platforms do you work in?",
    answer:
      "We work in your existing stack rather than importing our own — Zendesk, Helpshift, Freshdesk, Salesforce, and custom in-house tooling are all supported, along with the publisher and platform back-ends needed to action account and purchase issues on Steam, PlayStation, Xbox, Nintendo, and mobile storefronts.",
  },
  {
    question: "Do you cover Discord and community channels?",
    answer:
      "Yes. In gaming, the community channel is the real front line — issues surface on Discord, Reddit, and Steam forums hours before they arrive as tickets. We provide monitored coverage in your established community voice, respond to what can be answered publicly, and escalate anything requiring a developer or community manager rather than improvising an official position.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Gaming & Esports Player Support",
    heading: "Launch week generates a quarter of tickets in seventy-two hours.",
    accent: "a quarter of tickets in seventy-two hours",
    body: [
      "Contact Center USA staffs player support for game studios, publishers, and esports platforms — launch and live-ops surge, account recovery, purchase disputes, trust and safety, and community coverage.",
      "Gaming support does not resemble ordinary customer service. Volume arrives in launch and patch spikes, the audience is expert and vocal, and a mishandled account recovery costs a player years of progress and costs you a public thread about it.",
    ],
    stats: [
      { stat: "10x", label: "Launch-week ticket surge over baseline volume" },
      { stat: "24/7", label: "Coverage across launch windows and live-ops events" },
      { stat: "5", label: "Channels: ticket, chat, email, social, and Discord" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "An In-House Support Team vs. a Gaming Support Partner",
    intro:
      "Most studios staff support for steady-state volume, because that is what the budget models. The problem is that almost nothing about player support is steady-state.",
    leftTitle: "In-House Support Team",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Launch Week",
        left: "Backlog builds in days and takes months to clear while reviews suffer.",
        right: "Agents staged against the release calendar with reserve capacity held.",
        leftYes: false,
      },
      {
        label: "Global Time Zones",
        left: "Overnight and weekend tickets sit until the next business day.",
        right: "Continuous coverage across the hours your players actually play.",
        leftYes: false,
      },
      {
        label: "Community Channels",
        left: "Discord and Reddit unmonitored until something goes viral.",
        right: "Monitored coverage in your community voice with clear escalation.",
        leftYes: false,
      },
      {
        label: "Moderation Load",
        left: "Report queues grow faster than the team can review them.",
        right: "Dedicated trust and safety queue with documented enforcement.",
        leftYes: false,
      },
      {
        label: "Between Releases",
        left: "Launch-sized team carried through a quiet development cycle.",
        right: "Staffing contracts between releases and expands for the next drop.",
        leftYes: false,
      },
      {
        label: "Engineering Interruption",
        left: "Devs pulled into triage on reports lacking reproduction detail.",
        right: "Technical triage with proper repro steps before anything escalates.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Built Around Your Release Calendar",
    intro:
      "Player support is scheduled backwards from launches, patches, and season drops rather than staffed to an annual average.",
    steps: [
      {
        title: "Release Calendar Review",
        body: "We map launches, patches, season drops, and esports events to build staffing plans per window.",
      },
      {
        title: "Title & Systems Training",
        body: "Agents trained on your game, its economy, progression systems, and known issues before touching a queue.",
      },
      {
        title: "Policy & Escalation Setup",
        body: "Verification requirements, refund policy, enforcement thresholds, and developer escalation paths documented.",
      },
      {
        title: "Launch Coverage",
        body: "Staged capacity for the opening seventy-two hours with reserve agents held for overflow.",
      },
      {
        title: "Live-Ops Steady State",
        body: "Volume, sentiment, and resolution reporting feeding staffing adjustments before the next drop.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Segments",
    heading: "Who We Support in Games",
    intro:
      "A live-service shooter and a premium single-player release produce entirely different support profiles. Staffing and training are built per model.",
    items: [
      {
        icon: "laptop",
        stat: "Live",
        title: "Live-Service & F2P Titles",
        body: "Season drops, battle pass questions, currency disputes, and continuous live-ops coverage.",
      },
      {
        icon: "briefcase",
        stat: "Studio",
        title: "Studios & Publishers",
        body: "Launch surge, technical triage, refund policy handling, and store platform coordination.",
      },
      {
        icon: "shopping-bag",
        stat: "Mobile",
        title: "Mobile & Casual",
        body: "High-volume, low-complexity purchase and progression tickets at scale across app stores.",
      },
      {
        icon: "dollar",
        stat: "Esports",
        title: "Esports & Platforms",
        body: "Tournament registration, prize and payout enquiries, competitive integrity reports, and event coverage.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Player Support Needs Players",
    image: "/images/cc-agent-focus.jpg",
    imagePosition: "right",
    body: [
      "Gaming communities detect a support team that does not play the game within one reply. Misused terminology, a canned response to a lost account, or a refund answer that contradicts the one another player got yesterday — each becomes a thread, and the threads outlive the patch.",
      "Contact Center USA staffs agents who play, trains them on your title and its systems before they touch a queue, and schedules them against your release calendar. Enforcement thresholds and refund policy stay yours; consistency in applying them becomes ours.",
    ],
    bullets: [
      "Agents who play, trained on your specific title before going live",
      "Staffing staged against launches, patches, and season drops",
      "Account recovery run strictly to your verification requirements",
      "Trust and safety enforcement documented for appeals",
      "Community coverage on Discord, Reddit, and Steam forums",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Do not let launch week write your review scores.",
    accent: "write your review scores",
    body: "Send us your release calendar and typical ticket volume. We will build a launch and live-ops staffing plan with reserve capacity held for the opening days.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Content Moderation Services",
    desc: "Deeper trust and safety capability for platforms with heavy user-generated content.",
    href: "/solutions/content-moderation-services",
  },
  {
    title: "Technical Support Outsourcing",
    desc: "Tier 1-3 technical triage for the engineering-adjacent side of player issues.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Social Media Customer Support",
    desc: "Monitored coverage on the public channels where player issues surface first.",
    href: "/solutions/social-media-customer-support",
  },
  {
    title: "Scaling from 50 to 400 Agents in 3 Weeks for Black Friday",
    desc: "How a mid-size e-commerce retailer scaled from 50 to 400 agents in 3 weeks for Black Friday, achieving 98.5% CSAT during peak season.",
    href: "/case-studies/ecommerce-holiday-scaling",
  },
  {
    title: "SaaS Customer Retention Strategy",
    desc: "How a B2B SaaS company cut churn 28% and lifted NPS from 32 to 67 with proactive US-based customer success support — the baseline, the fix, and…",
    href: "/case-studies/saas-customer-retention",
  },
  {
    title: "What Makes Contact Center USA Different",
    desc: "Learn why teams choose Contact Center USA for US-based agents, flexible programs, clear reporting, compliance support, and scalable customer care.",
    href: "/about/why-work-with-us",
  },
];

export default function GamingEsportsPage() {
  return (
    <ServicePageTemplate
      badge="Gaming & Esports Support"
      title="Player Support & Trust and Safety for the Gaming Industry"
      titleHighlight="Gaming Industry"
      subtitle="Studios, publishers, and esports platforms use our agents to absorb launch-week surge, run account recovery safely, resolve purchase disputes, and moderate their communities."
      description="Player support is spiky, expert, and public. We staff against your release calendar so launch week does not build a backlog that outlives the patch, train agents on your title and its systems before they touch a queue, run account recovery strictly to your verification requirements, and moderate reports with the documentation an appeal process needs."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-night.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
