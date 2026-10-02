import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "IT Help Desk Outsourcing | US-Based IT Services & Support";
const description =
  "IT help desk outsourcing with US-based technicians: L1-L3 support, service desk and desktop support, ticketing and ITSM handoff, and 24/7 coverage.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "it help desk outsourcing",
    "help desk outsourcing",
    "service desk outsourcing",
    "desktop support outsourcing",
    "it services outsourcing",
    "it help desk bpo",
    "managed it services usa",
    "it support outsourcing",
    "it bpo services",
    "outsourced it help desk",
    "24/7 it support",
    "managed it provider usa",
  ],
  alternates: { canonical: "/solutions/information-technology-services" },
  ...pageMeta(title, description, "/solutions/information-technology-services"),
};

const features = [
  {
    title: "Help Desk & End-User Support",
    desc: "Tiered IT help desk support from password resets to complex troubleshooting. Our certified technicians resolve issues quickly via phone, chat, email, and remote desktop — keeping your employees productive and your IT tickets moving.",
  },
  {
    title: "Cloud Infrastructure Management",
    desc: "We manage your cloud environments across AWS, Azure, and Google Cloud Platform — handling provisioning, scaling, cost optimization, security configuration, and 24/7 monitoring to keep your infrastructure reliable and your cloud spend under control.",
  },
  {
    title: "Network Administration & Monitoring",
    desc: "Proactive network monitoring, firewall management, VPN administration, and performance optimization ensure your business stays connected. Our NOC team detects and resolves issues before they impact operations.",
  },
  {
    title: "Cybersecurity & Threat Management",
    desc: "Layered security services including endpoint protection, vulnerability scanning, SIEM monitoring, incident response, and security awareness training to protect your organization against evolving cyber threats.",
  },
  {
    title: "IT Asset & Lifecycle Management",
    desc: "Track, manage, and optimize every technology asset from procurement through retirement. We handle hardware provisioning, software licensing, warranty management, and secure disposal to maximize your IT investment.",
  },
  {
    title: "Technology Consulting & Strategy",
    desc: "Our IT consultants help you evaluate technology options, plan migrations, design disaster recovery strategies, and build roadmaps that align your IT infrastructure with your business growth objectives.",
  },
];

const benefits = [
  "24/7 multi-channel IT help desk",
  "AWS, Azure, and GCP cloud management",
  "Proactive network monitoring and NOC",
  "Comprehensive cybersecurity protection",
  "IT asset lifecycle management",
  "Strategic technology consulting",
];

const stats = [
  { value: 95, suffix: "%", label: "First-Contact Resolution Rate" },
  { value: 99.9, suffix: "%", label: "Network Uptime Maintained", decimals: 1 },
  { value: 15, suffix: "min", label: "Average Help Desk Response" },
  { value: 35, suffix: "%", label: "Reduction in IT Costs" },
];

const testimonial = {
  quote:
    "Contact Center USA manages our entire IT help desk and cloud infrastructure. Response times are under 15 minutes, uptime is consistently above 99.9%, and our IT costs dropped 35%. They feel like an extension of our own technology team.",
  name: "R.C.",
  title: "CTO",
  company: "A Mid-Market E-Commerce Company",
  initials: "RC",
};

