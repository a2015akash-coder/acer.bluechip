"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael T.",
    role: "Managing Director",
    location: "Sydney, NSW",
    text: "Acer DaaS gives us a structured way to support client device refresh cycles.",
  },
  {
    name: "Sarah L.",
    role: "General Manager",
    location: "Melbourne, VIC",
    text: "The framework allows us to align hardware delivery with lifecycle planning.",
  },
  {
    name: "Andrew C.",
    role: "Head of Managed Services",
    location: "Brisbane, QLD",
    text: "The asset oversight and disposal alignment support our compliance conversations with customers.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-green-50 py-14">
      {/* Geometric Background Elements */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-100 opacity-40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-100 opacity-40 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Partner Success with <span className="text-acer">Acer</span> DaaS
          </h2>
          <p className="text-lg text-slate-600">
            Channel partners across Australia are delivering Acer DaaS to
            clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              {/* Decorative Corner Shape */}
              <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-3xl rounded-tr-2xl bg-gradient-to-br from-emerald-400/10 to-blue-400/10" />

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-emerald-500 text-emerald-500"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-8 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Letter Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-600 text-lg font-semibold text-white shadow-md">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
