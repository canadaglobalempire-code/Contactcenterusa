import WhyUsPage from "./WhyUsPage";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { PageFAQ } from "@/components/shared/PageFAQ";

export const metadata = {
  title: "Why Choose Contact Center USA | US-Based CX Outsourcing",
  description:
    "See why businesses choose Contact Center USA for US-based agents, flexible programs, clear reporting, and reliable outsourced customer support.",
  alternates: { canonical: "/why-us" },
};

const seoSections: SEOPattern[] = [
  {
    pattern: "split-image",
    eyebrow: "The honest comparison",
    heading: "What a US-based call center actually buys you, and what it does not",
    image: "/images/cc-diverse-team.jpg",
    imagePosition: "right",
    body: [
      "The case for US-based agents is not patriotism and it is not accent — it is error cost. On simple, high-volume, scripted work, offshore delivery is genuinely cheaper and stays cheaper. The economics flip on complex work, because the cost of a misunderstood call compounds: a botched insurance intake becomes a reworked claim, a mishandled medical scheduling call becomes a compliance question, an escalated technical call becomes two calls. When resolution matters more than rate, the more expensive agent is routinely the cheaper program.",
      "The second thing domestic delivery buys is regulatory simplicity. HIPAA business associate obligations, PCI-DSS controls, state recording-consent laws and financial-services supervision are all materially easier to evidence when every agent, workstation and recording sits inside one legal jurisdiction. That is not a marketing line — it is the difference between a compliance review that takes an afternoon and one that takes a quarter.",
    ],
    bullets: [
      "Cost per resolved contact, not cost per hour — the number we quote and report against",
      "One legal jurisdiction: simpler HIPAA, PCI-DSS, TCPA and consent-law evidence",
      "No accent or idiom friction on emotionally loaded or high-stakes calls",
      "Native time-zone alignment across all four US zones without night-shift premiums",
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "How engagements are structured",
    heading: "Month-to-month is not a promotion. It is the incentive model.",
    image: "/images/cc-management.jpg",
    imagePosition: "left",
    body: [
      "Most outsourcing contracts run twelve to thirty-six months, and the incentives that follow are predictable: the provider's best work happens before signature, and the account team you met during sales is replaced the month after. We run month-to-month engagements with no volume floors for a simple reason — a provider who can lose the account in thirty days manages it like it could be lost in thirty days.",
      "The same logic drives the reporting. Every program gets answer speed and abandonment broken out by shift band rather than blended into a daily average, QA scored against criteria you approved, and a named senior account manager rather than a pooled service desk. These are the things buyers discover matter three months in; we put them in writing on day one because they are why clients stay without being locked in.",
    ],
    bullets: [
      "Month-to-month terms, no FTE minimums, no volume floors",
      "Shift-band reporting as standard — blended averages hide the failures you care about",
      "A named senior account manager on every program, not a ticket queue",
      "Pilot programs live in as little as 48 hours, full programs in one to two weeks",
    ],
  },
];

const faqs = [
  {
    question: "Is a US-based call center worth the higher hourly rate?",
    answer:
      "It depends entirely on what your calls are, and we will tell you honestly when it is not. For simple, scripted, high-volume work, offshore delivery is cheaper and stays cheaper. For complex, regulated or emotionally loaded work — claims intake, patient scheduling, technical support, high-ticket sales — the calculation flips, because errors compound: a misunderstood call becomes a reworked claim, a repeat contact, or a compliance problem. Compare providers on cost per resolved contact rather than cost per hour and the answer usually becomes obvious for your specific call mix.",
  },
  {
    question: "What does month-to-month actually mean in practice?",
    answer:
      "It means the engagement renews monthly and either side can end it with thirty days' notice — no multi-year term, no early-termination fee, no volume commitment with a true-up at exit. We structure it that way deliberately: a provider who can lose an account in thirty days manages it accordingly, which is the incentive model most outsourcing contracts remove at signature. It also means a pilot is genuinely a pilot; if the numbers do not hold, you leave with your call flows, your recordings and your data.",
  },
  {
    question: "How is Contact Center USA different from the large enterprise BPOs?",
    answer:
      "Shape, not just size. The largest providers are built for programs of hundreds of seats, and a 15-seat program inside one sits at the bottom of a very long client list — serviced by a pooled account desk, subject to enterprise minimums, and migrated between delivery sites as capacity dictates. We are built for the programs those minimums exclude: dedicated US agents, a named senior account manager, month-to-month terms, and reporting you would normally only see on an enterprise contract. When a program genuinely needs 500 seats and a consulting arm, we will say so.",
  },
  {
    question: "What should I ask any call center provider before signing?",
    answer:
      "Five questions separate marketing from operations. Ask for answer speed and abandonment broken out by shift band, not blended — the overnight number is the one that varies. Ask how many accounts one agent covers overnight; a defensible number gets answered directly. Ask to see the state-specific recording disclosure for your customers' states, because a single national script is wrong in a dozen of them. Ask what happens to your recordings and data at termination, in writing. And ask for a reference from a client of your size, not their largest logo.",
  },
];

export default function Page() {
  return (
    <>
      <WhyUsPage />
      <SEOContentSection sections={seoSections} />
      <PageFAQ heading="Why Contact Center USA: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
