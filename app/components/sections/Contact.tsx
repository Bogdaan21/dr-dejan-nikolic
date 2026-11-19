"use client";

import { type FormEvent, useState } from "react";
import { contact, external } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import SectionTitle from "../ui/SectionTitle";

export default function Contact({ locale }: { locale: Locale }) {
  const t = getContent(locale).contact;
  const [status, setStatus] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const channels = [
    { icon: "/img/svg/call.svg", label: t.phone, href: contact.phoneHref, text: contact.phoneDisplay, external: false },
    { icon: "/img/svg/social/whatsapp.svg", label: "WhatsApp", href: contact.whatsappHref, text: t.sendMessage, external: true },
    { icon: "/img/svg/social/viber.svg", label: "Viber", href: contact.viberHref, text: t.openViber, external: false },
    { icon: "/img/svg/social/instagram.svg", label: "Instagram", href: contact.instagramHref, text: contact.instagramHandle, external: true },
    { icon: "/img/svg/mail.svg", label: "Email", href: contact.emailHref, text: contact.email, external: false },
  ];

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const phone = String(values.get("phone") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();

    if (!name || !phone || !message) {
      setStatus(t.required);
      return;
    }

    const whatsappMessage = [
      t.whatsappIntro,
      "",
      `${t.name.replace(" *", "")}: ${name}`,
      `${t.phone}: ${phone}`,
      email ? `Email: ${email}` : "",
      `${t.inquiry}: ${message}`,
    ].filter(Boolean).join("\n");

    const preparedWhatsAppUrl = `${contact.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`;
    const payload = new FormData();
    payload.set("ajax_name", name);
    payload.set("ajax_phone", phone);
    payload.set("ajax_email", email);
    payload.set("ajax_message", message);

    setSubmitting(true);
    setFallbackUrl("");
    setStatus(t.sending);

    try {
      const response = await fetch("/api/contact", { method: "POST", body: payload });
      if (response.ok) {
        setStatus(t.success);
        form.reset();
      } else if (response.status === 503) {
        setStatus(t.fallback);
        setFallbackUrl(preparedWhatsAppUrl);
      } else {
        setStatus(t.error);
        setFallbackUrl(preparedWhatsAppUrl);
      }
    } catch {
      setStatus(t.error);
      setFallbackUrl(preparedWhatsAppUrl);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <SectionTitle
            kicker={t.kicker}
            title={t.title}
            text={t.text}
            align="center"
            color="dark"
          />
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>{t.intro}</p>
              </div>
              <ul>
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <div className="list_inner">
                      <img className="svg" src={channel.icon} alt="" />
                      <span>{channel.label}</span>
                      <h3>
                        <a className="line_anim" href={channel.href} {...(channel.external ? external : {})}>
                          {channel.text}
                        </a>
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form className="contact_form" onSubmit={submitContact} autoComplete="on">
                  <div className="contact_form_status" aria-live="polite">
                    {status}
                    {fallbackUrl ? <a href={fallbackUrl} {...external}>WhatsApp</a> : null}
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input name="name" type="text" placeholder={t.name} autoComplete="name" required />
                      </li>
                      <li>
                        <input name="phone" type="tel" placeholder={t.phonePlaceholder} autoComplete="tel" required />
                      </li>
                      <li>
                        <input name="email" type="email" placeholder={t.email} autoComplete="email" />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea name="message" placeholder={t.message} required></textarea>
                  </div>
                  <div className="aali_tm_button">
                    <button type="submit" disabled={submitting}>
                      <span>
                        {`${submitting ? t.sending : t.submit} `}
                        <img className="svg" src="/img/svg/send.svg" alt="" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <p className="medical_note">
            {t.note}
          </p>
        </div>
        <span className="square moving_effect" data-direction="y" data-reverse="yes"></span>
      </div>
    </div>
  );
}
