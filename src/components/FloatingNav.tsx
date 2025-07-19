
import { Link } from 'react-scroll';
import { Home, User, Code, Briefcase, Mail, Presentation, Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "./ui/button";
import { useTheme } from "@/context/theme-provider";
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingNavProps {
  isNavVisible: boolean;
  showFloatingNav: boolean;
  setShowFloatingNav: (show: boolean) => void;
}

const FloatingNav = ({ isNavVisible, showFloatingNav, setShowFloatingNav }: FloatingNavProps) => {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  return (
    <>
      {/* Theme Toggle and Mobile Nav Toggle */}
      <div className="fixed top-8 right-8 z-50 flex items-center space-x-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowFloatingNav(!showFloatingNav)}
            className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
          >
            {showFloatingNav ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Main Navigation - Controlled by isNavVisible and showFloatingNav */}
      <div
        className={cn(
          'fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out',
          isNavVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0',
          isMobile && !showFloatingNav && 'opacity-0 translate-y-4 pointer-events-none',
          isMobile && showFloatingNav && 'opacity-100 translate-y-0'
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link to="hero" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-2 sm:p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Home className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link to="about" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-2 sm:p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <User className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link to="experience" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-2 sm:p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-2 sm:p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Presentation className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link to="skills" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-2 sm:p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Code className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active-nav-link" className="p-2 sm:p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;
