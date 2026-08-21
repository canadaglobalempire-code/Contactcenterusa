import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const schedulingRules = [
  { rule: "Service duration", detail: "How long each appointment type actually takes, not the optimistic version" },
  { rule: "Buffer time", detail: "Gap between appointments for notes, cleanup, or reset" },
  { rule: "Travel time", detail: "For field businesses — the difference between a full day and a broken one" },
  { rule: "Working hours per person", detail: "Including lunch, standing meetings, and days off" },
  { rule: "Skill matching", detail: "Which technician or provider is qualified for which service type" },
  { rule: "Daily capacity cap", detail: "Maximum bookings per person per day, so nobody gets an eleven-job schedule" },
  { rule: "Booking horizon", detail: "How far ahead callers may book, and the minimum notice required" },
  { rule: "Overflow handling", detail: "Exactly what to offer when the caller's preferred slot is unavailable" },
];

const reminderFlow = [
  { when: "At booking", channel: "SMS + email", content: "Confirmation with date, time, address, provider name and a reschedule link" },
  { when: "~24 hours before", channel: "SMS", content: "Reminder with one-tap confirm or reschedule — this is the highest-yield touch" },
  { when: "~2 hours before", channel: "SMS", content: "Final reminder, plus technician ETA window for field appointments" },
  { when: "After a no-show", channel: "SMS + call", content: "Immediate rebooking offer while intent is still warm" },
];

const pricingRows = [
  ["Per booking", "$25 - $95 / appointment", "Businesses that only value a confirmed booking"],
  ["Per minute (incl. scheduling)", "$0.85 - $1.65 / min", "Mixed call types where only some end in a booking"],
  ["Monthly tier", "$300 - $1,500 / mo", "Steady, forecastable booking volume"],
  ["Medical / verified intake", "$45 - $120 / booking", "Insurance verification and triage add real handling time"],
];

const buyingCriteria = [
  "Real-time two-way calendar sync, not a timed export — this is the double-booking guard",
  "A named list of calendar and practice systems, with native rather than middleware connections",
  "Full lifecycle handling: book, reschedule, cancel and refill released slots",
  "Automated SMS reminder sequence included, not sold as a separate product",
  "Written scheduling rules you control and can revise without a change order",
  "HIPAA compliance and a signed BAA if you schedule any patient appointments",
  "Timezone handling verified explicitly if you operate across more than one",
  "Reporting on bookings made, kept, cancelled and no-showed — not just calls answered",
];

const redFlags = [
  "Calendar 'integration' that syncs on a timer rather than in real time",
  "Can create appointments but cannot cancel or reschedule them",
  "Per-booking pricing with no written definition of what counts as a booking",
  "Bills for appointments that later cancel or no-show, with no adjustment",
  "No reminder sequence, or reminders billed as a costly add-on",
  "Schedules medical appointments without a signed Business Associate Agreement",
];

