"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

export default function OnshoreVsOffshoreVsNearshoreContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-4">
              COMPARISON
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Onshore vs Offshore vs Nearshore: Pros, Cons & Costs
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> April 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 13 min read
              </span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/america.jpg" alt="American flag representing onshore US-based call center services" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl leading-relaxed">
                  One of the biggest decisions in <strong>call center outsourcing</strong> is where your calls will be answered. The choice between onshore, offshore, and nearshore delivery models affects everything from cost and quality to customer satisfaction and compliance. This comprehensive comparison examines the pros, cons, and true costs of each model to help you determine the best fit for your business in 2026.
                </p>

                <p>
                  The global call center outsourcing industry has evolved significantly over the past decade. While offshore outsourcing dominated the early 2000s due to dramatic cost savings, a growing emphasis on customer experience quality has led many companies to reconsider their delivery model. Today, <strong>58% of US companies</strong> use some form of domestic call center services, up from 42% in 2020, according to ContactBabel&apos;s 2025 industry report. Understanding the nuances of each model is essential for making the right choice.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/hd-agents-row.jpg" alt="Row of call center agents representing different outsourcing delivery models" width={800} height={450} className="w-full object-cover" />
                </div>

                {/* H2: What is Onshore */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  What Is Onshore Call Center Outsourcing?
                </h2>

                <p>
                  Onshore outsourcing means partnering with a call center provider located in the same country as your business and customers. For US-based companies, this means working with <Link href="/solutions/customer-service-outsourcing" className="text-red hover:text-red-dark font-semibold">customer service centers</Link> located within the United States.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Key Characteristics of Onshore Call Centers
                </h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Native English speakers</strong> with natural American accents and cultural understanding</li>
                  <li><strong>Same time zones</strong> as your customers, enabling real-time collaboration between your team and the call center</li>
                  <li><strong>Full regulatory compliance</strong> with US data protection, labor, and industry-specific laws</li>
                  <li><strong>Easier oversight</strong> through site visits, in-person meetings, and shared business practices</li>
                  <li><strong>Higher cost</strong> compared to offshore and nearshore alternatives, with agents typically earning $15-22 per hour</li>
                </ul>

                <p>
                  Onshore call centers are particularly well-suited for industries with strict regulatory requirements, such as <Link href="/industries/healthcare-call-center-services" className="text-red hover:text-red-dark font-semibold">healthcare</Link>, <Link href="/industries/financial-services-call-center" className="text-red hover:text-red-dark font-semibold">financial services</Link>, and <Link href="/industries/insurance-call-center-outsourcing" className="text-red hover:text-red-dark font-semibold">insurance</Link>. They are also the preferred choice for brands that prioritize customer experience as a competitive differentiator.
                </p>

                {/* H2: What is Offshore */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  What Is Offshore Call Center Outsourcing?
                </h2>

                <p>
                  Offshore outsourcing involves partnering with a call center provider in a distant country, typically chosen for lower labor costs. Popular offshore destinations for US companies include the Philippines, India, Pakistan, Bangladesh, and Eastern European countries like Romania and Poland.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Key Characteristics of Offshore Call Centers
                </h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Lowest cost option</strong> with agent wages of $3-8 per hour, resulting in significant savings</li>
                  <li><strong>Large talent pools</strong> with millions of English-speaking workers in countries like the Philippines and India</li>
                  <li><strong>24/7 coverage capability</strong> due to opposite time zones, which can be an advantage for round-the-clock service</li>
                  <li><strong>Potential language and accent challenges</strong> that may impact customer satisfaction</li>
                  <li><strong>Cultural gaps</strong> in understanding US consumer expectations, idioms, and communication styles</li>
                  <li><strong>Data security concerns</strong> due to varying international privacy laws and enforcement</li>
                </ul>

                <p>
                  The Philippines remains the most popular offshore destination, with over <strong>1.3 million call center employees</strong> serving US companies. The country&apos;s strong English proficiency, American cultural influence, and government support for the BPO industry make it a reliable option for cost-sensitive programs. However, the 12-13 hour time difference from the US East Coast creates management challenges that should not be underestimated.
                </p>

                {/* H2: What is Nearshore */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  What Is Nearshore Call Center Outsourcing?
                </h2>

                <p>
                  Nearshore outsourcing splits the difference by partnering with providers in nearby countries that share similar time zones and cultural traits with the US. For American companies, nearshore typically means Latin America and the Caribbean.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Popular Nearshore Destinations
                </h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Mexico:</strong> Largest nearshore market with strong bilingual capabilities and cultural proximity. Agent costs range from $10-16 per hour.</li>
                  <li><strong>Colombia:</strong> Rapidly growing BPO hub with neutral Spanish accents and increasing English proficiency. Costs average $9-14 per hour.</li>
                  <li><strong>Costa Rica:</strong> High education levels and political stability make it a premium nearshore destination at $11-17 per hour.</li>
                  <li><strong>Jamaica and Trinidad:</strong> English-speaking Caribbean nations with cultural familiarity and US-aligned time zones at $8-13 per hour.</li>
                  <li><strong>Honduras and Guatemala:</strong> Emerging markets offering competitive rates of $7-11 per hour with growing talent pools.</li>
                </ul>

                <p>
                  Nearshore outsourcing has grown by <strong>35% since 2022</strong>, driven by companies seeking a balance between cost efficiency and service quality. The proximity advantage extends beyond time zones. Many nearshore agents have spent time in the US, understand American culture, and can provide <Link href="/solutions/multilingual-call-center-services" className="text-red hover:text-red-dark font-semibold">bilingual English-Spanish support</Link> that is increasingly valuable given the US Hispanic demographic.
                </p>

                {/* H2: Pros and Cons */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  Pros and Cons of Each Model
                </h2>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Onshore Pros
                </h3>
                <ul className="space-y-2 my-6">
                  <li><strong>Superior customer satisfaction:</strong> Studies show onshore centers achieve 15-20% higher CSAT scores than offshore alternatives</li>
                  <li><strong>Regulatory compliance:</strong> Full adherence to US data privacy, HIPAA, PCI-DSS, and industry-specific regulations</li>
                  <li><strong>Brand protection:</strong> Native speakers who naturally align with your brand voice and cultural context</li>
                  <li><strong>Easy collaboration:</strong> Same time zone, same business culture, feasible site visits</li>
                  <li><strong>Higher first-call resolution:</strong> Cultural understanding and native fluency lead to faster, more effective problem solving</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Onshore Cons
                </h3>
                <ul className="space-y-2 my-6">
                  <li><strong>Higher cost:</strong> 2-3x more expensive than offshore options</li>
                  <li><strong>Tighter labor market:</strong> US call center agent recruitment is challenging with unemployment at historic lows</li>
                  <li><strong>Higher agent turnover:</strong> The US call center industry has an average annual turnover rate of 30-45%</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Offshore Pros
                </h3>
                <ul className="space-y-2 my-6">
                  <li><strong>Significant cost savings:</strong> 40-70% lower than onshore alternatives</li>
                  <li><strong>Abundant labor supply:</strong> Easier to scale rapidly with large, available talent pools</li>
                  <li><strong>24/7 capability:</strong> Time zone differences naturally support round-the-clock coverage</li>
                  <li><strong>Mature industry:</strong> Countries like the Philippines have decades of BPO experience and infrastructure</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Offshore Cons
                </h3>
                <ul className="space-y-2 my-6">
                  <li><strong>Customer satisfaction risk:</strong> Accent and cultural barriers can frustrate callers and damage brand perception</li>
                  <li><strong>Management complexity:</strong> 8-13 hour time differences make real-time oversight difficult</li>
                  <li><strong>Data security risks:</strong> International data transfer and varying privacy law enforcement</li>
                  <li><strong>Quality consistency:</strong> Higher variance in agent performance and training quality</li>
                  <li><strong>Geopolitical risk:</strong> Political instability, natural disasters, or infrastructure failures in distant countries</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Nearshore Pros
                </h3>
                <ul className="space-y-2 my-6">
                  <li><strong>Cost efficiency:</strong> 30-50% savings compared to onshore, while maintaining quality</li>
                  <li><strong>Time zone alignment:</strong> Same or similar time zones enable real-time collaboration</li>
                  <li><strong>Cultural proximity:</strong> Familiarity with US culture, consumer expectations, and business practices</li>
                  <li><strong>Bilingual capabilities:</strong> Natural Spanish-English bilingual talent for serving diverse US markets</li>
                  <li><strong>Travel accessibility:</strong> Short flights for site visits and in-person relationship building</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Nearshore Cons
                </h3>
                <ul className="space-y-2 my-6">
                  <li><strong>Smaller talent pools:</strong> Less availability of highly skilled English-speaking agents compared to offshore markets</li>
                  <li><strong>Accent variability:</strong> While generally neutral, some agents may have noticeable accents</li>
                  <li><strong>Less mature industry:</strong> Some nearshore markets lack the infrastructure depth of established offshore hubs</li>
                  <li><strong>Not as cheap as offshore:</strong> For purely cost-driven decisions, nearshore may not deliver sufficient savings</li>
                </ul>

                {/* H2: Cost Comparison */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  Detailed Cost Comparison
                </h2>

                <p>
                  Understanding the true cost differential requires looking beyond hourly rates. Here is a comprehensive cost comparison for a 15-agent program handling 50,000 calls per month:
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Monthly Cost Breakdown
                </h3>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-navy">
                        <th className="py-3 px-4 text-navy font-bold">Cost Category</th>
                        <th className="py-3 px-4 text-navy font-bold">Onshore (US)</th>
                        <th className="py-3 px-4 text-navy font-bold">Nearshore</th>
                        <th className="py-3 px-4 text-navy font-bold">Offshore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold">Agent costs (15 FTEs)</td>
                        <td className="py-3 px-4">$48,000</td>
                        <td className="py-3 px-4">$28,500</td>
                        <td className="py-3 px-4">$18,000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold">Management overhead</td>
                        <td className="py-3 px-4">$6,000</td>
                        <td className="py-3 px-4">$4,500</td>
                        <td className="py-3 px-4">$3,500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold">Technology</td>
                        <td className="py-3 px-4">$3,000</td>
                        <td className="py-3 px-4">$3,000</td>
                        <td className="py-3 px-4">$3,000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold">QA & training</td>
                        <td className="py-3 px-4">$2,500</td>
                        <td className="py-3 px-4">$2,000</td>
                        <td className="py-3 px-4">$2,500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold">Travel & oversight</td>
                        <td className="py-3 px-4">$500</td>
                        <td className="py-3 px-4">$1,500</td>
                        <td className="py-3 px-4">$3,000</td>
                      </tr>
                      <tr className="bg-gray-50 font-bold">
                        <td className="py-3 px-4">Total Monthly</td>
                        <td className="py-3 px-4">$60,000</td>
                        <td className="py-3 px-4">$39,500</td>
                        <td className="py-3 px-4">$30,000</td>
                      </tr>
                      <tr className="font-bold text-navy">
                        <td className="py-3 px-4">Cost per call</td>
                        <td className="py-3 px-4">$1.20</td>
                        <td className="py-3 px-4">$0.79</td>
                        <td className="py-3 px-4">$0.60</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Note that the cost gap between models narrows when you factor in management overhead, travel, and quality costs. The effective savings of offshore over onshore drops from 60% on agent costs alone to about <strong>50% on total program costs</strong>. Additionally, if offshore quality issues lead to higher call volumes, repeat calls, or customer churn, the true cost advantage shrinks further.
                </p>

                {/* H2: Quality Comparison */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  Quality and Customer Satisfaction Comparison
                </h2>

                <p>
                  While cost is important, quality should be the primary consideration for any business where customer experience drives revenue and retention. Here is how the three models typically compare on key quality metrics:
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Customer Satisfaction (CSAT) Scores
                </h3>
                <p>
                  Industry benchmarks show a clear quality gradient across delivery models. US-based onshore centers average <strong>CSAT scores of 85-92%</strong>, nearshore centers average 78-87%, and offshore centers average 72-82%. The 10-15 point gap between onshore and offshore may seem modest, but it represents a meaningful difference in customer perception and loyalty. According to Bain & Company research, a 5-point improvement in CSAT correlates with a <strong>25-40% increase in customer lifetime value</strong>.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  First-Call Resolution (FCR)
                </h3>
                <p>
                  Language fluency and cultural understanding directly impact an agent&apos;s ability to resolve issues on the first call. Onshore centers achieve average FCR rates of <strong>78-85%</strong>, nearshore centers 72-80%, and offshore centers 65-75%. Each percentage point decrease in FCR means more repeat calls, higher costs, and more frustrated customers. Providers focused on <Link href="/services/customer-experience-analytics" className="text-red hover:text-red-dark font-semibold">CX analytics</Link> can help you track and optimize these metrics regardless of delivery model.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Net Promoter Score (NPS) Impact
                </h3>
                <p>
                  NPS, which measures customer willingness to recommend your brand, is particularly sensitive to call center quality. Companies using onshore call centers report NPS scores <strong>12-18 points higher</strong> than those using offshore providers for the same customer base. This difference in advocacy directly affects organic growth and customer acquisition costs.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/diverse-team.jpg" alt="Diverse team of call center professionals working together" width={800} height={450} className="w-full object-cover" />
                </div>

                {/* H2: When to Choose Each */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  When to Choose Each Model
                </h2>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Choose Onshore When...
                </h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Customer experience is your competitive advantage</strong> and even small CSAT differences impact revenue</li>
                  <li><strong>Regulatory compliance is critical</strong> (healthcare, financial services, government)</li>
                  <li><strong>Complex interactions require deep cultural understanding</strong> (sales, technical support, complaint resolution)</li>
                  <li><strong>Brand voice and consistency are paramount</strong> to your customer relationship strategy</li>
                  <li><strong>Your customers expect US-based support</strong> and react negatively to offshore interactions</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Choose Nearshore When...
                </h3>
                <ul className="space-y-3 my-6">
                  <li><strong>You need bilingual English-Spanish support</strong> for a diverse customer base</li>
                  <li><strong>You want meaningful cost savings without sacrificing too much quality</strong></li>
                  <li><strong>Time zone alignment is important</strong> for real-time management and collaboration</li>
                  <li><strong>You plan to visit your partner regularly</strong> and want short, affordable travel</li>
                  <li><strong>You are scaling rapidly</strong> and need access to growing talent pools</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Choose Offshore When...
                </h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Cost is the primary driver</strong> and you need maximum savings</li>
                  <li><strong>Your interactions are simple and transactional</strong> (order status, basic inquiries, data entry)</li>
                  <li><strong>You need true 24/7 coverage</strong> and can leverage opposite time zones</li>
                  <li><strong>You have robust QA processes</strong> to manage quality from a distance</li>
                  <li><strong>Your customer base is international</strong> and not exclusively US-focused</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Consider a Hybrid Approach
                </h3>
                <p>
                  Many sophisticated businesses use a blended delivery model. For example, <Link href="/solutions/inbound-call-center-services" className="text-red hover:text-red-dark font-semibold">inbound customer service</Link> calls are handled onshore for maximum quality, while <Link href="/solutions/back-office-outsourcing" className="text-red hover:text-red-dark font-semibold">back-office processing</Link> is handled offshore for cost efficiency. After-hours overflow goes to a nearshore center in a compatible time zone. This approach captures the best of each model while managing costs effectively. <Link href="/services/omnichannel-contact-center-solutions" className="text-red hover:text-red-dark font-semibold">Omnichannel solutions</Link> make hybrid models more feasible by routing interactions to the most appropriate center based on type, complexity, and time of day.
                </p>

                {/* FAQ Section */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Is onshore call center outsourcing worth the extra cost?
                </h3>
                <p>
                  For most businesses where customer experience directly impacts revenue, yes. The higher CSAT scores, better first-call resolution, and stronger brand alignment typically deliver an ROI that more than justifies the cost premium. Industries like healthcare, financial services, and premium consumer brands almost universally benefit from onshore delivery. For simple, high-volume, low-complexity interactions, the cost premium may be harder to justify.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  How do I transition from offshore to onshore or nearshore?
                </h3>
                <p>
                  Transition planning typically takes 3-6 months and should include: a parallel running period where both centers operate simultaneously, phased migration of call types (starting with the most complex), comprehensive knowledge transfer documentation, and agent training on your specific products and processes. Most businesses experience a temporary dip in metrics during transition before seeing improvements within 60-90 days.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  What is the best country for nearshore call center outsourcing?
                </h3>
                <p>
                  It depends on your priorities. Mexico offers the largest talent pool and closest cultural proximity. Colombia provides excellent value with neutral accents. Costa Rica is ideal for premium programs with its highly educated workforce. Jamaica offers native English speakers at competitive rates. The best choice depends on your language requirements, budget, and the complexity of your program.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Can I use multiple delivery models simultaneously?
                </h3>
                <p>
                  Yes, and this hybrid approach is increasingly common. Many companies route high-value or complex calls to onshore agents while handling routine inquiries through nearshore or offshore teams. Modern <Link href="/services/contact-center-software-solutions" className="text-red hover:text-red-dark font-semibold">contact center software</Link> enables intelligent routing based on call type, customer value, time of day, and agent skills, making multi-model delivery seamless.
                </p>

                {/* CTA */}
                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">
                    Find the Right Delivery Model for Your Business
                  </h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Our experts will analyze your requirements and recommend the optimal onshore, nearshore, or hybrid solution.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors"
                  >
                    Get a Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div className="rounded-2xl bg-navy p-6">
                  <HeroContactForm />
                </div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/call-center-outsourcing-cost" className="text-sm text-gray-600 hover:text-red transition-colors">
                        Call Center Outsourcing Cost: Complete 2026 Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/benefits-us-based-call-center" className="text-sm text-gray-600 hover:text-red transition-colors">
                        Benefits of US-Based Call Center Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/how-to-choose-call-center-partner" className="text-sm text-gray-600 hover:text-red transition-colors">
                        How to Choose the Right Call Center Outsourcing Partner
                      </Link>
                    </li>
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
