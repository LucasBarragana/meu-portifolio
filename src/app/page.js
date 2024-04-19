'use cliente'
import Contact from "./components/layout/Contact";
import Hero from "./components/layout/Hero";
import ProjectsSection from "./components/layout/Projects";
import Skillssection from "./components/layout/Skills";

export default function Home() {
  return (
    <>
    <section className="max-w-5xl mx-auto p-4 ">
      <Hero />
      <Skillssection />
      <ProjectsSection />
      <Contact />
    </section>      
    </>
  );
}
