import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroCrew from "@/assets/hero-crew.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[620px] md:min-h-[680px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCrew} alt="Construction crew working" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto relative z-10 pt-36 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary text-sm font-semibold mb-5">
              EL PASO, TEXAS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight mb-6">
              Rapid<span className="text-primary">Fix</span> LLC
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-5">Property Maintenance &amp; Preservation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              From minor repairs to full maintenance coordination, RapidFix LLC delivers
              high-quality workmanship with fast turnaround and responsive support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
