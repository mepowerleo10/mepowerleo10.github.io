import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/me.jpg";
import { Link } from "react-scroll";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Hero = ({ setNavVisible }: { setNavVisible: (visible: boolean) => void }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const isNavVisible = useIntersectionObserver(navRef, { threshold: 0.1 });

  setNavVisible(isNavVisible);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Background with hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-tech-cyan rounded-full animate-float" />
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                <span className="gradient-text">Mussa Mipawa Shomari</span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in delay-200">
                <span className="text-primary">Software Developer</span> | <span className="text-accent">DevOps Advocate</span> | <span className="text-primary">AI Integrator</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-300">
                Solving real-world problems through code, automation, and intelligence.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in delay-700 mb-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
            {/* Nav links */}
            <div ref={navRef} className="flex justify-center lg:justify-start space-x-6 animate-fade-in delay-600 text-lg">
              <Link to="about" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">About</Link>
              <Link to="projects" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Projects</Link>
              <Link to="skills" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Skills</Link>
              <Link to="contact" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Contact</Link>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-500">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>
              <img 
                src={heroImage} 
                alt="Mussa Mipawa Shomari" 
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover object-top rounded-full border-4 border-primary/30 shadow-glow hover-scale"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;