import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Answering Service Pricing: What It Really Costs",
  description:
    "The four answering service pricing models, real 2026 US rates, the seven fees that inflate a quote, and how to compare providers on cost per captured job.",
  keywords: [
    "answering service pricing",
    "answering service cost",
    "how much does an answering service cost",
    "answering service rates",
    "answering service price per minute",
    "call answering service cost",
    "virtual receptionist pricing",
    "answering service monthly cost",
    "per call answering service pricing",
    "answering service billing increments",
    "cheap answering service",
    "answering service quote",
  ],
  alternates: { canonical: "/blog/answering-service-pricing" },
};

const FAQS = [
  {
    q: "How much does an answering service cost per month?",
    a: "Most US small businesses pay $250-$700 per month. Light evening-and-weekend-only cover starts near $150; full 24/7 live coverage for an emergency trade or clinic runs $600-$2,500. Per-minute pricing sits at $0.85-$1.65 for US-based agents, per-call at $4-$9, and per-booked-appointment at $25-$95. Offshore providers quote below all of these, and are worth considering only when calls are simple and scripted.",
  },
  {
    q: "Which pricing model is cheapest?",
    a: "Whichever one matches your call pattern, which is why there is no universal answer. Short, frequent calls favour per-minute. Long triage calls favour per-call, because a twelve-minute emergency call costs the same as a two-minute one. Predictable volume favours a monthly tier. If the only outcome you value is a booked job, per-appointment aligns incentives best — provided the contract defines precisely what counts as booked before you sign.",
  },
  {
    q: "What are billing increments and why do they matter?",
    a: "The increment is the block of time you are billed in. Per-second billing charges a 40-second call as 40 seconds. Thirty-second rounding charges it as 60 — a 50% markup on that call. Because answering-service calls are usually short, the increment can shift a real invoice by 20-40% at an identical headline rate. It is the single most consequential line in the contract and the one buyers most often overlook.",
  },
  {
    q: "What fees get added on top of the quoted rate?",
    a: "Commonly: a one-time set-up or onboarding fee, overage rates two to three times the in-tier rate, holiday surcharges, script change fees after the first revision, charges for SMS or email delivery of messages, per-integration fees for calendar or CRM connections, and billing for wrong numbers and robocalls as though they were real calls. Ask for each of these explicitly — most are disclosed only when questioned.",
  },
  {
    q: "Should wrong numbers and spam calls be billable?",
    a: "No, and a reasonable provider will agree in writing. Robocalls, wrong numbers and immediate hang-ups are not work performed on your behalf. Left unaddressed, they can account for a meaningful share of a monthly invoice, particularly on published business lines. Get the exclusion written into the agreement rather than accepting a verbal assurance that they are 'usually' credited.",
  },
  {
    q: "Is a cheaper per-minute rate actually cheaper?",
    a: "Only if handle time stays comparable. A lower rate paired with agents who take longer to understand the caller, mis-take details, or hand off to a supervisor can produce a higher invoice and a worse outcome. The figure worth tracking is cost per captured job: total monthly spend divided by the number of appointments or qualified leads produced. Judged that way, headline rates frequently reverse.",
  },
  {
    q: "How do I compare quotes fairly?",
    a: "Normalise them first. Ask every provider for the same three numbers — effective cost at your actual monthly minutes, the billing increment, and the overage rate — then add any set-up and integration fees spread across twelve months. Rebuild each quote as a single annual figure. Quotes are usually structured differently enough that a side-by-side of headline rates compares almost nothing.",
  },
  {
    q: "Are long contracts ever worth the discount?",
    a: "Rarely at the start. A twelve-month term typically saves 10-15%, which is not much set against being locked to a provider whose overnight staffing you have not yet observed. Run month-to-month for a quarter, measure captured jobs and answer speed, and negotiate the annual term once you have evidence. Any provider confident in their service will let you do this.",
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
              url: "https://contactcenterusa.com/blog/answering-service-pricing",
              headline: "Answering Service Pricing: What It Really Costs in 2026",
              description:
                "The four answering service pricing models, real 2026 US rates, the seven fees that inflate a quote, and how to compare providers on cost per captured job.",
              datePublished: "2026-08-21",
              dateModified: "2026-08-21",
              image: "https://contactcenterusa.com/images/cc-agent-writing.jpg",
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
