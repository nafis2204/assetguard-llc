import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Camera, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCrew from "@/assets/hero-crew.jpg";
import { brand } from "@/lib/brand";

const proof = [
  { icon: ShieldCheck, label: "Insured field crews" },
  { icon: Camera, label: "Photo-documented jobs" },
  { icon: Clock, label: "Quick dispatch" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-secondary">
    {/* roofline stripes echoing the logo */}
    <div aria-hidden className="absolute -right-24 top-0 h-full w-1/2 hidden lg:flex gap-6 opacity-60">
      <span className="w-6 h-full bg-leaf/40 -skew-x-12" />
      <span className="w-6 h-full bg-sage/40 -skew-x-12" />
      <span className="w-6 h-full bg-primary/30 -skew-x-12" />
    </div>

    <div className="container mx-auto relative grid lg:grid-cols-12 gap-10 items-center py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1 text-xs font-semibold text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" /> Serving Greater Houston, TX
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-heading font-extrabold leading-[1.05] text-foreground">
          Your property, <span className="text-primary">guarded</span> and in great shape.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          AssetGuard keeps vacant, occupied and commercial properties secure, repaired and ready —
          one accountable team for preservation, turnovers and everyday upkeep.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={brand.phoneHref}><Phone /> {brand.phone}</a>
          </Button>
        </div>
        <ul className="mt-10 grid sm:grid-cols-3 gap-4">
          {proof.map((p) => (
            <li key={p.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <p.icon size={18} className="text-primary shrink-0" /> {p.label}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="lg:col-span-6 relative"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-background aspect-[4/3]">
          <img src={heroCrew} alt="AssetGuard crew repairing a property" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-6 left-6 bg-forest text-forest-foreground rounded-xl px-5 py-4 shadow-xl flex items-center gap-4">
          <span className="font-heading text-3xl font-extrabold text-leaf">16+</span>
          <span className="text-sm leading-tight">trade services<br />under one contract</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
