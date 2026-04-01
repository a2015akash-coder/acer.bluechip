export type LeadSource = "hero" | "conversion_block";

export type UtmParams = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  utm_referer: string;
};

export type LeadFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  requirements: string;
  source: LeadSource;
  page: string;
  utm: UtmParams;
};

export type Lead = LeadFormValues & {
  id: number;
  createdAt: string;
};
