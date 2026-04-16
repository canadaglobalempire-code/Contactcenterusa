import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Virtual & Remote Support | Work-From-Home Agents & Virtual Assistants | Contact Center USA",
  description:
    "Virtual and remote support services including work-from-home agents, virtual assistants, remote customer service teams, and distributed workforce management. Flexible, scalable, and cost-effective.",
  alternates: { canonical: "/services/virtual-remote-support" },
};

const features = [
  {
    title: "Work-From-Home Agent Programs",
    desc: "Fully managed remote agent teams with enterprise-grade security, quality monitoring, and performance management — giving you access to top talent nationwide without geographic limitations or facility overhead.",
  },
  {
    title: "Virtual Assistant Services",
    desc: "Dedicated virtual assistants who handle administrative tasks, calendar management, email triage, data entry, and customer follow-ups — freeing your team to focus on high-value strategic work.",
  },
  {
    title: "Remote Technical Support",
    desc: "Skilled remote technicians who troubleshoot software issues, guide users through configurations, and resolve technical problems via phone, chat, and screen-sharing tools from secure home offices.",
  },
  {
    title: "Distributed Workforce Management",
    desc: "Comprehensive workforce management for remote teams including scheduling optimization, real-time adherence monitoring, performance dashboards, and collaboration tools that keep distributed agents connected and productive.",
  },
  {
    title: "Secure Remote Infrastructure",
    desc: "Enterprise-grade security for remote operations including encrypted VPN connections, endpoint protection, multi-factor authentication, secure desktop environments, and continuous compliance monitoring across every home office.",
  },
  {
    title: "Hybrid Onsite/Remote Models",
    desc: "Flexible staffing models that blend onsite and remote agents based on your needs, enabling geographic redundancy, disaster recovery, extended coverage hours, and access to specialized talent pools.",
  },
];

const benefits = [
  "Access to nationwide talent pool",
  "Enterprise-grade remote security",
  "Lower overhead than facility-based teams",
  "Geographic redundancy & disaster recovery",
  "Flexible scaling up or down",
  "Extended coverage across time zones",
];

const stats = [
  { value: 30, suffix: "%", label: "Lower Operating Costs" },
  { value: 99.7, suffix: "%", label: "Remote Uptime SLA", decimals: 1 },
  { value: 50, suffix: "+", label: "States With Active Agents" },
  { value: 96, suffix: "%", label: "Agent Retention Rate" },
];

const testimonial = {
  quote:
    "Moving to Contact Center USA's virtual agent model cut our operating costs by 30% while actually improving quality scores. Their remote infrastructure is rock-solid and their agents are more engaged and productive than our previous in-office team.",
  name: "L.H.",
  title: "SVP of Customer Operations",
  company: "A Leading Financial Services Firm",
  initials: "LH",
};

const faqs = [
  {
    question: "How do you ensure quality and productivity with remote agents?",
    answer:
      "We use comprehensive remote workforce management tools including real-time screen monitoring, automated schedule adherence tracking, speech and text analytics, and gamified performance dashboards. Supervisors conduct regular virtual coaching sessions, and agents participate in daily team huddles. Our remote agents consistently match or exceed the quality metrics of in-office teams.",
  },
  {
    question: "What security measures protect data in a work-from-home environment?",
    answer:
      "Every remote agent operates on a locked-down virtual desktop environment accessed via encrypted VPN. We enforce multi-factor authentication, disable local storage and USB ports, monitor all network activity, and require dedicated workspaces with privacy standards. Our remote security program is SOC 2 Type II certified and passes regular third-party penetration testing.",
  },
  {
    question: "Can remote agents access our internal systems and tools?",
    answer:
      "Yes. Our secure remote infrastructure supports access to CRM systems, knowledge bases, ticketing platforms, and custom applications through encrypted connections. We work with your IT team during onboarding to configure secure access that meets your compliance requirements while providing agents the tools they need to perform effectively.",
  },
  {
    question: "What happens if a remote agent has technical issues or loses connectivity?",
    answer:
      "We maintain a dedicated technical support team for remote agents available 24/7. All agents have backup internet requirements in their contracts, and our workforce management system automatically detects connectivity drops and redistributes calls to available agents within seconds. We also maintain a standby pool for rapid backfill if needed.",
  },
  {
    question: "How does the hybrid onsite/remote model work?",
    answer:
      "Our hybrid model lets you combine facility-based agents for roles requiring onsite presence with remote agents for overflow, extended hours, or specialized skills. Calls route seamlessly between onsite and remote agents based on availability, skills, and your business rules. You get a single point of management regardless of where agents are located.",
  },
];

const relatedServices = [
  {
    title: "Technical Support Outsourcing",
    desc: "Multi-tier technical support with remote troubleshooting, help desk services, and escalation management.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Back Office Outsourcing",
    desc: "Virtual administrative support for data entry, document processing, and business operations.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Contact Center Software Solutions",
    desc: "Cloud-based platforms that power remote contact centers with enterprise security and full feature parity.",
    href: "/services/contact-center-software-solutions",
  },
];

export default function VirtualRemoteSupportPage() {
  return (
    <ServicePageTemplate
      badge="Virtual & Remote Support"
      title="Virtual Agent Teams That Deliver Enterprise Quality From Anywhere"
      titleHighlight="From Anywhere"
      subtitle="Access top talent nationwide with our managed remote and virtual assistant programs — backed by enterprise security, real-time monitoring, and proven performance management."
      description="The future of customer support is distributed. Our virtual and remote support programs give you access to the best agents across the country without the overhead of physical facilities. Every remote agent operates within our secure, monitored infrastructure with the same quality standards, real-time coaching, and performance accountability as an onsite team. Whether you need full work-from-home programs, virtual assistants, or hybrid flexibility, we deliver the talent and technology to make remote work flawlessly."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-laptop.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
