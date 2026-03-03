import { motion } from "framer-motion";
import { Lightbulb, Award, Clock, Headphones, Users } from "lucide-react";
import teamPlanning from "@/assets/team-planning.jpg";

const benefits = [
  { icon: Lightbulb, title: "Innovative Approaches", desc: "Tailored restoration strategies for every property" },
  { icon: Award, title: "Proven Quality", desc: "Expert craftsmanship backed by years of experience" },
  { icon: Clock, title: "Rapid Response", desc: "Efficient scheduling with prompt project delivery" },
  { icon: Headphones, title: "Always Available", desc: "Round-the-clock support when you need us most" },
  { icon: Users, title: "Trusted Teams", desc: "Vetted professionals committed to excellence" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-8">
              Why Choose <span className="text-gradient">Evergreen</span>
            </h2>
            <div className="flex flex-col gap-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <b.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img src={teamPlanning} alt="Team coordinating restoration project" className="w-full h-auto" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
