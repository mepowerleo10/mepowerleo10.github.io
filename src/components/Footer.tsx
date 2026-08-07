import { communication } from "@/lib/settings";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-6 snap-start">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Mussa Mipawa Shomari</h3>
            <p className="text-muted-foreground">
              <code>mepowerleo10</code> <span className="italic">// Hacked with love</span>
            </p>
          </div>
          
          
          {/* Contact Info */}
          <div className="space-y-4 flex justify-end" >
            <div className="flex space-x-4">
              <a href={communication.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Github className="h-5 w-5" />
              </a>
              <a href={communication.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${communication.email}`} target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale">
                <Mail className="h-5 w-5" />
              </a>
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