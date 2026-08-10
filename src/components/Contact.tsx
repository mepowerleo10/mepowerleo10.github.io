import { useRef } from "react";
import {
  Mail,
  MapPin,
  LucideIcon,
  Github,
  Linkedin,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { communication } from "@/lib/settings";


const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
  const contactItems: {
    icon: LucideIcon;
    label: string;
    value: React.ReactNode;
  }[] = [
    {
      icon: Mail,
      label: "Email",
      value: (
        <a href={`mailto:${communication.email}`}>{communication.email}</a>
      ),
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: <a href={`tel:${communication.phone}`}>{communication.phone}</a>,
    // },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: (
        <a href={communication.linkedin} target="_blank">
          Mussa Mipawa Shomari
        </a>
      ),
    },
    {
      icon: Github,
      label: "GitHub",
      value: (
        <a href={communication.github} target="_blank">
          mepowerleo10
        </a>
      ),
    },
    { icon: MapPin, label: "Based in", value: communication.address },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-muted/40 flex items-center justify-center snap-start"
    >
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto transition-opacity duration-1000 ease-in",
          isIntersecting ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="text-center mb-16">
          <h2 id="morph-title-contact" className="text-4xl font-bold mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Found a problem you need solved? Email me
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{label}</p>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
