import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const emergencyTiers = [
  {
    tier: "Tier 1 — Dispatch now",
    examples: "Active flooding or burst pipe, sewage backup, gas odor, fire or smoke, no heat in winter, no water, no electricity, unsecurable door or broken exterior lock",
    action: "Dispatch approved on-call vendor immediately, notify on-call manager, log timestamp",
  },
  {
    tier: "Tier 2 — Same or next day",
    examples: "No air conditioning outside an extreme heat event, partial power loss, refrigerator failure, single non-functioning toilet in a multi-bath unit, water heater failure",
    action: "Create priority work order, schedule first available slot, confirm with resident by SMS",
  },
  {
    tier: "Tier 3 — Routine work order",
    examples: "Dripping faucet, garbage disposal fault, cabinet or drawer repair, blinds, minor drywall, appliance cosmetic issues",
    action: "Standard work order in your PM software, normal scheduling queue",
  },
  {
    tier: "Tier 4 — Not maintenance",
    examples: "Noise complaints, parking disputes, lease questions, rent payment queries, package enquiries, neighbor conflicts",
    action: "Structured message routed to the relevant portfolio manager for the next business day",
  },
];

const integrations = [
  { name: "AppFolio", detail: "Live work order creation, unit and resident lookup, vendor assignment" },
  { name: "Buildium", detail: "Work order creation with priority tagging and resident contact history" },
  { name: "Yardi Voyager & Breeze", detail: "Service request entry, unit status verification, vendor dispatch" },
  { name: "Rent Manager", detail: "Work order writes, tenant record lookup, recurring issue flagging" },
  { name: "Entrata", detail: "Service request logging with photo and description attachment" },
  { name: "ResMan", detail: "Maintenance ticket creation and portfolio manager routing" },
];

const pricingRows = [
  ["Per minute", "$0.85 - $1.60 / min", "Portfolios with short, high-frequency calls"],
  ["Per qualified call", "$4.00 - $9.00 / call", "After-hours emergency lines with longer triage"],
  ["Monthly tier", "$350 - $1,500 / mo", "Predictable volume, mid-size portfolios"],
  ["Per door", "$1.50 - $4.00 / door / mo", "Clean benchmark for after-hours emergency coverage"],
];

const buyingCriteria = [
  "Documented Fair Housing training for every agent assigned to your account",
  "Live write access to your PM software — AppFolio, Buildium, Yardi, Rent Manager, Entrata or ResMan",
  "A written emergency tier list you control and can revise as your portfolio changes",
  "Approved vendor list with per-incident spend authority and a clear escalation threshold",
  "Timestamped call logs and recordings retained long enough to cover your habitability exposure",
  "Spanish bilingual agents staffed overnight, not only on the daytime rota",
  "Separate handling paths for residents, owners, prospects and vendors",
  "Reported average speed of answer for the overnight shift specifically",
];

const redFlags = [
  "Cannot confirm Fair Housing training for agents handling leasing calls",
  "Takes messages only and cannot write a work order into your software",
  "No written emergency tier list — every agent improvises at 3 AM",
  "Unlimited vendor dispatch authority with no per-incident spend cap",
  "Call recordings purged after 30 days, well short of most habitability claim windows",
  "One generic queue for residents, owners and prospects alike",
];

