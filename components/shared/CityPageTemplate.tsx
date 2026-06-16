"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  MapPin,
  Building2,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Headphones,
  ArrowRight,
  Phone,
  PhoneIncoming,
  Bot,
  BarChart3,
  Globe,
  MessageSquare,
  FileText,
  Star,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

interface CityPageTemplateProps {
  city: string;
  state: string;
  stateAbbr: string;
  description: string;
  businessLandscape: string;
  industries: string[];
  population: string;
  businesses: string;
  seoContent?: SEOPattern[];
}

const services = [
  { icon: PhoneIncoming, title: "Inbound Call Center", desc: "24/7 customer support and help desk", href: "/solutions/inbound-call-center-services" },
  { icon: Phone, title: "Outbound Services", desc: "Sales, lead gen, and follow-ups", href: "/solutions/outbound-call-center-services" },
  { icon: Bot, title: "AI Automation", desc: "Chatbots and smart routing", href: "/services/ai-call-center-automation" },
  { icon: Globe, title: "Omnichannel", desc: "Phone, chat, email, social", href: "/services/omnichannel-contact-center-solutions" },
  { icon: BarChart3, title: "CX Analytics", desc: "Real-time insights and KPIs", href: "/services/customer-experience-analytics" },
  { icon: MessageSquare, title: "Technical Support", desc: "Tier 1-3 help desk", href: "/solutions/technical-support-outsourcing" },
  { icon: Shield, title: "Fraud Prevention", desc: "Compliance and security", href: "/services/fraud-prevention-cyber-security" },
  { icon: FileText, title: "Back Office", desc: "Data entry and processing", href: "/solutions/back-office-outsourcing" },
];

const industryLinks: Record<string, string> = {
  finance: "/industries/financial-services-call-center",
  banking: "/industries/banking-financial-services-call-center",
  tech: "/industries/saas-technology-support",
  healthcare: "/industries/healthcare-call-center-services",
  insurance: "/industries/insurance-call-center-outsourcing",
  ecommerce: "/industries/ecommerce-customer-service-outsourcing",
  "real estate": "/industries/real-estate-call-center-services",
  education: "/industries/education-call-center-services",
  logistics: "/industries/logistics-shipping-call-center",
  travel: "/industries/travel-hospitality-call-center",
  tourism: "/industries/travel-hospitality-call-center",
  SaaS: "/industries/saas-technology-support",
  biotech: "/industries/healthcare-call-center-services",
  pharma: "/industries/healthcare-call-center-services",
  energy: "/industries/saas-technology-support",
  manufacturing: "/industries/logistics-shipping-call-center",
  telecom: "/industries/saas-technology-support",
  media: "/industries/saas-technology-support",
  entertainment: "/industries/saas-technology-support",
  retail: "/industries/ecommerce-customer-service-outsourcing",
  aerospace: "/industries/saas-technology-support",
  defense: "/industries/saas-technology-support",
  military: "/industries/saas-technology-support",
  government: "/industries/saas-technology-support",
};

