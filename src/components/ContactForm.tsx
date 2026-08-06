"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "../content/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`EcoStance demo request — ${company || name || "Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-none border border-ink/10 bg-chalk-warm px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/40";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 border border-ink/8 bg-white p-7 shadow-[var(--shadow-lift)] md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-ink">Name</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-ink">Work email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-2 block font-medium text-ink">Company</span>
        <input value={company} onChange={(e) => setCompany(e.target.value)} className={field} />
      </label>
      <label className="block text-sm">
        <span className="mb-2 block font-medium text-ink">How can we help?</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-y`}
          placeholder="DPP pilot, supply chain proof pack, carbon neutral kickstart…"
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition duration-500 hover:bg-ink-2 hover:shadow-[var(--shadow-lift)] sm:w-auto"
      >
        Send request
      </button>
      {sent ? (
        <p className="text-sm text-muted">
          Your mail client should open. If it doesn’t, email us at {CONTACT_EMAIL}.
        </p>
      ) : null}
    </form>
  );
}
