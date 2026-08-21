import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Virtual Receptionist Pricing: 2026 Cost Breakdown",
  description:
    "What a virtual receptionist actually costs per month, how per-minute and per-call plans differ, and the overage terms that decide your real bill.",
  keywords: [
    "virtual receptionist pricing",
    "virtual receptionist cost",
    "how much does a virtual receptionist cost",
    "virtual receptionist service cost",
    "virtual receptionist monthly cost",
    "virtual receptionist rates",
    "live virtual receptionist pricing",
    "virtual receptionist vs answering service cost",
    "cheap virtual receptionist",
    "virtual receptionist plans",
    "remote receptionist cost",
    "outsourced receptionist pricing",
  ],
  alternates: { canonical: "/blog/virtual-receptionist-pricing" },
};

const FAQS = [
  {
    q: "How much does a virtual receptionist cost per month?",
    a: "Most US small businesses pay $250-$800 per month. Entry plans covering a low volume of calls start around $100-$200, mid-tier plans with live booking and CRM integration run $400-$800, and dedicated arrangements where a named receptionist works only your account run $1,500-$3,000. Per-minute rates sit at $1.00-$1.95, slightly above a basic answering service because the work is broader.",
  },
  {
    q: "Why is a virtual receptionist more expensive than an answering service?",
    a: "Because the scope is wider. An answering service is measured on capturing the call; a virtual receptionist is expected to act as your front desk — answering questions from your knowledge base, managing your calendar, screening and routing, handling routine admin, and often covering chat and email as well. That requires deeper training on your business and more time per call, and both show up in the rate.",
  },
  {
    q: "What is the real difference between the two?",
    a: "Think of it as message versus front desk. An answering service reliably takes the call, captures the details and passes them on, which is the right product if your problem is missed calls. A virtual receptionist resolves more of the call themselves — booking, answering, routing, following up — which is the right product if your problem is that your team is being interrupted by work someone else could do. Many businesses genuinely only need the first.",
  },
  {
    q: "How do overage charges work?",
    a: "Nearly every plan includes a block of minutes or calls, and the overage rate beyond it is typically two to three times the effective in-tier rate. This is the single most common reason a virtual receptionist bill comes in far above the quoted plan. Before signing, model a month 30% busier than your estimate and ask what that invoice would be — the answer to that question is more useful than the headline price.",
  },
  {
    q: "Should I buy per minute or per call?",
    a: "It depends entirely on how long your calls run. Per-minute suits short, frequent interactions; per-call suits longer conversations, because a nine-minute booking costs the same as a two-minute one. If your average handle time is above roughly four minutes, per-call usually wins. Pull your phone system's average call duration before choosing, rather than accepting whichever model the provider leads with.",
  },
  {
    q: "Is a dedicated receptionist worth the extra cost?",
    a: "Only when the work genuinely requires continuity. A named receptionist who works solely your account learns your clients, your tone and your exceptions in a way a shared pool cannot, which matters for professional services, high-value clients and complex booking rules. For a business whose calls are mostly routine enquiries and appointments, a shared pool delivers nearly the same outcome at a quarter of the cost.",
  },
  {
    q: "What is usually not included in the quoted price?",
    a: "Common extras are a one-time set-up fee, per-integration charges for connecting your calendar or CRM, SMS and email delivery of messages, script revisions after the first, holiday surcharges, and billing for wrong numbers and robocalls as if they were real calls. Ask for each explicitly; most are disclosed only when questioned, and together they can add 15-25% to a plan that looked competitive.",
  },
  {
    q: "How do I compare providers fairly?",
    a: "Rebuild each quote as one annual figure. Take the plan price at your actual expected volume, add the overage cost of a busy month, add set-up and integration fees spread over twelve months, and confirm the billing increment. Quotes in this category are structured differently enough that comparing headline monthly prices tells you almost nothing about what you will actually pay.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/virtual-receptionist-pricing",
              headline: "Virtual Receptionist Pricing: A 2026 Cost Breakdown",
              description:
                "What a virtual receptionist actually costs per month, how per-minute and per-call plans differ, and the overage terms that decide your real bill.",
              datePublished: "2026-08-21",
              dateModified: "2026-08-21",
              image: "https://contactcenterusa.com/images/cc-woman-typing.jpg",
            })
          ).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Content faqs={FAQS} />
    </>
  );
}