const testimonials: Record<string, { quote: string; name: string; title: string; company: string; initials: string }> = {
  "New York": { quote: "Contact Center USA transformed our customer support operations. Their agents understand the fast pace of doing business in New York and deliver exceptional service around the clock.", name: "Sarah M.", title: "VP of Operations", company: "A Wall Street Financial Firm", initials: "SM" },
  "Los Angeles": { quote: "We needed a partner who understood the entertainment industry and could scale with our seasonal demands. Contact Center USA exceeded every expectation.", name: "David R.", title: "Director of CX", company: "A Major Entertainment Studio", initials: "DR" },
  "Chicago": { quote: "Their Midwest work ethic matches ours perfectly. Since partnering with Contact Center USA, our customer satisfaction scores have increased by 34%.", name: "Michael T.", title: "COO", company: "A Midwest Logistics Company", initials: "MT" },
  "Houston": { quote: "In the energy sector, every call matters. Contact Center USA provides the reliability and expertise we need to support our clients 24/7.", name: "Jennifer L.", title: "Customer Success Manager", company: "A Texas Energy Company", initials: "JL" },
  "Phoenix": { quote: "The rapid growth of our Phoenix-based business demanded a call center partner that could scale fast. Contact Center USA delivered from day one.", name: "Robert K.", title: "CEO", company: "A Phoenix Tech Startup", initials: "RK" },
  "Philadelphia": { quote: "Their understanding of healthcare compliance and patient communication has been invaluable. A true partner in every sense.", name: "Lisa W.", title: "Director of Patient Services", company: "A Philadelphia Hospital Network", initials: "LW" },
  "San Antonio": { quote: "Bilingual support was critical for our business. Contact Center USA provides seamless English and Spanish service that our customers love.", name: "Carlos G.", title: "Operations Manager", company: "A San Antonio Services Company", initials: "CG" },
  "San Diego": { quote: "Their tech-savvy agents handle our biotech customer inquiries with precision and professionalism that reflects our brand perfectly.", name: "Amanda P.", title: "VP of Customer Relations", company: "A San Diego Biotech Firm", initials: "AP" },
  "Dallas": { quote: "We evaluated several call center providers and Contact Center USA stood out for their transparency, quality agents, and no-contract flexibility.", name: "Brian H.", title: "CFO", company: "A Dallas Financial Services Firm", initials: "BH" },
  "Austin": { quote: "As a SaaS company, we needed agents who understand technology. Contact Center USA integrated seamlessly with our tools and culture.", name: "Kevin S.", title: "Head of Support", company: "An Austin SaaS Company", initials: "KS" },
  "Jacksonville": { quote: "Their insurance-industry expertise and compliance knowledge gave us confidence from the start. Outstanding partner for our growing business.", name: "Patricia N.", title: "Claims Director", company: "A Florida Insurance Provider", initials: "PN" },
  "Columbus": { quote: "Contact Center USA helped us reduce response times by 40% while maintaining the quality our policyholders expect.", name: "James D.", title: "SVP Operations", company: "An Ohio Insurance Company", initials: "JD" },
  "Charlotte": { quote: "In banking, trust is everything. Contact Center USA delivers the professionalism and security our customers deserve on every call.", name: "Michelle F.", title: "Head of Customer Experience", company: "A Charlotte Banking Institution", initials: "MF" },
  "San Francisco": { quote: "Their AI-augmented support perfectly complements our tech-forward approach. We scaled from 50 to 500 daily interactions without missing a beat.", name: "Alex C.", title: "CTO", company: "A San Francisco Tech Company", initials: "AC" },
  "Seattle": { quote: "Contact Center USA matches the innovation mindset we value here in Seattle. Their omnichannel solution has been a game-changer for us.", name: "Rachel B.", title: "Director of Operations", company: "A Seattle Ecommerce Company", initials: "RB" },
};

function getFAQs(city: string, state: string) {
  return [
    { question: `What call center service models are available for ${city} businesses?`, answer: `We support dedicated teams, overflow coverage, after-hours answering, inbound customer support, outbound outreach, technical support, and multilingual programs for ${city} businesses. The right model depends on your call volume, channels, hours, compliance needs, and launch timeline.` },
    { question: `Do you have call center agents in ${city}, ${state}?`, answer: `Our agents are distributed across the United States. We serve ${city} businesses with dedicated teams that understand the local market, timezone, and cultural nuances. All agents are 100% US-based.` },
    { question: `What industries do you serve in ${city}?`, answer: `We serve a wide range of industries in ${city}, including finance, healthcare, technology, ecommerce, insurance, and more. Our agents receive industry-specific training to handle each sector's unique needs.` },
    { question: `How quickly can you set up services for my ${city} business?`, answer: `Most ${city} businesses are fully onboarded within 48 hours to 2 weeks. Our streamlined process includes needs assessment, agent training, technology integration, and quality assurance testing.` },
    { question: `Do you offer bilingual support in ${city}?`, answer: `Yes, we offer bilingual English and Spanish support for ${city} businesses, plus multilingual capabilities for other languages. This is especially valuable for serving ${city}'s diverse population.` },
  ];
}

