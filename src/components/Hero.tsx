import { useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroTopLayer from "@/assets/me-top-layer.jpg";
import heroBottomLayer from "@/assets/me-bottom-layer.jpg";
import bgImageLight from "@/assets/background-light.png";
import bgImageDark from "@/assets/background-dark.png";
import { Link } from "react-scroll";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { communication } from "@/lib/settings";
import TypewriterEffect from "./ui/typewriter-effect";

const Hero = ({ setNavVisible }: { setNavVisible: (visible: boolean) => void }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const isNavVisible = useIntersectionObserver(navRef, { threshold: 0.1 });

  setNavVisible(isNavVisible);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background snap-start">
      {/* Background image at low visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.6] dark:hidden"
        style={{ backgroundImage: `url(${bgImageLight})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.4] hidden dark:block"
        style={{ backgroundImage: `url(${bgImageDark})` }}
      />
      {/* Warm overlay to preserve palette tone */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Floating organic accent dots — each follows a unique drifting path */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary/25 rounded-full animate-drift-a" />
      <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-secondary/35 rounded-full animate-drift-b" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-primary/20 rounded-full animate-drift-c" style={{ animationDelay: '-8s' }} />
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-secondary/30 rounded-full animate-drift-d" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-1/4 right-40 w-2.5 h-2.5 bg-primary/15 rounded-full animate-drift-e" style={{ animationDelay: '-11s' }} />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-secondary/25 rounded-full animate-drift-b" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-primary/30 rounded-full animate-drift-c" style={{ animationDelay: '-14s' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight animate-fade-in">
                <span id="morph-title-hero" className="text-foreground">Mussa Mipawa Shomari</span>
              </h1>
              <TypewriterEffect
                words={[
                  { text: "Engineer", className: "text-secondary" },
                  { text: "Architect", className: "text-secondary" },
                  { text: "Dreamer", className: "text-secondary" },
                  { text: "Harbinger of Chaos", className: "text-secondary" },
                ]}
                className="text-xl md:text-2xl mb-4 animate-fade-in delay-200 min-h-[2rem]"
              />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-300">
                Making sure solutions do not wake you up at 3AM
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in delay-700 mb-8">
              <a href={communication.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href={communication.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`mailto:${communication.email}`} target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
              {communication.phone && (
                <a href={`tel:${communication.phone}`} target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Phone className="h-6 w-6" />
                </a>
              )}
            </div>
            
            {/* Nav links */}
            <div ref={navRef} className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 animate-fade-in delay-600 text-lg font-heading uppercase tracking-widest text-sm">
              <Link to="about" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">About</Link>
              {/* <Link to="experience" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Experience</Link> */}
              <Link to="projects" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Work</Link>
              {/* <Link to="skills" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Skills</Link> */}
              <Link to="contact" smooth={true} duration={500} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Contact</Link>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="hidden lg:flex justify-center lg:justify-end animate-fade-in delay-500">
            <div className="relative w-80 h-80 md:w-96 md:h-96 group">
              <img
                src={heroBottomLayer}
                alt="Mussa Mipawa Shomari"
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-card"
                style={{ boxShadow: '0 12px 40px hsl(151 42% 15% / 0.08)' }}
              />
              <img
                src={heroTopLayer}
                alt="Mussa Mipawa Shomari"
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-card transition-opacity duration-500 group-hover:opacity-0"
                style={{ boxShadow: '0 12px 40px hsl(151 42% 15% / 0.08)' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;