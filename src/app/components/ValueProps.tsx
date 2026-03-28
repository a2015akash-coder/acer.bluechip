"use client";

import { useEffect, useRef, useState } from "react";

type TrustMetric = {
  stat: number;
  suffix?: string;
  label: string;
};

const benefits: TrustMetric[] = [
  { stat: 25, suffix: "+", label: "Years in IT Distribution" },
  { stat: 8, suffix: "", label: "Offices Across ANZ & Asia" },
  { stat: 100, suffix: "+", label: "Global Vendor Partnerships" },
];

function AnimatedNumber({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1200;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <div className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
      {count}
      {suffix}
    </div>
  );
}

export default function ValueProps() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="-mt-4 border-t border-white/10 bg-slate-900 py-9"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
          {benefits.map((benefit, index) => (
            <div key={index} className="px-6">
              <AnimatedNumber
                value={benefit.stat}
                suffix={benefit.suffix}
                start={isVisible}
              />

              <div className="mx-auto mt-2 max-w-[220px] text-sm font-medium text-white/70 md:text-base">
                {benefit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