export function CityPageTemplate({
  city, state, stateAbbr, description, businessLandscape, industries, population, businesses, seoContent,
}: CityPageTemplateProps) {
  const testimonial = testimonials[city];
  const faqs = getFAQs(city, state);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Call Center Services in ${city}, ${stateAbbr}`,
            url: `https://contactcenterusa.com/call-center-services-${city.toLowerCase().replace(/\s+/g, '-')}`,
            description: `US-based call center outsourcing services in ${city}, ${stateAbbr}`,
            serviceType: "Call center outsourcing",
            provider: {
              "@type": "Organization",
              name: "Contact Center USA",
              url: "https://contactcenterusa.com",
            },
            areaServed: {
              "@type": "City",
              name: `${city}, ${state}`,
            },
          }),
        }}
      />
      {/* HERO — Video background with form */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/hd-agents-working.jpg">
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                <MapPin className="h-4 w-4" /> {city}, {stateAbbr}
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">
                Call Center Services in <span className="text-red">{city}</span>
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
                100% US-based call center outsourcing for {city} businesses. 24/7 support, AI automation, and omnichannel solutions.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 100% US-Based</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 24/7 Support</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> No Contracts</div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations" },
        {
          label: `${city}, ${stateAbbr}`,
          href: `/call-center-services-${city.toLowerCase().replace(/\s+/g, "-")}`,
        },
      ]} />

      {/* STATS BAR */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white"><AnimatedCounter target={500} suffix="+" /></div>
              <div className="mt-1 text-sm text-white/50">US-Based Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="mt-1 text-sm text-white/50">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white"><AnimatedCounter target={98} suffix="%" /></div>
              <div className="mt-1 text-sm text-white/50">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">&lt;48h</div>
              <div className="mt-1 text-sm text-white/50">Go Live Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — Split: Image + Text */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/hd-agents-pair.jpg" alt={`Call center team serving ${city}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Why {city}
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Call Center Outsourcing for <span className="text-red">{city}</span> Companies
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">{description}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">{businessLandscape}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Users className="mx-auto h-6 w-6 text-red" />
                  <div className="mt-2 text-xl font-bold text-navy">{population}</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Building2 className="mx-auto h-6 w-6 text-red" />
                  <div className="mt-2 text-xl font-bold text-navy">{businesses}</div>
                  <div className="text-sm text-gray-600">Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — Cards with icons */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Services</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Services Available in <span className="text-red">{city}</span></h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div>
                  <Link href={service.href} className="group block rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red transition-all group-hover:bg-red group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-navy">{service.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES — Horizontal pills with links */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries We Serve in <span className="text-red">{city}</span></h2>
              <p className="mt-4 text-gray-700">Specialized call center solutions with industry-specific training, compliance, and best practices for {city}&apos;s most important sectors.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {industries.map((ind) => {
                  const href = industryLinks[ind] || "/industries";
                  return (
                    <Link key={ind} href={href} className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-navy capitalize transition-all hover:border-red hover:bg-red hover:text-white">
                      {ind}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src="/images/hd-agents-row.jpg" alt={`Industries served in ${city}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — Dark section */}
      <section className="bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why {city} Businesses Choose <span className="text-red">Contact Center USA</span></h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Timezone-Aligned", desc: `Agents work in sync with ${city}'s business hours with 24/7 coverage available.` },
              { icon: Users, title: "Cultural Familiarity", desc: `Agents trained on ${city}'s unique market dynamics and regional expectations.` },
              { icon: Shield, title: "Full Compliance", desc: `HIPAA, PCI-DSS, TCPA, and ${stateAbbr} state regulations fully covered.` },
              { icon: TrendingUp, title: "Scale on Demand", desc: `From startup to enterprise — scale up or down with no contracts.` },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div className="rounded-2xl bg-white/5 p-7 backdrop-blur-sm transition-all hover:bg-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/20 text-red"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — Homepage style */}
      {testimonial && (
        <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
          <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left — Header + Stats */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Testimonials</span>
                <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                  What {city} Clients <span className="text-red">Say About Us</span>
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-gray-700">
                  Our reputation in {city} has been built by experience and our ability to adapt to our clients&apos; ever-changing needs.
                </p>
                <div className="mt-10 flex items-center gap-10">
                  <div>
                    <div className="text-4xl font-bold text-navy">4.9/5</div>
                    <div className="mt-1 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="h-16 w-px bg-gray-200" />
                  <div>
                    <div className="text-4xl font-bold text-navy">127+</div>
                    <div className="mt-1 text-sm text-gray-600">Verified Reviews</div>
                  </div>
                </div>
              </div>

              {/* Right — Testimonial Card */}
              <div className="relative">
                <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
                <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                  <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-gray-600">{testimonial.quote}</p>
                  <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">{testimonial.initials}</div>
                    <div>
                      <div className="font-bold text-navy">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {seoContent && <SEOContentSection sections={seoContent} />}

      <PageFAQ heading={`${city} Call Center Services FAQ`} faqs={faqs} />

      {/* CTA — with video */}
      <section className="relative overflow-hidden py-24">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/hd-office-team.jpg">
          <source src="/images/video-3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your {city} Business?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">Get a free consultation and discover how Contact Center USA can help your {city} business deliver exceptional customer experiences.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
