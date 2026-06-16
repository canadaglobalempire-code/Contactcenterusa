import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Target,
  PhoneOutgoing,
  Users,
  CalendarCheck,
  TrendingUp,
  BarChart3,
  Star,
  Phone,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Target, title: "Lead Generation", desc: "Multi-channel prospecting strategies that identify and qualify high-intent leads using data-driven targeting, building a robust pipeline for your sales team to close faster and more consistently." },
  { icon: PhoneOutgoing, title: "Outbound Campaigns", desc: "Targeted outbound calling programs with professionally scripted messaging, A/B tested approaches, and real-time optimization to maximize conversion rates and deliver measurable ROI from week one." },
  { icon: Users, title: "B2B & B2C Marketing", desc: "Tailored acquisition approaches for both business and consumer markets with industry-specific strategies, buyer persona development, and account-based outreach that resonates with your target audience." },
  { icon: CalendarCheck, title: "Appointment Setting", desc: "Professional appointment schedulers who pre-qualify prospects against your ideal customer profile and book meetings directly into your sales team's calendars — warm leads, ready to close." },
  { icon: TrendingUp, title: "Full-Cycle Sales Support", desc: "End-to-end sales assistance from initial outreach to deal close, including proposal follow-ups, objection handling, contract coordination, and win-back campaigns for lost opportunities." },
  { icon: BarChart3, title: "Campaign Analytics", desc: "Detailed performance reporting with conversion tracking, cost-per-acquisition metrics, funnel analysis, and actionable insights that continuously improve targeting, messaging, and results." },
];

const processSteps = [
  { step: "01", title: "Strategy & ICP Development", desc: "We analyze your market, define your ideal customer profile (ICP), research competitors, and build a data-driven acquisition strategy with clear KPIs and conversion targets." },
  { step: "02", title: "Script & Campaign Design", desc: "Our team creates persuasive scripts, email sequences, and multi-touch cadences tailored to your audience. Every message is A/B tested and refined for maximum engagement and conversion." },
  { step: "03", title: "Launch & Execution", desc: "US-based agents execute campaigns across phone, email, and digital channels. Real-time dashboards track every interaction, conversion, and cost metric from the first dial to the final close." },
  { step: "04", title: "Optimize & Scale", desc: "Weekly performance reviews identify winning tactics. We double down on what works, adjust underperforming segments, and scale successful campaigns to maximize your customer acquisition ROI." },
];

const industries = [
  { name: "Technology & SaaS", desc: "B2B lead generation for software companies — from SDR outreach and demo booking to trial-to-paid conversion campaigns that accelerate your sales pipeline.", href: "/industries/saas-technology-support" },
  { name: "Financial Services", desc: "Compliant outbound campaigns for banks, lenders, and insurance companies targeting high-value prospects with personalized financial product offers.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare", desc: "Patient acquisition, enrollment campaigns, and provider network outreach with HIPAA-compliant processes and healthcare-specific scripting.", href: "/industries/healthcare-call-center-services" },
  { name: "Ecommerce & Retail", desc: "Customer win-back campaigns, subscription acquisition, loyalty program enrollment, and seasonal promotional outreach that drives revenue growth.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Real Estate", desc: "Buyer and seller lead qualification, open house promotion, investor outreach, and showing scheduling that keeps your pipeline full year-round.", href: "/industries/real-estate-call-center-services" },
  { name: "Professional Services", desc: "Appointment setting and lead qualification for law firms, consulting agencies, and accounting firms targeting high-value business clients.", href: "/industries" },
];

