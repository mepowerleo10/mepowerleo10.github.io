import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Server } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, real-time inventory management, and automated deployment pipeline.",
      type: "development",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "DevOps Automation Suite",
      description: "Complete CI/CD pipeline automation with infrastructure as code, monitoring, and auto-scaling capabilities.",
      type: "devops",
      tech: ["Terraform", "Kubernetes", "Jenkins", "Prometheus", "AWS"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "High-performance dashboard processing millions of events with real-time visualizations and alerting system.",
      type: "development",
      tech: ["Next.js", "Python", "Redis", "WebSockets", "D3.js"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Multi-Cloud Infrastructure",
      description: "Hybrid cloud infrastructure spanning AWS, GCP, and Azure with automated failover and cost optimization.",
      type: "devops",
      tech: ["Terraform", "Ansible", "Kubernetes", "Istio", "Grafana"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      type: "development",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Stripe"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Container Orchestration Platform",
      description: "Custom container orchestration platform with auto-scaling, service mesh, and comprehensive monitoring.",
      type: "devops",
      tech: ["Go", "Kubernetes", "Istio", "Helm", "Prometheus"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const getProjectIcon = (type: string) => {
    return type === "development" ? Code : Server;
  };

  const getProjectColor = (type: string) => {
    return type === "development" ? "primary" : "accent";
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto transition-opacity duration-1000 ease-in",
          isIntersecting ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of development and infrastructure projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.type);
            const colorClass = getProjectColor(project.type);
            
            return (
              <Card 
                key={index} 
                className={`bg-gradient-card border-border/50 hover-scale transition-all duration-300 hover:shadow-glow ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-2 bg-${colorClass}/20 rounded-lg`}>
                      <IconComponent className={`h-5 w-5 text-${colorClass}`} />
                    </div>
                    {project.featured && (
                      <Badge variant="outline" className="text-primary border-primary/50">
                        Featured
                      </Badge>
                    )}
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
                
                <CardFooter className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;