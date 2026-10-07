import React from "react";
import { Search, FileCode2, UserCheck2, Rocket, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Workflow Audit",
      timeline: "Days 1 – 3",
      summary: "Our solutions architects analyze your existing operational volume, software stack, peak pain points, and target SLA metrics.",
      activities: [
        "In-depth workflow mapping & baseline metric capture",
        "Volume forecasting & staffing requirement analysis",
        "Security & compliance protocol review (NDA, BAA, SOC-2)",
      ],
    },
    {
      number: "02",
      icon: FileCode2,
      title: "SOP & SLA Blueprint Mapping",
      timeline: "Days 4 – 7",*
      summary: "We codify your operational standards into explicit, step-by-step Standard Operating Procedures (SOPs) and establish real-time quality scorecards.",
      activities: [
        "Interactive SOP documentation & version lock",
        "Escalation tree & threshold definition",
        "CRM/Software access provisioning & sandbox testing",
      ],
    },
    {
      number: "03",
      icon: UserCheck2,
      title: "Talent Selection & Intensive Onboarding",
      timeline: "Days 8 – 12",
      summary: "We assign dedicated specialists from our pre-vetted talent pool, conducting intensive training tailored to your brand voice and workflows.",
      activities: [
        "Domain-specific candidate selection & approval",
        "Hands-on scenario simulation & macro training",
        "Dry-run quality audits & SLA stress testing",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Go-Live & Continuous QA Governance",
      timeline: "Day 14+",
      summary: "Your dedicated pod transitions into live operational coverage with active Quality Assurance monitoring and weekly performance reviews.",
      activities: [
        "Seamless live shift transition & real-time monitoring",
        "Weekly QA scorecard delivery & team coaching",
        "Continuous workflow optimization & scale adjustments",
      ],
    },
  ];

  return (
    <section className="w-full bg-surface py-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <SectionHeading
          eyebrow="Deployment Framework"
          title="From Initial Audit to Live Pod in 14 Days"
          subtitle="Our structured 4-step onboarding framework guarantees zero operational disruption, strict SLA compliance, and rapid integration with your team."
          align="center"
        />

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 flex items-center gap-6">
                  <span className="font-stat-numeral text-5xl text-primary-container font-normal">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="font-eyebrow text-[10px] text-primary uppercase tracking-wider block">
                      {step.timeline}
                    </span>
                    <h3 className="font-headline-sm text-xl text-on-surface">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="font-body-md text-sm text-secondary leading-relaxed">
                    {step.summary}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {step.activities.map((act, i) => (
                      <div key={i} className="p-3 bg-surface-container-low rounded border border-outline-variant/20 flex items-start gap-2 text-xs text-on-surface">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
