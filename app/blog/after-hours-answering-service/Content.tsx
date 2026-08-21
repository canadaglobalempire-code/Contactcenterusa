import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const pricingModels = [
  {
    model: "Per minute",
    range: "$0.85 - $1.65 / min",
    bestFor: "Unpredictable volume, short calls",
    watchOut: "Billing increments — insist on 1-second, not 30-second, rounding",
  },
  {
    model: "Per call",
    range: "$4.00 - $9.00 / call",
    bestFor: "Longer triage calls, emergency dispatch",
    watchOut: "Define what counts as a billable call — wrong numbers should not",
  },
  {
    model: "Monthly minute tier",
    range: "$250 - $1,200 / mo",
    bestFor: "Steady, forecastable after-hours volume",
    watchOut: "Overage rates are often 2-3x the in-tier rate",
  },
  {
    model: "Per booked appointment",
    range: "$25 - $95 / booking",
    bestFor: "Businesses that only value a booked outcome",
    watchOut: "Agree in writing what qualifies as booked before you sign",
  },
];

const coverageModels = [
  {
    name: "Evening only",
    hours: "5 PM - 9 AM weekdays",
    weekly: "~80 hrs/wk",
    typical: "$250 - $450 / mo",
    fit: "Offices whose callers mostly ring just after closing",
  },
  {
    name: "Evening + weekend",
    hours: "5 PM - 9 AM + all weekend",
    weekly: "~128 hrs/wk",
    typical: "$400 - $750 / mo",
    fit: "The most common after-hours package for SMBs",
  },
  {
    name: "Overnight only",
    hours: "10 PM - 6 AM daily",
    weekly: "~56 hrs/wk",
    typical: "$200 - $400 / mo",
    fit: "Businesses with in-house evening staff but no night desk",
  },
  {
    name: "Full 24/7",
    hours: "All 168 hours",
    weekly: "168 hrs/wk",
    typical: "$600 - $2,500 / mo",
    fit: "Emergency trades, medical, property management, national brands",
  },
];

const industries = [
  {
    name: "Medical & dental practices",
    why: "Patients call about symptoms at night. HIPAA-compliant triage and on-call physician paging are mandatory, not optional.",
    href: "/blog/top-10-medical-answering-service-companies-usa",
    linkLabel: "Medical answering services",
  },
  {
    name: "Plumbing, HVAC & home services",
    why: "Burst pipes and dead furnaces happen at 2 AM. The first contractor to answer books the job, full stop.",
    href: "/blog/top-10-plumbing-answering-service-companies-usa",
    linkLabel: "Plumbing answering services",
  },
  {
    name: "Property management",
    why: "Lockouts, floods, no-heat calls and habitability emergencies carry legal response-time exposure.",
    href: "/industries/property-management-call-center",
    linkLabel: "Property management call center",
  },
  {
    name: "Legal & personal injury",
    why: "Accident victims call within hours of an incident, usually at night, and sign with whoever picks up first.",
    href: "/blog/top-10-legal-intake-call-center-companies-usa",
    linkLabel: "Legal intake services",
  },
  {
    name: "Real estate",
    why: "Listing enquiries spike evenings and weekends when buyers are actually free to look.",
    href: "/industries/real-estate-call-center-services",
    linkLabel: "Real estate call center",
  },
  {
    name: "E-commerce & SaaS",
    why: "Order and outage questions do not respect time zones, and a silent night queue becomes a morning backlog.",
    href: "/industries/ecommerce-customer-service-outsourcing",
    linkLabel: "E-commerce support",
  },
];

const buyingCriteria = [
  "US-based agents on the overnight shift specifically — ask, because many providers staff the US by day and offshore by night",
  "Average speed of answer reported for the night and weekend rota, not a blended 24-hour figure",
  "Live calendar integration so callers hang up already booked, not promised a callback",
  "Documented escalation rules with timestamps, so on-call staff are woken only when your thresholds are met",
  "Spanish bilingual agents staffed overnight if you serve TX, FL, AZ, CA, NV or the Southwest",
  "HIPAA compliance and signed BAA if any caller may disclose health information",
  "Per-second billing increments rather than 30-second rounding, which can inflate an invoice by 20-40%",
  "A real escalation path for you as the client at night — not just a daytime account manager",
];

const redFlags = [
  "Quotes a rate but will not put average speed of answer or abandonment rate in writing",
  "Bills 30-second increments and calls it 'industry standard' — it inflates short calls dramatically",
  "Counts wrong numbers, robocalls and hang-ups as billable calls",
  "Cannot name the calendar or field-service systems it writes into",
  "Offers 'bilingual' coverage without confirming it is staffed on the overnight shift",
  "Locks you into 12 months with no performance-based exit clause",
];

