"use client"

import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { siteConfig } from "@/lib/seo-config"

const services = [
  { label: "All Services", href: "/services", description: "View all services" },
  { label: "A.I. Automation", href: "/services/ai-call-center-automation", description: "Intelligent automation solutions" },
  { label: "Contact Center Software", href: "/services/contact-center-software-solutions", description: "Enterprise-grade platform" },
  { label: "Customer Acquisition", href: "/services/customer-acquisition-outsourcing", description: "Grow your customer base" },
  { label: "CX Analytics", href: "/services/customer-experience-analytics", description: "Data-driven insights" },
  { label: "Digital & CX Services", href: "/services/digital-customer-experience-services", description: "End-to-end digital CX" },
  { label: "Fraud Prevention", href: "/services/fraud-prevention-cyber-security", description: "Protect your business" },
  { label: "Omnichannel Solutions", href: "/services/omnichannel-contact-center-solutions", description: "Seamless channel integration" },
]

const solutions = [
  { label: "All Solutions", href: "/solutions", description: "View all solutions" },
  { label: "Back Office", href: "/solutions/back-office-outsourcing", description: "Streamlined back office operations" },
  { label: "Customer Service", href: "/solutions/customer-service-outsourcing", description: "Professional support teams" },
  { label: "Inbound Services", href: "/solutions/inbound-call-center-services", description: "Handle incoming inquiries" },
  { label: "Outbound Services", href: "/solutions/outbound-call-center-services", description: "Proactive outreach campaigns" },
  { label: "Lead Generation", href: "/solutions/lead-generation-appointment-setting", description: "Fill your sales pipeline" },
  { label: "Technical Support", href: "/solutions/technical-support-outsourcing", description: "Expert troubleshooting" },
  { label: "Financial Solutions", href: "/solutions/financial-call-center-services", description: "Payment processing & compliance" },
  { label: "Government Services", href: "/solutions/government-call-center-services", description: "Citizen support & compliance" },
  { label: "Social Media", href: "/solutions/social-media-customer-support", description: "Social monitoring & response" },
  { label: "Multilingual Services", href: "/solutions/multilingual-call-center-services", description: "English, Spanish & more" },
]

const mainLinks = [
  { label: "About Us", href: "/about" },
  { label: "Company History", href: "/about/company-history" },
  { label: "Why Work With Us", href: "/about/why-work-with-us" },
  { label: "Industries", href: "/about/industries" },
  { label: "Differentiators", href: "/why-us" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-navy">Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-6 px-4">
          {/* Services Section */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2E75B6]">
              Services
            </h3>
            <ul className="flex flex-col gap-0.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[#F8FAFC]"
                  >
                    <div className="text-sm font-medium text-navy">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-sm text-gray-700">
                      {item.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2E75B6]">
              Solutions
            </h3>
            <ul className="flex flex-col gap-0.5">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[#F8FAFC]"
                  >
                    <div className="text-sm font-medium text-navy">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-sm text-gray-700">
                      {item.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Links */}
          <div>
            <ul className="flex flex-col gap-0.5">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-[#F8FAFC]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <SheetFooter>
          <div className="flex flex-col gap-2 text-center">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 text-sm font-medium text-navy"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-2 text-sm text-gray-700"
            >
              <Mail className="size-3.5" />
              {siteConfig.email}
            </a>
          </div>
          <Link
            href="/contact"
            onClick={() => onOpenChange(false)}
            className="block w-full"
          >
            <button className="w-full rounded-full bg-gradient-to-r from-[#2E75B6] to-[#3B8DD4] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02]">
              Get a Free Quote
            </button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
