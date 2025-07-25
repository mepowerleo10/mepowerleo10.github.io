import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Server } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  const projects = [
    {
      title: "ICTC Website and CMS",
      description: "A modern, responsive Laravel-powered website for the ICT Commission of Tanzania. Features dynamic content management, media handling, and seamless government service integration.",
      type: "development",
      tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Alpine.js"],
      demo: "https://ictc.go.tz/"
    },
    {
      title: "ICTC Event Management System (EMS)",
      description: "A robust web platform for organizing, publishing, and managing ICT-related events and registrations across Tanzania. Includes dynamic content management, participant tracking, and admin workflows.",
      type: "development",
      tech: ["Laravel", "Livewire", "PHP", "Tailwind CSS", "MySQL", "Alpine.js"],
      demo: "https://ems.ictc.go.tz/event"
    },
    {
      title: "ZBS Quality Management System",
      description: "Enterprise-grade platform for managing product testing, importer registration, and compliance workflows for the Zanzibar Bureau of Standards. Integrates seamlessly with government systems via custom Express.js middlewares.",
      type: "development",
      tech: ["Yii2", "PHP", "Express.js", "JavaScript", "Tailwind CSS", "MySQL"],
      demo: "https://viwango.zbs.go.tz/"
    },
    {
      title: "DocoLoco",
      description: "GTK4 desktop app for browsing Dash docs & Linux man pages, packaged as Flatpak.",
      type: "development",
      tech: ["Linux", "Flatpak", "GTK4", "Python"],
      demo: "https://github.com/mepowerleo10/DocoLoco"
    },
  ];

  const getProjectIcon = (type: string) => {
    var icon = null;
    switch (type) {
      case "devops":
        icon = Server;
        break;
      case "development":
      default:
        icon = Code;
        break;
    }
    return type === "development" ? Code : Server;
  };

  const getProjectColor = (type: string) => {
    return type === "development" ? "primary" : "accent";
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-secondary/20 flex items-center justify-center">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto transition-opacity duration-1000 ease-in",
          isIntersecting ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects I've architected, led, or contributed to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.type);
            const colorClass = getProjectColor(project.type);

            return (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 hover-scale transition-all duration-300 hover:shadow-glow"
              >
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className={`p-2 bg-${colorClass}/20 rounded-lg`}>
                      <IconComponent className={`h-5 w-5 text-${colorClass}`} />
                    </div>
                    <Button size="icon" variant="link" className="rounded-full absolute top-5 right-5" asChild={true}>
                      <a href={project.demo } target="_blank">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className={`bg-${colorClass}/10 text-${colorClass} border-${colorClass}/20 text-xs`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                
              </Card>
            );
          })}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;