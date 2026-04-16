import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Information Technology Services | IT Support & Cloud | Contact Center USA",
  description:
    "IT support and infrastructure services including help desk, cloud management, network administration, cybersecurity, and technology consulting for businesses of all sizes.",
  alternates: { canonical: "/solutions/information-technology-services" },
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
];

export default function InformationTechnologyServicesPage() {
  return (
    <ServicePageTemplate
      badge="Information Technology Services"
      title="Reliable IT Support & Infrastructure Services for Growing Businesses"
      titleHighlight="Growing Businesses"
      subtitle="Keep your technology running, your data secure, and your teams productive with fully managed IT services from help desk to cloud infrastructure."
      description="Our information technology services provide end-to-end IT support for businesses that need enterprise-grade capabilities without the overhead of a large internal team. From 24/7 help desk and cloud management to cybersecurity and strategic consulting, we deliver the technology foundation your business needs to operate efficiently and scale confidently."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-pro.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
