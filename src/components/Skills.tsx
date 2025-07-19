import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Cloud, Database, Terminal, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  const devSkills = [
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTMX"], icon: Code },
    { category: "Backend", skills: ["Java", "Node.js", "Python", "PHP", "PostgreSQL", "MongoDB", "Neo4J"], icon: Database },
    { category: "Mobile", skills: ["Java", "Flutter", "Swift", "Kotlin"], icon: Zap }
  ];

  const devopsSkills = [
    { category: "Cloud", skills: ["AWS", "Google Cloud", "Azure", "DigitalOcean"], icon: Cloud },
    { category: "DevOps", skills: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Ansible"], icon: Server },
    { category: "Monitoring", skills: ["Prometheus", "Grafana", "ELK Stack", "DataDog"], icon: Terminal }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto transition-opacity duration-1000 ease-in",
          isIntersecting ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack development meets modern DevOps practices
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Development Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Development</h3>
            </div>
            
            {devSkills.map((skillGroup, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover-scale transition-all duration-300 hover:shadow-glow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <skillGroup.icon className="h-5 w-5 text-primary" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* DevOps Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Server className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">DevOps & Infrastructure</h3>
            </div>
            
            {devopsSkills.map((skillGroup, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover-scale transition-all duration-300 hover:shadow-glow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <skillGroup.icon className="h-5 w-5 text-accent" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;