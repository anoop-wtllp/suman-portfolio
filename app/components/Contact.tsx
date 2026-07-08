"use client";

import { useState } from "react";
import { Reveal } from "./primitives";
import {
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  Arrow,
  Check,
  Sparkle,
} from "./icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  const cards = [
    { icon: Phone, label: "Phone", value: "+91 00000 00000" },
    { icon: Mail, label: "Email", value: "suman.pal@example.com" },
    { icon: MapPin, label: "Location", value: "Available on request" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-white to-rose-50" />
      <div className="blob -z-10 h-80 w-80 bg-teal-300/30" style={{ top: "10%", left: "-4rem" }} />
      <div className="blob -z-10 h-80 w-80 bg-rose-300/30" style={{ bottom: "5%", right: "-4rem", animationDelay: "4s" }} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal variant="scale">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-teal-600">
              <Sparkle className="h-4 w-4" /> Get in Touch
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Let&apos;s Talk About <span className="gradient-text">Care</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-slate-600">
              Have a question or an opportunity? Suman would love to hear from you.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-2">
            {cards.map((c, i) => (
              <Reveal key={c.label} variant="left" delay={i * 100}>
                <div className="card-lift flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-lg">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-anim text-white">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">{c.label}</p>
                    <p className="font-semibold text-slate-800">{c.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal variant="left" delay={300}>
              <div className="flex items-center gap-4 rounded-2xl gradient-anim p-6 text-white shadow-xl">
                <HeartPulse className="h-10 w-10 anim-heartbeat" />
                <p className="font-medium">
                  Compassionate care is always just one message away.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal variant="right" className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-teal-500/10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" name="name" placeholder="Jane Doe" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@email.com"
                />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" placeholder="How can Suman help?" />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition-all focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100"
                />
              </div>
              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-anim px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-500/30 transition-transform hover:scale-[1.02] active:scale-95"
              >
                {sent ? (
                  <>
                    <Check className="h-5 w-5" /> Message Sent — Thank You!
                  </>
                ) : (
                  <>
                    Send Message
                    <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              {sent && (
                <p className="mt-3 text-center text-sm text-teal-600">
                  This is a demo form. Suman will connect a live inbox soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition-all focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100"
      />
    </div>
  );
}
