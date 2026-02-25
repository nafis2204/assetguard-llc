import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Wrench, DoorOpen, Lamp, ShieldCheck,
  Wind, Zap, Droplets,
  PaintBucket, Paintbrush, Layers, GlassWater,
  Lightbulb, Trash2, TreePine,
} from "lucide-react";
import electricianWork from "@/assets/electrician-work.jpg";
import painterWork from "@/assets/painter-work.jpg";
import plumberWork from "@/assets/plumber-work.jpg";
import flooringWork from "@/assets/flooring-work.jpg";

const categories = [
  {
    title: "Repairs & Maintenance",
    image: electricianWork,
    items: [
      { icon: Wrench, name: "Handyman", points: ["General repairs", "Drywall patching", "Minor carpentry", "Property inspections"] },
      { icon: DoorOpen, name: "Doors", points: ["Installation & alignment", "Hardware replacement", "Frame repair", "Weatherstripping"] },
      { icon: Lamp, name: "Fixtures", points: ["Light fixture installation", "Fan installation", "Hardware mounting", "Towel bars & shelves"] },
      { icon: ShieldCheck, name: "Roll-Ups & Grills", points: ["Security gate installation", "Roll-up door repair", "Access solutions", "Lock replacements"] },
    ],
  },
  {
    title: "Mechanical & Utilities",
    image: plumberWork,
    items: [
      { icon: Wind, name: "HVAC", points: ["System installation", "Repair & maintenance", "Filter replacement", "Thermostat setup"] },
      { icon: Zap, name: "Electrical", points: ["Panel upgrades", "Outlet installation", "Wiring repair", "Code compliance"] },
      { icon: Droplets, name: "Plumbing", points: ["Leak detection & repair", "Fixture installation", "Drain clearing", "Water heater service"] },
    ],
  },
  {
    title: "Finishes & Improvements",
    image: painterWork,
    items: [
      { icon: PaintBucket, name: "Interior Painting", points: ["Wall painting", "Trim & baseboard", "Cabinet refinishing", "Accent walls"] },
      { icon: Paintbrush, name: "Exterior Painting", points: ["Siding painting", "Deck staining", "Pressure washing prep", "Weather-resistant coatings"] },
      { icon: Layers, name: "Flooring", points: ["Hardwood installation", "Tile work", "Vinyl & laminate", "Carpet replacement"] },
      { icon: GlassWater, name: "Glass", points: ["Window replacement", "Glass pane repair", "Screen repair", "Mirror installation"] },
    ],
  },
  {
    title: "Visibility & Safety",
    image: flooringWork,
    items: [
      { icon: Lightbulb, name: "Signage & Lighting", points: ["Exterior lighting", "Sign installation", "Pathway lights", "Security lighting"] },
      { icon: Trash2, name: "Trash Out", points: ["Property cleanouts", "Debris removal", "Junk hauling", "Move-out cleaning"] },
      { icon: TreePine, name: "Landscaping", points: ["Lawn mowing & edging", "Bush & tree trimming", "Seasonal cleanup", "Mulching & bed care"] },
    ],
  },
];

const Services = () => {
  return (
    <main className="pt-24">
      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive property maintenance services delivered by skilled professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section key={cat.title} className={`py-16 ${ci % 2 === 0 ? "bg-secondary" : "bg-background"}`}>
          <div className="container mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${ci % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: ci % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={ci % 2 !== 0 ? "lg:order-2" : ""}
              >
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-8">
                  {cat.title}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {cat.items.map((item) => (
                    <div key={item.name} className="glow-card bg-card border border-border rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-md bg-primary/15 flex items-center justify-center">
                          <item.icon className="text-primary" size={18} />
                        </div>
                        <h3 className="font-heading font-bold text-foreground text-sm">{item.name}</h3>
                      </div>
                      <ul className="space-y-1">
                        {item.points.map((p) => (
                          <li key={p} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: ci % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`rounded-xl overflow-hidden ${ci % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <img src={cat.image} alt={cat.title} className="w-full h-auto object-cover" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <Button size="lg" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
