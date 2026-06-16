import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  PhoneOutgoing,
  ClipboardList,
  RefreshCw,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: PhoneOutgoing, title: "Strategic Telemarketing", desc: "B2B and B2C telemarketing campaigns built on proven scripts, targeted list segmentation, and skilled communicators who generate genuine interest — not just dial counts." },
  { icon: ClipboardList, title: "Customer Surveys & Market Research", desc: "Professional survey administration with high completion rates — from NPS and CSAT surveys to competitive intelligence, market studies, and product feedback research." },
  { icon: RefreshCw, title: "Follow-Up & Nurture Calls", desc: "Timely post-purchase, post-service, and post-event follow-ups that strengthen relationships, capture feedback, and identify upsell opportunities before they go cold." },
  { icon: Zap, title: "Win-Back & Re-Engagement", desc: "Targeted outreach to lapsed customers with personalized offers, save scripts, and incentive programs — recovering revenue at a fraction of new customer acquisition costs." },
  { icon: TrendingUp, title: "Upselling & Cross-Selling", desc: "Trained agents who identify upgrade opportunities and complementary products during every outbound interaction — increasing average customer value with every campaign." },
  { icon: BarChart3, title: "Campaign Analytics & Optimization", desc: "Real-time dashboards tracking conversion rates, contact rates, revenue per call, cost per acquisition, and campaign ROI — with continuous A/B testing and optimization." },
];

const processSteps = [
  { step: "01", title: "Campaign Strategy & List Building", desc: "We define your target audience, build segmented prospect lists, develop compliance frameworks, and design campaign goals with clear KPIs before a single call is made." },
  { step: "02", title: "Script Development & Agent Training", desc: "Our copywriters craft persuasive, compliant scripts with objection-handling branches. Agents rehearse through role-play sessions and must pass conversion benchmarks before going live." },
  { step: "03", title: "Pilot Launch & A/B Testing", desc: "We launch with a controlled pilot to test scripts, calling windows, and offer variations. Real-time data identifies the winning combination before scaling to full volume." },
  { step: "04", title: "Scale & Continuous Optimization", desc: "Full campaign rollout with weekly performance reviews, script refinements, list refreshes, and agent coaching to drive conversion rates higher month over month." },
];

const industries = [
  { name: "Financial Services", desc: "Appointment setting for financial advisors, loan origination follow-ups, account review calls, and investment product campaigns — all PCI and TCPA compliant.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare", desc: "Patient recall campaigns, wellness check outreach, open enrollment calls, appointment reminders, and HIPAA-compliant survey administration for providers.", href: "/industries/healthcare-call-center-services" },
  { name: "Technology & SaaS", desc: "Product launch campaigns, renewal outreach, upsell programs, customer success check-ins, and NPS surveys for software and technology companies.", href: "/industries/saas-technology-support" },
  { name: "Insurance", desc: "Policy renewal campaigns, cross-sell outreach for additional coverage, claims follow-ups, and open enrollment period calling for carriers and agencies.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Ecommerce & Retail", desc: "Cart abandonment follow-ups, loyalty program enrollment, seasonal promotions, customer feedback surveys, and VIP customer outreach for retail brands.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Real Estate", desc: "Lead follow-up calling, open house invitations, investor outreach, tenant satisfaction surveys, and lease renewal campaigns for property management.", href: "/industries/real-estate-call-center-services" },
];

const comparisonData = [
  { feature: "Campaign Launch Time", inHouse: "4-8 weeks", outsourced: "2-3 weeks" },
  { feature: "Cost Per Dial", inHouse: "$3-$5 per dial", outsourced: "50-60% less" },
  { feature: "TCPA Compliance", inHouse: "Your legal risk", outsourced: "Built-in compliance team" },
  { feature: "Agent Training", inHouse: "Weeks of ramp-up", outsourced: "Pre-trained specialists" },
  { feature: "Script Optimization", inHouse: "Manual A/B testing", outsourced: "Continuous AI-driven testing" },
  { feature: "Scalability", inHouse: "Limited by headcount", outsourced: "Scale on demand" },
  { feature: "Reporting & Analytics", inHouse: "Basic spreadsheets", outsourced: "Real-time dashboards" },
  { feature: "DNC Management", inHouse: "Manual list scrubbing", outsourced: "Automated, audited daily" },
];

