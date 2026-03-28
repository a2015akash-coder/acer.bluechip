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
    number: "1",
    title: "Choose Your Hardware",
    desc: "Select from laptops, desktops, monitors, and supporting devices to meet your business needs",
  },
  {
    icon: UserCheck,
    number: "2",
    title: "Pick Lifecycle Services",
    desc: "Select pre-deployment, deployment, in-use, and end-of-term services tailored to your organisation",
  },
  {
    icon: CheckSquare,
    number: "3",
    title: "Set Your Service Term",
    desc: "Choose the subscription duration that best fits your organisation's needs and budget",
  },
  {
    icon: ShoppingCart,
    number: "4",
    title: "Get Your Proposal",
    desc: "Receive a clear monthly proposal based on your selected hardware and services.",
  },
];

export default function HowDaasWorks() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            How the <span className="text-acer">DaaS</span> Process Works
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-4 gap-12 text-center">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div key={i} className="flex flex-col items-center">
                  {/* Number Circle */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-acer text-2xl font-semibold text-white shadow-md">
                    {step.number}
                  </div>

                  {/* Connector Dot + Line */}
                  <div className="mt-6 mb-8 flex w-full items-center">
                    <div className="h-[2px] flex-1 bg-acer/30" />
                    <div className="h-3 w-3 rounded-full bg-acer" />
                    <div className="h-[2px] flex-1 bg-acer/30" />
                  </div>

                  {/* Icon */}
                  <div className="text-acer">
                    <Icon className="h-14 w-14" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xs text-sm text-slate-600">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="space-y-12 lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-acer font-semibold text-white">
                  {step.number}
                </div>

                <div>
                  <div className="mb-2 text-acer">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-1 text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-acer px-8 py-3 font-semibold text-white shadow transition-all hover:bg-acer-dark"
          >
            Start Your DaaS Journey
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
