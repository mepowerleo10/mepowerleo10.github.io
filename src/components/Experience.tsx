import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  const experience = [
    {
      title: "Senior Software Developer & Technical Lead",
      company: "ICTPACK Solutions Ltd.",
      period: "Apr 2024 – Present",
      location: "Dar es Salaam, TZ",
      description: [
        "Building and leading a high-performing engineering team.",
        "Architected ECTS mobile platform, to migrate from paper based receipts.",
        "Led cloud migration from GCP, reducing costs by 40%.",
        "Engineered the ZBS iSQMT platform, supportin 1,000+ monthly importers in Zanzibar."
      ],
      skills: ["Technical Leadership", "System Design", "Cloud Architecture", "AI Strategy", "Mobile Platforms"]
    },
    {
      title: "Software Developer & DevOps Advocate",
      company: "ICTPACK Solutions Ltd.",
      period: "May 2022 – Apr 2024",
      location: "Dar es Salaam, TZ",
      description: [
        "Delivered full-stack solution for TANAPA, tracking 2,000+ vehicles.",
        "Built CI/CD pipelines, reducing deploy time from days to hours.",
        "Migrated to self-hosted GitLab, saving $2,000+ annually.",
        "Streamlined QA, cutting hours of manual testing per project."
      ],
      skills: ["Full-Stack Development", "DevOps", "Automation", "Cost Optimization"]
    },
    {
      title: "Field Sales Officer & Automation Builder",
      company: "Vodacom Tanzania Plc. via NANINE",
      period: "Feb 2022 – May 2022",
      location: "Dar es Salaam, TZ",
      description: [
        "Onboarded 60+ SMEs to Vodacom’s Lipa Kwa Simu service.",
        "Built automation tool for campaign data and performance insights.",
        "Produced executive reports for SME activations."
      ],
      skills: ["Sales Strategy", "Process Automation", "BI & Reporting", "Customer Acquisition"]
    },
    {
      title: "Software Engineering Intern",
      company: "Ubuni Soluciones Ltd.",
      period: "Sep 2021 – Jan 2022",
      location: "Dar es Salaam, TZ",
      description: [
        "Developed secure REST APIs with Rails for mobile backend.",
        "Wrote tests and contributed to SCRUM-based product delivery."
      ],
      skills: ["API Development", "Ruby on Rails", "Agile Workflow", "Authentication"]
    }
  ];



  return (
    <section id="experience" className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto transition-opacity duration-1000 ease-in",
          isIntersecting ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="pb-8 border-b border-border last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr_1fr] gap-8">
                {/* Column 1: Title, Period, and Location */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>

                {/* Column 2: Description */}
                <div>
                  <ul className="list-disc list-outside text-muted-foreground leading-relaxed mb-2 pl-5">
                    {exp.description.map((item, descIndex) => (
                      <li key={descIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Skills */}
                <div>

                  <div className="flex flex-wrap gap-2">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
