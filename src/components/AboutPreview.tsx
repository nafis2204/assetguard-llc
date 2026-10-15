import { motion } from "framer-motion";
import aboutCrew from "@/assets/about-crew.jpg";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <img src={aboutCrew} alt="RapidFix team at property site" className="w-full h-auto" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">
              About <span className="text-gradient">RapidFix</span> LLC
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              RapidFix LLC provides dependable property maintenance and preservation
              services for homeowners, investors, and property managers. We focus on quality
              execution, fast service, and clear communication to keep properties secure,
              functional, and move-in ready.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