const faqs = [
  { question: "What outbound call center services do you offer?", answer: "We provide a full suite of outbound services including B2B and B2C telemarketing, customer surveys and market research, follow-up and nurture calls, win-back campaigns, upselling and cross-selling programs, and appointment setting. Every campaign is customized to your goals with proven scripts, A/B testing, and real-time performance analytics." },
  { question: "Are your outbound campaigns TCPA compliant?", answer: "Absolutely. We maintain strict TCPA compliance including proper prior express consent management, Do Not Call (DNC) list scrubbing before every campaign, calling hour restrictions by time zone, call recording disclosures, and opt-out processing. Our dedicated compliance team audits every campaign before launch and monitors throughout execution." },
  { question: "How do you measure outbound campaign success?", answer: "We track conversion rates, contact rates, calls per hour, revenue generated, cost per acquisition, cost per lead, appointment show rates, and overall campaign ROI. You get access to real-time dashboards showing live campaign performance, and we deliver weekly optimization reports with recommendations for improving results." },
  { question: "Can you run both B2B and B2C outbound campaigns?", answer: "Yes. We execute both B2B and B2C campaigns with agents specifically trained for each environment. B2B campaigns focus on decision-maker identification, gatekeeper navigation, and consultative appointment setting. B2C campaigns emphasize product promotion, survey completion, retention offers, and customer satisfaction outreach." },
  { question: "How quickly can you launch an outbound calling campaign?", answer: "Most campaigns launch within 2-3 weeks from kickoff. This includes script development, agent training, list preparation, compliance review, system setup, and pilot testing. Urgent campaigns with simpler scope can be fast-tracked to launch in as few as 7-10 business days." },
  { question: "What is the typical ROI of outbound telemarketing?", answer: "Our clients typically see 200-400% ROI on outbound campaigns. Win-back campaigns often recover 15-25% of lapsed customers. Upsell programs increase average customer value by 10-20%. And appointment-setting campaigns generate qualified meetings at 40-60% lower cost than in-house prospecting teams." },
  { question: "How do you handle Do Not Call lists and opt-outs?", answer: "We scrub all calling lists against the National DNC Registry, state-specific DNC lists, and your internal suppression lists before every campaign. Opt-out requests are processed in real time and added to suppression lists immediately. Our compliance system is audited daily and we maintain full documentation for regulatory inquiries." },
];

