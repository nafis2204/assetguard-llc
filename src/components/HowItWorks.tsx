import { motion } from "framer-motion";

const steps = [
  { title: "Submit a work order", desc: "Call, email or use our form — share the address and what needs attention." },
  { title: "Site assessment & bid", desc: "We inspect, photograph and send a clear, itemized estimate." },
  { title: "Crew completes the work", desc: "The right trade arrives on schedule and keeps you updated." },
  { title: "Close-out report", desc: "Receive completion photos and notes for your records." },
];

const HowItWorks = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our process</p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">From request to report in four steps</h2>
      </div>
      <ol className="relative grid md:grid-cols-4 gap-10">
        <span aria-hidden className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-sage to-leaf" />
        {steps.map((s, i) => (
          <motion.li key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
            <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-primary font-heading font-extrabold text-primary">
              {i + 1}
            </span>
            <h3 className="mt-5 font-heading font-bold text-lg text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