const comparisonData = [
  { feature: "Ramp-Up Time", inHouse: "3-6 months", outsourced: "2-3 weeks" },
  { feature: "Cost Per Lead", inHouse: "High (salary + tools)", outsourced: "40% lower" },
  { feature: "Agent Training", inHouse: "Self-managed", outsourced: "Done for you" },
  { feature: "Campaign Optimization", inHouse: "Manual, ad hoc", outsourced: "Weekly, data-driven" },
  { feature: "Scalability", inHouse: "Limited by hiring", outsourced: "Scale up/down instantly" },
  { feature: "Multi-Channel Outreach", inHouse: "Usually phone only", outsourced: "Phone, email, social, SMS" },
  { feature: "Performance Reporting", inHouse: "Basic CRM reports", outsourced: "Real-time analytics dashboard" },
  { feature: "Risk", inHouse: "Fixed headcount cost", outsourced: "Pay for performance" },
];

const faqs = [
  { question: "How much does outsourced customer acquisition cost?", answer: "Outsourced customer acquisition costs vary based on campaign complexity, target market, and volume. Most programs use a per-lead, per-appointment, or monthly retainer model. Contact Center USA offers transparent pricing with clear cost-per-acquisition metrics so you can measure ROI from day one. Most clients see 40% lower cost-per-lead compared to in-house teams." },
  { question: "What is the difference between B2B and B2C customer acquisition?", answer: "B2B acquisition focuses on reaching decision-makers within organizations through targeted outreach, account-based marketing, and appointment setting with longer sales cycles. B2C acquisition targets individual consumers through higher-volume campaigns, promotional offers, and multi-channel engagement with faster conversion timelines. Our team tailors strategies to each model based on your business." },
  { question: "How do you measure ROI on customer acquisition campaigns?", answer: "We track cost per lead, cost per acquisition, conversion rates at every funnel stage, appointment show rates, close rates, and lifetime customer value. Real-time dashboards provide full visibility into campaign performance, and we continuously optimize targeting and messaging to maximize your return. Most clients see 3x ROI within 90 days." },
  { question: "How quickly can a customer acquisition campaign be launched?", answer: "Most campaigns are launched within 2-3 weeks from kickoff. This includes strategy development, ICP definition, script creation, agent training, CRM integration, and system setup. Complex multi-channel campaigns with custom integrations may take 4-6 weeks to ensure every element is optimized before launch." },
  { question: "Do your agents represent my brand on calls?", answer: "Absolutely. Our US-based agents are trained extensively on your brand, products, value propositions, and competitive differentiators. They represent your company as a seamless extension of your team — using your brand name, following your messaging guidelines, and adhering to your compliance requirements. Prospects never know they are speaking with an outsourced partner." },
  { question: "What industries do you specialize in for lead generation?", answer: "Contact Center USA has managed 200+ acquisition campaigns across technology/SaaS, financial services, healthcare, real estate, ecommerce, insurance, and professional services. Our agents are trained on industry-specific terminology, compliance requirements, and buyer personas to ensure authentic, effective outreach that converts." },
  { question: "Can you integrate with my existing CRM and sales tools?", answer: "Yes. We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, and Microsoft Dynamics. Leads, appointments, and call recordings are synced directly into your CRM in real time. We also integrate with calendar tools, email platforms, and marketing automation systems to ensure seamless handoff to your sales team." },
];

