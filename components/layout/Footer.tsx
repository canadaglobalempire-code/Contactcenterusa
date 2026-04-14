import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/seo-config";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const services = [
  { label: "A.I. Automation", href: "/services/ai-call-center-automation" },
  { label: "Contact Center Software", href: "/services/contact-center-software-solutions" },
  { label: "Customer Acquisition", href: "/services/customer-acquisition-outsourcing" },
  { label: "CX Analytics", href: "/services/customer-experience-analytics" },
  { label: "Digital & CX Services", href: "/services/digital-customer-experience-services" },
  { label: "Fraud Prevention", href: "/services/fraud-prevention-cyber-security" },
  { label: "Omnichannel Solutions", href: "/services/omnichannel-contact-center-solutions" },
];

const solutions = [
  { label: "Back Office", href: "/solutions/back-office-outsourcing" },
  { label: "Customer Service", href: "/solutions/customer-service-outsourcing" },
  { label: "Inbound Services", href: "/solutions/inbound-call-center-services" },
  { label: "Outbound Services", href: "/solutions/outbound-call-center-services" },
  { label: "Lead Generation", href: "/solutions/lead-generation-appointment-setting" },
  { label: "Technical Support", href: "/solutions/technical-support-outsourcing" },
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

const socialLinks = [
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-700 transition-colors hover:text-navy"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
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

          {/* Column 4 — Company */}
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
