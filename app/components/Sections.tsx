import { Reveal, Counter } from "./primitives";
import {
  Stethoscope,
  HeartPulse,
  Heart,
  Shield,
  Users,
  Clock,
  Cap,
  Hospital,
  Baby,
  Pill,
  Check,
  Star,
  Sparkle,
  Cross,
} from "./icons";

/* ==================================================================
   SECTION HEADING
================================================================== */
function Heading({
  eyebrow,
  title,
  accent,
  sub,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal variant="scale">
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-teal-600">
          <Sparkle className="h-4 w-4" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          {title} {accent && <span className="gradient-text">{accent}</span>}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mt-4 text-lg text-slate-600">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ==================================================================
   ABOUT
================================================================== */
export function About() {
  const points = [
    "Child-centered, evidence-based bedside care",
    "Calm, reassuring presence for anxious children",
    "Precise, weight-based pediatric medication safety",
    "Clear, gentle communicator with children & parents",
  ];
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal variant="left" className="relative">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] gradient-anim opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-teal-100 bg-white p-8 shadow-2xl shadow-teal-500/10">
              <div className="grid h-40 place-items-center rounded-2xl gradient-anim">
                <Stethoscope className="h-20 w-20 text-white/90" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Compassion" },
                  { icon: Shield, label: "Safety First" },
                  { icon: Clock, label: "Reliable" },
                  { icon: Users, label: "Team Player" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 rounded-xl bg-teal-50/70 px-3 py-2.5"
                  >
                    <f.icon className="h-5 w-5 text-teal-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              About Suman
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Caring is not a duty — <br />
              it&apos;s a <span className="gradient-text">calling.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Suman Pal is a dedicated nursing professional who earned her{" "}
              <span className="font-semibold text-slate-800">B.Sc Nursing</span>{" "}
              degree from{" "}
              <span className="font-semibold text-teal-700">
                Indira Gandhi School and College of Nursing
              </span>
              , with a specialization in{" "}
              <span className="font-semibold text-rose-500">
                Child Health Nursing
              </span>
              . She blends clinical skill with genuine warmth — making sure
              every child feels safe, comforted, and truly cared for.
            </p>
          </Reveal>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p} delay={i * 90}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-600">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-slate-700">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   STATS
================================================================== */
export function Stats() {
  const stats = [
    { icon: Cap, value: 4, suffix: "+", label: "Years of Training" },
    { icon: Users, value: 500, suffix: "+", label: "Children Cared For" },
    { icon: HeartPulse, value: 100, suffix: "%", label: "Dedication" },
    { icon: Clock, value: 24, suffix: "/7", label: "Commitment" },
  ];
  return (
    <section className="relative overflow-hidden py-4">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-anim px-6 py-14 shadow-2xl shadow-teal-500/30">
          <div className="absolute inset-0 shimmer opacity-20" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} variant="scale" delay={i * 110}>
                <div className="text-center text-white">
                  <s.icon className="mx-auto h-10 w-10 opacity-90" />
                  <div className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   EDUCATION / TIMELINE
================================================================== */
export function Education() {
  const items = [
    {
      icon: Cap,
      title: "B.Sc Nursing",
      org: "Indira Gandhi School and College of Nursing",
      desc: "Comprehensive four-year degree covering anatomy, pharmacology, medical-surgical nursing, community health, and supervised clinical practice.",
      tag: "Degree",
    },
    {
      icon: Baby,
      title: "Child Health Nursing",
      org: "Area of Specialization",
      desc: "Focused training in pediatric care — growth & development, neonatal and child nutrition, immunization, and the nursing management of common childhood illnesses.",
      tag: "Specialization",
    },
    {
      icon: Hospital,
      title: "Clinical Rotations",
      org: "Pediatric, Neonatal & Community Postings",
      desc: "Hands-on experience across pediatric wards, neonatal units, and community child-health programs — building real-world confidence at the bedside.",
      tag: "Practice",
    },
  ];
  return (
    <section id="education" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-teal-50/40 to-white" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Heading
          eyebrow="Education"
          title="Qualifications &"
          accent="Training"
          sub="A strong academic foundation built on rigorous study and real clinical experience."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 h-full w-0.5 bg-gradient-to-b from-teal-400 via-teal-300 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {items.map((it, i) => (
              <Reveal key={it.title} variant={i % 2 ? "right" : "left"}>
                <div
                  className={`relative flex items-start gap-6 sm:w-1/2 ${
                    i % 2 ? "sm:ml-auto sm:flex-row" : "sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-0 top-1 grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-anim text-white shadow-lg shadow-teal-500/30 anim-float sm:left-auto ${
                      i % 2 ? "sm:-left-7" : "sm:-right-7"
                    }`}
                  >
                    <it.icon className="h-7 w-7" />
                  </span>

                  <div className="card-lift ml-20 flex-1 rounded-2xl border border-teal-100 bg-white p-6 shadow-lg sm:ml-0 sm:mr-20">
                    <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
                      {it.tag}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-slate-900">
                      {it.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-teal-600">
                      {it.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {it.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   SERVICES / AREAS OF CARE
================================================================== */
export function Services() {
  const services = [
    {
      icon: Baby,
      title: "Pediatric Bedside Care",
      desc: "Gentle, attentive monitoring and holistic day-to-day care for children.",
    },
    {
      icon: HeartPulse,
      title: "Newborn & Neonatal Care",
      desc: "Careful, tender support for newborns and premature infants.",
    },
    {
      icon: Pill,
      title: "Pediatric Medication",
      desc: "Precise, weight-based dosing and safe administration for children.",
    },
    {
      icon: Shield,
      title: "Immunization Support",
      desc: "Assisting with vaccination schedules and child preventive care.",
    },
    {
      icon: Stethoscope,
      title: "Growth & Development",
      desc: "Monitoring milestones, nutrition, and healthy childhood growth.",
    },
    {
      icon: Users,
      title: "Parent Guidance",
      desc: "Clear, reassuring advice so parents feel confident and calm.",
    },
  ];
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading
          eyebrow="Areas of Care"
          title="Compassionate"
          accent="Child Health Care"
          sub="Skilled, child-first pediatric nursing across every stage of early life."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={(i % 3) * 100}>
              <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-lg">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-teal-50 transition-transform duration-500 group-hover:scale-[6]" />
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-teal-600 transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/90">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   MARQUEE
================================================================== */
export function Marquee() {
  const words = [
    "Child Health Nursing",
    "Pediatric Care",
    "Neonatal Care",
    "Patient Safety",
    "Gentle & Caring",
    "Immunization",
    "Empathy",
    "Trusted by Parents",
  ];
  const row = [...words, ...words];
  return (
    <section className="border-y border-teal-100 bg-teal-600 py-5">
      <div className="marquee-track">
        {row.map((w, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <Cross className="h-5 w-5 text-white/70" />
            <span className="whitespace-nowrap font-display text-2xl font-bold text-white/90">
              {w}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==================================================================
   SKILLS
================================================================== */
export function Skills() {
  const skills = [
    { name: "Pediatric & Child Health Care", level: 97 },
    { name: "Neonatal & Newborn Care", level: 93 },
    { name: "Pediatric Medication Safety", level: 92 },
    { name: "Immunization & Preventive Care", level: 90 },
    { name: "Communication with Children & Parents", level: 98 },
    { name: "Growth & Development Monitoring", level: 91 },
  ];
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-teal-50/50" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Heading
            eyebrow="Core Skills"
            title="Clinical"
            accent="Competencies"
          />
          <div className="-mt-6 space-y-6">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <SkillBar name={s.name} level={s.level} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="right">
          <div className="relative grid grid-cols-2 gap-5">
            {[
              { icon: Heart, k: "Empathy", c: "from-rose-400 to-rose-500" },
              { icon: Shield, k: "Safety", c: "from-teal-400 to-teal-600" },
              { icon: Clock, k: "Punctual", c: "from-amber-400 to-amber-500" },
              { icon: Star, k: "Excellence", c: "from-teal-500 to-teal-700" },
            ].map((b, i) => (
              <div
                key={b.k}
                className={`card-lift rounded-3xl bg-gradient-to-br ${b.c} p-7 text-white shadow-xl anim-float`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <b.icon className="h-10 w-10" />
                <p className="mt-4 font-display text-2xl font-bold">{b.k}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium text-slate-800">{name}</span>
        <span className="text-sm font-bold text-teal-600">{level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="skill-fill h-full rounded-full gradient-anim"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

/* ==================================================================
   TESTIMONIALS
================================================================== */
export function Testimonials() {
  const quotes = [
    {
      text: "Suman had such a gentle way with our little one — our scared toddler was smiling within minutes. A truly natural pediatric nurse.",
      name: "Grateful Parents",
      role: "Pediatric Ward",
    },
    {
      text: "Professional, attentive and wonderful with children. She never let a small detail slip and treated every child with such tenderness.",
      name: "Senior Nurse",
      role: "Clinical Mentor",
    },
    {
      text: "Reassuring, knowledgeable and endlessly patient. Suman explained every step to us and made our baby feel completely safe.",
      name: "New Mother",
      role: "Neonatal Care",
    },
  ];
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading
          eyebrow="Kind Words"
          title="What People"
          accent="Say"
          sub="The trust of patients and colleagues is the truest measure of care."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} variant="up" delay={i * 120}>
              <figure className="card-lift relative h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
                <span className="font-display text-7xl leading-none text-teal-200">
                  &ldquo;
                </span>
                <blockquote className="-mt-6 text-slate-600">
                  {q.text}
                </blockquote>
                <div className="mt-5 flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4" />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full gradient-anim font-bold text-white">
                    {q.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{q.name}</p>
                    <p className="text-sm text-slate-500">{q.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
