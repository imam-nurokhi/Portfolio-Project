import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
