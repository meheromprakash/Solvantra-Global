import React from "react";
import { Search, FileCode2, UserCheck2, Rocket, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Workflow Audit",
      timeline: "Days 1 \u2013 3",
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
      timeline: "Days 4 \u2013 7",
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
      timeline: "Days 8 \u2013 12",
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

        <div className="space-y-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40"
              >
                <div className="lg:col-span-4 flex items-center gap-4 sm:gap-6">
                  <span className="font-stat-numeral text-4xl sm:text-5xl text-primary-container font-normal shrink-0">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0 shadow-sm transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105">
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <span className="font-eyebrow text-[10px] text-primary uppercase tracking-wider block">
                      {step.timeline}
                    </span>
                    <h3 className="font-headline-sm text-lg sm:text-xl text-on-surface">
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

        {/* Process Visual Banner */}
        <div
          className="dark-bg-section mt-12 rounded-xl overflow-hidden shadow-xl border border-primary-container/30 relative aspect-auto md:aspect-[21/9] min-h-[220px] md:min-h-[260px] group"
          style={
            {
              "--dark-bg-image": "url('/images/dark_bg_cta.webp')",
            } as React.CSSProperties
          }
        >
          <div className="hidden md:block dark-bg-layer" />
          <div className="hidden md:block dark-bg-overlay" />

          <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-center items-start">
            <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-[0.14em] mb-2 block">
              Continuous Operation &amp; QA
            </span>
            <h3 className="font-headline-lg text-2xl md:text-3xl text-surface-bright mb-3 max-w-lg">
              Ready to Build Your Support Team?
            </h3>
            <p className="font-body-md text-sm text-secondary-fixed-dim max-w-md mb-6 leading-relaxed">
              Let's discuss your operational requirements and create a solution that works for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
