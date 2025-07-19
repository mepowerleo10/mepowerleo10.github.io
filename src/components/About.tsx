import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const About = () => {
  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of scalable web applications serving 1M+ users. Architected microservices infrastructure and mentored junior developers.",
      skills: ["React", "Node.js", "AWS", "Kubernetes"]
    },
    {
      title: "DevOps Engineer",
      company: "CloudFirst Inc.",
      period: "2020 - 2022",
      location: "Austin, TX",
      description: "Designed and implemented CI/CD pipelines, reduced deployment time by 80%. Managed multi-cloud infrastructure with 99.9% uptime.",
      skills: ["Docker", "Terraform", "Jenkins", "Monitoring"]
    },
    {
      title: "Software Developer",
      company: "StartupLab",
      period: "2018 - 2020",
      location: "Boston, MA",
      description: "Developed mobile applications and web platforms. Collaborated closely with design and product teams to deliver user-centric solutions.",
      skills: ["React Native", "Python", "PostgreSQL", "Git"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About content */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate software developer and DevOps engineer with over 6 years of experience 
                building and scaling applications that serve millions of users. My journey started with 
                curiosity about how things work under the hood, which led me to master both the art of 
                clean code and the science of reliable infrastructure.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe in the power of automation, the importance of monitoring, and the beauty of 
                well-architected systems. When I'm not coding or configuring infrastructure, you can 
                find me contributing to open-source projects, writing technical articles, or exploring 
                the latest in cloud-native technologies.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <Badge variant="outline" className="text-primary border-primary/50 px-3 py-1">
                  Available for hire
                </Badge>
                <Badge variant="outline" className="text-accent border-accent/50 px-3 py-1">
                  Open to consulting
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Experience timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Experience</h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover-scale transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="bg-secondary/50 text-secondary-foreground text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;