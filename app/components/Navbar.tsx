"use client";

import { useEffect, useState } from "react";
import { HeartPulse, Phone, Mail, Arrow } from "./icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#services", label: "Care" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Shrink / solidify on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/85 shadow-[0_10px_40px_-15px_rgba(13,148,136,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span
            className={`grid place-items-center rounded-2xl gradient-anim text-white shadow-lg shadow-teal-500/30 transition-all duration-300 group-hover:scale-110 ${
              scrolled ? "h-10 w-10" : "h-11 w-11"
            }`}
          >
            <HeartPulse className="h-6 w-6 anim-heartbeat" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-slate-900 sm:text-lg">
              Suman Pal
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-teal-600 sm:text-[11px]">
              B.Sc NURSING
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-teal-700"
                      : "text-slate-600 hover:text-teal-600"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-rose-500 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full gradient-anim px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition-transform hover:scale-105 active:scale-95 lg:inline-flex"
        >
          Book a Consult
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-teal-100 bg-white/80 text-slate-800 shadow-sm transition-transform active:scale-90 lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 -z-10 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-[32rem] border-t border-teal-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-3">
          {links.map((l, i) => {
            const isActive = active === l.href;
            return (
              <li
                key={l.href}
                className="transition-all duration-500"
                style={{
                  transitionDelay: open ? `${100 + i * 55}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(-12px)",
                }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="h-2 w-2 rounded-full gradient-anim" />
                  )}
                </a>
              </li>
            );
          })}

          <li
            className="mt-2 transition-all duration-500"
            style={{
              transitionDelay: open ? `${100 + links.length * 55}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl gradient-anim px-4 py-3.5 font-semibold text-white shadow-lg shadow-teal-500/30"
            >
              Book a Consult
              <Arrow className="h-5 w-5" />
            </a>
          </li>

          {/* Quick contact */}
          <li
            className="mt-3 flex items-center justify-center gap-5 border-t border-slate-100 pt-4 text-sm text-slate-500 transition-all duration-500"
            style={{
              transitionDelay: open ? `${140 + links.length * 55}ms` : "0ms",
              opacity: open ? 1 : 0,
            }}
          >
            <a href="tel:+910000000000" className="flex items-center gap-1.5 hover:text-teal-600">
              <Phone className="h-4 w-4" /> Call
            </a>
            <a href="mailto:suman.pal@example.com" className="flex items-center gap-1.5 hover:text-teal-600">
              <Mail className="h-4 w-4" /> Email
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
