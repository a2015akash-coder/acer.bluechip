"use client";

import { ChevronRight, DollarSign, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: DollarSign,
    title: "No Upfront Capital Investment",
    text: "Enable your clients to adopt devices without large initial spend, supporting smoother deployment and refresh cycles.",
  },
  {
    icon: TrendingUp,
    title: "Predictable OPEX Model",
    text: "Deliver structured monthly subscription terms that align with client budgeting and lifecycle planning.",
  },
];

export default function WhyAcer() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-full w-[42%] rounded-l-[3rem] bg-gradient-to-b from-emerald-50/90 via-white to-blue-50/70" />
        <div className="absolute top-16 right-16 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left intro */}
          <div className="max-w-xl text-center lg:text-left">
           

            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Reduce Costs with a Subscription-Based{" "}
              <span className="text-acer">Device Management</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              As an authorised Acer distributor, Bluechip enables partners to
              deliver Device as a Service through a subscription model that
              reduces upfront costs and shifts device investment to predictable
              monthly spend, supporting business laptops, PCs and monitors with
              scalable managed device services.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-acer px-8 py-3 font-semibold text-white shadow transition-all duration-300 hover:bg-acer-dark hover:shadow-lg"
                onClick={() =>
                  document
                    .getElementById("partnerform")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Inquire About DaaS
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right feature track */}
          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
              <div className="relative hidden lg:block">
                <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-emerald-300 via-slate-200 to-blue-300" />

                <div className="grid grid-cols-2 gap-8">
                  {steps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.title}
                        className="group relative text-center transition-transform duration-300 hover:-translate-y-2"
                      >
                        <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white text-acer shadow-sm transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md">
                          <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-5 lg:hidden">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-emerald-50 text-acer">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}