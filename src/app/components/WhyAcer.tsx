"use client";

import {
  ChevronRight,
  Headphones,
  Layers,
  Leaf,
  Settings,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Complete Lifecycle Support",
    text: "Support your clients with defined predeployment, in-use, and end-of-term processes within the Acer DaaS program.",
  },
  {
    icon: Settings,
    title: "Seamless & Deployment",
    text: "Access kitting, asset tagging, configuration, and enrolment services aligned to project requirements.",
  },
  {
    icon: Headphones,
    title: "Reliable Support & Asset Management",
    text: "Incorporate Tier 1 support and portal-based asset management within your client delivery model.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant Disposal",
    text: "Leverage ISO, R2, NIST 800:88, and DOD-aligned processes within the structured DaaS framework.",
  },
  {
    icon: Leaf,
    title: "Flexible, Sustainable Hardware",
    text: "Access Acer commercial devices with substitution options where required, aligned to deployment scope.",
  },
];

export default function WhyAcer() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Why Work with <span className="text-blue-700">Bluechip</span> for{" "}
            <span className="text-acer">Acer</span> DaaS
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            As an authorised Acer distributor, Bluechip enables partners to
            structure and coordinate Device as a Service programs through the
            Acer DaaS framework.
          </p>
        </div>

        {/* Desktop Horizontal Flow */}
        <div className="relative hidden lg:block">
          {/* Connector Line */}
          <div className="absolute top-12 right-0 left-0 h-[2px] bg-gradient-to-r from-green-200 via-slate-200 to-blue-200" />

          <div className="relative grid grid-cols-5 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={i}
                  className="group relative text-center transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-200 bg-white text-acer shadow-sm transition-all duration-300 group-hover:border-green-300 group-hover:shadow-md">
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 mb-3 text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Text */}
                  <p className="px-2 text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="relative space-y-12 lg:hidden">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-5 w-px bg-slate-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className="relative flex gap-5">
                {/* Icon */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-acer shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-acer px-8 py-3 font-semibold text-white shadow transition-all duration-300 hover:bg-acer-dark hover:shadow-lg"
            onClick={() =>
              document
                .getElementById("daas-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Inquire About Acer DaaS
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
