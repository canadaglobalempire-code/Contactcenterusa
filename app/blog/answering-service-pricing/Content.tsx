import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnsweringServiceCalculator } from "@/components/shared/AnsweringServiceCalculator";

type Faq = { q: string; a: string };

const models = [
  { model: "Per minute", rate: "$0.85 - $1.65 / min", fits: "Short, frequent calls", risk: "Billing increment can add 20-40%" },
  { model: "Per call", rate: "$4.00 - $9.00 / call", fits: "Long triage and emergency calls", risk: "Define what counts as a billable call" },
  { model: "Monthly tier", rate: "$250 - $1,200 / mo", fits: "Predictable, steady volume", risk: "Overage often 2-3x the in-tier rate" },
  { model: "Per booked appointment", rate: "$25 - $95 / booking", fits: "Only the booked outcome matters", risk: "Define 'booked' before signing" },
];

const drivers = [
  { t: "Hours covered", d: "Evening-and-weekend is roughly 128 of the week's 168 hours; full 24/7 adds the overnight shift, which is the expensive one to staff. Most buyers over-purchase here." },
  { t: "Where the agents sit", d: "US-based agents cost more per minute than offshore. On complex or regulated calls the cost per resolved contact frequently reverses that." },
  { t: "Call complexity", d: "Reading an FAQ is cheaper than triaging an emergency, verifying insurance, or booking into a constrained calendar." },
  { t: "Dedicated vs shared", d: "A shared pool spreads cost across accounts. A named agent who knows only your business costs more and performs better on complex work." },
  { t: "Language coverage", d: "Fluent bilingual staffing carries a 10-25% premium because the labour pool is genuinely smaller." },
  { t: "Integrations", d: "Writing live into a calendar, CRM or field-service platform sometimes carries a per-integration fee. Ask." },
];

const hiddenFees = [
  ["Set-up / onboarding", "$0 - $500 one-off", "Often waived if you ask, especially on annual terms"],
  ["Billing increment", "Up to +40% effective", "Per-second vs 30-second rounding on short calls"],
  ["Overage rate", "2-3x in-tier rate", "The reason tier plans overrun their budget"],
  ["Holiday surcharge", "0 - 50%", "Get the covered holidays named in the contract"],
  ["Script change fee", "$0 - $150 per revision", "Insist the first quarter's revisions are free"],
  ["Message delivery", "Per SMS or email", "Should be included; frequently is not"],
  ["Wrong numbers & spam", "Billed as real calls", "Get the exclusion in writing"],
];

const compare = [
  "Ask every provider for effective cost at your actual monthly minutes, not their headline rate",
  "Get the billing increment in writing — per-second, or state the rounding",
  "Get the overage rate, and model a month 30% above your estimate",
  "Add set-up and integration fees spread across twelve months",
  "Confirm whether wrong numbers, robocalls and hang-ups are billable",
  "Rebuild every quote as one annual figure before comparing anything",
];

export default function AnsweringServicePricingContent({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">PRICING GUIDE</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Answering Service Pricing: What It Really Costs
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-writing.jpg" alt="Reviewing answering service pricing and billing terms" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Answering service quotes are hard to compare on purpose. Four different pricing models, a billing increment buried
                in the terms, and a set of fees that only surface when you ask about them directly. This guide gives you the real
                2026 US ranges, the seven charges that inflate an invoice, and a method for turning four incomparable quotes into
                four annual numbers.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                For coverage-specific costs see{" "}
                <Link href="/blog/after-hours-answering-service" className="text-red font-semibold hover:underline">after hours answering service</Link>{" "}
                and{" "}
                <Link href="/blog/24-hour-answering-service" className="text-red font-semibold hover:underline">24 hour answering service</Link>. For
                full-programme outsourcing rather than call answering, see{" "}
                <Link href="/blog/call-center-outsourcing-cost-per-hour-2026" className="text-red font-semibold hover:underline">call center outsourcing cost per hour</Link>.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Most US small businesses land at $250-$700 per month",
                    "The billing increment can swing a real invoice 20-40% at the same headline rate",
                    "Overage rates are typically 2-3x the in-tier rate — model a busy month",
                    "Wrong numbers and robocalls should not be billable; get it in writing",
                    "Compare on cost per captured job, not cost per minute",
                    "Run month-to-month for a quarter before taking the annual discount",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Four Pricing Models</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Model</th>
                      <th className="p-4 font-semibold">2026 US range</th>
                      <th className="p-4 font-semibold">Fits</th>
                      <th className="p-4 font-semibold">Where it bites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.map((m, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{m.model}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{m.rate}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{m.fits}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{m.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Increment Nobody Reads</h2>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">Two providers, the same rate, a 45% difference</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      Both quote $1.20 a minute. Provider A bills per second; Provider B rounds to 30 seconds. Your average call
                      runs 43 seconds. Provider A bills 43 seconds — about $0.86. Provider B bills 60 seconds — $1.20. Across 400
                      calls a month that is roughly $344 against $480, from an identical headline rate.
                    </p>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Because answering-service calls are short by nature, rounding hits this category harder than almost any other
                      outsourced service. Ask for the increment in writing before you compare anything else.
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-monitor.jpg" alt="Comparing answering service quotes and billing terms" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What Actually Drives Your Price</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {drivers.map((d, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{d.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{d.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Seven Charges That Inflate a Quote</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Charge</th>
                      <th className="p-4 font-semibold">Typical impact</th>
                      <th className="p-4 font-semibold">What to ask for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hiddenFees.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{row[0]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[1]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Cost Per Captured Job</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Rate per minute measures what you pay. Cost per captured job measures what you get. They routinely disagree, and
                only the second one tells you whether the service is working.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">Worked comparison</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Provider A: $0.95/min, 30-second rounding, message-taking only — $520/month, 6 jobs captured</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Provider B: $1.35/min, per-second billing, books into your calendar — $610/month, 19 jobs captured</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Cost per captured job: $87 with A, $32 with B</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />The cheaper rate is 2.7x more expensive per outcome</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  The gap here is not agent quality — it is that one provider ends the call with a booking and the other ends it
                  with a promise to call back. Track this ratio from month one and the right provider becomes obvious quickly.
                </p>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">How to Compare Quotes Fairly</h2>
              <ul className="mt-4 space-y-3">
                {compare.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Answering service pricing rewards buyers who read the terms rather than the headline. Get the increment, the
                overage rate and the billable-call definition in writing, rebuild every quote as an annual figure, then judge the
                winner on captured jobs rather than answered calls. Do that and the category is straightforward; skip it and two
                identical-looking quotes can differ by half.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> bills per second, excludes
                wrong numbers and robocalls, states holiday coverage by name, and includes script revisions rather than charging per
                change.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Get a Quote You Can Actually Compare</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Tell us your hours and rough call volume and we will give you the effective monthly cost, the increment, and the
                  overage rate up front — the three numbers you need to put any two providers side by side.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Itemised Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.q}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-6">
                <HeroContactForm />
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "Answering Service for Small Business", href: "/blog/answering-service-for-small-business" },
                      { title: "After Hours Answering Service", href: "/blog/after-hours-answering-service" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "Call Center Outsourcing Cost Per Hour", href: "/blog/call-center-outsourcing-cost-per-hour-2026" },
                      { title: "Top 10 Answering Service Companies in USA", href: "/blog/top-10-answering-service-companies-usa" },
                      { title: "Call Center Benchmarks 2026", href: "/blog/call-center-benchmarks-2026" },
                    ].map((a, i) => (
                      <li key={i}>
                        <Link href={a.href} className="text-sm text-gray-700 hover:text-red transition-colors">
                          {a.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
