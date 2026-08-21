"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Interactive answering-service cost and ROI calculator.
 *
 * Built in response to a specific finding in the 28-day GSC data: the pages
 * whose entire value is a list or a comparison are ranking on page one and
 * getting essentially no clicks — "Concentrix Alternatives" sits at position
 * 8.2 with 697 impressions and zero clicks — because an AI Overview can
 * synthesise a list. The page that over-performs its position by 3.57x is the
 * benchmarks page, which offers data a summary cannot fully replace.
 *
 * A calculator is the same category of thing: an AI Overview can describe what
 * an answering service costs, but it cannot run the reader's own numbers. That
 * is the reason to click.
 *
 * All ranges here are the same published figures used across the pricing
 * guides. Outputs are deliberately presented as ranges, never as a single
 * precise number, because the inputs are estimates.
 */

type Coverage = "evening" | "overflow" | "full";

const COVERAGE: Record<Coverage, { label: string; hint: string; low: number; high: number }> = {
  evening: {
    label: "Evenings & weekends",
    hint: "~128 of the week's 168 hours. Where most missed calls actually land.",
    low: 150,
    high: 450,
  },
  overflow: {
    label: "Daytime overflow",
    hint: "Covers calls you miss while already on the phone or on a job.",
    low: 250,
    high: 700,
  },
  full: {
    label: "Full 24/7 live",
    hint: "All 168 hours including holidays. Emergency trades, clinics, property management.",
    low: 600,
    high: 1500,
  },
};

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy">{label}</span>
      {hint && <span className="mt-0.5 block text-xs text-gray-500">{hint}</span>}
      <div className="mt-2">{children}</div>
    </label>
  );
}

export function AnsweringServiceCalculator() {
  const [missed, setMissed] = useState(40);
  const [jobValue, setJobValue] = useState(400);
  const [closeRate, setCloseRate] = useState(25);
  const [coverage, setCoverage] = useState<Coverage>("evening");

  const r = useMemo(() => {
    const plan = COVERAGE[coverage];
    // Industry-reported share of after-hours callers who never call back and
    // never leave a voicemail. Held at the conservative end of 20-35%.
    const NEVER_RETURN = 0.25;
    const lostForever = missed * NEVER_RETURN;
    const recoveredJobs = lostForever * (closeRate / 100);
    const recoveredRevenue = recoveredJobs * jobValue;
    const netLow = recoveredRevenue - plan.high;
    const netHigh = recoveredRevenue - plan.low;
    // Jobs needed to cover the fee, at the midpoint of the range.
    const mid = (plan.low + plan.high) / 2;
    const breakEven = jobValue > 0 ? mid / jobValue : 0;
    return { plan, recoveredJobs, recoveredRevenue, netLow, netHigh, breakEven, mid };
  }, [missed, jobValue, closeRate, coverage]);

  const worthIt = r.netHigh > 0;

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 bg-navy px-6 py-5">
        <h3 className="text-xl font-bold text-white">Answering Service ROI Calculator</h3>
        <p className="mt-1 text-sm text-white/60">
          Run your own numbers. Nothing is sent anywhere &mdash; this calculates in your browser.
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-5">
          <Field
            label={`Calls you miss per month: ${missed}`}
            hint="Check your phone system's missed-call count if you are unsure."
          >
            <input
              type="range"
              min={5}
              max={300}
              step={5}
              value={missed}
              onChange={(e) => setMissed(Number(e.target.value))}
              className="w-full accent-red"
              aria-label="Calls missed per month"
            />
          </Field>

          <Field label="Average value of a closed job" hint="Your typical sale, not your biggest one.">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">$</span>
              <input
                type="number"
                min={25}
                max={100000}
                step={25}
                value={jobValue}
                onChange={(e) => setJobValue(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm tabular-nums focus:border-red focus:outline-none focus:ring-1 focus:ring-red"
                aria-label="Average closed job value in dollars"
              />
            </div>
          </Field>

          <Field
            label={`Close rate on answered calls: ${closeRate}%`}
            hint="Of the callers you do speak to, how many become customers?"
          >
            <input
              type="range"
              min={5}
              max={80}
              step={5}
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full accent-red"
              aria-label="Close rate percentage"
            />
          </Field>

          <Field label="Coverage you need">
            <div className="space-y-2">
              {(Object.keys(COVERAGE) as Coverage[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCoverage(key)}
                  aria-pressed={coverage === key}
                  className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                    coverage === key
                      ? "border-red bg-red/[0.04]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold text-navy">{COVERAGE[key].label}</span>
                    <span className="whitespace-nowrap text-xs tabular-nums text-gray-500">
                      {fmt(COVERAGE[key].low)}&ndash;{fmt(COVERAGE[key].high)}/mo
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">{COVERAGE[key].hint}</span>
                </button>
              ))}
            </div>
          </Field>
        </div>

        {/* Results */}
        <div className="rounded-2xl bg-gray-50 p-6">
          <dl className="space-y-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Callers who never try again
              </dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-navy">
                {Math.round(missed * 0.25)} <span className="text-base font-normal text-gray-500">of {missed}</span>
              </dd>
              <p className="mt-1 text-xs text-gray-500">
                At a conservative 25%. Reported ranges run 20&ndash;35%.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Jobs recovered per month
              </dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-navy">
                {r.recoveredJobs.toFixed(1)}
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Revenue recovered
              </dt>
              <dd className="mt-1 text-3xl font-bold tabular-nums text-navy">
                {fmt(r.recoveredRevenue)}<span className="text-base font-normal text-gray-500">/mo</span>
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Service cost ({r.plan.label.toLowerCase()})
              </dt>
              <dd className="mt-1 text-xl font-semibold tabular-nums text-gray-700">
                {fmt(r.plan.low)}&ndash;{fmt(r.plan.high)}<span className="text-sm font-normal text-gray-500">/mo</span>
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Net result</dt>
              <dd
                className={`mt-1 text-3xl font-bold tabular-nums ${
                  worthIt ? "text-green-700" : "text-red"
                }`}
              >
                {r.netLow > 0 ? "+" : ""}
                {fmt(r.netLow)} to {r.netHigh > 0 ? "+" : ""}
                {fmt(r.netHigh)}
              </dd>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {worthIt
                  ? `You need about ${r.breakEven.toFixed(1)} recovered ${
                      r.breakEven < 2 ? "job" : "jobs"
                    } a month to break even, and this estimates ${r.recoveredJobs.toFixed(1)}.`
                  : `Break-even needs about ${r.breakEven.toFixed(
                      1,
                    )} recovered jobs a month and this estimates ${r.recoveredJobs.toFixed(
                      1,
                    )}. On these numbers the case is weak — consider cheaper evening-only cover, or revisit whether the missed-call figure is complete.`}
              </p>
            </div>
          </dl>

          <Link
            href="/contact"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark"
          >
            Get a quote for these numbers <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <p className="border-t border-gray-100 px-6 py-4 text-xs leading-relaxed text-gray-500">
        Estimates only, using published US market ranges. Your actual quote depends on call
        duration, billing increment and overage terms &mdash; the three figures that move a real
        invoice most. See{" "}
        <Link href="/blog/answering-service-pricing" className="font-semibold text-red hover:underline">
          answering service pricing
        </Link>{" "}
        for how those work.
      </p>
    </div>
  );
}
