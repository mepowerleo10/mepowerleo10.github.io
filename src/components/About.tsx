import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Experience from "./Experience";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="about" className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto transition-opacity duration-1000 ease-in",
          isIntersecting ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-4xl font-bold mb-8">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="prose prose-lg prose-invert max-w-none">



          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a software engineer and DevOps lead with 3+ years of experience building scalable systems, leading teams, and delivering products that drive revenue and serve thousands daily. 
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I specialize in rapid execution—mastering complex tech like Java Netty and ReactJS in weeks to ship mission-critical solutions. From mobile apps to DevOps automation, I build fast, lead boldly, and deliver real impact.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I don't just build software—I engineer outcomes.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;