export default function PropertyManagementAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
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
            Property Management Answering Service (2026 Guide)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 20, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-woman-typing.jpg" alt="US-based property management answering service agent logging a maintenance work order" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Property management is the rare business where the phone ringing at 2 AM is not an inconvenience but a legal event.
                A resident reporting no heat in January, a sewage backup, or a door that will not lock has started a clock that runs
                under your state&apos;s habitability statute — and it starts when they notify you, not when you retrieve the voicemail.
                A <strong>property management answering service</strong> exists to make sure someone competent answers that call,
                sorts it correctly, dispatches the right vendor, and writes down exactly when all of it happened.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers emergency tiering, vendor dispatch authority, Fair Housing exposure on leasing calls, live
                integration with AppFolio, Buildium and Yardi, and what per-door coverage actually costs in 2026. For the broader
                service overview see our{" "}
                <Link href="/industries/property-management-call-center" className="text-red font-semibold hover:underline">property management call center services</Link>,
                or compare providers in the{" "}
                <Link href="/blog/top-10-property-management-call-center-companies-usa" className="text-red font-semibold hover:underline">top 10 property management call center companies</Link> ranking.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Habitability clocks start when the resident notifies you — a timestamped call log is your evidence",
                    "After-hours emergency coverage benchmarks at roughly $1.50-$4.00 per door per month",
                    "A written four-tier emergency list is what makes 3 AM decisions consistent across agents",
                    "Fair Housing training is mandatory for any agent touching a leasing enquiry",
                    "Live work order writes into AppFolio, Buildium or Yardi eliminate the morning transcription queue",
                    "Capturing after-hours leasing tours often pays for the service on its own",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Four call types */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Four Callers, Four Completely Different Jobs</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most answering services treat your line as one queue. Property management has four distinct caller types with
                nothing in common, and a provider that cannot route them separately will handle at least three of them badly.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Residents", d: "Maintenance requests, emergencies, lockouts, complaints. Needs tiering, vendor dispatch and work order creation." },
                  { t: "Prospects", d: "Availability, pricing, tour booking. Needs Fair Housing-compliant scripting and live rent roll access." },
                  { t: "Owners", d: "Statements, approvals, portfolio questions. Needs discreet routing to the right portfolio manager, never a generic queue." },
                  { t: "Vendors", d: "Access codes, scope confirmation, completion reporting. Needs verification before any access information is released." },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-desk.jpg" alt="Property management answering service agent triaging an after-hours maintenance emergency" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* Emergency tiers */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Emergency Tier List That Runs Your Night Line</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This is the single most important document in the relationship. Without it, whether a resident&apos;s call wakes your
                on-call manager depends on which agent answered. With it, the same call gets the same treatment every time, and you
                have a defensible standard if the decision is ever questioned.
              </p>
              <div className="mt-6 space-y-4">
                {emergencyTiers.map((t, i) => (
                  <div key={i} className={`rounded-2xl border p-5 ${i === 0 ? "border-red/30 bg-red/[0.02]" : "border-gray-200"}`}>
                    <h3 className="font-bold text-navy">{t.tier}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Examples:</span> {t.examples}</p>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Action:</span> {t.action}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Note that tier boundaries are jurisdiction-dependent. No air conditioning is a routine work order in Portland and a
                Tier 1 emergency in Phoenix during a heat advisory. If your portfolio spans states, the tier list needs a
                per-market column rather than one national standard.
              </p>

              {/* Vendor dispatch */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Vendor Dispatch Authority: Getting the Spend Cap Right</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The reason to outsource the night line is so that a burst pipe gets a plumber without anyone waking you. That only
                works if the agent has real authority to dispatch — but unbounded authority over owner funds is not acceptable
                either. The workable structure is a written spend threshold per incident.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">A typical dispatch authority structure</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Tier 1 emergency, approved vendor, under the per-incident cap — dispatch immediately, notify manager after</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Tier 1 emergency, estimated cost above the cap — page the on-call manager for approval before dispatch</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />No approved vendor available in trade or area — escalate to the on-call manager regardless of cost</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Any dispatch on an owner flagged as approval-required — always escalate, no exceptions</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Review the cap quarterly. Set it too low and you are woken for routine after-hours calls, which defeats the
                  purpose; set it too high and a single misjudged dispatch becomes an owner relations problem.
                </p>
              </div>

              {/* Fair Housing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Fair Housing: The Liability Most Buyers Overlook</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                When you outsource leasing enquiries, you are handing strangers a microphone and your company name. The Fair Housing
                Act does not care that the person who made a discriminatory remark worked for a vendor rather than for you. A
                friendly, entirely well-meant answer to &ldquo;what kind of people live in the building?&rdquo; or &ldquo;is it a good
                area for kids?&rdquo; can create genuine exposure.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Safe ground</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Rent, deposit and fees</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Square footage, layout, availability date</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Pet, parking and smoking policy</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Published, objective screening criteria applied to everyone</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-red/30 bg-red/[0.02] p-5">
                  <h3 className="font-bold text-navy">Never</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Characterizing who lives in a building or neighborhood</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Steering a caller toward or away from a property</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Commenting on schools as a proxy for demographics</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Asking about family status, disability, origin or religion</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Ask any prospective provider to show you their Fair Housing training record and their leasing script. If they cannot
                produce either, they should not be answering your leasing line. This is not a compliance formality — it is the
                single largest legal risk in outsourcing property management calls.
              </p>

              {/* Integrations */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Property Software Integration</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A message emailed to your office is a work order you still have to create. Live integration means the ticket already
                exists, correctly tiered and assigned, before your team opens a laptop.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {integrations.map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.detail}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Property Management Answering Service Pricing in 2026</h2>
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
              <p className="mt-4 text-sm text-gray-500">
                Portfolios above roughly 1,000 doors generally negotiate blended per-minute rates below the published range. Vendor
                dispatch and work order creation are sometimes billed separately — confirm before signing.
              </p>

              {/* Leasing ROI */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Where the Service Actually Pays for Itself</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most buyers justify an answering service on emergency coverage and liability. That is the right reason to buy it,
                but it is rarely where the money comes from. The return usually sits in the leasing calls.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">Worked example — a 400-door portfolio</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />After-hours coverage at $2.50 per door — roughly $1,000 per month</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Prospect calls cluster evenings and weekends, when the leasing office is shut</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Capturing and touring even three otherwise-lost prospects a month</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />One converted lease at $1,600 rent covers the month; two clear it comfortably</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Reduced vacancy days compound across the portfolio over a year</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Emergency coverage protects you from downside. Leasing capture creates upside. Buy for the first, but measure the
                  second — it is usually the larger number.
                </p>
              </div>

              {/* Buying criteria */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What to Look For in a Provider</h2>
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
                A property management answering service is doing three jobs at once: protecting you from habitability exposure with
                a documented response record, keeping residents from waiting until morning with a flooded unit, and catching the
                leasing enquiries that arrive when your office is dark. Get the emergency tier list and the vendor spend cap right,
                insist on Fair Housing training and live work order writes, and the service largely runs itself.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> staffs US-based agents on
                every shift, writes work orders live into AppFolio, Buildium, Yardi, Rent Manager and Entrata, documents Fair Housing
                training per agent, and retains timestamped call records for the full habitability window rather than 30 days.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Cover Your Portfolio Around the Clock</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  US-based resident, prospect, owner and vendor call handling with four-tier emergency triage, capped vendor
                  dispatch authority, live PM software integration and Fair Housing-trained agents. Tell us your door count and we
                  will price it per door.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Per-Door Quote <ArrowRight className="h-4 w-4" />
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
              <div className="space-y-6 lg:sticky lg:top-28">
                <HeroContactForm />
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "Top 10 Property Management Call Center Companies", href: "/blog/top-10-property-management-call-center-companies-usa" },
                      { title: "Real Estate Answering Service", href: "/blog/real-estate-answering-service" },
                      { title: "After Hours Answering Service: Costs & Coverage", href: "/blog/after-hours-answering-service" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "Answering Service for Contractors", href: "/blog/answering-service-for-contractors" },
                      { title: "Top 10 Plumbing Answering Services", href: "/blog/top-10-plumbing-answering-service-companies-usa" },
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
