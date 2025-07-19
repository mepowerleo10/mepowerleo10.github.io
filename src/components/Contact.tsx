import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto transition-opacity duration-1000 ease-in",
          isIntersecting ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
                interesting projects, and potential collaborations. Whether you're 
                looking for a developer, DevOps engineer, or technical consultant, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">mussa.shomari10@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+255 710 927 650</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-card rounded-lg border border-border/50">
              <h4 className="font-semibold mb-2 text-primary">Quick Response Time</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to call or send a message on LinkedIn.
              </p>
            </div>
          </div>
          
          {/* Contact form */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type</label>
                <select className="w-full p-3 bg-background/50 border border-input rounded-md text-foreground">
                  <option>Select project type</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>DevOps Consulting</option>
                  <option>Infrastructure Setup</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="bg-background/50 min-h-[120px]" 
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;