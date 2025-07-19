import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Mussa Mipawa Shomari</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in delay-200">
            <span className="text-primary">Software Developer</span> & <span className="text-accent">DevOps Engineer</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Building scalable applications and robust infrastructure. 
            Passionate about clean code, automation, and creating seamless user experiences.
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View Projects
          </Button>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-6 animate-fade-in delay-700">
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