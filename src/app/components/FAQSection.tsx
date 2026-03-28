"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who is eligible to offer Acer DaaS?",
    answer:
      "Acer Device as a Service is available to authorised partners and MSPs working with Bluechip. Our team will assess your requirements and confirm suitability based on deployment scope and service needs.",
  },
  {
    question: "Can DaaS be offered to existing client environments?",
    answer:
      "Yes. DaaS can be structured to support both new deployments and device refresh programs within existing environments, subject to hardware and service selection.",
  },
  {
    question: "Is there a minimum device volume required?",
    answer:
      "Minimum quantities may vary depending on the selected services and deployment scope. Our team will review your requirements during the quotation process.",
  },
  {
    question: "Can service components be customised?",
    answer:
      "Yes. Hardware selection, lifecycle services, and subscription terms are defined during the scoping process to align with organisational requirements.",
  },
  {
    question: "How are devices managed during the subscription term?",
    answer:
      "Devices are supported through selected lifecycle services, including helpdesk support, replacement options, and asset tracking via the management portal.",
  },
  {
    question: "What happens at the end of the subscription term?",
    answer:
      "End-of-term processes include device retrieval and secure data erasure in accordance with recognised compliance standards.",
  },
  {
    question: "Can DaaS support multi-site or remote work environments?",
    answer:
      "Deployment and lifecycle services can be structured to accommodate centralised, multi-site, and remote workforce environments.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-green-50 py-28">
      {/* Background Layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[28rem] w-[28rem] rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[26rem] w-[26rem] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.03]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
            Answers to common questions regarding Acer Device as a Service
            (DaaS) within the Bluechip subscription framework.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md transition-all duration-300 ${
                  isOpen ? "border-acer/30 shadow-lg" : "hover:shadow-md"
                }`}
              >
                {/* Left Accent Bar */}
                <div
                  className={`absolute top-0 left-0 h-full w-1 transition-all duration-300 ${
                    isOpen ? "bg-acer" : "bg-transparent"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
                >
                  <span
                    className={`text-lg font-semibold transition-colors ${
                      isOpen ? "text-acer" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-acer" : "text-slate-500"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden px-8 transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 pb-8" : "max-h-0"
                  }`}
                >
                  <p className="text-base leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
