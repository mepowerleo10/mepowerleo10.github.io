import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "ICTC Website and CMS",
      description: "A modern, responsive Laravel-powered website for the ICT Commission of Tanzania. Features dynamic content management, media handling, and seamless government service integration.",
      type: "development",
      tags: ["Design", "Architectural Consultation", "Laravel"],
      demo: "https://ictc.go.tz/",
      image: "images/ictc-website.webp",
      animationImage: "images/ictc-website-anim.webp",
    },
    {
      title: "ICTC Event Management System (EMS)",
      description: "A robust web platform for organizing, publishing, and managing ICT-related events and registrations across Tanzania. Includes dynamic content management, participant tracking, and admin workflows.",
      type: "development",
      tags: ["Laravel", "Livewire", "PHP", "Tailwind CSS", "MySQL", "Alpine.js"],
      demo: "https://ems.ictc.go.tz/event",
      image: "images/ictc-ems.png",
      animationImage: undefined as string | undefined,
    },
    {
      title: "ZBS Quality Management System",
      description: "Enterprise-grade platform for managing product testing, importer registration, and compliance workflows for the Zanzibar Bureau of Standards. Integrates seamlessly with government systems via custom Express.js middlewares.",
      type: "development",
      tags: ["Yii2", "PHP", "Express.js", "JavaScript", "Tailwind CSS", "MySQL"],
      demo: "https://viwango.zbs.go.tz/",
      image: undefined as string | undefined,
      animationImage: undefined as string | undefined,
    },
    {
      title: "DocoLoco",
      description: "GTK4 desktop app for browsing Dash docs & Linux man pages, packaged as Flatpak.",
      type: "development",
      tags: ["Linux", "Flatpak", "GTK4", "Python"],
      demo: "https://github.com/mepowerleo10/DocoLoco",
      image: undefined as string | undefined,
      animationImage: undefined as string | undefined,
    },
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "devops": return Server;
      default: return Code;
    }
  };

  // Initialise slide positions before paint to avoid flash
  useLayoutEffect(() => {
    const slides = Array.from(slideContainerRef.current?.children ?? []) as HTMLElement[];
    slides.forEach((slide, i) => {
      gsap.set(slide, { y: i === 0 ? "0%" : "100%", autoAlpha: i === 0 ? 1 : 0 });
    });
  }, []);

  const handleSelect = (newIndex: number) => {
    const prev = activeIndexRef.current;
    if (newIndex === prev) return;

    const direction = newIndex > prev ? 1 : -1;
    const slides = Array.from(slideContainerRef.current?.children ?? []) as HTMLElement[];

    gsap.to(slides[prev], { y: `${direction * -100}%`, autoAlpha: 0, duration: 0.35, ease: "power2.inOut" });
    gsap.fromTo(slides[newIndex],
      { y: `${direction * 100}%`, autoAlpha: 0 },
      { y: "0%", autoAlpha: 1, duration: 0.35, ease: "power2.inOut" }
    );

    activeIndexRef.current = newIndex;
    setActiveIndex(newIndex);
  };

  const active = projects[activeIndex];

  return (
    <section id="projects" className="min-h-screen snap-start bg-muted/40 flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 md:items-start">

        {/* Left: heading + project list with fill indicator */}
        <div className="shrink-0 w-full md:w-64 md:sticky md:top-20">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">Projects</h2>

          <div className="flex gap-3">
            {/* Track + animated fill bar */}
            <div className="relative w-0.5 self-stretch bg-border shrink-0">
              <div
                className="absolute top-0 left-0 w-full bg-primary transition-transform duration-300 ease-out"
                style={{
                  height: "100%",
                  transformOrigin: "top",
                  transform: `scaleY(${(activeIndex + 1) / projects.length})`,
                }}
              />
            </div>

            <ul className="list-none p-0 m-0 space-y-4 flex-1">
              {projects.map((project, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleSelect(i)}
                    className={cn(
                      "text-lg font-heading leading-snug text-left transition-colors duration-200 cursor-pointer w-full",
                      i === activeIndex ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Image strip — all slides stacked, GSAP slides them in/out */}
          <div
            ref={slideContainerRef}
            className="relative overflow-hidden rounded-md h-52 sm:h-64 md:h-72 lg:h-80"
          >
            {projects.map((project, i) => {
              const IconComponent = getProjectIcon(project.type);
              return (
                <a
                  key={i}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute inset-0 bg-primary/8 block"
                >
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ transition: "opacity 300ms" }}
                      />
                      {project.animationImage && (
                        <img
                          src=""
                          data-src={project.animationImage}
                          alt={`${project.title} demo`}
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ opacity: 0, transition: "none" }}
                          onMouseEnter={(e) => {
                            const img = e.currentTarget;
                            if (!img.src || img.src === window.location.href) {
                              img.src = img.dataset.src!;
                            } else {
                              img.style.opacity = "1";
                              (img.previousElementSibling as HTMLElement).style.opacity = "0";
                            }
                          }}
                          onMouseLeave={(e) => {
                            const img = e.currentTarget;
                            img.style.opacity = "0";
                            (img.previousElementSibling as HTMLElement).style.opacity = "1";
                          }}
                          onLoad={(e) => {
                            const img = e.currentTarget;
                            img.style.transition = "opacity 300ms";
                            img.style.opacity = "1";
                            (img.previousElementSibling as HTMLElement).style.opacity = "0";
                          }}
                        />
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <IconComponent className="h-16 w-16 text-primary/20" />
                    </div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Description + tags — fades in on change */}
          <div key={activeIndex} className="animate-fade-in">
            <a
              href={active.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-lg mb-2 hover:underline"
            >
              {active.title}
              <ExternalLink className="h-4 w-4 opacity-60 shrink-0" />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {active.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag, ti) => (
                <Badge key={ti} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;