const faqs = [
  {
    question: "What is IT help desk outsourcing?",
    answer:
      "It means a provider runs your IT help desk for you: answering employee calls, chats and emails, logging and resolving tickets at L1 and L2, and escalating to L3 engineers or vendors when needed. Our help desk is staffed by US-based technicians and works inside your ticketing system.",
  },
  {
    question: "What is the difference between a help desk and a service desk?",
    answer:
      "A help desk fixes incidents, such as a failed login or a broken application. A service desk is the single point of contact for all IT services: it handles incidents plus service requests such as new accounts and hardware, tells users about planned changes and outages, and supports problem and change management.",
  },
  {
    question: "What is desktop support?",
    answer:
      "Desktop support is help with the devices and software employees use every day, such as laptops, operating systems, email, printers, VPN and single sign-on. Most of it is done remotely with the user's permission; hardware faults and new equipment need someone at the desk.",
  },
  {
    question: "What should we hand over to an outsourced IT help desk?",
    answer:
      "Access to your ticketing or ITSM system, your ticket categories and priority matrix, SLA targets, escalation contacts for L3 engineers and vendors, runbooks and knowledge base articles, and an asset and software inventory. The more of this exists on day one, the faster tickets close.",
  },
  {
    question: "What levels of IT support do you provide?",
    answer:
      "We provide full tiered support from Level 1 through Level 3. Level 1 handles common requests like password resets and software installs. Level 2 covers system administration, application troubleshooting, and escalated issues. Level 3 addresses infrastructure, architecture, and complex engineering problems.",
  },
  {
    question: "Can you manage a hybrid cloud and on-premises environment?",
    answer:
      "Yes. Many of our clients operate hybrid environments. We manage on-premises servers, private cloud, and public cloud resources as a unified environment — handling connectivity, security policies, data synchronization, and monitoring across all platforms.",
  },
  {
    question: "What cybersecurity frameworks do you follow?",
    answer:
      "Our security practices align with NIST Cybersecurity Framework, CIS Controls, and SOC 2 standards. We tailor our approach to your industry requirements including HIPAA for healthcare, PCI-DSS for payment processing, and CMMC for government contractors.",
  },
  {
    question: "Do you support remote and distributed workforces?",
    answer:
      "Absolutely. We specialize in supporting distributed teams with remote desktop management, VPN administration, cloud collaboration tools, endpoint security, and mobile device management. Our help desk is available 24/7 across all time zones.",
  },
  {
    question: "How do you handle after-hours emergencies and critical outages?",
    answer:
      "Our NOC operates 24/7/365 with automated monitoring and escalation procedures. Critical alerts are immediately routed to on-call engineers. We maintain defined SLAs for response and resolution times based on severity levels, and provide post-incident reports for every major event.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best IT Services Outsourcing in USA",
    heading: "The IT services outsourcing partner US businesses trust to run their help desk, cloud, and cybersecurity 24/7.",
    accent: "trust to run",
    body: [
      "Contact Center USA is one of the best it services outsourcing providers in the USA — a 100% US-based IT help desk BPO and managed IT services USA operator delivering Level 1–3 support, cloud administration, and enterprise-grade cybersecurity from secure domestic facilities.",
      "For businesses searching for managed it services usa partners that combine certified engineers, 24/7 NOC coverage, and predictable fixed-fee pricing, we replace fragmented vendors, aging internal help desks, and unpredictable ticket volumes with a single outsourced it support function built around your SLAs.",
    ],
    stats: [
      { stat: "95%", label: "First-contact resolution across tiered IT help desk BPO tickets" },
      { stat: "15 min", label: "Average response time — critical tickets routed to on-call engineers" },
      { stat: "35%", label: "Lower TCO vs. internal IT — no recruiting, benefits, or tooling overhead" },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "Support Tiers",
    heading: "Help Desk Tiers: What L1, L2 and L3 Handle",
    intro:
      "Most help desks are organized in tiers, so simple requests close fast and hard problems reach the right people. The names vary between companies; the logic does not.",
    steps: [
      {
        title: "Tier 0: Self-Service",
        body: "Knowledge base articles, password reset portals and status pages that let employees fix common issues without a ticket.",
      },
      {
        title: "Tier 1 (L1): First Contact",
        body: "Logs every ticket, verifies the user, resolves known issues such as password resets, access requests and software installs, and routes the rest.",
      },
      {
        title: "Tier 2 (L2): Troubleshooting",
        body: "System administration, application faults, remote desktop sessions and issues that need more access or more time than a first call.",
      },
      {
        title: "Tier 3 (L3): Engineering",
        body: "Infrastructure, network, cloud and security problems, root-cause analysis and fixes that change the environment itself.",
      },
      {
        title: "Tier 4: Vendors & Field",
        body: "Hardware warranty claims, software vendor cases and on-site work, tracked in the same ticket until it is closed.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Service Desk vs Help Desk",
    heading: "Service desk vs help desk: which one are you outsourcing?",
    image: "/images/hd-agents-working.jpg",
    imagePosition: "left",
    body: [
      "The two terms are often used as if they mean the same thing, but they describe different scopes. A help desk fixes problems: something is broken, a user cannot log in, an application throws an error. Its job is to restore service quickly and record what happened.",
      "A service desk is the single point of contact for all IT services, not just breakages. As well as incidents, it handles service requests such as new starter accounts, hardware and software requests and access changes, keeps users informed about planned changes and outages, and feeds problem and change management. If you are outsourcing, decide which scope you are buying, because a service desk needs a request catalog, approval rules and access to more of your systems.",
    ],
    bullets: [
      "Help desk: incidents and break-fix, focused on fast resolution",
      "Service desk: incidents plus service requests, changes and user updates",
      "Both: one ticket per contact, clear priorities and SLA targets",
      "Choose the scope first, then the provider",
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Desktop Support",
    heading: "What is desktop support? Remote vs deskside",
    image: "/images/cc-man-laptop.jpg",
    imagePosition: "right",
    body: [
      "Desktop support is help with the devices and software people use every day: laptops and desktops, operating systems, email and office applications, printers, VPN and single sign-on. Most of it can be done remotely. With the user's permission a technician connects to the device, sees the problem and fixes it, which is faster than a visit and works for remote and hybrid staff wherever they are.",
      "Deskside support means someone physically at the device. It is needed for hardware failures, new equipment setup, docking stations and peripherals, network ports and anything that will not start far enough for a remote session. A remote help desk handles these tickets by diagnosing as far as it can, then arranging the visit with your on-site IT staff, a field-service partner or the hardware vendor's warranty service, and keeping the ticket open until the user confirms the fix.",
    ],
    bullets: [
      "Remote: operating system, application, email, VPN, SSO and access issues",
      "Remote: software installs, updates and device configuration",
      "Deskside: hardware faults, new equipment, peripherals and cabling",
      "Handoffs to on-site staff or vendors tracked in the same ticket",
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Ticketing & ITSM",
    heading: "Ticketing and ITSM handoff to an outsourced help desk",
    image: "/images/cc-agent-desk.jpg",
    imagePosition: "left",
    body: [
      "An outsourced help desk should work inside your ticketing or IT service management (ITSM) system rather than a separate one, so every ticket, note and resolution stays in your records. Common platforms include ServiceNow, Jira Service Management and Zendesk. Agents need named accounts with single sign-on, multi-factor authentication and only the permissions their tier requires.",
      "The handoff decides how well the first month goes. Share your ticket categories and priority matrix, the response and resolution targets for each priority, the escalation paths and on-call contacts for L3 and vendors, existing runbooks and knowledge base articles, an asset and software inventory, and the users or systems that need special handling. Agree what L1 may change on its own and what needs approval, then review escalations and reopened tickets together each week until the pattern settles.",
    ],
    bullets: [
      "Your ITSM platform, with named agent accounts, SSO and MFA",
      "Ticket categories, priority matrix and SLA targets",
      "Runbooks, knowledge base articles and asset inventory",
      "Escalation paths for L3, vendors and on-call engineers",
      "Weekly review of escalations and reopened tickets",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House IT vs. Contact Center USA BPO",
    intro:
      "Every IT leader weighs the same decision: grow the internal help desk and NOC or outsource to a specialist it help desk bpo. Here's how the two compare on cost, coverage, and capability.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Coverage Hours",
        left: "Business hours only — after-hours tickets pile up or require expensive on-call rotations.",
        right: "True 24/7/365 coverage across help desk, NOC, and SOC — no nights, weekends, or holiday gaps.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Salaries, benefits, training, PTO, and tooling — fixed costs regardless of ticket volume.",
        right: "Fixed-fee managed it services usa pricing — ~35% lower TCO than internal equivalents.",
        leftYes: false,
      },
      {
        label: "Tier 2 / Tier 3 Depth",
        left: "Limited bench — one senior engineer out means escalations stall.",
        right: "Deep bench across systems, cloud, network, and security engineering.",
        leftYes: false,
      },
      {
        label: "Cloud & Cybersecurity Expertise",
        left: "Generalist staff rarely carry AWS, Azure, GCP, and SOC 2 certifications at the same time.",
        right: "Certified engineers across AWS, Azure, GCP, CIS Controls, and NIST CSF.",
        leftYes: false,
      },
      {
        label: "Ticket SLAs & Reporting",
        left: "Spreadsheet tracking; SLA adherence is hard to prove.",
        right: "Real-time dashboards with SLA, CSAT, FCR, and cost-per-ticket — audit-ready.",
        leftYes: false,
      },
      {
        label: "Scalability",
        left: "Hiring cycles of 60–90 days limit response to growth or M&A.",
        right: "Ramp it help desk bpo capacity up or down in 10–15 business days.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Managed IT Services USA Onboarding Process",
    intro:
      "Every it services outsourcing engagement follows the same disciplined five-step playbook — engineered to stabilize ticket backlogs, harden security posture, and transfer knowledge without disrupting your business.",
    steps: [
      {
        title: "Environment Discovery",
        body: "We inventory hardware, cloud tenants, SaaS, identity, and network topology to build a single source of truth.",
      },
      {
        title: "Runbook & SLA Design",
        body: "Jointly define severity levels, escalation paths, and response/resolution SLAs for every service tower.",
      },
      {
        title: "Secure Tooling Rollout",
        body: "Deploy RMM, ITSM, SIEM, and EDR stacks with SSO, MFA, and least-privilege access controls.",
      },
      {
        title: "Transition & Knowledge Transfer",
        body: "Shadow internal staff, absorb tribal knowledge, and take over tickets in planned waves — zero dropped issues.",
      },
      {
        title: "Continuous Improvement",
        body: "Monthly business reviews track SLA, CSAT, cost-per-ticket, and security posture — with roadmap updates each quarter.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with IT Services Outsourcing",
    intro:
      "Our managed it services usa practice is tuned to the regulatory and uptime realities of the industries we serve — no generic MSP playbook.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Life Sciences",
        body: "EHR support, HIPAA-aligned endpoint security, and clinical workstation help desk coverage for hospitals and provider networks.",
      },
      {
        icon: "landmark",
        stat: "SOC 2",
        title: "Financial Services",
        body: "Outsourced it help desk, trading-floor support, and SOC-as-a-service for banks, credit unions, fintech, and wealth managers.",
      },
      {
        icon: "shield",
        stat: "CMMC",
        title: "Government & Defense Contractors",
        body: "CMMC Level 2 aligned IT services outsourcing with US-person staffing and ITAR-aware handling workflows.",
      },
      {
        icon: "shopping-bag",
        stat: "PCI-DSS",
        title: "Retail, Ecommerce & SaaS",
        body: "Peak-season help desk scale, cloud cost optimization, and PCI-compliant infrastructure management.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for IT Help Desk BPO",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore MSPs struggle with accent, cultural context, and US business-hours realities — resulting in low CSAT and stalled tickets. Boutique internal IT teams can't maintain the depth required across help desk, network, cloud, and security at the same time. Enterprise MSPs bury you in pricing complexity and underwhelming SLAs.",
      "Contact Center USA is different: a 100% US-based it services outsourcing partner staffing certified engineers from secure domestic facilities, operating as a true extension of your IT org — with transparent fixed-fee pricing and real-time dashboards that prove SLA adherence every single month.",
    ],
    bullets: [
      "100% US-based IT help desk BPO workforce — no offshore handoffs",
      "24/7/365 NOC and SOC with certified Tier 1–3 engineers",
      "AWS, Azure, and GCP cloud administration and cost optimization",
      "SOC 2, HIPAA, and CMMC-aligned operational controls",
      "Fixed-fee managed it services usa contracts — predictable IT spend",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a smarter IT services outsourcing partner?",
    accent: "smarter IT services outsourcing",
    body: "If your IT tickets are backing up, your cloud spend is creeping, or your current it help desk bpo is missing SLAs, request a free consultation. We'll benchmark your current TCO, ticket performance, and security posture — then show you exactly what managed it services usa with Contact Center USA would look like.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Dialer & ACD Administration",
    desc: "Expert management of your contact center telephony platforms and call routing systems.",
    href: "/solutions/dialer-acd-administration",
  },
  {
    title: "Technical Support Outsourcing",
    desc: "Customer-facing technical support for your products and services across all channels.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Work-From-Home Solutions",
    desc: "Complete remote agent infrastructure including secure connectivity, monitoring, and support.",
    href: "/solutions/work-from-home-solutions",
  },
  {
    title: "Making Your Customer Service Experience Soar",
    desc: "See Contact Center USA's company history, 1999 founding, US-based growth, service milestones, and customer support infrastructure.",
    href: "/about/company-history",
  },
  {
    title: "Not Just a Call Center: Your Strategic Partner",
    desc: "Where our 25+ years of US-based contact center experience runs deepest — the sectors we staff, the compliance each demands, and the teams behind them.",
    href: "/about/industries",
  },
  {
    title: "What Makes Us Different",
    desc: "See why businesses choose Contact Center USA for US-based agents, flexible programs, clear reporting, and reliable outsourced customer support.",
    href: "/why-us",
  },
];

export default function InformationTechnologyServicesPage() {
  return (
    <ServicePageTemplate
      badge="Information Technology Services"
      title="IT Help Desk Outsourcing & Information Technology Services"
      titleHighlight="IT Help Desk Outsourcing"
      subtitle="Keep your technology running, your data secure, and your teams productive with fully managed IT services from help desk to cloud infrastructure."
      description="Our information technology services provide end-to-end IT support for businesses that need enterprise-grade capabilities without the overhead of a large internal team. From 24/7 help desk and cloud management to cybersecurity and strategic consulting, we deliver the technology foundation your business needs to operate efficiently and scale confidently."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-pro.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
