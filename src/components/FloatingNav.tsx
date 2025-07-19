
import { Link } from 'react-scroll';
import { Home, User, Code, Briefcase, Mail, Presentation, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "./ui/button";
import { useTheme } from "@/context/theme-provider";

const FloatingNav = ({ isNavVisible }: { isNavVisible: boolean }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Theme Toggle - Always Visible */}
      <div className="fixed top-8 right-8 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Main Navigation - Controlled by isNavVisible */}
      <div
        className={cn(
          'fixed bottom-8 right-8 z-50 transition-opacity duration-300',
          isNavVisible ? 'opacity-0' : 'opacity-100'
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link to="hero" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Home className="h-6 w-6" />
          </Link>
          <Link to="about" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <User className="h-6 w-6" />
          </Link>
          <Link to="experience" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Briefcase className="h-6 w-6" />
          </Link>
          <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Presentation className="h-6 w-6" />
          </Link>
          <Link to="skills" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Code className="h-6 w-6" />
          </Link>
          <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;
