export const SITE_CONFIG = {
  name: "Solvantra Global",
  title: "Solvantra Global — People. Processes. Technology.",
  description:
    "Solvantra provides reliable, scalable, and technology-driven operational support for businesses across industries — from customer communication and administrative workflows to claims, scheduling, lead management, and dedicated staffing.",
  url: "https://solvantra.com",
};

export const NAVIGATION_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Why Solvantra", path: "/why-solvantra" },
];

export const CORE_SERVICES = [
  {
    id: "call-chat-support",
    title: "24/7 Call & Chat Support",
    description: "24/7 omnichannel customer communication, live chat triage, and inbound desk management.",
    sla: "< 15s Call / < 5m Chat Response",
    deliverables: [
      "24/7 Inbound & outbound call handling with dedicated IVR",
      "Multi-channel live chat, email queue & ticket resolution",
      "Real-time call recording, sentiment scoring & QA auditing",
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
      "Regulatory audit preparation (HIPAA, ISO)",
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
  { value: "3", label: "Specialized Sectors", description: "Tailored operational architecture across Home Services, Healthcare, and Real Estate." },
];

export const WHO_WE_HELP_LIST = [
  {
    id: "home-services",
    title: "Home Services",
    path: "/home-services",
    description: "Administrative assistance, 24/7 call dispatch, emergency job intake, appointment scheduling, lead management, and technician coordination.",
    metrics: "24/7 Dispatch Readiness",
    image: "/images/industry_home_services.jpg",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    path: "/healthcare",
    description: "HIPAA-compliant patient intake, insurance verification, medical billing, prior authorizations, and claims resolution.",
    metrics: "99.4% Claims Approval",
    image: "/images/industry_healthcare.jpg",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    path: "/real-estate",
    description: "Rapid lead qualification, CRM management, customer communication, tour scheduling, and administrative support.",
    metrics: "< 5m Lead Response",
    image: "/images/industry_real_estate.jpg",
  },
];

export const INDUSTRIES_LIST = WHO_WE_HELP_LIST;
