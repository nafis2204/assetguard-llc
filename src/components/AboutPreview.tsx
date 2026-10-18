import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutCrew from "@/assets/about-crew.jpg";

const stats = [
  { value: "16+", label: "Trades covered" },
  { value: "24/7", label: "Emergency response" },
  { value: "100%", label: "Jobs photo-verified" },
];

const AboutPreview = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto grid lg:grid-cols-5 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Who we are</p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
          A Houston team that treats every property like an investment.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          AssetGuard LLC partners with homeowners, landlords, asset managers and lenders to protect
          value between tenants, sales and seasons. We pair skilled local trades with disciplined
          reporting, so nothing slips through the cracks.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
          {stats.map((s) => (
            <div key={s.label} className="border-l-4 border-primary pl-3">
              <div className="font-heading text-2xl font-extrabold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
          More about AssetGuard <ArrowRight size={18} />
        </Link>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        src={aboutCrew} alt="AssetGuard team at a property site"
        className="lg:col-span-2 w-full h-[420px] object-cover rounded-2xl"
      />
    </div>
  </section>
);

export default AboutPreview;
