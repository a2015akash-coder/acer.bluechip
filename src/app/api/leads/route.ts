import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type LeadSource = "hero" | "conversion_block";

type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  utm_referer?: string;
};

type LeadPayload = {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  companyName?: string;
  requirements?: string;
  source?: LeadSource;
  page?: string;
  utm?: UtmParams;
};

const PHONE_REGEX = /^\+?[0-9\s\-()]{7,20}$/;

function getSQL() {
  const url =
    process.env.DATABASE_URL || process.env.Database_DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not configured");
  }
  return neon(url);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phoneNumber: string) {
  return PHONE_REGEX.test(phoneNumber);
}

export async function GET() {
  try {
    const hasDbUrl = Boolean(
      process.env.DATABASE_URL || process.env.Database_DATABASE_URL,
    );
    const sql = getSQL();
    await sql`SELECT 1`;
    return NextResponse.json({ status: "ok", hasDbUrl });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        hasDbUrl: Boolean(
          process.env.DATABASE_URL || process.env.Database_DATABASE_URL,
        ),
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const sql = getSQL();
    const body = ((await request.json()) ?? {}) as LeadPayload;

    const fullName = body.fullName?.trim() || "";
    const email = body.email?.trim() || "";
    const phoneNumber = body.phoneNumber?.trim() || "";
    const companyName = body.companyName?.trim() || "";
    const requirements = body.requirements?.trim() || "";
    const source = body.source;
    const page = body.page?.trim() || "/";
    const utmSource = body.utm?.utm_source?.trim() || "";
    const utmMedium = body.utm?.utm_medium?.trim() || "";
    const utmCampaign = body.utm?.utm_campaign?.trim() || "";
    const utmContent = body.utm?.utm_content?.trim() || "";
    const utmTerm = body.utm?.utm_term?.trim() || "";
    const utmReferer = body.utm?.utm_referer?.trim() || "";

    if (!fullName) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 },
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 },
      );
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return NextResponse.json(
        { error: "Invalid phone number." },
        { status: 400 },
      );
    }

    if (source !== "hero" && source !== "conversion_block") {
      return NextResponse.json(
        { error: "Invalid source." },
        { status: 400 },
      );
    }

    await sql`
      INSERT INTO leads (
        full_name,
        email,
        phone_number,
        company_name,
        requirements,
        source,
        page,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        utm_referer
      ) VALUES (
        ${fullName},
        ${email},
        ${phoneNumber},
        ${companyName || null},
        ${requirements || null},
        ${source},
        ${page},
        ${utmSource || null},
        ${utmMedium || null},
        ${utmCampaign || null},
        ${utmContent || null},
        ${utmTerm || null},
        ${utmReferer || null}
      )
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry." },
      { status: 500 },
    );
  }
}