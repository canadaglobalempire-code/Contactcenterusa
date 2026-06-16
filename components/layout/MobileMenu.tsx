"use client"

import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"

const services = [
  { label: "All Services", href: "/services", description: "View all services" },
  { label: "B2B Sales", href: "/services/b2b-sales-outsourcing", description: "Business-to-business sales" },
  { label: "B2C Sales", href: "/services/b2c-sales-outsourcing", description: "Consumer sales programs" },
  { label: "Customer Acquisition", href: "/services/customer-acquisition-outsourcing", description: "Grow your customer base" },
  { label: "Customer Care", href: "/services/customer-care-outsourcing", description: "Dedicated care teams" },
  { label: "Customer Service", href: "/solutions/customer-service-outsourcing", description: "Professional support teams" },
  { label: "Debt Collection", href: "/services/debt-collection-outsourcing", description: "Compliant recovery services" },
  { label: "Financial Solutions", href: "/solutions/financial-call-center-services", description: "Payment processing & compliance" },
  { label: "Inbound Services", href: "/solutions/inbound-call-center-services", description: "Handle incoming inquiries" },
  { label: "Interactive Voice Response", href: "/services/interactive-voice-response", description: "Automated phone systems" },
  { label: "Lead Generation", href: "/solutions/lead-generation-appointment-setting", description: "Fill your sales pipeline" },
  { label: "Live Chat", href: "/services/live-chat-outsourcing", description: "Real-time chat support" },
  { label: "Outbound Services", href: "/solutions/outbound-call-center-services", description: "Proactive outreach campaigns" },
  { label: "Social Media", href: "/solutions/social-media-customer-support", description: "Social monitoring & response" },
  { label: "Technical Support", href: "/solutions/technical-support-outsourcing", description: "Expert troubleshooting" },
  { label: "Telemarketing Services", href: "/services/telemarketing-services", description: "Professional telemarketing" },
  { label: "Virtual / Remote Support", href: "/services/virtual-remote-support", description: "Remote agent solutions" },
]

const solutions = [
  { label: "All Solutions", href: "/solutions", description: "View all solutions" },
  { label: "A.I. Automation", href: "/services/ai-call-center-automation", description: "Intelligent automation solutions" },
  { label: "Back Office Support", href: "/solutions/back-office-outsourcing", description: "Streamlined back office operations" },
  { label: "Call Monitoring", href: "/solutions/call-monitoring-services", description: "Quality assurance monitoring" },
  { label: "Contact Center Software", href: "/services/contact-center-software-solutions", description: "Enterprise-grade platform" },
  { label: "Content Moderation", href: "/solutions/content-moderation-services", description: "Content review & safety" },
  { label: "Customer Experience Management", href: "/solutions/customer-experience-management", description: "Strategic CX programs" },
  { label: "CX Analytics", href: "/services/customer-experience-analytics", description: "Data-driven insights" },
  { label: "Dialer & ACD Administration", href: "/solutions/dialer-acd-administration", description: "Call routing management" },
  { label: "Digital and CX Services", href: "/services/digital-customer-experience-services", description: "End-to-end digital CX" },
  { label: "Fraud Prevention & Cyber Security", href: "/services/fraud-prevention-cyber-security", description: "Protect your business" },
  { label: "Information Technology Services", href: "/solutions/information-technology-services", description: "IT support solutions" },
  { label: "Office Support Services", href: "/solutions/office-support-services", description: "Administrative support" },
  { label: "Omnichannel Solutions", href: "/services/omnichannel-contact-center-solutions", description: "Seamless channel integration" },
  { label: "Sales", href: "/solutions/sales-outsourcing", description: "Sales outsourcing programs" },
  { label: "Social Customer Care", href: "/solutions/social-customer-care", description: "Social media care teams" },
  { label: "Work From Home", href: "/solutions/work-from-home-solutions", description: "Remote workforce solutions" },
]

const mainLinks = [
  { label: "About Us", href: "/about" },
  { label: "Company History", href: "/about/company-history" },
  { label: "Why Work With Us", href: "/about/why-work-with-us" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
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
          <Link
            href="/contact"
            onClick={() => onOpenChange(false)}
            className="block w-full rounded-full bg-gradient-to-r from-[#2E75B6] to-[#3B8DD4] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