export function CustomerAcquisitionContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-discussion.jpg" alt="Customer Acquisition Outsourcing - Lead Generation Call Center by Contact Center USA" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Target className="h-4 w-4" /> Customer Acquisition
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Customer Acquisition <span className="text-red">Outsourcing</span> That Drives Real Growth
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Turn prospects into loyal customers with targeted outbound campaigns, expert lead generation, and full-cycle sales support — all delivered by US-based professionals who represent your brand.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 35% More Qualified Leads</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 3x Average ROI</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> US-Based Agents</div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: 35, suffix: "%", label: "More Qualified Leads" },
              { value: 200, suffix: "+", label: "Campaigns Managed" },
              { value: 28, suffix: "%", label: "Conversion Rate" },
              { value: 3, suffix: "x", label: "Average ROI" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CUSTOMER ACQUISITION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is Customer Acquisition Outsourcing?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                How Outsourced <span className="text-red">Lead Generation</span> Accelerates Your Revenue
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Customer acquisition outsourcing means partnering with a <strong>specialized call center team</strong> to handle your outbound prospecting, lead qualification, appointment setting, and sales support — allowing your internal sales team to focus on closing deals instead of chasing cold leads.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our US-based agents function as a <strong>seamless extension of your sales organization</strong>. We invest in understanding your ideal customer profile, competitive landscape, and value proposition so deeply that prospects never know they are speaking with an outsourced partner. Every interaction is tracked, measured, and optimized for maximum conversion.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The results speak for themselves: clients using our lead generation call center services see <strong>35% more qualified leads</strong>, <strong>28% average conversion rates</strong>, and <strong>3x ROI within 90 days</strong>. Combine acquisition with our <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">CX analytics platform</Link> and <Link href="/services/digital-customer-experience-services" className="text-red font-semibold hover:underline">digital CX services</Link> for a complete growth engine.
              </p>

              <div className="mt-8 space-y-3">
                {["Qualified leads delivered to your CRM daily", "US-based agents trained on your brand and products", "Multi-channel outreach: phone, email, social, SMS", "Real-time campaign dashboards with full transparency"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-agent-pro.jpg" alt="Customer acquisition team at Contact Center USA" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">3x</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Acquisition Services</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Customer Acquisition <span className="text-red">Solutions</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From initial prospecting to deal close, our full-cycle acquisition services are designed to fill your pipeline and accelerate revenue growth.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red transition-all group-hover:bg-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Customer Acquisition <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From strategy to scale, we manage every step of your acquisition campaign so you can focus on closing.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red text-xl font-bold text-white shadow-lg">{step.step}</div>
                <h3 className="mt-6 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Cost Comparison</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Lead Generation: <span className="text-red">In-House vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why growing businesses choose Contact Center USA for customer acquisition over building internal SDR teams.</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>In-House SDR Team</div><div>Contact Center USA</div>
            </div>
            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 text-center text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="font-medium text-navy">{row.feature}</div>
                <div className="text-gray-600">{row.inHouse}</div>
                <div className="flex items-center justify-center gap-1 font-semibold text-red"><CheckCircle className="h-4 w-4" />{row.outsourced}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Grow with Our <span className="text-red">Acquisition Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our customer acquisition strategies are tailored to the unique buying cycles, compliance needs, and market dynamics of every industry.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <div key={i}>
                <Link href={ind.href} className="group block rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{ind.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Client Success</span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">What Our Clients <span className="text-red">Say</span></h2>
              <div className="mt-10 flex items-center gap-10">
                <div>
                  <div className="text-4xl font-bold text-navy">4.8/5</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">35%</div>
                  <div className="mt-1 text-sm text-gray-600">More Qualified Leads</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Contact Center USA completely revamped our outbound strategy. Within 90 days, our qualified lead volume increased by 35% and our cost per acquisition dropped significantly. Their agents understand our industry and represent our brand like it&apos;s their own. This partnership has been the single biggest driver of our revenue growth this year.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">MJ</div>
                  <div>
                    <div className="font-bold text-navy">Marcus Johnson</div>
                    <div className="text-sm text-gray-600">VP of Sales, A Fast-Growing Tech Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Related <span className="text-red">Services</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Digital and CX Services", desc: "Extend your acquisition strategy across digital channels including social media, email, live chat, and mobile for multi-touch outreach.", href: "/services/digital-customer-experience-services" },
              { title: "CX Analytics", desc: "Use analytics to optimize acquisition campaigns, improve lead quality, track conversion funnels, and maximize your ROI.", href: "/services/customer-experience-analytics" },
              { title: "A.I. Automation", desc: "Automate lead qualification and follow-up sequences with AI-powered chatbots and intelligent workflow automation.", href: "/services/ai-call-center-automation" },
            ].map((item, i) => (
              <div key={i}>
                <Link href={item.href} className="group block rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ heading="Customer Acquisition FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Accelerate Your Customer Acquisition?</h2>
              <p className="mt-3 text-white/60">Let our US-based team build a custom acquisition strategy that delivers 35% more qualified leads and 3x ROI.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
