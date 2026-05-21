import { NextResponse } from "next/server";
import { sendCourseRegistrationEmail } from "@/lib/courseRegistrationEmail";
import type { CourseRegistrationPayload } from "@/lib/courseRegistrationEmail";

const REQUIRED_FIELDS: Array<keyof CourseRegistrationPayload> = [
  "name",
  "email",
  "phone",
  "course",
  "purpose",
  "source",
];

function getLeadsApiUrl() {
  if (process.env.LEADS_API_URL) {
    return process.env.LEADS_API_URL;
  }

  return process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/leads"
    : "https://api.britinstitute.uk/api/leads";
}

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: unknown): CourseRegistrationPayload {
  const data = body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  return {
    name: cleanValue(data.name),
    email: cleanValue(data.email),
    phone: cleanValue(data.phone),
    course: cleanValue(data.course),
    purpose: cleanValue(data.purpose),
    source: cleanValue(data.source) || "Course Lead Form",
    message: cleanValue(data.message),
  };
}

export async function POST(request: Request) {
  let payload: CourseRegistrationPayload;

  try {
    payload = parsePayload(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const missingField = REQUIRED_FIELDS.find((field) => !payload[field]);

  if (missingField) {
    return NextResponse.json({ error: `Missing required field: ${missingField}.` }, { status: 400 });
  }

  let leadResponse: Response;

  try {
    leadResponse = await fetch(getLeadsApiUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Failed to save course registration:", error);
    return NextResponse.json({ error: "Failed to save registration." }, { status: 502 });
  }

  if (!leadResponse.ok) {
    return NextResponse.json({ error: "Failed to save registration." }, { status: 502 });
  }

  try {
    await sendCourseRegistrationEmail(payload);
  } catch (error) {
    console.error("Failed to send course registration email:", error);
    return NextResponse.json({ error: "Registration saved, but email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
