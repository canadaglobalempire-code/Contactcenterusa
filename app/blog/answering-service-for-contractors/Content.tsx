import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const trades = [
  { name: "General contractors & remodelers", detail: "Kitchen, bath and whole-home projects with long sales cycles and high ticket values — the cost of a missed estimate call is enormous." },
  { name: "Roofing", detail: "Storm-driven volume spikes that no in-house office can absorb, plus insurance-claim callers who need careful capture." },
  { name: "Electricians", detail: "A mix of routine service calls and genuine safety emergencies that need immediate escalation rather than a next-day callback." },
  { name: "Concrete & masonry", detail: "Seasonal, weather-dependent scheduling where the crew is never near a phone and quotes need site assessment." },
  { name: "Restoration & water damage", detail: "24/7 emergency intake where response speed directly determines whether you win the job and how bad the damage gets." },
  { name: "Landscaping & hardscaping", detail: "Heavy spring enquiry surges compressed into a few weeks, with crews running equipment all day." },
];

const estimateFields = [
  { field: "Project type & scope", why: "In the caller's own words — tells you whether it's a repair or a full replacement" },
  { field: "Address & property type", why: "Determines travel time, permits, and whether it's in your service area at all" },
  { field: "Structure age", why: "Drives likely code, material and hidden-condition issues in your quote" },
  { field: "Rough dimensions", why: "Lets you ballpark crew size and material order before you drive out" },
  { field: "Timeline", why: "Separates 'this week' from 'sometime next year' in your scheduling" },
  { field: "Budget range", why: "If offered — filters out projects with no realistic path to close" },
  { field: "Insurance involved?", why: "Changes the entire process, paperwork and payment timeline" },
  { field: "Decision-maker present?", why: "Prevents driving to a site visit with someone who cannot approve the work" },
];

const pricingRows = [
  ["Per minute", "$0.85 - $1.65 / min", "Solo operators and small crews with variable volume"],
  ["Per qualified call", "$5.00 - $10.00 / call", "Contractors who only want to pay for real estimate requests"],
  ["Monthly tier", "$250 - $900 / mo", "Steady year-round volume with predictable call counts"],
  ["Seasonal / surge", "Negotiated overflow", "Roofing and restoration during storm season"],
];

const buyingCriteria = [
  "Daytime overflow coverage, not only after-hours — the job site is the real problem",
  "A written estimate-capture script covering all eight fields you need to quote",
  "A strict no-quoting rule so agents never put a number in a caller's head",
  "Live writes into JobNimbus, Buildertrend, Jobber, ServiceTitan or CompanyCam",
  "Surge capacity in writing for storm season, with the rate agreed in advance",
  "Emergency escalation rules that distinguish a safety issue from a routine service call",
  "Spanish bilingual agents, which in most trades is a large share of inbound volume",
  "Service-area screening so you are not driving two hours for an unqualified visit",
];

const redFlags = [
  "Offers to quote ballpark pricing to callers — this creates expectations you must then honor",
  "Cannot cover daytime hours and sells after-hours only",
  "No surge clause, so storm season is exactly when they cannot answer",
  "Emails a name and number instead of a completed estimate-request record",
  "Cannot name a single field-service or construction CRM they write into",
  "No Spanish coverage despite serving a trade where it is routinely a third of calls",
];

