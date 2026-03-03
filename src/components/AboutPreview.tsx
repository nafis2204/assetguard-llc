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
            <img src={aboutCrew} alt="Evergreen restoration team on site" className="w-full h-auto" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">
              About <span className="text-gradient">Evergreen Homes Restoration</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Evergreen Homes Restoration LLC specializes in comprehensive property restoration
              and preservation services for homeowners, investors, and property managers. We
              prioritize expert execution, responsive scheduling, and transparent communication
              to ensure every property is protected, restored, and tenant-ready.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
