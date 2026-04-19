import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Travel Hospitality Call Center & Hospitality BPO USA | Contact Center USA",
  description:
    "US-based travel hospitality call center and hospitality BPO USA services — hotel customer service outsourcing, reservations, concierge, loyalty, and 24/7 guest support for hotels, resorts, OTAs, and travel brands.",
  keywords: [
    "travel hospitality call center",
    "hospitality bpo usa",
    "hotel customer service outsourcing",
    "hotel reservations call center",
    "ota customer support bpo",
    "loyalty program call center",
    "concierge services outsourcing",
    "travel disruption support",
  ],
  alternates: { canonical: "/industries/travel-hospitality-call-center" },
};

const features = [
  {
    title: "Reservation Management",
    desc: "Full-service booking support for hotels, flights, car rentals, and vacation packages with real-time availability checks, upsell opportunities, and instant confirmation across all major GDS platforms.",
  },
  {
    title: "Cancellation & Modification Handling",
    desc: "Empathetic agents who process cancellations and changes efficiently while offering alternatives, rebooking options, and travel credits to retain revenue and maintain guest relationships.",
  },
  {
    title: "Concierge & Guest Services",
    desc: "White-glove concierge support that handles restaurant reservations, activity bookings, transportation arrangements, and special requests to create memorable guest experiences.",
  },
  {
    title: "Loyalty Program Management",
    desc: "Dedicated support for loyalty and rewards programs including points inquiries, tier status, redemption assistance, and member engagement that drives repeat bookings.",
  },
  {
    title: "Group & Event Coordination",
    desc: "Specialized support for group bookings, corporate travel, wedding blocks, and event coordination with dedicated agents who manage complex multi-party reservations.",
  },
  {
    title: "Crisis & Travel Disruption Support",
    desc: "Rapid response teams for weather events, flight cancellations, and travel disruptions that proactively rebook guests, communicate updates, and minimize the impact of unexpected changes.",
  },
];

const benefits = [
  "GDS integration (Sabre, Amadeus)",
  "Multilingual agent support",
  "24/7 reservation assistance",
  "Loyalty program management",
  "White-glove concierge service",
  "Crisis response & rebooking",
];

const stats = [
  { value: 97, suffix: "%", label: "Guest Satisfaction Score" },
  { value: 25, suffix: "%", label: "Increase in Direct Bookings" },
  { value: 1, suffix: "M+", label: "Reservations Managed" },
  { value: 15, suffix: "+", label: "Languages Supported" },
];

const testimonial = {
  quote:
    "Contact Center USA delivers the five-star experience our guests expect. Their concierge agents are as polished as our front desk staff, and they have increased our direct booking rate by 25%.",
  name: "E.V.",
  title: "VP of Guest Experience",
  company: "A Luxury Hotel Chain",
  initials: "EV",
};

