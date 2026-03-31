import type { LeadFormValues } from "@/types/lead";

export async function submitLead(values: LeadFormValues) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.error || "Failed to submit form");
  }

  return data;
}