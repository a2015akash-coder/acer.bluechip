"use client";

import {
  BadgeCheck,
  ChevronRight,
  Check,
  ShieldCheck,
  LaptopMinimal,
  RefreshCcw,
  ShoppingBag,
  Wallet,
  X,
} from "lucide-react";

const comparisonItems = [
  {
    icon: Wallet,
    title: "Monthly payment",
    daas: true,
    leasing: true,
    emphasis: "neutral",
  },
  {
    icon: ShieldCheck,
    title: "All-round carefree package",
    subtitle: "Service, software, support, insurance included",
    daas: true,
    leasing: false,
    emphasis: "daas",
  },
  {
    icon: LaptopMinimal,
    title: "100% digital",
    daas: true,
    leasing: false,
    emphasis: "daas",
  },
  {
    icon: RefreshCcw,
    title: "Scale down if required",
    subtitle: "Only service/software, not applicable for hardware",
    daas: true,
    leasing: false,
    emphasis: "daas",
  },
  {
    icon: ShoppingBag,
    title: "Option to buy",
    daas: false,
    leasing: true,
    emphasis: "leasing",
  },
];

function StatusPill({
  value,
  variant,
}: {
  value: boolean;
  variant: "daas" | "leasing";
}) {
  if (value) {
    return (
      <div
        className={[
          "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm",
          variant === "daas"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : "border-slate-200 bg-white text-slate-700",
        ].join(" ")}
      >
        <Check className="mr-1.5 h-4 w-4" />
        Included
      </div>
    );
  }

  return (
    <div className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 sm:px-4 sm:text-sm">
      <X className="mr-1.5 h-4 w-4" />
      Not included
    </div>
  );
}

export default function DaaSLeasingComparison() {
  return (
    <section className="relative overflow-hidden bg-white py-18 sm:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-[-8rem] h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.035]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            How <span className="text-acer">Acer DaaS</span> Differs from
            Traditional Leasing
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Leasing helps spread hardware cost. DaaS goes further by combining
            devices with services, software, support and operational
            flexibility—giving partners a cleaner, more scalable client
            offering.
          </p>
        </div>

    

        {/* Desktop comparison */}
        <div className="relative mt-8 hidden lg:block">
          <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/85 shadow-[0_16px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="grid grid-cols-[1.3fr_0.7fr_0.7fr] border-b border-slate-200 bg-slate-50/80">
              <div className="px-8 py-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Comparison point
              </div>
              <div className="border-l border-slate-200 px-8 py-6 text-center">
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                  DAAS
                </span>
              </div>
              <div className="border-l border-slate-200 px-8 py-6 text-center">
                <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700">
                  LEASING
                </span>
              </div>
            </div>

            {comparisonItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={[
                    "grid grid-cols-[1.3fr_0.7fr_0.7fr] transition-colors duration-300",
                    index !== comparisonItems.length - 1
                      ? "border-b border-slate-200"
                      : "",
                    item.emphasis === "daas"
                      ? "bg-gradient-to-r from-emerald-50/50 via-white to-white hover:from-emerald-50/80"
                      : item.emphasis === "leasing"
                        ? "bg-gradient-to-r from-white via-white to-slate-50/60 hover:to-slate-50/90"
                        : "bg-white hover:bg-slate-50/60",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4 px-8 py-6">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-acer shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      {item.subtitle ? (
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">
                          {item.subtitle}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center justify-center border-l border-slate-200 px-8 py-6">
                    <StatusPill value={item.daas} variant="daas" />
                  </div>

                  <div className="flex items-center justify-center border-l border-slate-200 px-8 py-6">
                    <StatusPill value={item.leasing} variant="leasing" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile comparison */}
        <div className="mt-8 space-y-4 lg:hidden">
          {comparisonItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={[
                  "overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                  item.emphasis === "daas"
                    ? "border-emerald-200 bg-gradient-to-br from-white via-emerald-50/60 to-white"
                    : item.emphasis === "leasing"
                      ? "border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-white"
                      : "border-slate-200 bg-white",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-acer shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    {item.subtitle ? (
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {item.subtitle}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-emerald-200 bg-white/90 p-4 text-center">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      DAAS
                    </div>
                    <StatusPill value={item.daas} variant="daas" />
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-center">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                      Leasing
                    </div>
                    <StatusPill value={item.leasing} variant="leasing" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote + CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-5 text-center sm:px-8 lg:mt-10 lg:flex-row lg:text-left">
          <p className="text-sm leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-900">*</span> Scale-down
            flexibility applies to service and software elements, not hardware.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("partnerform")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-acer px-7 py-3 font-semibold text-white shadow transition-all duration-300 hover:bg-acer-dark hover:shadow-lg"
          >
            Talk to Us About Acer DaaS
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}