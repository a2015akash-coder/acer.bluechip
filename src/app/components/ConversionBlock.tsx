"use client";

import { LeadForm } from "./LeadForm";

export default function ConversionBlock() {
  return (
    <section
      id="partnerform"
      className="relative overflow-hidden border-t border-gray-100 bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-[26rem] w-[26rem] rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Ready to Deliver <span className="text-acer">Acer DaaS</span> with
              Lower Upfront Cost?
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Speak with Bluechip to explore how Acer DaaS can support your
              client lifecycle programs.
            </p>
          </div>

          <div className="w-full">
            <LeadForm source="conversion_block" formId="partner-daas-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
