"use client";

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
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20 pb-12">
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
        className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/30 lg:to-white/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-acer" />
              <span className="text-xs font-medium tracking-wide text-slate-600">
                Authorised Acer Distributor &middot; Trusted Partner in Channel
                Excellence
              </span>
            </div>

            <h1 className="max-w-[600px] text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 md:text-5xl lg:text-[52px]">
              Flexible <span className="text-acer">Acer</span>{" "}
              Device&#8209;as&#8209;a&#8209;Service Solutions
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
              A fully managed, subscription-based model enabling partners to
              deliver structured device programs without upfront capital
              investment for their clients.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {VALUE_POINTS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-slate-700 shadow-sm backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-acer" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:pl-4">
            <LeadForm source="hero" formId="daas-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
