"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

/**
 * Interactive "which model fits you" selector for the comparison pages.
 *
 * Built against a specific GSC finding. The comparison and alternatives pages
 * rank on page one — Concentrix Alternatives at position 8.2, Teleperformance
 * vs TTEC at 6.8 — and convert almost nothing between them, because an AI
 * Overview can synthesise a comparison inline and the reader never clicks.
 *
 * A list can be summarised. A decision run against the reader's own situation
 * cannot, which is the whole reason this exists.
 *
 * The recommendations are deliberately capable of pointing away from the most
 * expensive option, and of telling an enterprise-scale buyer that a mid-market
 * provider is the wrong fit. A selector that always returns "hire us" is a
 * lead form wearing a costume, and readers work that out immediately.
 */

type Volume = "low" | "mid" | "high" | "enterprise";
type Complexity = "simple" | "mixed" | "complex";
type Problem = "missed" | "interrupted" | "scale" | "cost";

const VOLUME: Record<Volume, string> = {
  low: "Under 300 calls/mo",
  mid: "300–2,000 calls/mo",
  high: "2,000–20,000 calls/mo",
  enterprise: "20,000+ calls/mo",
};

const COMPLEXITY: Record<Complexity, string> = {
  simple: "Scripted — bookings, FAQs, order status",
  mixed: "Mixed — some judgment required",
  complex: "Complex — regulated, technical or high-value",
};

const PROBLEM: Record<Problem, string> = {
  missed: "Calls go unanswered",
  interrupted: "My team keeps getting interrupted",
  scale: "I can't handle the volume or the peaks",
  cost: "My current setup costs too much",
};

type Result = {
  model: string;
  why: string[];
  caution?: string;
  links: { label: string; href: string }[];
};