export default function AnsweringServiceAppointmentSchedulingContent({ faqs }: { faqs: Faq[] }) {
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
            Answering Service Appointment Scheduling (2026 Guide)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 20, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-woman-headset.jpg" alt="Answering service agent booking an appointment on a live calendar" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                There is a single feature that separates an answering service worth paying for from one that just costs money:
                whether the caller hangs up <strong>booked</strong> or merely <strong>logged</strong>. A message means the work is
                still ahead of you — someone in your office has to call back, play phone tag, and hope the person has not already
                scheduled with a competitor. <strong>Answering service appointment scheduling</strong> collapses that entire loop
                into the original call.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers how live booking actually works, the eight scheduling rules you must define before launch, why
                real-time two-way calendar sync is non-negotiable, the reminder sequence that reduces no-shows, and what per-booking
                pricing runs in 2026. See also{" "}
                <Link href="/solutions/lead-generation-appointment-setting" className="text-red font-semibold hover:underline">lead generation and appointment setting</Link>{" "}
                and the{" "}
                <Link href="/blog/top-10-appointment-setting-companies-usa" className="text-red font-semibold hover:underline">top 10 appointment setting companies</Link> ranking.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "A booking ends the sales loop; a message just moves the work to tomorrow",
                    "Real-time two-way sync is the only reliable defence against double-booking",
                    "Eight scheduling rules must be written down before launch or agents will improvise them",
                    "A three-touch SMS reminder sequence reliably cuts no-shows across every sector",
                    "Per-booking pricing runs $25-$95, and $45-$120 for verified medical intake",
                    "Insist the service can cancel and reschedule, not only create appointments",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Message vs booking */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Message-Taking vs Live Booking</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The economics of these two products are not comparable, even though they are sold under the same category name and
                at broadly similar prices.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Step</th>
                      <th className="p-4 font-semibold">Message-taking service</th>
                      <th className="p-4 font-semibold">Live booking service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Call ends", "Caller has a promise of a callback", "Caller has a confirmed appointment"],
                      ["Your work afterwards", "Return the call, negotiate a time", "None"],
                      ["Phone tag risk", "High — often two or three attempts", "Eliminated"],
                      ["Competitor window", "Open until you call back", "Closed at the moment of booking"],
                      ["Data captured", "Name and number", "Full booking with service type and duration"],
                      ["Reminder flow", "Cannot start — nothing is scheduled", "Begins immediately at booking"],
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

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-monitor.jpg" alt="Agent checking live calendar availability during an appointment scheduling call" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* Sync */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Real-Time Sync: The Detail That Decides Everything</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Almost every provider claims calendar integration. Far fewer have real-time two-way sync, and the difference only
                becomes visible after you have been double-booked in front of a customer.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-red/30 bg-red/[0.02] p-5">
                  <h3 className="font-bold text-navy">Timed sync — will eventually fail</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    The agent&apos;s view refreshes every ten or fifteen minutes. Your front desk fills the 2 PM slot at 10:04. At
                    10:06 the agent, still seeing stale data, books the same slot. Nobody notices until two customers arrive.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Real-time two-way — correct</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    The agent reads availability at the instant of the call and writes the booking immediately. A slot taken seconds
                    earlier is already invisible. Changes flow in both directions with no window of ambiguity.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Ask the question directly during evaluation: <em>is your calendar connection real-time two-way, or does it sync on
                an interval?</em> If the answer is vague, assume it is timed and price the resulting double-bookings into your
                decision.
              </p>

              {/* Scheduling rules */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Eight Rules You Must Define Before Launch</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Every rule you do not specify becomes a decision an agent makes for you, differently each time. Write all eight down
                before the first call is answered.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Rule</th>
                      <th className="p-4 font-semibold">What it controls</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedulingRules.map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{r.rule}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{r.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Travel time is the one field-service businesses most often forget. Without it, an agent books a 9 AM across town and
                a 10 AM back at the depot, and your technician spends the day apologising.
              </p>

              {/* Reminders */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Reminder Sequence That Cuts No-Shows</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most no-shows are not deliberate. People forget, or their week changes and rescheduling feels like more friction
                than simply not turning up. A reminder that makes rescheduling a single tap converts a silent no-show into a slot you
                can still refill.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Timing</th>
                      <th className="p-4 font-semibold">Channel</th>
                      <th className="p-4 font-semibold">Content</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reminderFlow.map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{r.when}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{r.channel}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{r.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                The 24-hour touch does most of the work. The 2-hour touch matters most for field appointments, where an ETA window
                keeps the customer at home and prevents a wasted truck roll.
              </p>

              {/* Medical */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Medical Scheduling Adds Four Requirements</h2>
              <div className="mt-6 space-y-4">
                {[
                  { t: "HIPAA compliance and a signed BAA", d: "Non-negotiable, and must be executed before any patient information changes hands." },
                  { t: "Insurance and eligibility verification", d: "Confirming coverage at booking prevents the far more expensive conversation at check-in." },
                  { t: "Visit-type to provider matching", d: "A new patient consultation and a follow-up are different lengths with different providers." },
                  { t: "Triage questions", d: "A short symptom script that decides whether the caller needs an urgent slot or a routine one." },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                For a deeper look at clinical intake requirements see our{" "}
                <Link href="/blog/top-10-medical-answering-service-companies-usa" className="text-red font-semibold hover:underline">medical answering service ranking</Link>{" "}
                and{" "}
                <Link href="/blog/hipaa-compliant-answering-service-doctors" className="text-red font-semibold hover:underline">HIPAA-compliant answering services for doctors</Link>.
              </p>

              {/* Pricing */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Appointment Scheduling Pricing in 2026</h2>
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
                If you buy per-booking, settle two questions in the contract: what qualifies as a booking, and whether a
                subsequently cancelled or no-showed appointment still bills. Both are ambiguous by default and both favour the
                vendor.
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
                Appointment scheduling is the feature that turns an answering service from a cost line into a revenue line. The
                caller who hangs up booked is a customer; the caller who hangs up with a promise of a callback is a lead you might
                still lose. Get real-time two-way sync, write your eight scheduling rules down before launch, insist on full
                cancel-and-reschedule capability, and run the three-touch reminder sequence from day one.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> books directly into your
                live calendar with real-time two-way sync, handles the full appointment lifecycle including cancellations and
                refills, runs the reminder sequence as standard, and operates under a signed BAA for medical scheduling.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Let Callers Hang Up Already Booked</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  US-based agents booking live into Google Calendar, Outlook, ServiceTitan, Housecall Pro, Jobber and major practice
                  systems — with real-time sync, full reschedule handling and automated reminders.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Scheduling Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Top 10 Appointment Setting Companies in USA", href: "/blog/top-10-appointment-setting-companies-usa" },
                      { title: "Top 10 Medical Answering Service Companies", href: "/blog/top-10-medical-answering-service-companies-usa" },
                      { title: "After Hours Answering Service", href: "/blog/after-hours-answering-service" },
                      { title: "Real Estate Answering Service", href: "/blog/real-estate-answering-service" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
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