const faqs = [
  {
    question: "Can your agents make reservations in our booking system?",
    answer:
      "Yes, our agents are trained on all major GDS platforms including Sabre, Amadeus, and Travelport, as well as property management systems like Opera and Cloudbeds. We book, modify, and cancel reservations directly in your systems in real time.",
  },
  {
    question: "Do you offer multilingual support for international travelers?",
    answer:
      "We provide native-speaking agents in English, Spanish, French, Portuguese, and Mandarin, with real-time interpreter services available in over 200 languages. This ensures every traveler receives assistance in their preferred language.",
  },
  {
    question: "How do you handle travel disruptions and emergencies?",
    answer:
      "We activate dedicated crisis teams that proactively reach out to affected travelers, rebook accommodations and transport, communicate real-time updates, and coordinate with airlines and hotels to minimize disruption and protect your brand reputation.",
  },
  {
    question: "Can you manage our loyalty and rewards program?",
    answer:
      "Absolutely. Our agents handle points balance inquiries, redemption processing, tier status questions, and member enrollment. We also run proactive engagement campaigns to drive loyalty program participation and repeat bookings.",
  },
  {
    question: "What is your approach to upselling travel packages?",
    answer:
      "Our agents are trained in consultative selling — recommending room upgrades, travel insurance, activity add-ons, and premium experiences based on the traveler's preferences. This approach typically increases average booking value by 15-20%.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Travel Hospitality Call Center in USA",
    heading: "The travel hospitality call center that delivers five-star service across reservations, concierge, and disruption recovery.",
    accent: "five-star service",
    body: [
      "Contact Center USA is one of the best travel hospitality call center providers in the USA — a 100% US-based hospitality BPO USA operation with GDS expertise, PMS integration, and white-glove agents trained for luxury, upper-upscale, and independent hotel brands.",
      "For hotels, resorts, OTAs, cruise lines, and travel brands evaluating hotel customer service outsourcing, we deliver higher direct-booking conversion, stronger loyalty engagement, and resilient disruption response across every travel season.",
    ],
    stats: [
      { stat: "97%", label: "Guest satisfaction score across luxury and upscale reservation queues" },
      { stat: "+25%", label: "Direct-booking conversion lift versus internal reservation teams" },
      { stat: "15+", label: "Languages covered in-house with 200+ via on-demand interpreter services" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Reservations vs. Contact Center USA BPO",
    intro:
      "Hotels and travel brands face a tough staffing equation: five-star expectations all day, every day, in a business where volume swings 5x across the year. Here's how internal reservations compare to a specialized hospitality BPO.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Direct-Booking Conversion",
        left: "Reservations agents handle inbound but don't actively steer guests away from OTAs.",
        right: "Trained to convert OTA-searching callers to direct bookings with loyalty and perk positioning.",
        leftYes: false,
      },
      {
        label: "GDS & PMS Integration",
        left: "Reservations and front-desk staff share the same tools and compete for system access.",
        right: "Live integration with Sabre, Amadeus, Travelport, Opera, Cloudbeds, and loyalty stacks.",
        leftYes: false,
      },
      {
        label: "Multilingual Coverage",
        left: "Limited to local labor market — international travelers bounce to voicemail after hours.",
        right: "English, Spanish, French, Portuguese, Mandarin in-house plus 200+ languages on demand.",
        leftYes: false,
      },
      {
        label: "Disruption Response",
        left: "Weather, flight cancellations, and resort closures overwhelm front-desk staff.",
        right: "Dedicated crisis teams proactively rebook, communicate, and protect the guest relationship.",
        leftYes: false,
      },
      {
        label: "Loyalty Program Execution",
        left: "Loyalty questions routed generically — elite members don't feel recognized.",
        right: "Dedicated elite and concierge queues with named SLAs and loyalty-tier scripting.",
        leftYes: false,
      },
      {
        label: "Seasonal Peak Staffing",
        left: "Holiday, summer, and event peaks create chronic understaffing.",
        right: "Pre-planned surge staffing aligned to your forecast and event calendar.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Hotel Customer Service Outsourcing Onboarding",
    intro:
      "Every hotel group, resort, and travel brand follows the same five-stage launch — engineered to protect brand voice, integrate with your PMS/GDS, and prove revenue lift before peak season.",
    steps: [
      {
        title: "Brand Discovery",
        body: "Portfolio, brand voice, loyalty program, PMS stack, and seasonality mapped with your team.",
      },
      {
        title: "GDS & PMS Integration",
        body: "Secure connections to Sabre, Amadeus, Travelport, Opera, Cloudbeds, and loyalty platforms.",
      },
      {
        title: "Hospitality Certification",
        body: "Agents trained on brand standards, upsell playbooks, loyalty benefits, and crisis scripts.",
      },
      {
        title: "Pilot Property Launch",
        body: "Controlled rollout on a single property or region with daily QA and revenue-impact tracking.",
      },
      {
        title: "Portfolio Cutover",
        body: "Brand-wide go-live with crisis drill, loyalty desk launch, and revenue-management reporting.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Travel & Hospitality Sub-Segments We Serve",
    intro:
      "Hotels, resorts, OTAs, cruise lines, and vacation rentals all carry different economics and service expectations. Our hospitality BPO USA playbook flexes to the brand tier and booking channel of each.",
    items: [
      {
        icon: "building",
        stat: "Luxury",
        title: "Luxury & Upper-Upscale Hotels",
        body: "White-glove reservations, concierge, and loyalty desks for flagship and independent luxury hotels.",
      },
      {
        icon: "home",
        stat: "Resorts",
        title: "Resorts & Vacation Rentals",
        body: "All-inclusive bookings, activity coordination, and on-property guest services for resorts and rentals.",
      },
      {
        icon: "plane",
        stat: "OTAs",
        title: "OTAs & Travel Aggregators",
        body: "High-volume booking, modification, and dispute support across hotels, air, car, and package product.",
      },
      {
        icon: "plane",
        stat: "Cruise",
        title: "Cruise Lines & Tour Operators",
        body: "Cruise reservations, shore excursion booking, travel-insurance support, and group coordination.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Hotels and Travel Brands Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore hotel customer service outsourcing undermines luxury brand equity — accents, cultural distance, and inconsistent brand voice erode the guest experience you spent years building. Generalist BPOs don't invest in GDS/PMS fluency and can't execute a premium concierge conversation.",
      "Contact Center USA is different: a 100% US-based travel hospitality call center with dedicated hospitality supervisors, GDS/PMS-certified agents, and a white-glove coaching model that protects premium brand positioning.",
    ],
    bullets: [
      "100% US-based hospitality BPO USA workforce — brand voice stays consistent",
      "GDS/PMS certified on Sabre, Amadeus, Travelport, Opera, Cloudbeds, and loyalty platforms",
      "Dedicated luxury concierge desk with named agents and priority SLAs for elite guests",
      "Crisis and disruption protocols calibrated to weather, health, and operational events",
      "Seasonal surge staffing aligned to your booking calendar and revenue-management forecasts",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your travel hospitality call center to a US-based specialist?",
    accent: "US-based specialist",
    body: "If your direct-booking conversion is lagging, your loyalty members feel generic, or your front desks are absorbing reservations they shouldn't, request a free consultation. We'll build a property-level revenue model and show expected lift on conversion, loyalty engagement, and cost per reservation.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Reservation Services",
    desc: "Professional reservation agents who book, modify, and manage travel arrangements.",
    href: "/services/reservations",
  },
  {
    title: "Multilingual Support",
    desc: "Native-speaking agents serving international travelers in their preferred language.",
    href: "/services/bilingual",
  },
  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock support for travelers across every time zone.",
    href: "/services/24-7-support",
  },
];

export default function TravelPage() {
  return (
    <ServicePageTemplate
      badge="Travel & Hospitality Call Center"
      title="Call Center Solutions for Travel & Hospitality"
      titleHighlight="Travel & Hospitality"
      subtitle="From reservations and concierge to crisis response and loyalty programs, deliver five-star guest experiences at every touchpoint with our travel-specialized agents."
      description="Travel is personal, and your support should be too. Our agents are trained in hospitality standards, fluent in GDS platforms, and equipped to handle everything from a simple booking change to a full-scale travel disruption. We represent your brand with the warmth and professionalism that turns first-time guests into lifelong loyal travelers."
      features={features}
      benefits={benefits}
      image="/images/hd-office-team.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
