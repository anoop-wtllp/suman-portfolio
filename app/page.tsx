import { ScrollProgress } from "./components/primitives";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import {
  About,
  Stats,
  Education,
  Services,
  Marquee,
  Skills,
  Testimonials,
} from "./components/Sections";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Marquee />
        <Education />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
