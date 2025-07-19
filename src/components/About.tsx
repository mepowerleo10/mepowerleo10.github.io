import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const About = () => {
  const experience = [
    {
      title: "Senior Software Developer",
      company: "ICTPACK Solutions Ltd.",
      period: "Apr 2024 - Present",
      location: "Dar es Salaam, TZ",
      description: "Responsible for recruitment of Software Developers. Coordinated development of ECTS mobile app generating TSH 200+ Million in sales. Headed team of 3 in migrating projects from Google Cloud, saving $100+ monthly. Core developer in Testing & Quality Management platform serving 5,000+ importers monthly in Zanzibar.",
      skills: ["Team Leadership", "Mobile Development", "Cloud Migration", "Quality Management"]
    },
    {
      title: "Software Developer",
      company: "ICTPACK Solutions Ltd.",
      period: "May 2022 - Apr 2024",
      location: "Dar es Salaam, TZ",
      description: "Learned Java Netty, WebSockets API and ReactJS within a month for TANAPA platform tracking 2,000+ vehicles. Migrated to self-hosted GitLab saving $2,000+ annually. Introduced DevOps practices reducing deployment from 3-5 days to 2 hours, onboarding time by 50%, and manual testing by 20+ hours per project.",
      skills: ["Java Netty", "ReactJS", "WebSockets", "DevOps", "GitLab", "Automation"]
    },
    {
      title: "Field Sales Officer",
      company: "Vodacom Tanzania Plc. via NANINE",
      period: "Feb 2022 - May 2022",
      location: "Dar es Salaam, TZ",
      description: "Recruited 60+ SMEs to use Lipa Kwa Simu payment service. Built custom automation tool for data extraction and business intelligence. Prepared monthly performance reports for SME activation campaigns.",
      skills: ["Business Development", "Data Automation", "Customer Support", "Analytics"]
    },
    {
      title: "Software Engineering Intern",
      company: "Ubuni Soluciones Ltd.",
      period: "Sep 2021 - Jan 2022",
      location: "Dar es Salaam, TZ",
      description: "Learned Ruby on Rails within a week with no prior experience. Designed REST API with JWT Authentication for Android application. Acted as SCRUM master for remote team of 5 developers.",
      skills: ["Ruby on Rails", "REST API", "JWT Authentication", "SCRUM", "Android"]
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
                I'm a passionate software developer and DevOps engineer with over 3 years of experience 
                building enterprise applications and leading development teams. My journey began as an intern 
                learning Ruby on Rails, and quickly evolved into leading teams that deliver solutions generating 
                millions in revenue and serving thousands of users daily.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in rapid learning and implementation, having mastered technologies like Java Netty, 
                WebSockets, and ReactJS within weeks to deliver critical business solutions. My expertise spans 
                from mobile development and fleet management systems to DevOps practices that have dramatically 
                reduced deployment times and costs for organizations.
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