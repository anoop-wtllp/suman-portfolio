import { HeartPulse, Heart, Cap } from "./icons";

export function Footer() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#services", label: "Care" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      <div className="blob h-72 w-72 bg-teal-600/20" style={{ top: "-3rem", right: "10%" }} />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-anim text-white">
                <HeartPulse className="h-6 w-6 anim-heartbeat" />
              </span>
              <div className="leading-none">
                <p className="font-display text-lg font-bold text-white">
                  Suman Pal
                </p>
                <p className="text-[11px] tracking-[0.2em] text-teal-400">
                  B.Sc NURSING
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Compassionate, child-centered pediatric nursing care rooted in
              skill, safety, and genuine warmth.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h4 className="font-display text-lg font-semibold text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">
              Credentials
            </h4>
            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-white/5 p-4">
              <Cap className="mt-0.5 h-6 w-6 shrink-0 text-teal-400" />
              <p className="text-sm text-slate-400">
                B.Sc Nursing · Child Health Nursing
                <br />
                <span className="text-teal-400">
                  Indira Gandhi School and College of Nursing
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Suman Pal. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            Made with{" "}
            <Heart className="h-4 w-4 text-rose-500 anim-heartbeat" /> for
            compassionate care
          </p>
        </div>
      </div>
    </footer>
  );
}
