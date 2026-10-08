export const SITE_CONFIG = {
  name: "Solvantra Global",
  title: "Solvantra Global — People. Processes. Technology.",
  description:
    "Solvantra provides reliable, scalable, and technology-driven operational support for businesses across industries — from customer communication and administrative workflows to claims, scheduling, lead management, and dedicated staffing.",
  url: "https://solvantra.com",
};

export const NAVIGATION_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Why Solvantra", path: "/why-solvantra" },
  { label: "Technology & Security", path: "/technology-security" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Contact", path: "/contact" },
];

export const CORE_SERVICES = [
  {
    id: "call-support",
    title: "24/7 Call Support",
    description: "24/7 professional customer communication and inbound desk management.",
    sla: "< 15s Average Speed of Answer",
    deliverables: [
      "Inbound customer service & hotline triage",
      "Outbound follow-ups & satisfaction checks",
      "Dedicated IVR & escalation protocols",
      "Real-time call recording & sentiment scoring",
    ],
  },
  {
    id: "chat-email",
    title: "Chat & Email Support",
    description: "Responsive, prompt, and organized multi-channel customer communications.",
    sla: "< 5m First Response Guarantee",
    deliverables: [
      "Live chat monitoring & ticket resolution",
      "Email queue triage & macro responses",
      "Social media DM & review response desk",
      "CRM & helpdesk ticket synchronization",
    ],
  },
  {
    id: "ai-scheduling",
    title: "AI Scheduling",
    description: "Automated client booking, smart calendar reminders, and timely follow-ups.",
    sla: "Zero Calendar Overlaps Guaranteed",
    deliverables: [
      "Intelligent calendar slot optimization",
      "Automated SMS/Email appointment reminders",
      "No-show reduction & re-engagement sequences",
      "Multi-timezone resource coordination",
    ],
  },
  {
    id: "claims-ar",
    title: "Claims & AR Support",
    description: "Efficient claims management, denial resolution, and accounts receivable acceleration.",
    sla: "99.2% Clean Claim Rate",
    deliverables: [
      "Insurance claim generation & submission",
      "Denial triage & appeals management",
      "Aged receivables audit & patient/client outreach",
      "Payment gateway & invoice reconciliation",
    ],
  },
  {
    id: "admin-support",
    title: "Administrative Support",
    description: "Precision back-office assistance, data verification, and documentation management.",
    sla: "99.8% Data Accuracy Score",
    deliverables: [
      "Data entry, audit & database hygiene",
      "Document formatting, filing & indexing",
      "Executive calendar & travel coordination",
      "Vendor invoice audit & approval routing",
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Process",
    description: "Structured governance, rigorous quality checks, and institutional SOP management.",
    sla: "100% SOP Compliance Audited",
    deliverables: [
      "SOP creation, maintenance & versioning",
      "Regulatory audit preparation (HIPAA, SOC-2)",
      "Internal QA scorecards & call auditing",
      "Incident tracking & root cause analysis",
    ],
  },
  {
    id: "lead-mgmt",
    title: "Lead Management",
    description: "Prompt pipeline enrichment, contact qualification, and revenue opportunity routing.",
    sla: "< 2m Lead Response Window",
    deliverables: [
      "Inbound lead response & qualification",
      "B2B contact enrichment & CRM logging",
      "Discovery call booking for sales team",
      "Inactive lead re-activation campaigns",
    ],
  },
  {
    id: "virtual-staffing",
    title: "Virtual Staffing",
    description: "Seamless remote specialists dedicated entirely to your ongoing enterprise workflows.",
    sla: "100% Dedicated Team Allocation",
    deliverables: [
      "Full-time dedicated operations specialists",
      "Custom domain onboarding & security setup",
      "Direct Slack/Teams integration with your team",
      "Transparent daily performance dashboards",
    ],
  },
];

export const TRUST_INDICATORS = [
  { title: "24/7", subtitle: "Dedicated Support" },
  { title: "Dedicated", subtitle: "Vetted Teams" },
  { title: "AI-Enabled", subtitle: "Precision Operations" },
  { title: "Scalable", subtitle: "Flexible Solutions" },
];

export const GLOBAL_STATS = [
  { value: "200+", label: "Global Clients", description: "Serving institutional organizations, growth ventures, and specialized practices worldwide." },
  { value: "98%", label: "Client Satisfaction SLA", description: "Rigorous QA monitoring, continuous feedback loops, and high team retention rates." },
  { value: "5+", label: "Core Industries", description: "Tailored operational architecture across healthcare, logistics, finance, tech, and retail." },
];

export const INDUSTRIES_LIST = [
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    description: "HIPAA-compliant patient intake, medical billing, prior authorizations, and claims resolution.",
    metrics: "99.4% Claims Approval",
    image: "/images/industry_healthcare.jpg",
  },
  {
    id: "home-services",
    title: "Home Services",
    description: "Administrative assistance, call handling, appointment scheduling, lead management, and dispatch coordination.",
    metrics: "24/7 Dispatch Readiness",
    image: "/images/industry_home_services.jpg",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Lead qualification, CRM management, customer communication, and administrative support.",
    metrics: "< 5m Lead Response",
    image: "/images/industry_real_estate.jpg",
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    description: "Customer service, order support, email/chat management, enquiries, and back-office operations.",
    metrics: "99.2% Resolution SLA",
    image: "/images/industry_ecommerce.jpg",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    description: "Administrative assistance, client communication, scheduling, documentation, and workflow support.",
    metrics: "100% SOP Compliance",
    image: "/images/service_admin_support.jpg",
  },
  {
    id: "finance",
    title: "Financial & Business Services",
    description: "Administrative operations, documentation, customer communication, and process support.",
    metrics: "100% Audit Readiness",
    image: "/images/service_claims_ar.jpg",
  },
  {
    id: "tech",
    title: "Technology & SaaS",
    description: "Customer support, lead management, CRM operations, and workflow assistance.",
    metrics: "98.5% CSAT Score",
    image: "/images/service_ai_scheduling.jpg",
  },
  {
    id: "other",
    title: "Other Industries",
    description: "Have a different operational requirement? Solvantra can build a customized support model around your workflow.",
    metrics: "Custom SLA Models",
    image: "/images/service_virtual_teams.jpg",
  },
];
