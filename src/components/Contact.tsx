import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { communication, formSpree } from "@/lib/settings";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(formSpree.formLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          _subject: `New message from ${values.fullName}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I will get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-secondary/20 flex items-center justify-center">
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
                  <p className="text-muted-foreground"><a href={`mailto:${communication.email}`}>{communication.email}</a></p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground"><a href={`tel:${communication.phone}`}>{communication.phone}</a></p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">{communication.address}</p>
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
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">Your Name</label>
                  <Input 
                    id="fullName" 
                    placeholder="Akilimali Mchapakazi" 
                    className="bg-background/50" 
                    {...form.register("fullName")} 
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-red-500 text-xs">{form.formState.errors.fullName.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="akilimali.mchapakazi@example.com" 
                    className="bg-background/50" 
                    {...form.register("email")} 
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
                  <select 
                    id="projectType" 
                    className="w-full p-3 bg-background/50 border border-input rounded-md text-foreground"
                    {...form.register("projectType")}
                  >
                    <option value="">Select project type</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="DevOps Consulting">DevOps Consulting</option>
                    <option value="Infrastructure Setup">Infrastructure Setup</option>
                    <option value="Other">Other</option>
                  </select>
                  {form.formState.errors.projectType && (
                    <p className="text-red-500 text-xs">{form.formState.errors.projectType.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project..." 
                    className="bg-background/50 min-h-[120px]" 
                    {...form.register("message")} 
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;