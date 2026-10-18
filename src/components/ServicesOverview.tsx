import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ShieldCheck, Wrench, Wind, Zap, Droplets, PaintBucket, Layers,
  DoorOpen, GlassWater, Lightbulb, Lamp, Trash2, TreePine, Paintbrush,
} from "lucide-react";

const groups = [
  {
    title: "Preservation & Security",
    blurb: "Lock it down, clean it out and keep it compliant between occupants.",
    items: [
      { icon: ShieldCheck, name: "Roll-Ups & Grills" },
      { icon: DoorOpen, name: "Doors & Locks" },
      { icon: GlassWater, name: "Glass & Board-Up" },
      { icon: Trash2, name: "Trash Out" },
    ],
  },
  {
    title: "Systems & Utilities",
    blurb: "Licensed-level care for the systems that keep a building livable.",
    items: [
      { icon: Wind, name: "HVAC" },
      { icon: Zap, name: "Electrical" },
      { icon: Droplets, name: "Plumbing" },
      { icon: Lightbulb, name: "Signage & Lighting" },
    ],
  },
  {
    title: "Finishes & Turnovers",
    blurb: "Fresh surfaces and fixtures that make a unit rent- or sale-ready.",
    items: [
      { icon: PaintBucket, name: "Interior Painting" },
      { icon: Paintbrush, name: "Exterior Painting" },
      { icon: Layers, name: "Flooring" },
      { icon: Lamp, name: "Fixtures" },
    ],
  },
  {
    title: "Grounds & General",
    blurb: "Curb appeal and the punch-list jobs nobody else wants.",
    items: [
      { icon: TreePine, name: "Landscaping" },
      { icon: Wrench, name: "Handyman Repairs" },
    ],
  },
];

const ServicesOverview = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What we cover</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
            Four service lines. One crew you can count on.
          </h2>
        </div>
        <Link to="/services" className="inline-flex items-center gap-1 font-semibold text-primary hover:gap-2 transition-all">
          Full service list <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <motion.article
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-heading text-sm font-bold text-sage">0{i + 1}</span>
                <h3 className="mt-1 text-xl font-heading font-bold text-foreground">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.blurb}</p>
              </div>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {g.items.map((it) => (
                <li key={it.name} className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-3 text-sm font-medium text-foreground">
                  <it.icon size={18} className="text-primary shrink-0" /> {it.name}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
