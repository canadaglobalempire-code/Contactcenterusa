import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const auditSteps = [
  { step: "1. Call at 3 AM on a Sunday", detail: "Use the customer-facing number, never the sales line. Time the rings. Note whether a human or a menu answers." },
  { step: "2. Call on a public holiday", detail: "Thanksgiving, Christmas Day and New Year's Day are where thin staffing is most exposed." },
  { step: "3. Ask an account-specific question", detail: "Something a generic overflow agent could not answer. Tests whether they know the account or are just reading a greeting." },
  { step: "4. Repeat three or four times", detail: "One good call proves nothing. A pattern across several nights proves staffing." },
  { step: "5. Ask for shift-level metrics", detail: "Request average speed of answer and abandonment broken out by overnight shift, not blended." },
  { step: "6. Ask who else the night agent covers", detail: "An agent handling forty accounts at 3 AM cannot know yours. Ask for the overnight account-per-agent ratio." },
];

const whoNeeds24 = [
  { name: "Emergency trades", detail: "Plumbing, HVAC, electrical, restoration — the call at 2 AM is the highest-value call of the week." },
  { name: "Medical practices", detail: "Patients describing symptoms overnight need triage and on-call physician paging, not a menu." },
  { name: "Property management", detail: "Habitability emergencies carry legal response-time exposure that does not pause at night." },
  { name: "Security & alarm response", detail: "Response time is the entire product; any gap is a failure of the service itself." },
  { name: "National & multi-time-zone brands", detail: "It is always business hours for someone in your customer base." },
  { name: "E-commerce & SaaS", detail: "Outage and order questions arrive continuously, and a silent queue becomes a morning backlog." },
];

const pricingRows = [
  ["Full 24/7 monthly tier", "$600 - $2,500 / mo", "Genuine round-the-clock live coverage"],
  ["Per minute, no night surcharge", "$0.85 - $1.65 / min", "Variable volume with true 24/7 access"],
  ["Evening + weekend only", "$400 - $750 / mo", "~128 hrs/wk — enough for most SMBs"],
  ["Holiday surcharge", "0% - 50% premium", "Confirm in writing which holidays and at what rate"],
];

const buyingCriteria = [
  "Live human answer at 3 AM, verified by your own test calls before you sign",
  "Average speed of answer and abandonment reported per shift, never blended",
  "A named list of covered holidays, with any surcharge stated in the contract",
  "Overnight account-per-agent ratio disclosed, not treated as commercially sensitive",
  "US-based agents on the night rota specifically, if that is what you are paying for",
  "Spanish bilingual coverage staffed overnight rather than daytime-only",
  "Documented business continuity — multiple sites, so one outage does not silence you",
  "The same escalation rules applied at 3 AM as at 3 PM, with timestamped logs",
];

const redFlags = [
  "Quotes full 24/7 at roughly the price of an after-hours-only package",
  "Will only report a blended 24-hour answer speed",
  "Automated menu answers your test call at 3 AM despite '24/7 live' marketing",
  "Cannot say how many accounts one overnight agent covers",
  "Holiday coverage described as 'generally' or 'usually' available",
  "US-based by day, offshore by night, without disclosing it upfront",
];

