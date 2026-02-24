import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Tell Us What You Need", desc: "Describe the work or request a quote." },
  { icon: CalendarCheck, step: "02", title: "We Schedule & Dispatch", desc: "Our team coordinates and arrives on time." },
  { icon: CheckCircle2, step: "03", title: "Job Done + Confirmation", desc: "Quality checked and confirmed complete." },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-primary" size={28} />
              </div>
              <span className="text-xs font-heading font-bold text-primary uppercase tracking-widest">
                Step {s.step}
              </span>
              <h3 className="text-lg font-heading font-bold text-foreground mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
