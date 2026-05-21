import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export type CourseRegistrationPayload = {
  name: string;
  email: string;
  phone: string;
  course: string;
  purpose: string;
  source: string;
  message?: string;
};

const sesClient = new SESv2Client({
  region: process.env.AWS_REGION || process.env.AWS_SES_REGION || "eu-west-2",
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPurpose(purpose: string) {
  return purpose
    .split("_")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildTextEmail(payload: CourseRegistrationPayload) {
  const headline = payload.source.toLowerCase().includes("brochure")
    ? "New course brochure request"
    : "New course registration";

  return [
    headline,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Course: ${payload.course}`,
    `Purpose: ${formatPurpose(payload.purpose) || payload.purpose}`,
    `Source: ${payload.source}`,
    payload.message ? `Message: ${payload.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildHtmlEmail(payload: CourseRegistrationPayload) {
  const headline = payload.source.toLowerCase().includes("brochure")
    ? "New course brochure request"
    : "New course registration";
  const rows = ([
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Course", payload.course],
    ["Purpose", formatPurpose(payload.purpose) || payload.purpose],
    ["Source", payload.source],
    ["Message", payload.message || ""],
  ] satisfies Array<[string, string]>).filter(([, value]) => Boolean(value));

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:700;background:#f8fafc;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 16px;">${headline}</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px;font-size:14px;">
        ${tableRows}
      </table>
    </div>`;
}

export async function sendCourseRegistrationEmail(payload: CourseRegistrationPayload) {
  const fromEmail = process.env.SES_FROM_EMAIL || SITE_EMAIL;
  const toEmail = process.env.SES_TO_EMAIL || SITE_EMAIL;
  const subjectPrefix = payload.source.toLowerCase().includes("brochure")
    ? "course brochure request"
    : "course registration";

  const command = new SendEmailCommand({
    FromEmailAddress: fromEmail,
    Destination: {
      ToAddresses: [toEmail],
    },
    ReplyToAddresses: [payload.email],
    Content: {
      Simple: {
        Subject: {
          Charset: "UTF-8",
          Data: `New ${SITE_NAME} ${subjectPrefix}: ${payload.course}`,
        },
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: buildTextEmail(payload),
          },
          Html: {
            Charset: "UTF-8",
            Data: buildHtmlEmail(payload),
          },
        },
      },
    },
  });

  return sesClient.send(command);
}