export default function TwentyFourHourAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">BUYER&apos;S GUIDE</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            24 Hour Answering Service: How to Verify It&apos;s Real
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 20, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-night.jpg" alt="US-based 24 hour answering service agent working an overnight shift" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Almost every answering service in the United States advertises 24/7 coverage. A considerably smaller number have a
                trained agent who knows your account picking up the phone at 3 AM on Christmas morning. The gap between those two
                statements is where most disappointing contracts live — and because the failure only happens at 3 AM, you usually
                find out about it from an angry customer rather than from a report.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide is deliberately practical. It covers a six-step audit you can run before signing, how to tell whether you
                genuinely need all 168 hours or just the 128 you are closed, what true 24/7 costs in 2026, and the holiday and SLA
                clauses that separate real coverage from marketing. If you only need evenings and weekends, start with our{" "}
                <Link href="/blog/after-hours-answering-service" className="text-red font-semibold hover:underline">after hours answering service guide</Link>{" "}
                instead.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Test the provider yourself at 3 AM and on a holiday — fifteen minutes beats any sales deck",
                    "A blended 24-hour answer speed conceals weak overnight staffing almost perfectly",
                    "True 24/7 costs 40-60% more than an evening-and-weekend package; suspiciously close pricing is a signal",
                    "Most businesses over-buy — check your call logs before paying for overnight hours you don't use",
                    "Ask how many accounts one agent covers overnight; the number tells you everything",
                    "Holiday coverage must be named in the contract, not described as 'generally available'",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What 24/7 really means */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Four Things Sold as &ldquo;24/7&rdquo;</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The term is used loosely enough to be nearly meaningless in marketing copy. In practice, providers advertising 24/7
                are selling one of four quite different products.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { t: "Genuinely staffed 24/7", d: "Trained agents on every shift, briefed on your account, with the same escalation rules at 3 AM as at 3 PM. This is what you are trying to buy.", good: true },
                  { t: "Staffed days, skeleton nights", d: "A small overnight crew covering a large number of accounts. Technically live, but the agent does not know your business and answer times stretch.", good: false },
                  { t: "Live days, automated nights", d: "Human coverage during business hours, an IVR or voicemail box overnight. Marketed as 24/7 because the line is always 'answered'.", good: false },
                  { t: "US days, offshore nights", d: "Sometimes fine, sometimes a problem — but it should be disclosed upfront rather than discovered by a customer at 2 AM.", good: false },
                ].map((x, i) => (
                  <div key={i} className={`rounded-2xl border p-5 ${x.good ? "border-gray-200" : "border-red/30 bg-red/[0.02]"}`}>
                    <div className="flex items-start gap-3">
                      {x.good
                        ? <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                        : <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />}
                      <div>
                        <h3 className="font-bold text-navy">{x.t}</h3>
                        <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-office-wide.jpg" alt="Contact center floor staffed around the clock for 24 hour answering coverage" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* The audit */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Six-Step Audit Before You Sign</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This costs nothing and takes about fifteen minutes of actual effort spread across a week. It is far more informative
                than any reference call, because you are sampling the exact experience your customers will have.
              </p>
              <div className="mt-6 space-y-4">
                {auditSteps.map((s, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{s.step}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Step six is the one most buyers never think to ask. An overnight agent covering six accounts can genuinely learn
                your business; one covering forty is reading a script and hoping. Providers who staff properly will answer this
                question directly. Providers who do not will call it commercially sensitive.
              </p>

              {/* Do you need it */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Do You Actually Need All 168 Hours?</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Full 24/7 is a genuine premium over an evening-and-weekend package, and a large share of buyers pay it for hours
                that generate almost no calls. Before committing, pull three months of logs and answer one question: how many calls
                actually arrive between midnight and 6 AM, and what are they worth?
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Evening + weekend is enough when</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Calls cluster 5-9 PM and Saturday morning</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Overnight volume is negligible</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Nothing you do is safety-critical</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />You serve one or two time zones</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">You need true 24/7 when</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Overnight calls are emergencies with real ticket value</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />You carry legal or clinical response-time duties</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Your customers span several time zones</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />A missed night call becomes a safety or damage event</li>
                  </ul>
                </div>
              </div>

              {/* Who needs it */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Where Round-the-Clock Coverage Earns Its Premium</h2>
              <div className="mt-6 space-y-4">
                {whoNeeds24.map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.detail}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">24 Hour Answering Service Pricing in 2026</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Model</th>
                      <th className="p-4 font-semibold">Typical US range</th>
                      <th className="p-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{row[0]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[1]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Treat price as a diagnostic. Staffing an overnight shift is genuinely expensive, so a full-24/7 quote priced close to
                an after-hours package is telling you something real about how those hours are covered.
              </p>

              {/* Holidays */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Holiday Clause</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Holidays are the hardest days to staff and among the highest-stakes days for emergency calls. A furnace failing on
                Christmas Eve, a pipe bursting on Thanksgiving, a patient calling on New Year&apos;s Day — these are the calls people
                remember for years, in one direction or the other.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">Get these four answers in writing</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Which specific holidays are covered, listed by name rather than described generally</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Whether a surcharge applies, and at what rate</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Staffing ratio on holidays compared with a normal weekday</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Whether your escalation rules apply unchanged on those days</li>
                </ul>
              </div>

              {/* Continuity */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Continuity Benefit Nobody Prices In</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A distributed 24/7 provider keeps your line answered when your own office cannot be. Power cuts, storms, system
                outages, evacuations — because your call flow lives in their infrastructure across multiple sites rather than in
                your building, a local disruption does not silence your business. Companies in hurricane, wildfire and severe-winter
                regions consistently underrate this at purchase and then cite it as the main value after the first time it matters.
              </p>

              {/* Buying criteria */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What to Look For</h2>
              <ul className="mt-4 space-y-3">
                {buyingCriteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Red Flags</h2>
              <ul className="mt-4 space-y-3">
                {redFlags.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Conclusion */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Buying a 24 hour answering service is less about comparing feature lists than about verifying one claim: that a
                competent human answers at the worst possible hour. Run the audit yourself. Call at 3 AM. Call on Christmas. Ask how
                many accounts the night agent covers and insist on shift-level metrics. If the answers hold up, the rest of the
                contract is straightforward — and if they do not, no amount of favourable pricing fixes it.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> staffs US-based agents on
                every shift including holidays, reports answer speed and abandonment by shift rather than blended, discloses the
                overnight account-per-agent ratio, and applies identical escalation rules at 3 AM and 3 PM.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Test Us at 3 AM Before You Sign</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Genuine US-staffed 24/7 coverage with shift-level reporting, named holiday coverage, disclosed overnight staffing
                  ratios and multi-site continuity. Ask us for the overnight number and call it yourself.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free 24/7 Coverage Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.q}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <HeroContactForm />
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "After Hours Answering Service: Costs & Coverage", href: "/blog/after-hours-answering-service" },
                      { title: "Top 10 Answering Service Companies in USA", href: "/blog/top-10-answering-service-companies-usa" },
                      { title: "Property Management Answering Service", href: "/blog/property-management-answering-service" },
                      { title: "Answering Service for Contractors", href: "/blog/answering-service-for-contractors" },
                      { title: "Answering Service Appointment Scheduling", href: "/blog/answering-service-appointment-scheduling" },
                      { title: "Top 10 Plumbing Answering Services", href: "/blog/top-10-plumbing-answering-service-companies-usa" },
                      { title: "Call Center Benchmarks 2026", href: "/blog/call-center-benchmarks-2026" },
                    ].map((article, i) => (
                      <li key={i}>
                        <Link href={article.href} className="text-sm text-gray-700 hover:text-red transition-colors">
                          {article.title} →
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