export default function AnsweringServiceForContractorsContent({ faqs }: { faqs: Faq[] }) {
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
            Answering Service for Contractors: 2026 Costs &amp; ROI
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 20, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-man-headset.jpg" alt="US-based answering service agent capturing a contractor estimate request" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Most businesses that buy an answering service are buying coverage for the hours they are closed. Contractors have a
                different problem entirely: you miss calls during business hours, while you are working, because the work itself
                makes answering impossible. You are on a roof, under a sink, in a crawlspace, wearing ear protection, running a saw,
                or standing in a client&apos;s kitchen where picking up the phone would be plainly rude. An{" "}
                <strong>answering service for contractors</strong> is therefore mostly a daytime product, which is the opposite of
                how the category is usually sold.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers what an estimate-capture script must collect, why you should never let an agent quote a price,
                how storm surge coverage works for roofing and restoration, integration with JobNimbus, Buildertrend and Jobber, and
                what it costs in 2026. Related reading:{" "}
                <Link href="/blog/top-10-hvac-home-services-call-center-companies-usa" className="text-red font-semibold hover:underline">HVAC and home services call centers</Link>{" "}
                and{" "}
                <Link href="/blog/top-10-plumbing-answering-service-companies-usa" className="text-red font-semibold hover:underline">plumbing answering services</Link>.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Contractors miss calls during the working day, not just after hours — buy daytime overflow",
                    "Never let an agent quote a price; capture the variables and book the site visit instead",
                    "The decision-maker question alone saves entire wasted afternoons",
                    "Storm surge capacity is the single most valuable clause for roofing and restoration",
                    "Typical spend runs $300-$600/month for small-to-mid contractors",
                    "One recovered remodel or roof replacement usually covers a full year of service",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* The daytime problem */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Problem Is the Job Site, Not the Clock</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Think about a normal Tuesday. You are on site from 7:30. Between the noise, the gloves, the ladder and the client
                standing next to you, there are maybe three windows in the entire day where answering a ringing phone is actually
                practical. Meanwhile homeowners call contractors during their own lunch break and mid-afternoon — precisely when you
                are least reachable.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This matters because a homeowner calling for an estimate is almost always calling several contractors. They are not
                waiting for you to come down off the roof. The first contractor who answers, sounds professional, and gets a site
                visit on the calendar has an enormous structural advantage over the two who call back that evening. Buying
                after-hours-only coverage misses the point entirely for most trades.
              </p>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-writing.jpg" alt="Answering service agent logging a contractor estimate request into a CRM" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* Trades */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Which Trades Benefit Most</h2>
              <div className="mt-6 space-y-4">
                {trades.map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.detail}</p>
                  </div>
                ))}
              </div>

              {/* Estimate capture */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Eight Fields an Estimate Request Must Capture</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A message saying &ldquo;Dave called about a kitchen&rdquo; is worthless. It does not tell you whether to drive across
                town tomorrow or send a polite decline. These eight fields turn a phone message into a qualified opportunity you can
                triage.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Field</th>
                      <th className="p-4 font-semibold">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estimateFields.map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{f.field}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{f.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* No quoting */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Why an Agent Must Never Quote a Price</h2>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">The single most damaging thing an answering service can do</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      If an agent tells a homeowner that a roof &ldquo;usually runs about eight thousand,&rdquo; you now have two bad
                      options: honor a number you did not set and cannot deliver on, or open your site visit by explaining why the
                      real price is higher. The second conversation loses jobs and damages trust before you have even started.
                      Construction pricing depends on access, substrate condition, permits, disposal, code upgrades and a dozen
                      things nobody can assess by phone.
                    </p>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      The correct script is a redirect: acknowledge that pricing is the obvious question, explain honestly that an
                      accurate number needs eyes on the property, and move straight to booking the visit. Make this rule explicit in
                      your call-handling document and check recordings for compliance in the first month.
                    </p>
                  </div>
                </div>
              </div>

              {/* Storm surge */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Storm Surge: The Clause That Matters Most for Roofers</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A hailstorm rewrites your week. Volume can multiply several times over within 48 hours and stay elevated for a
                fortnight, and every homeowner in the affected zip codes is calling every roofer they can find at the same time.
                This is the moment your business is won or lost for the season, and it is exactly the moment a one-person office
                collapses.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Without surge coverage</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Calls roll to voicemail during the highest-intent window of the year. Homeowners move down the list. By the time
                    you return calls, competitors have signed contingency agreements and your storm season is effectively over.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">With surge coverage</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    A shared agent pool absorbs the spike, captures insurance-claim details, books inspections into your calendar in
                    sequence, and scales back down afterwards — with no seasonal hiring and no idle payroll in a quiet year.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Get the surge terms in writing before you sign, including the rate that applies and how quickly extra capacity comes
                online. A provider that will not commit to surge capacity in the contract will not have it when the hail arrives.
              </p>

              {/* Pricing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Contractor Answering Service Pricing in 2026</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Model</th>
                      <th className="p-4 font-semibold">Typical US range</th>
                      <th className="p-4 font-semibold">Best fit</th>
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

              {/* ROI */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The ROI Math for a Small Contractor</h2>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">Worked example — a two-crew remodeler</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Coverage at $450 per month — $5,400 per year</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Average project value of $18,000 at a 25% gross margin — $4,500 gross profit per job</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Capturing roughly 12 additional estimate calls per year that currently hit voicemail</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />At a conservative 20% close rate, that is two to three extra projects</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />$9,000-$13,500 in gross profit against $5,400 of cost</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Substitute your own average project value and close rate. For trades with high ticket values, the break-even is
                  usually well under one job per year, which is why this category is an easy decision for remodelers and roofers and
                  a closer call for low-ticket handyman work.
                </p>
              </div>

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
                For contractors, an answering service is not really about the hours you are closed — it is about the hours you are
                working. Every estimate call that hits voicemail while you are on a ladder is a job that goes to whoever answered.
                Buy daytime overflow, insist on a complete estimate-capture script, forbid price quoting in writing, and make sure
                surge capacity is contractual if you work storm-driven trades.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> covers contractors during
                working hours as well as nights and weekends, captures full estimate requests against a script you control, never
                quotes pricing, writes into JobNimbus, Buildertrend, Jobber and ServiceTitan, and commits surge capacity in writing
                for storm season.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Stop Losing Estimates While You&apos;re on the Job</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  US-based daytime overflow and after-hours coverage for contractors, with full estimate capture, site-visit booking,
                  storm surge capacity and live writes into your construction CRM.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Contractor Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Top 10 HVAC & Home Services Call Center Companies", href: "/blog/top-10-hvac-home-services-call-center-companies-usa" },
                      { title: "Top 10 Plumbing Answering Service Companies", href: "/blog/top-10-plumbing-answering-service-companies-usa" },
                      { title: "After Hours Answering Service", href: "/blog/after-hours-answering-service" },
                      { title: "Answering Service Appointment Scheduling", href: "/blog/answering-service-appointment-scheduling" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "After-Hours Answering for HVAC Companies", href: "/blog/after-hours-answering-service-hvac-companies" },
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
