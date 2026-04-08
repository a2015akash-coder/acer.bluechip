"use client";

import {
  CheckSquare,
  ChevronRight,
  FileText,
  ShoppingCart,
  UserCheck,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Scope",
    desc: "Define requirements, select hardware, and align lifecycle services.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Upgrade & Deployment",
    desc: "Configure devices, deploy systems, and support refresh requirements.",
  },
  {
    icon: CheckSquare,
    number: "03",
    title: "In-Use",
    desc: "Provide Tier 1 support and manage device replacement when required.",
  },
  {
    icon: ShoppingCart,
    number: "04",
    title: "Decommission & Replace",
    desc: "Manage device collection, secure erasure, and lifecycle replacement.",
  },
];

export default function HowDaasWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-18 sm:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">


          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Rest Easy with <span className="text-acer">End-to-End</span> Support
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            A structured lifecycle framework that enables partners to deliver
            and manage Acer devices from initial scoping through deployment,
            support, refresh, and secure replacement.
          </p>
        </div>

        {/* Desktop */}
        <div className="relative hidden lg:block">
          {/* Main connector line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-green-200 via-slate-200 to-blue-200" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative pt-8 transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Timeline node */}

                  <div className="relative rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 group-hover:shadow-[0_18px_55px_rgba(15,23,42,0.10)]">
                    {/* Step top row */}
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                        Step {step.number}
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-acer shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold leading-snug text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {step.desc}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-acer to-green-400/70" />
                  </div>

                  {/* Arrow between cards */}
                  {index < steps.length - 1 ? (
                    <div className="pointer-events-none absolute top-[2.1rem] -right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="relative space-y-5 lg:hidden">
          <div className="absolute top-2 bottom-2 left-[1.15rem] w-px bg-gradient-to-b from-green-200 via-slate-200 to-blue-200" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur"
              >
                {/* Timeline node */}
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-acer text-sm font-semibold text-white shadow">
                  {step.number}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-acer">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <h3 className="text-base font-semibold leading-snug text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("partnerform")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-acer px-8 py-3 font-semibold text-white shadow transition-all duration-300 hover:bg-acer-dark hover:shadow-lg"
          >
            Inquire About DaaS
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}