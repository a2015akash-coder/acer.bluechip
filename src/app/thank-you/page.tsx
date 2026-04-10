import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Acer DaaS - Bluechip IT",
  description: "Your enquiry has been submitted successfully.",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6">
      <div className="mx-auto max-w-lg text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-acer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          Thank You for Your Enquiry
        </h1>

        {/* Message */}
        <p className="mb-8 text-lg leading-relaxed text-slate-600">
         Your enquiry has been submitted successfully. An Acer DaaS Expert from our team will contact you within 24 hours to discuss your requirements.
        </p>

        {/* Contact Card */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">
            Your Point of Contact
          </p>

          <p className="text-lg font-semibold text-slate-900">
            Mat Hammer
          </p>
          <p className="text-sm text-slate-600 mb-4">
            Product Specialist
          </p>

          <div className="space-y-2 text-sm text-slate-700">
            <p>
              <span className="font-medium">M:</span>{" "}
              <a href="tel:0409807132" className="hover:underline">
                04 09 807 132
              </a>
            </p>
            <p>
              <span className="font-medium">E:</span>{" "}
              <a
                href="mailto:mat.hammer@bluechipit.com.au"
                className="hover:underline"
              >
                mat.hammer@bluechipit.com.au
              </a>
            </p>
            <p>
              <span className="font-medium">W:</span>{" "}
              <a
                href="https://www.bluechipit.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.bluechipit.com.au
              </a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-acer px-8 py-3 font-semibold text-white shadow transition-all hover:bg-acer-dark"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}