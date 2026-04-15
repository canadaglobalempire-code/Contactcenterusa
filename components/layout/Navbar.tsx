"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/seo-config";
import MobileMenu from "@/components/layout/MobileMenu";

const services = [
  { label: "A.I. Automation", href: "/services/ai-call-center-automation" },
  { label: "Contact Center Software", href: "/services/contact-center-software-solutions" },
  { label: "Customer Acquisition", href: "/services/customer-acquisition-outsourcing" },
  { label: "CX Analytics", href: "/services/customer-experience-analytics" },
  { label: "Digital and CX Services", href: "/services/digital-customer-experience-services" },
  { label: "Fraud Prevention & Cyber Security", href: "/services/fraud-prevention-cyber-security" },
  { label: "Omnichannel Solutions", href: "/services/omnichannel-contact-center-solutions" },
];

const solutions = [
  { label: "Back Office Support", href: "/solutions/back-office-outsourcing" },
  { label: "Customer Service Outsourcing", href: "/solutions/customer-service-outsourcing" },
  { label: "Financial Solutions", href: "/solutions/financial-call-center-services" },
  { label: "Government Services", href: "/solutions/government-call-center-services" },
  { label: "Inbound Services", href: "/solutions/inbound-call-center-services" },
  { label: "Lead Generation", href: "/solutions/lead-generation-appointment-setting" },
  { label: "Multilingual Services", href: "/solutions/multilingual-call-center-services" },
  { label: "Outbound Services", href: "/solutions/outbound-call-center-services" },
  { label: "Social Media Support", href: "/solutions/social-media-customer-support" },
  { label: "Technical Support", href: "/solutions/technical-support-outsourcing" },
];

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Company History", href: "/about/company-history" },
  { label: "Why Work With Us", href: "/about/why-work-with-us" },
];

const industries = [
  { label: "Automotive", href: "/industries/automotive-call-center-services" },
  { label: "Banking & Fintech", href: "/industries/banking-fintech-call-center" },
  { label: "Cable & Media", href: "/industries/cable-media-call-center" },
  { label: "Ecommerce & Retail", href: "/industries/ecommerce-customer-service-outsourcing" },
  { label: "Education", href: "/industries/education-call-center-services" },
  { label: "Energy & Utilities", href: "/industries/energy-utilities-call-center" },
  { label: "Financial Services", href: "/industries/financial-services-call-center" },
  { label: "Government", href: "/industries/government-call-center" },
  { label: "Healthcare", href: "/industries/healthcare-call-center-services" },
  { label: "Insurance", href: "/industries/insurance-call-center-outsourcing" },
  { label: "Logistics & Shipping", href: "/industries/logistics-shipping-call-center" },
  { label: "Pharmaceuticals", href: "/industries/pharmaceuticals-call-center" },
  { label: "Real Estate", href: "/industries/real-estate-call-center-services" },
  { label: "SaaS & Technology", href: "/industries/saas-technology-support" },
  { label: "Telecommunications", href: "/industries/telecommunications-call-center" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality-call-center" },
];

function Dropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        <Link href={href} className="text-[15px] font-medium text-gray-900 transition-colors hover:text-red">
          {label}
        </Link>
        <ChevronDown
          className={`h-3.5 w-3.5 text-gray-900 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className={`absolute top-full pt-4 ${items.length > 10 ? "left-1/2 -translate-x-1/2" : "left-0"}`}>
          <div className={`rounded-xl border border-gray-100 bg-white p-3 shadow-2xl ${items.length > 10 ? "w-[480px] grid grid-cols-2 gap-1" : "min-w-[230px]"}`}>
            {items.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="block rounded-lg px-4 py-2.5 text-[14px] text-gray-700 transition-colors hover:bg-gray-50 hover:text-red"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 px-0"
            : "top-5 px-4 lg:px-8"
        }`}
      >
        <div
          className={`mx-auto flex h-[100px] max-w-[1300px] items-center justify-between transition-all duration-500 ${
            scrolled
              ? "rounded-none bg-white px-5 shadow-md lg:px-8"
              : "rounded-2xl bg-white/95 px-5 shadow-lg backdrop-blur-sm lg:px-8"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-v6.png"
              alt="Contact Center USA"
              width={220}
              height={100}
              className="h-[80px] w-auto"
              priority
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Dropdown label="Services" href="/services" items={services} />
            <Dropdown label="Solutions" href="/solutions" items={solutions} />
            <Dropdown label="Industries" href="/about/industries" items={industries} />
            <Link
              href="/why-us"
              className="text-[15px] font-medium text-gray-900 transition-colors hover:text-red"
            >
              Differentiators
            </Link>
            <Link
              href="/blog"
              className="text-[15px] font-medium text-gray-900 transition-colors hover:text-red"
            >
              Blog
            </Link>
            <Dropdown label="About Us" href="/about" items={aboutLinks} />
          </nav>

          {/* Right side */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/contact"
              className="rounded-lg bg-red px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-red/25 transition-all hover:bg-red-dark hover:shadow-red/35"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contact"
              className="rounded-lg bg-red px-4 py-2 text-xs font-semibold text-white"
            >
              Contact
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="size-5 text-navy" />
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </>
  );
}
