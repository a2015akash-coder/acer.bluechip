"use client";

import { useEffect, useRef, useState } from "react";

export default function Resources() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoId = "sfFIy9I4-_s";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-gray-50 py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Insights and <span className="text-acer">Resources</span>
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Access product insights, deployment guides, and structured
              solution overviews from Acer and Bluechip to get the most from the
              DaaS framework.
            </p>
          </div>

          {/* RIGHT SIDE VIDEO */}
          <div ref={containerRef} className="relative w-full">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-2xl">
              {isVisible ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title="Acer Device as a Service Overview"
                  allow="accelerometer; autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-white">
                  Loading video...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
