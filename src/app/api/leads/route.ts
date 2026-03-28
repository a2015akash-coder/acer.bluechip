import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type LeadSource = "hero" | "conversion_block";

type LeadPayload = {
  fullName?: string;
  email?: string;
  companyName?: string;
  requirements?: string;
  source?: LeadSource;
  page?: string;
};

function getSQL() {
  return neon(process.env.DATABASE_URL!);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const sql = getSQL();
    const body = ((await request.json()) ?? {}) as LeadPayload;

    const fullName = body.fullName?.trim() || "";
    const email = body.email?.trim() || "";
    const companyName = body.companyName?.trim() || "";
    const requirements = body.requirements?.trim() || "";
    const source = body.source;
    const page = body.page?.trim() || "/";

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
        company_name,
        requirements,
        source,
        page
      ) VALUES (
        ${fullName},
        ${email},
        ${companyName || null},
        ${requirements || null},
        ${source},
        ${page}
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
