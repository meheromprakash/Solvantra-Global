export const SITE_CONFIG = {
  name: "Solvantra Global",
  tagline: "Driving Business, Soulfully.",
  title: "Solvantra Global — Driving Business, Soulfully.",
  description:
    "We bring people, processes, and technology together to help businesses operate smarter, serve better, and grow stronger.",
  url: "https://solvantra.global",
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
    description: "24/7 customer communication, live chat triage, and inbound front desk management.",
    sla: "Dedicated Channel Triage",
    deliverables: [
      "24/7 Inbound & outbound call handling in your company name",
      "Multi-channel live chat, web forms, and enquiry queue management",
      "Real-time call logging, sentiment scoring, and QA auditing",
      "CRM, software, and diary synchronization",
    ],
  },
  {
    id: "intelligent-scheduling",
    title: "Intelligent Scheduling & Dispatch",
    description: "Appointment booking, technician and caregiver coordination, and calendar synchronization.",
    sla: "Optimized Diary Coordination",
    deliverables: [
      "Real-time diary and calendar slot optimization",
      "Automated confirmations, reminders, and reschedule handling",
      "Field technician and caregiver coordination",
      "Emergency triage and fast gap coverage",
    ],
  },
  {
    id: "claims-revenue-ops",
    title: "Claims & Revenue Operations",
    description: "End-to-end billing, clean claim submissions, denial resolution, and AR management.",
    sla: "End-to-End Revenue Ops",
    deliverables: [
      "Insurance verification and eligibility checks",
      "Clean claim preparation, review, and electronic submission",
      "Denial triage, payer follow-up, and appeals management",
      "Payment posting, account reconciliation, and reporting",
    ],
  },
  {
    id: "admin-support",
    title: "Administrative Support",
    description: "Back-office assistance, data verification, onboarding, and documentation management.",
    sla: "Complete Record Hygiene",
    deliverables: [
      "Data entry, audit, and database hygiene",
      "Document chasing, referencing, and compliance tracking",
      "Customer and vendor status communications",
      "Reporting on volume, response times, and task metrics",
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Process Admin",
    description: "Structured workflow governance, deadline tracking, audit-ready records, and quality monitoring.",
    sla: "Audit-Ready Record Keeping",
    deliverables: [
      "Approved script and policy adherence",
      "Certificate, expiry date, and deadline reminders",
      "Quality scorecards, call monitoring, and coaching",
      "Role-based access and data confidentiality protocols",
    ],
  },
  {
    id: "lead-mgmt",
    title: "Lead Management & Follow-Up",
    description: "Rapid qualification, viewing and estimate booking, and proactive customer follow-through.",
    sla: "Fast Enquiry Response",
    deliverables: [
      "Inbound lead qualification on lawful, approved criteria",
      "Viewing and valuation booking placed straight into your diary",
      "Fast follow-up on unbooked quotes and past customer re-engagement",
      "CRM pipeline updates with complete interaction history",
    ],
  },
  {
    id: "dedicated-pods",
    title: "Dedicated Operational Pods",
    description: "Skilled teams trained on your operation, services, tools, and brand voice.",
    sla: "Dedicated Team Allocation",
    deliverables: [
      "Full-time operational specialists trained on your workflows",
      "Custom SOP, script, and escalation rule development",
      "Direct integration with your existing CRM and software",
      "Transparent regular reporting and continuous improvement",
    ],
  },
];

export const TRUST_INDICATORS = [
  { title: "24/7", subtitle: "Always-On Support" },
  { title: "Dedicated", subtitle: "Trained on Your Operations" },
  { title: "Intelligent", subtitle: "People, Process & Technology" },
  { title: "Accountable", subtitle: "Outcome-Driven Partnership" },
];

export const GLOBAL_STATS = [
  { value: "24/7", label: "Always-On Operations", description: "Around-the-clock enquiry handling, dispatch, and operational support across time zones." },
  { value: "100%", label: "Trained on Your Voice", description: "Teams follow your approved scripts, policies, and workflows representing your business by name." },
  { value: "3", label: "Specialized Sectors", description: "Tailored operational support for Real Estate, Home Services, and Healthcare." },
];

export const WHO_WE_HELP_LIST = [
  {
    id: "healthcare",
    title: "Healthcare",
    path: "/healthcare",
    description: "Dental and medical revenue cycle management, clean claims processing, eligibility verification, and disciplined denial resolution.",
    metrics: "Revenue Operations & RCM Management",
    image: "/images/industry_healthcare.jpg",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    path: "/real-estate",
    description: "24/7 enquiry handling, lettings support, viewing and valuation bookings, tenant and landlord communication, maintenance coordination, and compliance administration.",
    metrics: "Always On. Always Compliant.",
    image: "/images/industry_real_estate.jpg",
  },
  {
    id: "home-services",
    title: "Home Services",
    path: "/home-services",
    description: "24/7 enquiry handling, appointment scheduling, technician coordination, emergency dispatch support, follow-ups, and customer communication.",
    metrics: "Coverage. Coordination. Follow-through.",
    image: "/images/industry_home_services.jpg",
  },
];

export const INDUSTRIES_LIST = WHO_WE_HELP_LIST;
