import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const qualifyingFields = [
  { field: "Price range", why: "Separates a serious buyer from a browser in one question" },
  { field: "Financing status", why: "Pre-approved, cash, or not yet started — changes urgency entirely" },
  { field: "Timeline", why: "Buying this month versus next spring dictates your follow-up cadence" },
  { field: "Working with another agent", why: "Determines whether the lead is even legally yours to pursue" },
  { field: "Home to sell first", why: "Turns one transaction into two, and changes the sequencing" },
  { field: "Source property or area", why: "Tells you what actually triggered the call, not just where it landed" },
];

const crmIntegrations = [
  { name: "Follow Up Boss", detail: "Lead creation with tags, stage assignment and instant agent notification" },
  { name: "kvCORE", detail: "Contact and enquiry writes with behavioural tagging and smart campaign entry" },
  { name: "BoomTown", detail: "Lead routing by area and price band, with qualification notes attached" },
  { name: "Chime", detail: "Lead capture with source attribution and automated assignment rules" },
  { name: "Sierra Interactive", detail: "Enquiry logging with property interest and agent round-robin" },
  { name: "ShowingTime & Calendars", detail: "Live showing booking into Google Calendar, Outlook or ShowingTime" },
];

const pricingRows = [
  ["Per minute", "$0.85 - $1.65 / min", "Solo agents with unpredictable call volume"],
  ["Per qualified lead", "$5.00 - $12.00 / lead", "Teams that only want to pay for real, screened enquiries"],
  ["Monthly tier", "$300 - $1,200 / mo", "Teams and small brokerages with steady portal volume"],
  ["Dedicated ISA", "$1,500 - $3,500 / mo", "High-volume teams needing outbound nurture, not just inbound"],
];

const buyingCriteria = [
  "Documented Fair Housing training for every agent assigned to your account",
  "Live CRM writes into Follow Up Boss, kvCORE, BoomTown, Chime or Sierra Interactive",
  "Showing booked on your live calendar during the call, not promised as a callback",
  "A qualification script you control, capturing budget, financing, timeline and agency status",
  "Answer speed measured in seconds, reported separately for evenings and weekends",
  "Spanish bilingual agents on the evening and weekend rota",
  "Clear separation between inbound answering and any outbound work, for TCPA reasons",
  "Call recordings you can access, for coaching and for dispute evidence",
];

const redFlags = [
  "Cannot produce a Fair Housing training record for agents handling buyer calls",
  "Emails you a name and number instead of writing a qualified lead into your CRM",
  "Quotes a per-lead price without defining what makes a lead qualified",
  "Offers outbound follow-up with no documented TCPA consent and DNC scrubbing process",
  "Reports a blended 24-hour answer speed that conceals weak evening staffing",
  "Cannot book a showing live and defaults to 'an agent will call you back'",
];

