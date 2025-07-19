import { useState } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  const [isNavVisible, setNavVisible] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav isNavVisible={isNavVisible} />
      <Hero setNavVisible={setNavVisible} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
