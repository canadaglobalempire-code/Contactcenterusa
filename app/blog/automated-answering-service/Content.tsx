import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const kinds = [
  { t: "Auto-attendant", d: "A menu that routes by keypress. No understanding, no lookup — it only forwards. Often already bundled in your phone system.", cost: "$20 - $80 / mo" },
  { t: "IVR", d: "Menu plus data lookup, so it can read back an order status, a balance or an appointment time from a connected system.", cost: "$50 - $150 / mo" },
  { t: "Conversational voice AI", d: "Understands natural speech, asks follow-up questions, and can complete tasks such as booking a simple appointment.", cost: "$0.08 - $0.35 / min" },
  { t: "Live US agent", d: "A trained person who can handle anything, including the calls where judgment and reassurance decide the outcome.", cost: "$0.85 - $1.65 / min" },
];

const automate = [
  "Order status and delivery tracking",
  "Account balance and payment collection",
  "Opening hours, address and directions",
  "Appointment reminders and confirmations",
  "Prescription refill requests",
  "Simple department routing",
  "After-hours information requests",
  "Overflow triage when every agent is busy",
];

const never = [
  "Emergencies — burst pipes, no heat, medical symptoms, safety issues",
  "Upset or distressed callers",
  "New patient or new client intake",
  "High-value sales enquiries and estimates",
  "Anything requiring judgment against your rules",
  "First contact after an accident or incident",
];

export default function AutomatedAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">BUYER&apos;S GUIDE</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Automated Answering Service: When AI Works
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 12 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-monitor.jpg" alt="Automated call handling routing to a live US-based agent" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                An <strong>automated answering service</strong> costs a fraction of live agents and, for a large share of calls, does
                the job better — no hold time, no bad day, identical answers at 3 AM and 3 PM. It also has a failure mode that is
                expensive and largely invisible: the calls it drives away never appear in any report.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide is about drawing the line in the right place. Which call types genuinely belong to automation, which
                must reach a person, what each option costs, and the two metrics that tell you whether your system is helping or
                quietly leaking revenue. See also{" "}
                <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI call center automation</Link>{" "}
                and{" "}
                <Link href="/blog/ai-call-center-vs-human-agents" className="text-red font-semibold hover:underline">AI call centers vs human agents</Link>.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Four different products are sold under one name, at wildly different prices",
                    "Automation wins on high-volume, low-variation, information-retrieval calls",
                    "It loses the job on emergencies, upset callers and high-value enquiries",
                    "The right setup for most businesses is hybrid, with a fast path to a human",
                    "Track abandonment inside the flow, not just answer rate",
                    "Consent disclosures and HIPAA apply to automated systems exactly as they do to people",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Four Products, One Name</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Option</th>
                      <th className="p-4 font-semibold">What it can do</th>
                      <th className="p-4 font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kinds.map((k, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{k.t}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{k.d}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{k.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Vendors use these terms loosely, and the gap between an auto-attendant and conversational AI is roughly the gap
                between a signpost and a receptionist. Establish which one you are being quoted before comparing prices.
              </p>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-desk.jpg" alt="Live agent picking up a call escalated from an automated system" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Where to Draw the Line</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Automate these</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {automate.map((x, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-red/30 bg-red/[0.02] p-5">
                  <h3 className="font-bold text-navy">Never automate these</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {never.map((x, i) => (
                      <li key={i} className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                The test is not complexity but stakes. A caller with a factual question will happily use a menu. A caller with a
                problem, a deadline or money at risk wants a person, and will find one somewhere else if you do not provide one.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Metric That Hides the Damage</h2>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">100% answered, 40% lost</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      An automated system answers every call, so answer rate reads 100% and the dashboard looks excellent. Meanwhile
                      a large share of callers hang up partway through the menu. Those are not answered calls — they are abandoned
                      ones, recorded as successes.
                    </p>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Track two things instead: abandonment <em>inside</em> the automated flow, and containment measured against
                      outcome. A call the system &ldquo;handled&rdquo; that produced a complaint or a callback the next morning was
                      not handled. If either number looks poor, move call types back to live agents until it does not.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Hybrid Most Businesses Should Buy</h2>
              <div className="mt-6 space-y-4">
                {[
                  { t: "1. Greet and identify", d: "The system answers immediately and establishes what the caller needs, in your company name and with the recorded-line disclosure where your state requires one." },
                  { t: "2. Resolve the routine", d: "Order status, hours, balances, reminders and confirmations complete without a person. This is the volume that justifies the system." },
                  { t: "3. Escalate on any signal", d: "Emergency keywords, distress, a new-client enquiry, or simply the caller asking for a person — all route to a live agent immediately, not after another menu." },
                  { t: "4. Hand over with context", d: "The agent receives what the system already collected. Making the caller repeat everything is the moment goodwill is lost." },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                One design rule matters more than the rest: the route to a human must be obvious and fast. Hiding it to protect
                containment rates is the most common way businesses turn a cost saving into a revenue loss.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Compliance Does Not Change</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Automation changes who is speaking, not what the rules require. In all-party consent states such as California,
                Illinois, Florida and Nevada, the recorded-line disclosure must come before recording starts rather than after the
                menu. Any system touching protected health information needs the same HIPAA handling and a signed Business
                Associate Agreement, exactly as a live provider would. And if the system places outbound calls or texts, the TCPA
                applies in full.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Automation is genuinely better than a person for a meaningful share of calls, and genuinely worse for the ones that
                decide your revenue. Buy it for the routine volume, keep a fast and obvious path to a live agent for everything
                else, and measure abandonment inside the flow rather than admiring a 100% answer rate.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> builds the hybrid rather
                than selling one side of it — automation on the routine calls, US-based agents on everything that matters, and
                reporting that shows what the system actually contained rather than what it answered.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Automate the Routine, Keep the Revenue Calls Human</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Tell us your call mix and we will show you which types are safe to automate and which are costing you money when
                  a machine answers them.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Call-Mix Review <ArrowRight className="h-4 w-4" />
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
                      { title: "AI Call Centers vs Human Agents", href: "/blog/ai-call-center-vs-human-agents" },
                      { title: "Top 10 AI Call Center Companies", href: "/blog/top-10-ai-call-center-companies-usa" },
                      { title: "Virtual Receptionist Pricing", href: "/blog/virtual-receptionist-pricing" },
                      { title: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "Top 10 Telemarketing Companies", href: "/blog/top-10-telemarketing-companies-usa" },
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
