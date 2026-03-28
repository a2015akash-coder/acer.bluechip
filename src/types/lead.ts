export type LeadSource = "hero" | "conversion_block";

export type LeadFormValues = {
  fullName: string;
  email: string;
  companyName: string;
  requirements: string;
  source: LeadSource;
  page: string;
};

export type Lead = LeadFormValues & {
  id: number;
  createdAt: string;
};
