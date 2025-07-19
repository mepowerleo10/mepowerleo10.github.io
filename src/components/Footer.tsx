import { communication } from "@/lib/communication";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Mussa Mipawa Shomari</h3>
            <p className="text-muted-foreground">
              An engineer passionate about building scalable solutions.
            </p>
            <div className="flex space-x-4">
              <a href={communication.github} target="blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Github className="h-5 w-5" />
              </a>
              <a href={communication.linkedin} target="blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${communication.email}`} target="blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Web Development</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Mobile Apps</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">DevOps Consulting</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Cloud Architecture</a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{communication.address}</p>
              <p>{communication.email}</p>
              <p>{communication.phone}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Mussa Mipawa Shomari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;