export default function OutboundServicesContent({ seoContent }: { seoContent?: SEOPattern[] } = {}) {
  return (
    <>
      {/* HERO — Image bg + form */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-man-headset.jpg" alt="Outbound Call Center Services USA - Contact Center USA" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <PhoneOutgoing className="h-4 w-4" /> Outbound Call Center Services
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Revenue-Driving <span className="text-red">Outbound Campaigns</span> That Convert
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                From telemarketing and surveys to win-back campaigns and upselling, our US-based agents deliver TCPA-compliant outbound programs that generate measurable revenue and ROI.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 22% Avg Conversion Rate</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 100% TCPA Compliant</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 300%+ Campaign ROI</div>
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
              { value: 22, suffix: "%", label: "Avg Conversion Rate" },
              { value: 300, suffix: "%", label: "Campaign ROI" },
              { value: 5, suffix: "M+", label: "Outbound Calls Per Year" },
              { value: 15, suffix: "%", label: "Revenue Lift from Upsells" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ARE OUTBOUND SERVICES — Long-form content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What Are Outbound Services?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Proactive Outreach That <span className="text-red">Drives Revenue</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Outbound call center services involve <strong>proactively reaching out to prospects and customers</strong> by phone — for telemarketing, surveys, follow-ups, win-back campaigns, and upselling programs. Instead of waiting for the phone to ring, outbound services put your message in front of the right people at the right time to generate revenue, gather intelligence, and strengthen relationships.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our outbound programs are built on <strong>data-driven strategy, TCPA-compliant processes, and skilled US-based agents</strong> who represent your brand with professionalism and authenticity. Every campaign includes targeted list building, persuasive script development, continuous A/B testing, and real-time performance analytics.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Businesses that run outbound campaigns with us typically see <strong>200-400% ROI</strong>, <strong>15-25% recovery on win-back programs</strong>, and <strong>10-20% increases in customer lifetime value</strong> from upsell outreach. Pair outbound with our <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound services</Link> for a complete contact center, or add <Link href="/solutions/lead-generation-appointment-setting" className="text-red font-semibold hover:underline">lead generation</Link> to fill your sales pipeline.
              </p>

              <div className="mt-8 space-y-3">
                {["TCPA-compliant campaigns with built-in DNC management", "Proven scripts with continuous A/B optimization", "Real-time dashboards tracking conversion and ROI", "Flexible scaling from pilot programs to enterprise campaigns"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-team-work.jpg" alt="Outbound call center agents running campaigns at Contact Center USA" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">300%</div>
                <div className="text-sm text-white/80">Campaign ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — 6 cards */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Outbound <span className="text-red">Services</span> We Deliver</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From telemarketing to win-back campaigns, our outbound solutions are designed to generate revenue and measurable ROI.</p>
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

      {/* HOW IT WORKS — 4 steps */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Outbound Campaigns <span className="text-red">Work</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From strategy to scale, we manage every detail so your outbound campaigns deliver maximum ROI from day one.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Outbound Campaigns: <span className="text-red">In-House vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why results-driven businesses outsource outbound calling to Contact Center USA instead of building internal teams.</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>In-House</div><div>Contact Center USA</div>
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

      {/* INDUSTRIES THAT BENEFIT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Win with <span className="text-red">Outbound Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our outbound programs are tailored for the compliance requirements, sales cycles, and customer profiles of every major industry.</p>
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
                  <div className="mt-1 text-sm text-gray-600">Campaign Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">300%</div>
                  <div className="mt-1 text-sm text-gray-600">Average Campaign ROI</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Our win-back campaign with Contact Center USA recovered 18% of lapsed subscribers in just 90 days. Their agents are persuasive yet professional, and the TCPA compliance gives us complete peace of mind. The ROI has been outstanding — we&apos;ve already expanded to three additional campaign types.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">LN</div>
                  <div>
                    <div className="font-bold text-navy">Lisa Nguyen</div>
                    <div className="text-sm text-gray-600">Marketing Director, Streamline Subscription Services</div>
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
              { title: "Lead Generation", desc: "Focused prospecting, BANT qualification, and appointment setting to fill your sales pipeline with ready-to-close opportunities.", href: "/solutions/lead-generation-appointment-setting" },
              { title: "Inbound Services", desc: "Pair outbound campaigns with professional inbound support to handle the response traffic and inquiries your campaigns generate.", href: "/solutions/inbound-call-center-services" },
              { title: "Customer Service", desc: "Deliver exceptional post-sale support to the customers your outbound campaigns acquire — boosting retention and lifetime value.", href: "/solutions/customer-service-outsourcing" },
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
      {/* SEO CONTENT — keyword-rich patterned sections */}
      {seoContent && <SEOContentSection sections={seoContent} />}

      <PageFAQ heading="Outbound Call Center Services FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Launch a Revenue-Driving Outbound Campaign?</h2>
              <p className="mt-3 text-white/60">Get a free campaign strategy consultation and see how outbound services can grow your business.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
