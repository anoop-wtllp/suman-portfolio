"use client";

import { useEffect, useState } from "react";
import { HeartPulse, Menu, Close } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#services", label: "Care" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 shadow-[0_10px_40px_-15px_rgba(13,148,136,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-anim text-white shadow-lg shadow-teal-500/30 transition-transform group-hover:scale-110">
            <HeartPulse className="h-6 w-6 anim-heartbeat" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-slate-900">
              Suman Pal
            </span>
            <span className="text-[11px] font-medium tracking-[0.2em] text-teal-600">
              B.Sc NURSING
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-sm font-medium text-slate-700 transition-colors hover:text-teal-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full gradient-anim px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition-transform hover:scale-105 active:scale-95 md:inline-block"
        >
          Book a Consult
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl bg-white/70 text-slate-800 shadow md:hidden"
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-96 border-t border-teal-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-600"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl gradient-anim px-4 py-3 text-center font-semibold text-white"
            >
              Book a Consult
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
