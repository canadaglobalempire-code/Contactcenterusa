import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, ShoppingCart, Landmark, Building2, Monitor, ShieldCheck, Plane, Truck, GraduationCap, Wallet, Wrench, Scale, Ticket, Music, PhoneCall, Languages, Home, Building, Receipt, Trophy, Gamepad2, Stethoscope, PawPrint, FileText, UtensilsCrossed, Dumbbell, Sun, Users, HeartHandshake, Package, Sparkles, Car, Network, Flower2, PlaneTakeoff, CarFront, Tv, Zap, Landmark as Gov, Pill, Store, RadioTower } from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    href: "/industries/healthcare-call-center-services",
    color: "bg-rose-100 text-rose-600",
    hoverColor: "group-hover:bg-rose-600 group-hover:text-white",
    bullets: [
      "Patient scheduling & appointment reminders",
      "Insurance verification & benefits inquiries",
      "HIPAA-compliant call handling",
      "After-hours nurse triage support",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Ecommerce & Retail",
    href: "/industries/ecommerce-customer-service-outsourcing",
    color: "bg-emerald-100 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-600 group-hover:text-white",
    bullets: [
      "Order tracking & returns management",
      "Product inquiries & upselling",
      "Live chat & email support",
      "Peak season surge staffing",
    ],
  },
  {
    icon: Landmark,
    name: "Financial Services",
    href: "/industries/financial-services-call-center",
    color: "bg-blue-100 text-blue-600",
    hoverColor: "group-hover:bg-blue-600 group-hover:text-white",
    bullets: [
      "Account inquiries & transaction support",
      "Fraud detection & dispute resolution",
      "Loan origination & processing",
      "Regulatory-compliant communications",
    ],
  },
  {
    icon: Building2,
    name: "Real Estate",
    href: "/industries/real-estate-call-center-services",
    color: "bg-amber-100 text-amber-600",
    hoverColor: "group-hover:bg-amber-600 group-hover:text-white",
    bullets: [
      "Lead qualification & follow-up",
      "Property inquiry handling",
      "Appointment scheduling for showings",
      "Tenant support & maintenance requests",
    ],
  },
  {
    icon: Monitor,
    name: "SaaS & Technology",
    href: "/industries/saas-technology-support",
    color: "bg-purple-100 text-purple-600",
    hoverColor: "group-hover:bg-purple-600 group-hover:text-white",
    bullets: [
      "Technical support & troubleshooting",
      "Onboarding & product walkthroughs",
      "Subscription management & billing",
      "Tier-1 and Tier-2 help desk",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Insurance",
    href: "/industries/insurance-call-center-outsourcing",
    color: "bg-teal-100 text-teal-600",
    hoverColor: "group-hover:bg-teal-600 group-hover:text-white",
    bullets: [
      "Claims intake & status updates",
      "Policy renewals & modifications",
      "Enrollment & benefits support",
      "Compliance-driven call scripting",
    ],
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    href: "/industries/travel-hospitality-call-center",
    color: "bg-sky-100 text-sky-600",
    hoverColor: "group-hover:bg-sky-600 group-hover:text-white",
    bullets: [
      "Reservation booking & modifications",
      "Loyalty program support",
      "Concierge & guest services",
      "24/7 emergency travel assistance",
    ],
  },
  {
    icon: Truck,
    name: "Logistics & Shipping",
    href: "/industries/logistics-shipping-call-center",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "group-hover:bg-orange-600 group-hover:text-white",
    bullets: [
      "Shipment tracking & delivery updates",
      "Dispatch & route coordination",
      "Claims processing & damage reports",
      "Vendor & carrier communication",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    href: "/industries/education-call-center-services",
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-600 group-hover:text-white",
    bullets: [
      "Student enrollment & admissions support",
      "Financial aid & tuition inquiries",
      "Alumni engagement & fundraising",
      "IT help desk for students & faculty",
    ],
  },
  {
    icon: Wallet,
    name: "Banking & Financial Services",
    href: "/industries/banking-financial-services-call-center",
    color: "bg-green-100 text-green-600",
    hoverColor: "group-hover:bg-green-600 group-hover:text-white",
    bullets: [
      "Account opening & KYC verification",
      "Mobile banking & app support",
      "Payment processing assistance",
      "Fraud alerts & account security",
    ],
  },
  {
    icon: Wrench,
    name: "Home Services",
    href: "/industries/home-services-call-center",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "group-hover:bg-orange-600 group-hover:text-white",
    bullets: [
      "24/7 emergency dispatch & triage",
      "HVAC, plumbing & electrical intake",
      "ServiceTitan & Housecall Pro booking",
      "Seasonal overflow & surge coverage",
    ],
  },
  {
    icon: Scale,
    name: "Legal Intake",
    href: "/industries/legal-intake-call-center",
    color: "bg-slate-100 text-slate-600",
    hoverColor: "group-hover:bg-slate-600 group-hover:text-white",
    bullets: [
      "24/7 live case intake & screening",
      "Retainer delivery & e-sign follow-up",
      "Litify, Filevine & Clio integration",
      "Mass tort & class action campaigns",
    ],
  },
  {
    icon: Ticket,
    name: "Event Ticketing",
    href: "/industries/event-ticketing-call-center",
    color: "bg-purple-100 text-purple-600",
    hoverColor: "group-hover:bg-purple-600 group-hover:text-white",
    bullets: [
      "On-sale surge & presale support",
      "Event-day & will-call coverage",
      "Refunds, exchanges & cancellations",
      "Chargeback & fraud verification",
    ],
  },
  {
    icon: Music,
    name: "Music & Entertainment",
    href: "/industries/music-entertainment-call-center",
    color: "bg-pink-100 text-pink-600",
    hoverColor: "group-hover:bg-pink-600 group-hover:text-white",
    bullets: [
      "Fan club & membership servicing",
      "Drop-day & merch order support",
      "Streaming account & billing help",
      "Social and community coverage",
    ],
  },
  {
    icon: PhoneCall,
    name: "Virtual Receptionist",
    href: "/industries/virtual-receptionist-services",
    color: "bg-teal-100 text-teal-600",
    hoverColor: "group-hover:bg-teal-600 group-hover:text-white",
    bullets: [
      "Live answering in your company name",
      "Appointment booking into your calendar",
      "Call screening & warm transfer",
      "After-hours, lunch & vacation cover",
    ],
  },
  {
    icon: Languages,
    name: "Spanish & Bilingual",
    href: "/industries/spanish-call-center-services",
    color: "bg-amber-100 text-amber-600",
    hoverColor: "group-hover:bg-amber-600 group-hover:text-white",
    bullets: [
      "Native Spanish-speaking US agents",
      "True bilingual routing, one number",
      "No per-minute interpretation fees",
      "Native Spanish chat, email & SMS",
    ],
  },
  {
    icon: Home,
    name: "Mortgage & Lending",
    href: "/industries/mortgage-call-center",
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-600 group-hover:text-white",
    bullets: [
      "Speed-to-lead borrower response",
      "Pre-qualification against your criteria",
      "Document & conditions chase",
      "Servicing, escrow & payoff calls",
    ],
  },
  {
    icon: Building,
    name: "Property Management",
    href: "/industries/property-management-call-center",
    color: "bg-cyan-100 text-cyan-600",
    hoverColor: "group-hover:bg-cyan-600 group-hover:text-white",
    bullets: [
      "24/7 emergency maintenance triage",
      "Work orders in AppFolio & Buildium",
      "Leasing enquiries & tour booking",
      "HOA & resident association lines",
    ],
  },
  {
    icon: Receipt,
    name: "Debt Collection & ARM",
    href: "/industries/debt-collection-call-center",
    color: "bg-stone-100 text-stone-600",
    hoverColor: "group-hover:bg-stone-600 group-hover:text-white",
    bullets: [
      "First-party early-stage recovery",
      "Payment arrangement negotiation",
      "FDCPA & Regulation F aware handling",
      "Skip tracing & contact refresh",
    ],
  },
  {
    icon: Trophy,
    name: "Sports & Venues",
    href: "/industries/sports-venue-call-center",
    color: "bg-violet-100 text-violet-600",
    hoverColor: "group-hover:bg-violet-600 group-hover:text-white",
    bullets: [
      "Season ticket renewals & saves",
      "Playoff & postseason on-sales",
      "Game-day & will-call coverage",
      "Premium & hospitality servicing",
    ],
  },
  {
    icon: Gamepad2,
    name: "Gaming & Esports",
    href: "/industries/gaming-esports-support",
    color: "bg-fuchsia-100 text-fuchsia-600",
    hoverColor: "group-hover:bg-fuchsia-600 group-hover:text-white",
    bullets: [
      "Launch-week surge coverage",
      "Account recovery & security",
      "Purchase & refund disputes",
      "Trust & safety moderation",
    ],
  },
  {
    icon: Stethoscope,
    name: "Dental Practices",
    href: "/industries/dental-call-center",
    color: "bg-sky-100 text-sky-600",
    hoverColor: "group-hover:bg-sky-600 group-hover:text-white",
    bullets: [
      "New patient call capture",
      "Hygiene recall & reactivation",
      "Insurance verification",
      "After-hours emergency triage",
    ],
  },
  {
    icon: PawPrint,
    name: "Veterinary Clinics",
    href: "/industries/veterinary-call-center",
    color: "bg-lime-100 text-lime-600",
    hoverColor: "group-hover:bg-lime-600 group-hover:text-white",
    bullets: [
      "Overflow during clinic hours",
      "Emergency routing by protocol",
      "Refill request intake",
      "Vaccination & wellness recall",
    ],
  },
  {
    icon: FileText,
    name: "Medical Billing & RCM",
    href: "/industries/medical-billing-rcm",
    color: "bg-blue-100 text-blue-600",
    hoverColor: "group-hover:bg-blue-600 group-hover:text-white",
    bullets: [
      "Aged AR & payer follow-up",
      "Denial work & appeals",
      "Prior authorization chase",
      "Patient balance conversations",
    ],
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    href: "/industries/restaurant-call-center",
    color: "bg-red-100 text-red-600",
    hoverColor: "group-hover:bg-red-600 group-hover:text-white",
    bullets: [
      "Peak-service overflow",
      "Reservations booked live",
      "Catering & large party intake",
      "Guest recovery before reviews",
    ],
  },
  {
    icon: Dumbbell,
    name: "Fitness & Gyms",
    href: "/industries/fitness-gym-call-center",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "group-hover:bg-orange-600 group-hover:text-white",
    bullets: [
      "Membership enquiries & tours",
      "Lead follow-up in 60 seconds",
      "Cancellation save conversations",
      "Failed payment recovery",
    ],
  },
  {
    icon: Sun,
    name: "Solar & Home Improvement",
    href: "/industries/solar-home-improvement-call-center",
    color: "bg-yellow-100 text-yellow-600",
    hoverColor: "group-hover:bg-yellow-600 group-hover:text-white",
    bullets: [
      "Speed-to-lead response",
      "Qualification before dispatch",
      "Territory-aware appointment setting",
      "Aged lead reactivation",
    ],
  },
  {
    icon: Users,
    name: "Staffing & Recruiting",
    href: "/industries/staffing-recruiting-call-center",
    color: "bg-emerald-100 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-600 group-hover:text-white",
    bullets: [
      "High-volume candidate screening",
      "Urgent shift filling",
      "24/7 branch after-hours cover",
      "Redeployment & bench calling",
    ],
  },
  {
    icon: HeartHandshake,
    name: "Nonprofits",
    href: "/industries/nonprofit-call-center",
    color: "bg-rose-100 text-rose-600",
    hoverColor: "group-hover:bg-rose-600 group-hover:text-white",
    bullets: [
      "Recurring gift recovery",
      "Stewardship thank-you calls",
      "Year-end campaign surge",
      "Helpline & program lines",
    ],
  },
  {
    icon: Package,
    name: "Moving & Storage",
    href: "/industries/moving-storage-call-center",
    color: "bg-amber-100 text-amber-600",
    hoverColor: "group-hover:bg-amber-600 group-hover:text-white",
    bullets: [
      "Quote intake with full detail",
      "Survey & estimate scheduling",
      "Storage unit enquiries",
      "Peak-season surge staffing",
    ],
  },
  {
    icon: Sparkles,
    name: "Med Spa & Aesthetics",
    href: "/industries/med-spa-aesthetics-call-center",
    color: "bg-pink-100 text-pink-600",
    hoverColor: "group-hover:bg-pink-600 group-hover:text-white",
    bullets: [
      "Evening & weekend lead response",
      "Consultation booking",
      "No-show & rebooking recovery",
      "Membership retention",
    ],
  },
  {
    icon: Car,
    name: "Auto Dealership BDC",
    href: "/industries/auto-dealership-bdc",
    color: "bg-slate-100 text-slate-600",
    hoverColor: "group-hover:bg-slate-600 group-hover:text-white",
    bullets: [
      "Internet lead response",
      "Service appointment booking",
      "Missed-call recovery",
      "Unsold & equity campaigns",
    ],
  },
  {
    icon: Network,
    name: "Franchise Networks",
    href: "/industries/franchise-call-center",
    color: "bg-cyan-100 text-cyan-600",
    hoverColor: "group-hover:bg-cyan-600 group-hover:text-white",
    bullets: [
      "One national number",
      "Territory-aware routing",
      "Consistent brand standard",
      "Per-location reporting",
    ],
  },
  {
    icon: Flower2,
    name: "Funeral Homes",
    href: "/industries/funeral-home-answering-service",
    color: "bg-stone-100 text-stone-600",
    hoverColor: "group-hover:bg-stone-600 group-hover:text-white",
    bullets: [
      "24/7 live first call intake",
      "Removal detail captured",
      "On-call escalation worked live",
      "Pre-need enquiry handling",
    ],
  },
  {
    icon: PlaneTakeoff,
    name: "Airlines",
    href: "/industries/airlines-call-center",
    color: "bg-sky-100 text-sky-600",
    hoverColor: "group-hover:bg-sky-600 group-hover:text-white",
    bullets: [
      "Booking changes & rebooking",
      "Irregular operations surge cover",
      "Baggage claim intake",
      "Loyalty programme support",
    ],
  },
  {
    icon: CarFront,
    name: "Automotive",
    href: "/industries/automotive-call-center-services",
    color: "bg-slate-100 text-slate-600",
    hoverColor: "group-hover:bg-slate-600 group-hover:text-white",
    bullets: [
      "Service appointment booking",
      "Parts & warranty enquiries",
      "Recall notification campaigns",
      "Roadside assistance intake",
    ],
  },
  {
    icon: Tv,
    name: "Cable & Media",
    href: "/industries/cable-media-call-center",
    color: "bg-violet-100 text-violet-600",
    hoverColor: "group-hover:bg-violet-600 group-hover:text-white",
    bullets: [
      "Subscription & billing support",
      "Outage reporting & triage",
      "Win-back and retention offers",
      "Technical setup walkthroughs",
    ],
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    href: "/industries/energy-utilities-call-center",
    color: "bg-amber-100 text-amber-600",
    hoverColor: "group-hover:bg-amber-600 group-hover:text-white",
    bullets: [
      "Outage and emergency reporting",
      "Meter reading & billing queries",
      "Service start, stop and transfer",
      "Storm-event surge capacity",
    ],
  },
  {
    icon: Gov,
    name: "Government",
    href: "/industries/government-call-center",
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-600 group-hover:text-white",
    bullets: [
      "Citizen enquiry lines",
      "Programme eligibility screening",
      "Multilingual public access",
      "Section 508 accessible support",
    ],
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    href: "/industries/pharmaceuticals-call-center",
    color: "bg-teal-100 text-teal-600",
    hoverColor: "group-hover:bg-teal-600 group-hover:text-white",
    bullets: [
      "Medical information lines",
      "Adverse event intake & routing",
      "Patient support programmes",
      "Pharmacovigilance documentation",
    ],
  },
  {
    icon: Store,
    name: "Retail",
    href: "/industries/retail-call-center-services",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "group-hover:bg-orange-600 group-hover:text-white",
    bullets: [
      "Order status & store locator",
      "Returns and exchange handling",
      "Loyalty and gift card support",
      "Holiday peak surge staffing",
    ],
  },
  {
    icon: RadioTower,
    name: "Telecommunications",
    href: "/industries/telecommunications-call-center",
    color: "bg-cyan-100 text-cyan-600",
    hoverColor: "group-hover:bg-cyan-600 group-hover:text-white",
    bullets: [
      "Activation & porting support",
      "Tier-1 technical troubleshooting",
      "Plan upgrades and retention",
      "Billing dispute resolution",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <div
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              Industries We Serve
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Deep Expertise Across{" "}
              <br /><span className="text-red">Your Industry</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              From healthcare to fintech, our specialized teams understand the
              unique challenges of your industry and deliver tailored solutions
              that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex h-full min-h-[280px] flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-200"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${industry.color} ${industry.hoverColor}`}
                >
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">
                  {industry.name}
                </h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {industry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={industry.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-colors hover:text-red-dark"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/new-flag.jpg"
            alt="American flag background representing US-based call center services across multiple industries"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 py-20 text-center lg:px-8 lg:py-28">
          <div
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Partner With Industry Experts?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              No matter your industry, our specialized teams are ready to
              deliver exceptional customer experiences on your behalf.
            </p>
            <LeadCTALink
              ctaLocation="industries_index_bottom_cta"
              leadOffer="Industry call center quote"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
          </div>
        </div>
      </section>
    </>
  );
}
