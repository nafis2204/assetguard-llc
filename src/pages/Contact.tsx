import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Facebook, MapPin, ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/brand";
import { submitForm } from "@/lib/submitForm";

const serviceOptions = [
  "Handyman",
  "HVAC",
  "Interior Painting",
  "Exterior Painting",
  "Doors",
  "Roll-Ups & Grills",
  "Glass",
  "Flooring",
  "Electrical",
  "Plumbing",
  "Signage & Lighting",
  "Fixtures",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const [service, setService] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);

    const result = await submitForm(
      "contact",
      {
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        property_location: String(fd.get("location") ?? ""),
        service_needed: service,
        preferred_contact_method: contactMethod,
        message: String(fd.get("message") ?? ""),
      },
      String(fd.get("_hp") ?? "")
    );
    setSubmitting(false);

    if (result.ok) {
      toast({
        title: "Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      setService("");
      setContactMethod("");
    } else {
      toast({
        title: "Couldn't send request",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  return (
    <main className="pt-24">
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Ready to get started? Fill out the form and our team will reach out promptly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot: hidden from humans, bots fill it */}
                <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required maxLength={200} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Property Location</Label>
                    <Input id="location" name="location" placeholder="City, State" maxLength={200} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Service Needed</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Contact Method</Label>
                    <Select value={contactMethod} onValueChange={setContactMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="text">Text</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Describe your project or needs..." rows={5} maxLength={2000} />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="border-t-2 border-primary pt-6 space-y-6">
                <h3 className="font-heading font-bold text-foreground">Contact RapidFix</h3>
                <a href={brand.phoneHref} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>{brand.phone}</span>
                </a>
                <a href={brand.emailHref} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span className="break-all">{brand.email}</span>
                </a>
                <a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Facebook size={18} className="text-primary shrink-0" />
                  <span>RapidFix on Facebook</span>
                </a>
                <a href={brand.maps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-primary transition-colors">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>{brand.address}</span>
                </a>
                <Button variant="outline" asChild className="w-full">
                  <a href={brand.maps} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight size={16} /></a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
