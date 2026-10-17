// Single source of truth for Solvantra Global Services and Operations
// TODO: confirm certifications with client

export interface WorkflowStep {
  step: string;
  label: string;
  sublabel: string;
}

export interface ServiceItem {
  slug: "real-estate" | "home-services" | "healthcare";
  num: "01" | "02" | "03";
  title: string;
  audience: string;
  description: string;
  includedItems: string[];
  workflow: WorkflowStep[];
  linkLabel: string;
  href: string;
  operationsTags: string[];
}

export interface OperationItem {
  num: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "healthcare",
    num: "01",
    title: "Healthcare",
    audience: "Dental & medical clinics",
    description:
      "Dental and medical revenue cycle management, clean claims processing, status tracking, and disciplined denial and accounts receivable resolution.",
    includedItems: [
      "Eligibility & Benefits Verification",
      "Claim Preparation & Submission",
      "Denial & AR Follow-up",
    ],
    workflow: [
      { step: "01", label: "Intake", sublabel: "Patient registration" },
      { step: "02", label: "Verify Eligibility", sublabel: "Payer confirmed" },
      { step: "03", label: "Claim", sublabel: "Clean submission" },
      { step: "04", label: "Resolution", sublabel: "AR reconciled" },
    ],
    linkLabel: "Explore Healthcare Pod",
    href: "/healthcare",
    operationsTags: [
      "Claims & Revenue Operations",
      "Compliance & Process Admin",
      "Dedicated Operational Pods",
    ],
  },
  {
    slug: "real-estate",
    num: "02",
    title: "Real Estate",
    audience: "Estate agents, lettings, and property managers",
    description:
      "24/7 enquiry handling, lettings support, viewing bookings, tenant communication, and compliance administration configured specifically for agency operations.",
    includedItems: [
      "24/7 Enquiry Handling & Diary Bookings",
      "Maintenance Helpdesk & Urgency Triage",
      "Statutory Compliance Administration",
      "Tenant & Landlord Follow-Through",
    ],
    workflow: [
      { step: "01", label: "Enquiry", sublabel: "Omnichannel inbound" },
      { step: "02", label: "Qualify", sublabel: "Criteria verified" },
      { step: "03", label: "Book Viewing", sublabel: "Diary synchronized" },
      { step: "04", label: "CRM Log", sublabel: "Audit history" },
    ],
    linkLabel: "Explore Real Estate Pod",
    href: "/real-estate",
    operationsTags: [
      "24/7 Call & Chat Support",
      "Intelligent Scheduling & Dispatch",
      "Lead Management & Follow-Up",
    ],
  },
  {
    slug: "home-services",
    num: "03",
    title: "Home Services",
    audience: "HVAC, plumbing, electrical, field trades and home care agencies",
    description:
      "24/7 customer front desk, appointment scheduling, technician coordination, emergency dispatch, and customer follow-ups that keep trucks rolling.",
    includedItems: [
      "24/7 Live Inbound Front Desk",
      "Calendar & Software Scheduling",
      "Home Care & Nursing Scheduling",
    ],
    workflow: [
      { step: "01", label: "Call", sublabel: "Immediate response" },
      { step: "02", label: "Schedule", sublabel: "Slot optimization" },
      { step: "03", label: "Dispatch", sublabel: "Technician routed" },
      { step: "04", label: "Follow-up", sublabel: "Review & invoice" },
    ],
    linkLabel: "Explore Home Services Pod",
    href: "/home-services",
    operationsTags: [
      "24/7 Call & Chat Support",
      "Intelligent Scheduling & Dispatch",
      "Administrative Support",
    ],
  },
];

export const OPERATIONS: OperationItem[] = [
  {
    num: "01",
    title: "24/7 Call & Chat Support",
    description:
      "Around-the-clock inbound call handling, live chat triage, and enquiry queue management in your company name.",
    deliverables: [
      "24/7 Inbound & outbound call handling with dedicated IVR",
      "Multi-channel live chat, email queue & ticket resolution",
      "Dedicated escalation protocols & priority routing",
      "Real-time call recording, sentiment scoring & CRM sync",
    ],
  },
  {
    num: "02",
    title: "Intelligent Scheduling & Dispatch",
    description:
      "Real-time calendar slot coordination, automated reminders, and field dispatch.",
    deliverables: [
      "Intelligent calendar slot optimization",
      "Automated SMS/Email appointment reminders",
      "No-show reduction & re-engagement sequences",
      "Multi-timezone resource coordination",
    ],
  },
  {
    num: "03",
    title: "Claims & Revenue Operations",
    description:
      "End-to-end billing, clean claims, denial resolution, and accounts receivable acceleration.",
    deliverables: [
      "Insurance claim generation & submission",
      "Denial triage & appeals management",
      "Aged receivables audit & client outreach",
      "Payment gateway & invoice reconciliation",
    ],
  },
  {
    num: "04",
    title: "Administrative Support",
    description:
      "Back-office assistance, data verification, CRM hygiene, and documentation management.",
    deliverables: [
      "Data entry, audit & database hygiene",
      "Document formatting, filing & indexing",
      "Executive calendar & travel coordination",
      "Vendor invoice audit & approval routing",
    ],
  },
  {
    num: "05",
    title: "Compliance & Process Admin",
    description:
      "Structured workflow governance, audit-ready records, and institutional SOP management.",
    deliverables: [
      "SOP creation, maintenance & versioning",
      // TODO: confirm certifications with client
      "Regulatory audit preparation",
      "Internal QA scorecards & call auditing",
      "Incident tracking & root cause analysis",
    ],
  },
  {
    num: "06",
    title: "Lead Management & Follow-Up",
    description:
      "Rapid qualification, booking, pipeline enrichment, and proactive customer follow-through.",
    deliverables: [
      "Inbound lead response & qualification",
      "B2B contact enrichment & CRM logging",
      "Discovery call booking for sales team",
      "Inactive lead re-activation campaigns",
    ],
  },
  {
    num: "07",
    title: "Dedicated Operational Pods",
    description:
      "Full-time specialist teams trained on your workflows, tools, and brand voice.",
    deliverables: [
      "Full-time dedicated operations specialists",
      "Custom domain onboarding & security setup",
      "Direct Slack/Teams integration with your team",
      "Transparent daily performance dashboards",
    ],
  },
];
