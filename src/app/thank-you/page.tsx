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

        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          Thank You for Your Enquiry
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-slate-600">
          Your details have been submitted successfully. A member of our team
          will be in touch within 24 hours to discuss your Acer DaaS
          requirements.
        </p>

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
