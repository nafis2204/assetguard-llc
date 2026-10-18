import { motion } from "framer-motion";
import { Award, Zap, MessageCircle } from "lucide-react";
import teamPlanning from "@/assets/team-planning.jpg";
import heroCrew from "@/assets/hero-crew.jpg";

const values = [
  { icon: Award, title: "Quality", desc: "Skilled craftsmanship with meticulous attention to every detail." },
  { icon: Zap, title: "Speed", desc: "Fast scheduling, rapid turnaround, and on-time delivery." },
  { icon: MessageCircle, title: "Communication", desc: "Clear, responsive, and transparent at every step." },
];

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Built for <span className="text-gradient">Reliable</span> Property Care
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Assetguard LLC, our mission is to provide property owners, investors, and
                managers with dependable maintenance and preservation services they can count on.
                We combine skilled labor with efficient coordination to keep every property secure,
                functional, and move-in ready.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in doing things right the first time — with integrity, precision, and
                the kind of hustle that gets results. Our crews are trained, equipped, and motivated
                to deliver quality on every job.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden">
              <img src={teamPlanning} alt="RapidFix team" className="w-full h-auto" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-extrabold text-foreground text-center mb-12"
          >
            Core <span className="text-gradient">Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden max-w-4xl mx-auto"
          >
            <img src={heroCrew} alt="Our team at work" className="w-full h-auto" loading="lazy" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
