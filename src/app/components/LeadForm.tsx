"use client";

import { ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { submitLead } from "@/lib/api";
import type { LeadFormValues, LeadSource } from "@/types/lead";

type LeadFormProps = {
  source: LeadSource;
  formId?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  className?: string;
};

type FormErrors = Partial<
  Record<keyof Omit<LeadFormValues, "source" | "page">, string>
>;

const PHONE_REGEX = /^\+?[0-9\s\-()]{7,20}$/;

export function LeadForm({
  source,
  formId,
  title = "Interested in Reducing Upfront Device Costs with Acer DaaS?",
  description = "Work with Bluechip to scope hardware, lifecycle services, and subscription structures aligned to your customer requirements.",
  submitLabel = "Inquire About DaaS",
  className = "",
}: LeadFormProps) {
  const router = useRouter();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    requirements: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const page = useMemo(() => {
    if (typeof window === "undefined") return "/";
    return window.location.pathname;
  }, []);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.phoneNumber.trim()) {
      nextErrors.phoneNumber = "Phone number is required.";
    } else if (!PHONE_REGEX.test(values.phoneNumber.trim())) {
      nextErrors.phoneNumber = "Enter a valid phone number.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange =
    (field: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setValues((prev) => ({
        ...prev,
        [field]: nextValue,
      }));

      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }

      if (submitState !== "idle") {
        setSubmitState("idle");
        setSubmitMessage("");
      }
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    try {
      await submitLead({
        ...values,
        source,
        page,
      });

      setValues({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        requirements: "",
      });
      setErrors({});

      if (typeof window !== "undefined") {
        sessionStorage.setItem("lead_form_submitted", "true");

        const w = window as unknown as { dataLayer: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "form_submission",
          form_source: source,
          form_id: formId,
          page_path: page,
        });
      }

      router.push("/thank-you");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8 ${className}`}
    >
      <h2 className="mb-2 text-xl font-semibold text-slate-900">{title}</h2>

      <p className="mb-6 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <form
        id={formId}
        className="space-y-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="name"
            value={values.fullName}
            onChange={handleChange("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={
              errors.fullName ? `${formId}-fullName-error` : undefined
            }
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acer"
          />
          {errors.fullName && (
            <p
              id={`${formId}-fullName-error`}
              className="mt-1 text-xs text-red-600"
            >
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Business Email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${formId}-email-error` : undefined
            }
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acer"
          />
          {errors.email && (
            <p
              id={`${formId}-email-error`}
              className="mt-1 text-xs text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            autoComplete="tel"
            inputMode="tel"
            value={values.phoneNumber}
            onChange={handleChange("phoneNumber")}
            aria-invalid={Boolean(errors.phoneNumber)}
            aria-describedby={
              errors.phoneNumber ? `${formId}-phoneNumber-error` : undefined
            }
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acer"
          />
          {errors.phoneNumber && (
            <p
              id={`${formId}-phoneNumber-error`}
              className="mt-1 text-xs text-red-600"
            >
              {errors.phoneNumber}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Company Name"
            autoComplete="organization"
            value={values.companyName}
            onChange={handleChange("companyName")}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acer"
          />
        </div>

        <div>
          <textarea
            placeholder="Device requirements or estimated quantity"
            rows={3}
            value={values.requirements}
            onChange={handleChange("requirements")}
            className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acer"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-acer py-3 font-semibold text-white transition-colors hover:bg-acer-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-acer focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            <>
              {submitLabel}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>

        {submitState === "error" && (
          <p className="text-sm text-red-600" role="status">
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  );
}