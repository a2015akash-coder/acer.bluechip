"use client";

import { ChevronRight } from "lucide-react";

type CaseItem = {
  title: string;
  desc: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

const cases: CaseItem[] = [
  {
    title: "Business-Ready Devices",
    desc: "Commercial laptops, desktops, and monitors suited to SMB, education, and enterprise environments.",
    image: "/icons/devices.webp",
    imageWidth: 220,
    imageHeight: 165,
  },
  {
    title: "Reliable Warranty & Support",
    desc: "Devices supported by defined warranty programs designed to meet business operational requirements.",
    image: "/icons/warranty.webp",
    imageWidth: 220,
    imageHeight: 165,
  },
  {
    title: "Flexible Hardware Options",
    desc: "Select from available device categories and configurations to suit deployment needs.",
    image: "/icons/hardware.webp",
    imageWidth: 220,
    imageHeight: 165,
  },
];

function FeatureCard({ item, index }: { item: CaseItem; index: number }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      aria-label={item.title}
    >
      <div className="flex min-h-[180px] items-center justify-center px-6 pt-8 pb-4">
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          width={item.imageWidth}
          height={item.imageHeight}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="h-auto max-h-[120px] w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 pt-2 pb-8">
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900">
          {item.title}
        </h3>

        <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section
      className="relative overflow-hidden bg-green-50 py-14 md:py-16"
      aria-labelledby="portfolio-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-green-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <h2
            id="portfolio-heading"
            className="mb-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl"
          >
            Achieve a Flexible and Comprehensive{" "}
            <span className="text-acer">Device Offering</span>
          </h2>

          <p className="text-base leading-7 text-slate-600 md:text-lg">
            Deliver Acer devices through a structured DaaS framework with
            lower upfront costs and predictable monthly spend.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cases.map((item, index) => (
            <FeatureCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center md:mt-16">
          <a
            href="https://www2.bluechipit.com.au/eMarketing/Marketing/acer/2026/Acer%20DaaS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-acer px-8 py-3 font-semibold text-white shadow transition-all duration-300 hover:bg-acer-dark hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-acer focus-visible:ring-offset-2"
          >
            Get the Full Acer DaaS Overview
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
