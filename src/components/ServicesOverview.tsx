import { motion } from "framer-motion";
import {
  Wrench, Wind, PaintBucket, Paintbrush, DoorOpen, ShieldCheck,
  GlassWater, Layers, Zap, Droplets, Lightbulb, Lamp,
} from "lucide-react";

const services = [
  { icon: Wrench, title: "Handyman", desc: "General repairs and maintenance" },
  { icon: Wind, title: "HVAC", desc: "Installation, repair, and system maintenance" },
  { icon: PaintBucket, title: "Interior Painting", desc: "Professional interior finishing" },
  { icon: Paintbrush, title: "Exterior Painting", desc: "Durable exterior protection" },
  { icon: DoorOpen, title: "Doors", desc: "Repair, installation, and alignment" },
  { icon: ShieldCheck, title: "Roll-Ups & Grills", desc: "Secure access solutions" },
  { icon: GlassWater, title: "Glass", desc: "Window and glass replacement" },
  { icon: Layers, title: "Flooring", desc: "Installation and repair" },
  { icon: Zap, title: "Electrical", desc: "Safe and reliable electrical work" },
  { icon: Droplets, title: "Plumbing", desc: "Leak fixes and system repairs" },
  { icon: Lightbulb, title: "Signage & Lighting", desc: "Exterior/interior lighting solutions" },
  { icon: Lamp, title: "Fixtures", desc: "Installation and replacement services" },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Complete property maintenance solutions under one trusted team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glow-card group bg-card border border-border rounded-lg p-6 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
