"use client";

import { ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { LeadForm } from "./LeadForm";

const VALUE_POINTS = [
  "Flexible device and peripheral selection",
  "End-to-end lifecycle coverage",
  "Tier 1 support and device replacement",
  "Certified data erasure and compliant disposal",
  "Flexible 2\u20134 year subscription terms",
];

const HERO_IMAGE = {
  src: "https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_1600/v1773038042/FA_3060-Acer-BCIT-DaaS-Microsite-BG-1920x900_evwfie.jpg",
  srcSet: [
    "https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_640/v1773038042/FA_3060-Acer-BCIT-DaaS-Microsite-BG-1920x900_evwfie.jpg 640w",
    "https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_960/v1773038042/FA_3060-Acer-BCIT-DaaS-Microsite-BG-1920x900_evwfie.jpg 960w",
    "https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_1280/v1773038042/FA_3060-Acer-BCIT-DaaS-Microsite-BG-1920x900_evwfie.jpg 1280w",
    "https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_1600/v1773038042/FA_3060-Acer-BCIT-DaaS-Microsite-BG-1920x900_evwfie.jpg 1600w",
    "https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_1920/v1773038042/FA_3060-Acer-BCIT-DaaS-Microsite-BG-1920x900_evwfie.jpg 1920w",
  ].join(", "),
  sizes: "100vw",
};

export default function Hero() {
  const handleScrollToForm = useCallback(() => {
    document
      .getElementById("daas-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-18 pb-16">
      <img
        src={HERO_IMAGE.src}
        srcSet={HERO_IMAGE.srcSet}
        sizes={HERO_IMAGE.sizes}
        alt=""
        aria-hidden="true"
        width={1920}
        height={900}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h1 className="max-w-[650px] text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 md:text-5xl lg:text-[48px]">
              Flexible <span className="text-acer">Acer</span>{" "}
              Device-as-a-Service Solutions
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              A fully managed, subscription-based model enabling partners to
              deliver structured device programs without upfront capital
              investment for their clients.
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              {VALUE_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-acer" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleScrollToForm}
                className="inline-flex items-center gap-2 rounded-sm font-semibold text-acer hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-acer focus-visible:ring-offset-2"
              >
                Inquire About DaaS
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="w-full">
            <LeadForm source="hero" formId="daas-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