export default function AfterHoursAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
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
            After Hours Answering Service: 2026 Costs &amp; Coverage
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 20, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-night.jpg" alt="US-based after hours answering service agent taking an overnight call" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Intro */}
              <p className="text-lg leading-relaxed text-gray-700">
                Your office closes at five. Your customers do not. An <strong>after hours answering service</strong> puts a trained,
                US-based human on your phone line for the roughly <strong>128 hours a week you are closed</strong> — evenings,
                overnight, weekends and holidays — so that a caller with money in hand reaches a person instead of a voicemail
                greeting. The uncomfortable arithmetic is that most businesses are unreachable for about three quarters of the week,
                and the calls that arrive in that window are disproportionately urgent, which means disproportionately valuable.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers what after hours coverage actually costs in 2026 across all four pricing models, how evening,
                overnight, weekend and full 24/7 packages differ, how a good provider triages a 2 AM call, and the specific
                questions that separate a service that books jobs from one that merely takes messages. If you want the ranked
                provider list instead, see our{" "}
                <Link href="/blog/top-10-answering-service-companies-usa" className="text-red font-semibold hover:underline">top 10 answering service companies in the USA</Link>{" "}
                guide, or read how this compares to a full{" "}
                <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound call center service</Link>.
              </p>

              {/* Key takeaways */}
              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "You are closed for roughly 128 of the week's 168 hours — that is 76% of the clock unattended",
                    "Between 20% and 35% of after-hours callers never call back and never leave a voicemail",
                    "US after hours coverage typically runs $300-$700/month for evening-plus-weekend packages",
                    "One in-house night hire costs $42,000-$60,000/year and still cannot cover 128 hours alone",
                    "The real buying question is not price per minute — it is cost per booked outcome",
                    "Insist on per-second billing; 30-second rounding can inflate an invoice by 20-40%",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it does */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What an After Hours Answering Service Actually Does</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The category name is a museum piece. &ldquo;Answering service&rdquo; describes a 1970s switchboard operator writing
                a name on a pink slip, and plenty of budget providers still operate roughly that way. What a competent 2026 provider
                does is closer to running your front desk while you sleep. The agent answers in your company name, works from your
                script, identifies why the person is calling, and then takes one of four actions rather than defaulting to
                &ldquo;I&apos;ll have someone call you back.&rdquo;
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Book it", d: "Checks live calendar availability and puts the appointment on the schedule while the caller is still on the line, then fires an SMS confirmation." },
                  { t: "Escalate it", d: "Matches the call against your emergency criteria and pages the on-call person by phone, SMS or pager with a timestamped record." },
                  { t: "Resolve it", d: "Answers routine questions from your FAQ — hours, address, pricing bands, order status — so the call never needs a callback at all." },
                  { t: "Capture it", d: "Takes a structured message with the fields you specified and delivers it by email, SMS or CRM record for the morning queue." },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                The gap between a message-taking service and a booking service is the entire value of the category. A message means
                you still have to call the person back tomorrow, by which point a competitor who answered live has usually already
                won the job. A booking means the revenue is captured while the intent is hot.
              </p>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-woman-headset.jpg" alt="After hours answering service agent booking an appointment during an overnight shift" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* Pricing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">After Hours Answering Service Pricing in 2026</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                US providers price four ways, and the right one depends entirely on your call pattern. Short, high-volume calls
                favour per-minute. Long triage calls favour per-call. Predictable volume favours a monthly tier. If you genuinely
                only care about booked jobs, per-appointment aligns the incentive best — but only if you define &ldquo;booked&rdquo;
                tightly in the contract.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Pricing model</th>
                      <th className="p-4 font-semibold">Typical US range</th>
                      <th className="p-4 font-semibold">Best for</th>
                      <th className="p-4 font-semibold">Watch out for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingModels.map((p, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{p.model}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{p.range}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{p.bestFor}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{p.watchOut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Ranges reflect US-based agent pricing. Offshore providers quote materially lower headline rates; evaluate them on
                cost per booked outcome rather than cost per minute, and test the overnight shift specifically before signing.
              </p>

              {/* Coverage models */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Coverage Models: Evening, Overnight, Weekend or Full 24/7</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most buyers over-purchase. Before choosing full 24/7, pull your last three months of call logs and find out when the
                missed calls actually land. For a large majority of small businesses the answer is a spike between 5 PM and 8 PM
                — people call the moment they finish their own workday — and a second spike on Saturday mornings. Overnight volume
                is often genuinely low outside the emergency trades.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Package</th>
                      <th className="p-4 font-semibold">Hours covered</th>
                      <th className="p-4 font-semibold">Weekly hours</th>
                      <th className="p-4 font-semibold">Typical cost</th>
                      <th className="p-4 font-semibold">Best fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coverageModels.map((c, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{c.name}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{c.hours}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{c.weekly}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{c.typical}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{c.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ROI */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Real Cost of a Missed After-Hours Call</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The monthly invoice is the visible number. The invisible number is larger. Work it through with your own figures:
                take your average closed-job value, multiply by the number of after-hours calls you receive each month, and apply a
                conservative close rate. Then compare that to the service fee.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">Worked example — a four-truck home services business</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />60 after-hours calls per month reach voicemail today</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />About 30% never call back and never leave a message — 18 calls gone silently</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Of the 18, a conservative 25% would have booked — roughly 4-5 jobs</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />At an average job value of $400, that is $1,600-$2,000 per month walking away</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />An evening-plus-weekend package at $500/month is covered three to four times over</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Run this with your own average job value before you shop. If your average ticket is above roughly $250, after-hours
                  coverage almost always pays for itself on volume alone. Below that, the case depends on lifetime customer value
                  rather than the first transaction.
                </p>
              </div>

              {/* Triage */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">How a Good Provider Triages a 2 AM Call</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Escalation discipline is what your on-call staff will judge the service on. Wake them for everything and they will
                revolt within a fortnight; wake them for nothing and you will miss the genuine emergency. A well-run provider works
                from explicit, written thresholds that you set, and applies them identically every time.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { tier: "Tier 1 — Immediate escalation", detail: "Active damage, safety risk, or a defined clinical or habitability emergency. Page the on-call person now, follow the escalation ladder if unanswered within your stated interval, and log every attempt with a timestamp." },
                  { tier: "Tier 2 — Book urgently", detail: "Serious but not actively worsening. Book the first available slot, confirm by SMS, and flag the record so the morning team sees it first." },
                  { tier: "Tier 3 — Book normally", detail: "Routine work the caller wants scheduled. Check live availability, book, confirm. No escalation, no callback required." },
                  { tier: "Tier 4 — Capture and hold", detail: "General enquiries, vendor calls, non-urgent questions. Structured message delivered for the next business morning." },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.tier}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Insist that these thresholds live in a written call-handling document you can revise, and that every escalation is
                logged with a timestamp. When an on-call technician claims they were never paged, the timestamped log is the only
                thing that settles it.
              </p>

              {/* Industries */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Which Businesses Need After-Hours Coverage Most</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Every business loses something to a silent phone, but in these sectors the loss per missed call is high enough that
                after-hours coverage is effectively table stakes rather than an upgrade.
              </p>
              <div className="mt-6 space-y-4">
                {industries.map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.why}</p>
                    <Link href={x.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red hover:underline">
                      {x.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* In-house vs outsourced */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">In-House Night Staff vs an Outsourced Service</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Factor</th>
                      <th className="p-4 font-semibold">In-house night staff</th>
                      <th className="p-4 font-semibold">Outsourced after hours service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Annual cost", "$42,000-$60,000 per person, plus 20-30% benefits", "$3,600-$8,400 per year for equivalent coverage"],
                      ["People needed for 128 hrs/wk", "Two to three, plus holiday and sick cover", "None — shared trained agent pool"],
                      ["Coverage on a sick day", "You scramble, or the phone goes unanswered", "Unaffected"],
                      ["Volume spikes", "One person, one call at a time", "Overflow absorbed by the wider floor"],
                      ["Ramp time", "Four to eight weeks to recruit and train", "One to two weeks to script and launch"],
                      ["Idle time", "Paid in full at 3 AM whether the phone rings or not", "Paid only for live call time"],
                      ["Best when", "Volume is genuinely high every night and work is deeply specialised", "Volume is spiky, seasonal, or moderate"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{row[0]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[1]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Buying criteria */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What to Look For in an After Hours Answering Service</h2>
              <ul className="mt-4 space-y-3">
                {buyingCriteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Red flags */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Red Flags When Comparing Providers</h2>
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
                After-hours coverage is one of the few operational decisions where the arithmetic is genuinely simple. You are
                unreachable for about three quarters of the week, a meaningful share of the people who call in that window never try
                again, and the fix costs a fraction of one night-shift salary. The question is not really whether to cover the hours
                — it is whether you buy a service that books outcomes or one that just takes names.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                When you shortlist providers, test the overnight shift before you sign. Call your own prospective service at 2 AM on
                a Sunday and see who picks up, how fast, and whether they sound like they work for you.{" "}
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> runs US-based agents on
                every shift, writes bookings live into your calendar, and reports night-shift answer speed separately rather than
                hiding it inside a blended average.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Stop Sending After-Hours Callers to Voicemail</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Get US-based evening, overnight and weekend coverage with live calendar booking, documented escalation rules and
                  Spanish bilingual agents on the night rota. Tell us your hours and call volume and we will price the coverage that
                  actually fits.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free After-Hours Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Top 10 Answering Service Companies in USA", href: "/blog/top-10-answering-service-companies-usa" },
                      { title: "24 Hour Answering Service: Costs & Coverage", href: "/blog/24-hour-answering-service" },
                      { title: "After-Hours Answering Service for HVAC Companies", href: "/blog/after-hours-answering-service-hvac-companies" },
                      { title: "Answering Service vs Virtual Receptionist vs Call Center", href: "/blog/answering-service-vs-virtual-receptionist-vs-call-center" },
                      { title: "Answering Service for Contractors", href: "/blog/answering-service-for-contractors" },
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