function recommend(v: Volume, c: Complexity, p: Problem, regulated: boolean): Result {
  // Enterprise scale is genuinely a different market. Saying so is more useful
  // than pretending otherwise.
  if (v === "enterprise") {
    return {
      model: "Enterprise BPO — and this site is not the right shortlist",
      why: [
        "At 20,000+ calls a month you are buying an operation, not a service: dedicated sites, workforce management, a named delivery lead and a contractual SLA with penalties.",
        "That is the market Teleperformance, Concentrix, TTEC and Alorica are built for, and their scale is a genuine advantage at this volume rather than a marketing claim.",
        "Mid-market providers can quote this volume. Very few can absorb it without the quality drop showing up in month three.",
      ],
      caution:
        "The exception is a regulated or brand-sensitive programme you want kept onshore and small. Then a specialist beats scale — but expect to pay for it.",
      links: [
        { label: "Teleperformance vs TTEC", href: "/blog/teleperformance-vs-ttec" },
        { label: "Top 15 BPO Companies in USA", href: "/blog/top-10-bpo-companies-in-usa" },
      ],
    };
  }

  if (p === "missed" && v === "low") {
    return {
      model: "Answering service — the cheapest thing that solves it",
      why: [
        "Your problem is coverage, not capability. An answering service answers the calls you cannot and books what it can, which is the whole fix.",
        "At this volume expect $150–$700 a month depending on hours. A virtual receptionist would cost more and solve the same problem.",
        "Buy evenings and weekends first. Check your call log before paying for overnight cover you may not need.",
      ],
      links: [
        { label: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
        { label: "After Hours Answering Service", href: "/blog/after-hours-answering-service" },
      ],
    };
  }

  if (p === "interrupted") {
    return {
      model: "Virtual receptionist",
      why: [
        "Interruption is a different problem from missed calls. You need someone resolving routine calls end to end, not capturing them for you to handle later.",
        "That means answering from your FAQ, managing the calendar rather than just booking into it, and screening by judgment against your rules.",
        "Expect $250–$800 a month shared, or $1,500–$3,000 for a dedicated receptionist if continuity genuinely matters to your clients.",
      ],
      caution:
        "If you are honest that the real issue is calls going unanswered rather than your team being pulled away, buy the cheaper answering service instead.",
      links: [
        { label: "Virtual Receptionist Pricing", href: "/blog/virtual-receptionist-pricing" },
        { label: "Answering Service vs Virtual Receptionist vs Call Center", href: "/blog/answering-service-vs-virtual-receptionist-vs-call-center" },
      ],
    };
  }

  if (regulated || c === "complex") {
    return {
      model: "Dedicated US-based agents",
      why: [
        regulated
          ? "Regulated work removes the cheap options. You need agents trained on your compliance obligations, a signed BAA or equivalent, and call recording retained to your schedule."
          : "Complex or high-value calls are where a low hourly rate turns into a high cost per resolved contact, through escalations, errors and re-work.",
        "Dedicated agents learn your product and your exceptions. A shared pool cannot, and on this kind of work the difference is visible to the caller.",
        "Judge quotes on cost per resolved contact, not per minute. On complex work the cheaper rate usually loses that comparison.",
      ],
      caution:
        "Dedicated capacity is the most expensive option here. If a meaningful share of your calls are actually routine, split them — dedicated agents for the complex work, shared capacity for the rest.",
      links: [
        { label: "Dedicated vs Shared Call Center Agents", href: "/blog/dedicated-vs-shared-call-center-agents" },
        { label: "Onshore vs Offshore vs Nearshore", href: "/blog/onshore-vs-offshore-vs-nearshore" },
      ],
    };
  }

  if (p === "cost" && c === "simple") {
    return {
      model: "Offshore or automation — genuinely the right call here",
      why: [
        "Simple, scripted, high-volume work is where offshore delivery and automation actually win, not just on rate but on outcome. There is no reason to pay onshore prices for it.",
        "Route order status, hours, balances and confirmations to an automated flow. It answers instantly at 3 AM and costs a fraction of an agent.",
        "Keep a fast, obvious path to a live person for anything urgent or high-value, or the saving turns into lost revenue you never see.",
      ],
      caution:
        "This only holds while the calls stay simple. The moment they involve judgment, emotion or real money, the economics reverse.",
      links: [
        { label: "Automated Answering Service", href: "/blog/automated-answering-service" },
        { label: "Onshore vs Offshore vs Nearshore", href: "/blog/onshore-vs-offshore-vs-nearshore" },
      ],
    };
  }

  if (p === "scale" || v === "high") {
    return {
      model: "Blended outsourced call center",
      why: [
        "At this volume you need a floor that flexes rather than a fixed headcount, especially if your peaks are seasonal or event-driven.",
        "The usual shape is a dedicated core handling the complex work with shared capacity absorbing overflow and surges.",
        "Get surge capacity written into the contract with the rate agreed in advance. A provider that will not commit to it will not have it when you need it.",
      ],
      links: [
        { label: "In-House vs Outsourced Call Center", href: "/blog/in-house-vs-outsourced-call-center" },
        { label: "Top 10 Inbound Call Center Companies", href: "/blog/top-10-inbound-call-center-companies-usa" },
      ],
    };
  }

  return {
    model: "Shared-pool answering service with live booking",
    why: [
      "Your volume and complexity sit in the range a shared pool handles well, provided the agents book into your calendar rather than taking messages.",
      "Live booking is the feature that changes the economics. A message moves the work to tomorrow and leaves the caller free to call a competitor tonight.",
      "Expect $250–$700 a month. Start month-to-month and measure captured jobs, not answered calls.",
    ],
    links: [
      { label: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
      { label: "Answering Service Appointment Scheduling", href: "/blog/answering-service-appointment-scheduling" },
    ],
  };
}

function Choice<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Record<T, string>;
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-navy">{label}</legend>
      <div className="mt-2 space-y-2">
        {(Object.keys(options) as T[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => onChange(k)}
            aria-pressed={value === k}
            className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
              value === k ? "border-red bg-red/[0.04] font-semibold text-navy" : "border-gray-200 text-gray-700 hover:border-gray-300"
            }`}
          >
            {options[k]}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ProviderFitSelector() {
  const [volume, setVolume] = useState<Volume>("mid");
  const [complexity, setComplexity] = useState<Complexity>("mixed");
  const [problem, setProblem] = useState<Problem>("missed");
  const [regulated, setRegulated] = useState(false);

  const result = useMemo(
    () => recommend(volume, complexity, problem, regulated),
    [volume, complexity, problem, regulated],
  );

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 bg-navy px-6 py-5">
        <h3 className="text-xl font-bold text-white">Which Model Actually Fits You?</h3>
        <p className="mt-1 text-sm text-white/60">
          Four questions. The answer sometimes points away from the expensive option, and once away
          from this site entirely.
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-2">
        <div className="space-y-5">
          <Choice label="Monthly call volume" options={VOLUME} value={volume} onChange={setVolume} />
          <Choice label="Call complexity" options={COMPLEXITY} value={complexity} onChange={setComplexity} />
          <Choice label="What is the actual problem?" options={PROBLEM} value={problem} onChange={setProblem} />
          <fieldset>
            <legend className="text-sm font-semibold text-navy">Regulated industry?</legend>
            <p className="mt-0.5 text-xs text-gray-500">Healthcare, legal, financial services, or anything handling PHI or PII.</p>
            <div className="mt-2 flex gap-2">
              {[true, false].map((v) => (
                <button
                  key={String(v)}
                  type="button"
                  onClick={() => setRegulated(v)}
                  aria-pressed={regulated === v}
                  className={`flex-1 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                    regulated === v ? "border-red bg-red/[0.04] font-semibold text-navy" : "border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {v ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Recommended</p>
          <h4 className="mt-2 text-xl font-bold leading-snug text-navy">{result.model}</h4>

          <ul className="mt-4 space-y-3">
            {result.why.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red" />
                {w}
              </li>
            ))}
          </ul>

          {result.caution && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-red/30 bg-red/[0.02] p-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red" />
              <p className="text-sm leading-relaxed text-gray-700">{result.caution}</p>
            </div>
          )}

          <div className="mt-5 border-t border-gray-200 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Read next</p>
            <ul className="mt-2 space-y-1.5">
              {result.links.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-sm font-semibold text-red hover:underline">
                    {l.label} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark"
          >
            Talk through your setup <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
