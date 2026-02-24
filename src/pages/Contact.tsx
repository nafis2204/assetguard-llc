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
import { Phone, Mail, MapPin } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
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
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required maxLength={200} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Property Location</Label>
                    <Input id="location" placeholder="City, State" maxLength={200} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Service Needed</Label>
                    <Select>
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
                    <Select>
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
                  <Textarea id="message" placeholder="Describe your project or needs..." rows={5} maxLength={2000} />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 space-y-5">
                <h3 className="font-heading font-bold text-foreground">Contact Info</h3>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={18} className="text-primary" />
                  <span className="text-muted-foreground">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={18} className="text-primary" />
                  <span className="text-muted-foreground">info@xgenhomebuilders.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-muted-foreground">Serving the Greater Metro Area</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
