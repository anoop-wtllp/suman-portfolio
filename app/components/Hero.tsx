"use client";

import { useEffect, useState } from "react";
import {
  HeartPulse,
  Heart,
  Baby,
  Teddy,
  Blocks,
  Cloud,
  Duck,
  Bottle,
  Star,
  Arrow,
} from "./icons";

const rotating = ["Compassion", "Gentleness", "Comfort", "Warmth", "Big Smiles"];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotating.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Soft pediatric sky background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-sky-100 via-teal-50/60 to-rose-50" />
      <div className="absolute inset-0 -z-20 grid-bg opacity-40" />
      <div className="blob -z-10 h-96 w-96 bg-sky-300/40" style={{ top: "-4rem", left: "-4rem" }} />
      <div className="blob -z-10 h-[26rem] w-[26rem] bg-rose-300/30" style={{ bottom: "-6rem", right: "-5rem", animationDelay: "3s" }} />
      <div className="blob -z-10 h-72 w-72 bg-amber-200/40" style={{ top: "35%", right: "22%", animationDelay: "6s" }} />

      {/* Big soft rainbow behind the scene */}
      <svg
        className="absolute -z-10 right-[2%] top-[14%] hidden h-80 w-80 opacity-60 lg:block"
        viewBox="0 0 100 60"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M8 55a42 42 0 0 1 84 0" stroke="#fb7185" strokeWidth="5" />
        <path d="M16 55a34 34 0 0 1 68 0" stroke="#fbbf24" strokeWidth="5" />
        <path d="M24 55a26 26 0 0 1 52 0" stroke="#34d399" strokeWidth="5" />
        <path d="M32 55a18 18 0 0 1 36 0" stroke="#38bdf8" strokeWidth="5" />
      </svg>

      {/* Drifting clouds */}
      <div className="anim-drift absolute top-[12%] -z-10 text-white/80" style={{ animationDuration: "38s" }}>
        <Cloud className="h-16 w-16" fill="white" stroke="white" />
      </div>
      <div className="anim-drift absolute top-[30%] -z-10 text-white/70" style={{ animationDuration: "55s", animationDelay: "8s" }}>
        <Cloud className="h-24 w-24" fill="white" stroke="white" />
      </div>

      {/* Twinkling stars */}
      {[
        { t: "16%", l: "20%", d: 0, s: "h-4 w-4" },
        { t: "24%", l: "60%", d: 0.8, s: "h-3 w-3" },
        { t: "60%", l: "12%", d: 1.4, s: "h-3 w-3" },
        { t: "70%", l: "48%", d: 0.4, s: "h-4 w-4" },
        { t: "18%", l: "84%", d: 1.1, s: "h-3 w-3" },
        { t: "50%", l: "90%", d: 1.8, s: "h-4 w-4" },
      ].map((st, i) => (
        <Star
          key={i}
          className={`anim-twinkle absolute -z-10 text-amber-300 ${st.s}`}
          style={{ top: st.t, left: st.l, animationDelay: `${st.d}s` }}
        />
      ))}

      {/* Floating pediatric toys */}
      <FloatToy className="left-[7%] top-[24%] text-sky-500" delay={0} spin="anim-bobble">
        <Blocks className="h-8 w-8" />
      </FloatToy>
      <FloatToy className="left-[13%] bottom-[16%] text-amber-500" delay={1} spin="anim-wiggle">
        <Duck className="h-8 w-8" />
      </FloatToy>
      <FloatToy className="right-[15%] bottom-[20%] text-rose-400" delay={1.5} spin="anim-bobble">
        <Bottle className="h-7 w-7" />
      </FloatToy>
      <FloatToy className="right-[8%] top-[60%] text-teal-500" delay={2} spin="anim-wiggle">
        <Teddy className="h-9 w-9" />
      </FloatToy>

      {/* Swaying balloons */}
      <Balloon className="left-[3%] top-[40%]" color="bg-rose-400" delay={0} />
      <Balloon className="right-[4%] top-[30%]" color="bg-sky-400" delay={1.2} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="anim-fadeup text-center lg:text-left">
          <span className="anim-popin inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-1.5 text-sm font-semibold text-teal-700 shadow-md backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-rose-100 text-rose-500 anim-heartbeat">
              <Baby className="h-4 w-4" />
            </span>
            Child Health Nursing Specialist
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Suman <span className="gradient-text">Pal</span>
            <span className="ml-2 inline-block anim-wiggle text-4xl">👶</span>
          </h1>

          <p className="mt-4 font-display text-2xl font-semibold text-slate-700 sm:text-3xl">
            Caring with{" "}
            <span className="relative inline-grid align-bottom">
              {rotating.map((w, i) => (
                <span
                  key={w}
                  className={`col-start-1 row-start-1 whitespace-nowrap bg-gradient-to-r from-teal-600 to-rose-500 bg-clip-text text-transparent transition-all duration-500 ${
                    i === idx
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-3 opacity-0"
                  }`}
                >
                  {w}
                </span>
              ))}
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-600 lg:mx-0">
            B.Sc Nursing graduate from{" "}
            <span className="font-semibold text-teal-700">
              Indira Gandhi School and College of Nursing
            </span>
            , specializing in{" "}
            <span className="font-semibold text-rose-500">
              Child Health Nursing
            </span>
            . Devoted to gentle, expert care that keeps little ones smiling.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-anim px-8 py-3.5 font-semibold text-white shadow-xl shadow-teal-500/30 transition-transform hover:scale-105 active:scale-95"
            >
              Get in Touch
              <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#education"
              className="inline-flex items-center gap-2 rounded-full border-2 border-teal-200 bg-white/70 px-8 py-3.5 font-semibold text-teal-700 backdrop-blur transition-all hover:border-teal-400 hover:bg-white"
            >
              View Credentials
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 anim-twinkle"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="text-sm text-slate-500">
              Loved by little ones &amp; trusted by parents
            </span>
          </div>
        </div>

        {/* Right: playful avatar scene */}
        <div className="relative flex justify-center">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            {/* scalloped sunburst */}
            <svg
              className="anim-spin-slow absolute inset-0 h-full w-full text-sky-300/70"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 5" />
            </svg>

            {/* pulse rings */}
            <span className="pulse-ring" />
            <span className="pulse-ring" style={{ animationDelay: "1.4s" }} />

            {/* orbiting twinkles around disc */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <span
                key={deg}
                className="absolute left-1/2 top-1/2 -z-0"
                style={{ transform: `rotate(${deg}deg) translateX(9.5rem)` }}
              >
                <Star
                  className="h-4 w-4 text-amber-300 anim-twinkle"
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
              </span>
            ))}

            {/* child-health scene disc */}
            <div className="anim-rise absolute inset-6 grid place-items-center overflow-hidden rounded-full gradient-anim shadow-2xl shadow-teal-500/40">
              <div className="absolute inset-0 shimmer opacity-30" />

              {/* twinkles inside the disc */}
              <Star className="absolute left-8 top-10 h-4 w-4 text-white/80 anim-twinkle" />
              <Star className="absolute right-9 top-14 h-3 w-3 text-white/70 anim-twinkle" style={{ animationDelay: "0.8s" }} />
              <Star className="absolute left-12 bottom-14 h-3 w-3 text-white/70 anim-twinkle" style={{ animationDelay: "1.4s" }} />

              {/* rising hearts */}
              <Heart className="absolute bottom-10 left-1/2 h-5 w-5 -translate-x-1/2 text-white anim-heart-float" fill="white" stroke="white" />
              <Heart className="absolute bottom-10 left-[38%] h-4 w-4 text-white anim-heart-float" fill="white" stroke="white" style={{ animationDelay: "1.2s" }} />
              <Heart className="absolute bottom-10 left-[62%] h-4 w-4 text-white anim-heart-float" fill="white" stroke="white" style={{ animationDelay: "2.1s" }} />

              {/* central teddy — waving */}
              <Teddy className="relative -mt-4 h-32 w-32 text-white anim-wiggle drop-shadow-lg sm:h-40 sm:w-40" strokeWidth={1.3} />

              {/* live heartbeat / ECG line */}
              <svg
                className="absolute bottom-16 h-10 w-40 text-white sm:bottom-20"
                viewBox="0 0 120 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path className="anim-ecg" d="M0 12h20l6-9 8 18 7-13 5 4h14l6-6 7 12 6-6h28" />
              </svg>
            </div>

            {/* balloon bunch — top right */}
            <div className="absolute -right-6 -top-4 anim-swing">
              <div className="flex gap-1">
                <span className="block h-9 w-7 rounded-full bg-rose-400 shadow-md" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 42% 42%" }} />
                <span className="mt-2 block h-8 w-6 rounded-full bg-amber-400 shadow-md" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 42% 42%" }} />
                <span className="block h-9 w-7 rounded-full bg-sky-400 shadow-md" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 42% 42%" }} />
              </div>
            </div>

            {/* teddy badge — top left */}
            <div className="absolute -left-3 top-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl anim-float">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-100 text-amber-600">
                <Teddy className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-slate-400">Always</p>
                <p className="text-sm font-bold text-slate-800">Gentle Care</p>
              </div>
            </div>

            {/* child-health badge — bottom */}
            <div
              className="absolute -left-4 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl anim-float"
              style={{ animationDelay: "1.5s" }}
            >
              <HeartPulse className="h-6 w-6 text-rose-500 anim-heartbeat" />
              <div className="leading-tight">
                <p className="text-xs text-slate-400">Specialty</p>
                <p className="text-sm font-bold text-slate-800">Child Health</p>
              </div>
            </div>

            {/* blocks badge — bottom right */}
            <div
              className="absolute -right-4 bottom-14 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 shadow-xl anim-float"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-100 text-sky-600">
                <Blocks className="h-5 w-5" />
              </span>
              <p className="text-sm font-bold text-slate-800">Playful</p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-teal-600"
      >
        <span className="text-xs font-medium tracking-widest">SCROLL</span>
        <span className="grid h-9 w-6 justify-center rounded-full border-2 border-teal-400 pt-1.5">
          <span className="h-2 w-1 rounded-full bg-teal-500 anim-bounce-soft" />
        </span>
      </a>
    </section>
  );
}

/* A floating toy chip */
function FloatToy({
  children,
  className,
  delay,
  spin,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  spin: string;
}) {
  return (
    <div
      className={`absolute hidden anim-float-slow lg:block ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`grid h-16 w-16 place-items-center rounded-3xl bg-white/80 shadow-lg backdrop-blur ${spin}`}>
        {children}
      </div>
    </div>
  );
}

/* A single swaying balloon on a string */
function Balloon({
  className,
  color,
  delay,
}: {
  className?: string;
  color: string;
  delay: number;
}) {
  return (
    <div
      className={`absolute hidden anim-rise lg:block ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="anim-swing flex flex-col items-center">
        <span
          className={`block h-14 w-11 shadow-lg ${color}`}
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 42% 42%" }}
        />
        <span className={`-mt-1 h-2 w-2 rotate-45 ${color}`} />
        <svg width="18" height="46" viewBox="0 0 18 46" fill="none">
          <path d="M9 0C4 12 14 22 9 46" stroke="#cbd5e1" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}