export default function RealEstateAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
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
            Real Estate Answering Service: Speed-to-Lead in 2026
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 20, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-smile.jpg" alt="US-based real estate answering service agent qualifying a buyer lead" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Real estate has an unusual problem: your leads arrive precisely when you are least able to answer them. Buyers browse
                listings on their sofa at 9 PM and on Saturday mornings, and portal enquiries are almost never exclusive — the same
                person often submits on several listings at once. A <strong>real estate answering service</strong> exists to make
                sure a trained human reaches that person in minutes rather than tomorrow morning, because in this business the
                second caller is usually competing for a relationship that has already been formed.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers the speed-to-lead research, what a genuine qualification script captures, live showing booking,
                CRM integration with Follow Up Boss, kvCORE and BoomTown, Fair Housing exposure on buyer calls, and 2026 pricing.
                See also our{" "}
                <Link href="/industries/real-estate-call-center-services" className="text-red font-semibold hover:underline">real estate call center services</Link>{" "}
                and the{" "}
                <Link href="/blog/60-second-lead-response-service" className="text-red font-semibold hover:underline">60-second lead response</Link> breakdown.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Portal enquiries are rarely exclusive — the first agent to a live conversation usually wins",
                    "Lead response research consistently shows a sharp drop-off in qualification odds after the first hour",
                    "A qualified lead captures budget, financing, timeline and agency status — not just a name",
                    "Showings booked live on your calendar beat 'an agent will call you back' every time",
                    "Fair Housing training is mandatory for anyone answering buyer questions about neighborhoods",
                    "Typical spend is $400-$900/month for a solo agent or small team",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speed to lead */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Why Minutes Decide the Deal</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Lead response research across industries has repeatedly found the same pattern: the probability of successfully
                qualifying an inbound lead is dramatically higher when contact happens within roughly five minutes than when it
                happens after thirty, and the curve falls away steeply through the first hour. Real estate amplifies this because
                of non-exclusivity. The buyer who submitted an enquiry on your listing at 9:14 PM very likely submitted on two
                others by 9:20.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The practical consequence is that your response window is not really competing against the buyer&apos;s patience. It
                is competing against the other agents who received the same enquiry. Returning the call at 9 AM the next morning is
                not a slightly worse outcome than calling in five minutes — it is frequently a completely different outcome, because
                by then someone else has already booked the showing.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { t: "Under 5 minutes", d: "Live conversation, showing booked, relationship framed before any competitor makes contact." },
                  { t: "30-60 minutes", d: "Often still reachable, but the buyer may already be scheduled with another agent." },
                  { t: "Next morning", d: "Frequently competing for second place on a lead that has already chosen someone." },
                ].map((x, i) => (
                  <div key={i} className={`rounded-2xl border p-5 ${i === 0 ? "border-red/30 bg-red/[0.02]" : "border-gray-200"}`}>
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-call.jpg" alt="Real estate answering service agent booking a showing during an evening call" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* Qualification */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What a Real Qualification Script Captures</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The difference between a cheap answering service and a useful one is whether the record that lands in your CRM lets
                you prioritise your morning. A name and a phone number does not. These six fields do.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Field captured</th>
                      <th className="p-4 font-semibold">Why it changes your next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualifyingFields.map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{f.field}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{f.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The agency-status question deserves particular attention. Discovering at the showing that a buyer is already under
                a buyer&apos;s agreement with another agent wastes an afternoon and creates an awkward conversation. Asking it during
                the first call costs eight seconds.
              </p>

              {/* Fair Housing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Fair Housing on Buyer Calls</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Buyers ask about neighborhoods constantly, and they ask in language that invites a steering violation. &ldquo;Is it a
                safe area?&rdquo; and &ldquo;is it good for families?&rdquo; are the two most common, and both are traps. A friendly,
                unscripted answer from an outsourced agent creates exposure for your brokerage, not for the vendor.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Compliant redirect</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Point the caller to objective public sources they can evaluate themselves — municipal crime statistics, school
                    district ratings, census data — and stay on property facts: price, square footage, lot size, taxes, HOA, days on
                    market, and availability.
                  </p>
                </div>
                <div className="rounded-2xl border border-red/30 bg-red/[0.02] p-5">
                  <h3 className="font-bold text-navy">Never</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Characterizing the people who live somewhere, describing an area as good or bad for any protected group,
                    steering a caller toward or away from a neighborhood, or volunteering demographic commentary of any kind — even
                    when the buyer explicitly asks for it.
                  </p>
                </div>
              </div>

              {/* CRM */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">CRM and Calendar Integration</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A lead that arrives as an email is a lead you still have to enter. Live integration means the record exists, tagged
                and assigned, and the showing is already on a calendar before you look at your phone.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {crmIntegrations.map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.detail}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Real Estate Answering Service Pricing in 2026</h2>
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
                If you buy per-qualified-lead, define &ldquo;qualified&rdquo; in the contract before launch. Without a written
                definition, the count is set by whoever writes the invoice.
              </p>

              {/* ROI */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The ROI Math for a Single Agent</h2>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">Worked example</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Coverage at $600 per month — $7,200 per year</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Median US home price around $400,000, at a 2.5% side commission</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />That is roughly $10,000 gross commission on a single closed side</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />One additional closing per year covers the service with room to spare</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Everything beyond the first recovered deal is margin</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  This is why real estate is one of the easiest categories to justify coverage in. The break-even is a single
                  transaction, and the leads being lost are ones you already paid a portal to generate.
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
                You are already paying to generate the leads. Portal fees, listing spend and marketing budget all land in the same
                place: an enquiry that arrives at 9 PM. An answering service is simply the cheapest way to stop that spend from
                evaporating between the enquiry and your first available moment to call back. Buy on qualification quality and
                booking capability, not on price per minute.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> answers with US-based
                agents on the evening and weekend rota, qualifies against a script you control, books showings live, writes into
                your CRM before the call ends, and documents Fair Housing training for every agent on your account.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Answer Every Lead Before Your Competition Does</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  US-based real estate answering with sub-five-minute response, full buyer qualification, live showing booking, and
                  direct writes into Follow Up Boss, kvCORE, BoomTown, Chime and Sierra Interactive.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Real Estate Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Top 10 Real Estate Call Center Companies", href: "/blog/top-10-real-estate-call-center-companies-usa" },
                      { title: "60-Second Lead Response Service", href: "/blog/60-second-lead-response-service" },
                      { title: "Property Management Answering Service", href: "/blog/property-management-answering-service" },
                      { title: "Answering Service Appointment Scheduling", href: "/blog/answering-service-appointment-scheduling" },
                      { title: "After Hours Answering Service", href: "/blog/after-hours-answering-service" },
                      { title: "Top 10 Mortgage Call Center Companies", href: "/blog/top-10-mortgage-call-center-companies-usa" },
                      { title: "Top 10 Appointment Setting Companies", href: "/blog/top-10-appointment-setting-companies-usa" },
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
