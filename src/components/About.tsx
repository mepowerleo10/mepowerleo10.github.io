import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { myDocuments } from "@/lib/settings";
import { Spinner } from "@/components/ui/spinner";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
  const [isLoading, setIsLoading] = useState(true);

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
            <Dialog onOpenChange={(open) => !open && setIsLoading(true)}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[90vh] p-0 gap-0 flex flex-col">
                <DialogHeader className="p-4">
                  <DialogTitle>Mussa Mipawa Shomari's Curriculum Vitae</DialogTitle>
                </DialogHeader>
                <div className="flex-grow relative">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                      <Spinner className="h-12 w-12" />
                    </div>
                  )}
                  <iframe
                    src={`https://drive.google.com/file/d/${myDocuments.cvId}/preview`}
                    width="100%"
                    height="100%"
                    className={cn("border-none", isLoading && "invisible")}
                    onLoad={() => setIsLoading(false)}
                  ></iframe>
                </div>
                <a
                  href={`https://drive.google.com/uc?export=download&id=${myDocuments.cvId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-10"
                >
                  <Button size="icon" className="rounded-full shadow-lg">
                    <Download className="h-5 w-5" />
                  </Button>
                </a>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;