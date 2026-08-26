import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { PageFAQ } from "@/components/shared/PageFAQ";

export const metadata: Metadata = {
  title: "Call Center Solutions | Contact Center USA",
  description:
    "Call Center Solutions from Contact Center USA. Learn services, coverage, industries, and quote options for US-based outsourcing.",
  alternates: { canonical: "/solutions" },
};


const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Solutions vs services",
    heading: "A service is a capability. A solution is a staffed outcome.",
    accent: "a staffed outcome",
    body: [
      "The distinction matters when you are reading proposals. A service is a thing agents can do — answer inbound calls, run outbound campaigns, moderate content. A solution is that capability wrapped in the staffing model, coverage hours, escalation rules, QA scorecard and reporting that make it survive contact with real volume.",
      "Buying a service and assuming the rest is included is the most common way an outsourcing program disappoints. Everything on this page is scoped as a solution: what gets done, who does it, when they are available, and how it is measured.",
    ],
  },
  {
    pattern: "flow",
    eyebrow: "Choosing a model",
    heading: "Dedicated, shared or blended",
    intro:
      "Almost every pricing conversation comes down to which of these three you need. Getting it wrong is expensive in both directions.",
    steps: [
      { title: "Dedicated agents", body: "Assigned only to you, trained deeply on your product and tone. Right for complex, regulated or brand-sensitive work. Highest cost per hour, lowest cost per resolved contact on hard calls." },
      { title: "Shared agents", body: "Trained across several similar accounts. Right for straightforward, script-driven volume and for businesses whose call counts cannot justify a dedicated head. Lowest hourly cost." },
      { title: "Blended", body: "A dedicated core for the complex work with shared capacity absorbing overflow and seasonal peaks. Most mid-market programs land here once volumes are understood." },
      { title: "Overflow only", body: "Your own team handles normal hours; we take the spill, the nights and the surges. The cheapest way to stop abandoning calls without restructuring anything." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Coverage design",
    heading: "Hours are the biggest line on the quote, so buy them against your own call clock",
    image: "/images/cc-agent-monitor.jpg",
    imagePosition: "right",
    body: [
      "The single largest driver of program cost is not the hourly rate — it is how many hours you buy. Full 24/7 live coverage costs roughly double an evening-and-weekend arrangement, and for many businesses the overnight band it adds carries almost no calls. For others — emergency trades, property management, hospitality, anything with a genuine night economy — the overnight band is precisely where the revenue-critical calls live.",
      "The only honest way to decide is your own call detail records. Pull three months, plot arrivals by hour and day, and look at the overnight band separately from the blended average. If your missed calls cluster from 5 PM to 9 PM with a Saturday spike, evening-and-weekend cover captures most of the value at half the cost. If the 2 AM calls are real and urgent, the full tier pays for itself in a single captured emergency. We run this analysis on your records as part of every quote, and we will recommend the cheaper tier when that is what the data says.",
    ],
    bullets: [
      "Evening + weekend: the right tier for most professional practices and offices",
      "Daytime overflow: for teams losing calls while already on the phone",
      "Full 24/7: for trades, property, hospitality and healthcare with genuine overnight urgency",
      "Seasonal flexing: coverage tiers that change with your demand curve, not a fixed annual spec",
    ],
  },
];

const faqs = [
  {
    question: "Which call center solution is right for my business?",
    answer:
      "Start from your calls, not from the solution names. Three months of call records answer most of it: what people call about determines whether you need message-capture or full resolution; when calls arrive determines the coverage tier; how long they run determines the pricing model; and what a converted call is worth determines how much service depth is justified. As a rough guide — professional practices usually need scheduling-led inbound with evening cover, trades need emergency dispatch with surge capacity, ecommerce needs order-system integration, and SaaS needs tiered technical support. We scope against your records and will tell you the cheaper answer when it fits.",
  },
  {
    question: "What is the difference between dedicated and shared agents?",
    answer:
      "Exposure to your business. A dedicated agent works only your account, learns your product, systems and edge cases, and can resolve rather than route — highest cost per hour, lowest cost per resolved contact on complex work. A shared agent covers several similar accounts from a common script — much cheaper hourly, and entirely adequate for straightforward, high-volume work. The failure mode is buying shared agents for work that needs judgement: every call the agent cannot resolve becomes a message your own staff actions later, and the cheap tier quietly becomes the expensive one. Most mid-market programs land on a blended model once volumes are understood.",
  },
  {
    question: "Can we start with overflow coverage and expand later?",
    answer:
      "Yes, and it is often the smartest entry point. Overflow-only means your team answers as normal and we take the calls that would otherwise ring out — busy periods, lunch hours, nights and surges. It requires no restructuring, it puts a measurable number on what you were losing to abandonment, and it gives both sides live data on your call mix before any bigger commitment. Programs frequently grow from overflow to evening-and-weekend to full coverage as the numbers prove out, and month-to-month terms mean each step is reversible.",
  },
  {
    question: "How do you handle seasonal businesses?",
    answer:
      "With coverage that flexes instead of a fixed annual specification. A tax practice, a landscaping company, an HVAC contractor and an ecommerce brand all have demand curves that make a flat staffing plan wrong for most of the year — overstaffed in the quiet months, overwhelmed in the peak. We agree the seasonal calendar at onboarding: which months run which tier, what surge capacity is committed for your peak at what rate, and how fast capacity scales when a weather event or a promotion moves the curve off schedule. You pay for the coverage each season actually needs.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <SolutionsContent />
      <SEOContentSection sections={seoSections} />
      <PageFAQ heading="Call Center Solutions: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
