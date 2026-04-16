import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/seo-config";

const services = [
  { label: "Customer Acquisition", href: "/services/customer-acquisition-outsourcing" },
  { label: "Customer Care", href: "/solutions/customer-service-outsourcing" },
  { label: "Customer Service", href: "/solutions/customer-service-outsourcing" },
  { label: "Financial Solutions", href: "/solutions/financial-call-center-services" },
  { label: "Government Services", href: "/solutions/government-call-center-services" },
  { label: "Inbound Services", href: "/solutions/inbound-call-center-services" },
  { label: "Lead Generation", href: "/solutions/lead-generation-appointment-setting" },
  { label: "Live Chat", href: "/services/omnichannel-contact-center-solutions" },
  { label: "Multilingual Services", href: "/solutions/multilingual-call-center-services" },
  { label: "Outbound Services", href: "/solutions/outbound-call-center-services" },
  { label: "Social Media", href: "/solutions/social-media-customer-support" },
  { label: "Technical Support", href: "/solutions/technical-support-outsourcing" },
  { label: "Telemarketing Services", href: "/solutions/outbound-call-center-services" },
  { label: "Virtual / Remote Support", href: "/solutions/customer-service-outsourcing" },
];

const solutions = [
  { label: "A.I. Automation", href: "/services/ai-call-center-automation" },
  { label: "Back Office Support", href: "/solutions/back-office-outsourcing" },
  { label: "Contact Center Software", href: "/services/contact-center-software-solutions" },
  { label: "CX Analytics", href: "/services/customer-experience-analytics" },
  { label: "Digital & CX Services", href: "/services/digital-customer-experience-services" },
  { label: "Fraud Prevention", href: "/services/fraud-prevention-cyber-security" },
  { label: "Omnichannel Solutions", href: "/services/omnichannel-contact-center-solutions" },
  { label: "Sales", href: "/solutions/outbound-call-center-services" },
  { label: "Social Customer Care", href: "/solutions/social-media-customer-support" },
];

const industries = [
  { label: "Automotive", href: "/industries/automotive-call-center-services" },
  { label: "Banking & Financial", href: "/industries/banking-fintech-call-center" },
  { label: "Cable & Media", href: "/industries/cable-media-call-center" },
  { label: "Ecommerce", href: "/industries/ecommerce-customer-service-outsourcing" },
  { label: "Education", href: "/industries/education-call-center-services" },
  { label: "Energy & Utilities", href: "/industries/energy-utilities-call-center" },
  { label: "Government", href: "/industries/government-call-center" },
  { label: "Healthcare", href: "/industries/healthcare-call-center-services" },
  { label: "Insurance", href: "/industries/insurance-call-center-outsourcing" },
  { label: "Logistics", href: "/industries/logistics-shipping-call-center" },
  { label: "Pharmaceuticals", href: "/industries/pharmaceuticals-call-center" },
  { label: "Real Estate", href: "/industries/real-estate-call-center-services" },
  { label: "Technology", href: "/industries/saas-technology-support" },
  { label: "Telecommunications", href: "/industries/telecommunications-call-center" },
  { label: "Travel", href: "/industries/travel-hospitality-call-center" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Company History", href: "/about/company-history" },
  { label: "Why Work With Us", href: "/about/why-work-with-us" },
  { label: "Industries", href: "/about/industries" },
  { label: "Differentiators", href: "/why-us" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];


export default function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-10 overflow-hidden">
      {/* America background image — blended */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
        style={{ backgroundImage: "url(/images/america.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

      <div className="relative mx-auto max-w-[1536px] px-6">
        {/* CTA Band */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-navy text-2xl font-bold text-center sm:text-left">
              Ready to transform your customer experience?
            </h3>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red to-red-dark text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shrink-0"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-v6.png"
                alt="Contact Center USA"
                width={200}
                height={42}
                className="h-[160px] w-auto"
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              US-based call center outsourcing services for growing businesses.
              Professional agents, flexible plans, real results.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-700 transition-colors hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Solutions */}
          <div>
            <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-700 transition-colors hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Industries */}
          <div>
            <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-6">
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-700 transition-colors hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Company */}
          <div>
            <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-700 transition-colors hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        </div>

        {/* City Pages */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">
            Locations We Serve
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              { label: "New York", href: "/call-center-services-new-york" },
              { label: "Los Angeles", href: "/call-center-services-los-angeles" },
              { label: "Chicago", href: "/call-center-services-chicago" },
              { label: "Houston", href: "/call-center-services-houston" },
              { label: "Phoenix", href: "/call-center-services-phoenix" },
              { label: "Philadelphia", href: "/call-center-services-philadelphia" },
              { label: "San Antonio", href: "/call-center-services-san-antonio" },
              { label: "San Diego", href: "/call-center-services-san-diego" },
              { label: "Dallas", href: "/call-center-services-dallas" },
              { label: "Austin", href: "/call-center-services-austin" },
              { label: "Jacksonville", href: "/call-center-services-jacksonville" },
              { label: "Columbus", href: "/call-center-services-columbus" },
              { label: "Charlotte", href: "/call-center-services-charlotte" },
              { label: "San Francisco", href: "/call-center-services-san-francisco" },
              { label: "Seattle", href: "/call-center-services-seattle" },
            ].map((city) => (
              <Link key={city.href} href={city.href} className="text-sm text-gray-600 transition-colors hover:text-navy">
                {city.label}
              </Link>
            ))}
          </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-600 md:flex-row md:justify-between md:text-left">
            <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
            <p>Proudly Serving Businesses in the USA</p>
            <p>Made in the USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
