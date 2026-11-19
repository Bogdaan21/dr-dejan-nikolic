import { NextResponse } from "next/server";

export const runtime = "nodejs";

function errorMarkup(message: string, status = 400) {
  return new NextResponse(`<span class="contact_error">* ${message} *</span>`, {
    status,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("ajax_name") ?? "").trim();
  const phone = String(form.get("ajax_phone") ?? "").trim();
  const email = String(form.get("ajax_email") ?? "").trim();
  const message = String(form.get("ajax_message") ?? "").trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !phone || !message) {
    return errorMarkup("Molimo popunite obavezna polja");
  }

  if (email && !emailPattern.test(email)) {
    return errorMarkup("Email adresa nije ispravna");
  }

  if (name.length > 120 || phone.length > 40 || email.length > 254 || message.length > 5000) {
    return errorMarkup("Poruka je predugačka");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "dejonikolic995@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Dr Dejan Nikolić <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return errorMarkup("Kontakt forma još nije podešena", 503);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      ...(email ? { reply_to: email } : {}),
      subject: `Novi upit sa sajta — ${name}`,
      html: `<h2>Novi upit sa sajta</h2><p><strong>Ime:</strong> ${escapeHtml(name)}</p><p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}<p><strong>Poruka:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend API error", response.status, await response.text());
    return errorMarkup("Poruku trenutno nije moguće poslati", 502);
  }

  return new NextResponse("", { status: 200 });
}
