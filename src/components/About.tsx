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
    <section id="about" className="py-20 px-6">
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
            I'm a results-driven Software Engineer and DevOps Lead with 3+ years of experience architecting scalable enterprise systems, leading agile teams, and shipping high-impact products.
            From launching as a Ruby on Rails intern to leading development on platforms that power millions in revenue and serve thousands daily—my journey has been fast, focused, and deeply technical.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I thrive in high-stakes environments where rapid learning and execution are critical.
            I've ramped up on complex stacks like Java Netty, WebSockets, and ReactJS in record time to ship production-grade solutions under pressure. My core strengths span mobile development, cloud infrastructure, and DevOps automation—cutting deployment times from days to hours, and significantly lowering operational costs.
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