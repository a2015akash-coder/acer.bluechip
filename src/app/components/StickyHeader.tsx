"use client";

import { useCallback, useEffect, useState } from "react";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    element.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 py-2 shadow-sm backdrop-blur-md"
          : "bg-green-50/80 py-3 backdrop-blur-sm"
      }`}
      style={{
        paddingTop: "calc(env(safe-area-inset-top) + 8px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center justify-between gap-3">
          {/* Co-Brand Badge */}
          <div className="inline-flex min-w-0 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
            {/* Acer Logo */}
            <img
              src="https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto/v1770929331/acer_vyyy6m.webp"
              alt="Acer"
              width={80}
              height={20}
              className="h-4 w-auto shrink-0 object-contain sm:h-5"
            />

            <span className="text-xs text-slate-300">|</span>

            <div className="flex min-w-0 items-center gap-1 sm:gap-2">
              <span className="truncate text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                Distributed By
              </span>

              <img
                src="https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto/v1770929303/bluechip-it-logo-blue_1_vsfsb8.svg"
                alt="Bluechip"
                width={80}
                height={20}
                className="h-4 w-auto shrink-0 object-contain sm:h-5"
              />
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => scrollToSection("partnerform")}
            className="min-h-[44px] shrink-0 whitespace-nowrap rounded-md bg-acer px-4 text-xs font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-acer-dark focus:outline-none focus:ring-2 focus:ring-acer focus:ring-offset-2 sm:px-5 sm:text-sm"
          >
            <span className="sm:hidden">Inquire</span>
            <span className="hidden sm:inline">Inquire About DaaS</span>
          </button>
        </div>
      </div>
    </header>
  );
}
