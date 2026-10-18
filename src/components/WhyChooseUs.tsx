import { motion } from "framer-motion";
import { Check } from "lucide-react";
import teamPlanning from "@/assets/team-planning.jpg";
import plumberWork from "@/assets/plumber-work.jpg";

const pledges = [
  { title: "Before & after photos on every job", desc: "You see the work without driving to the site." },
  { title: "One point of contact", desc: "A dedicated coordinator tracks your work order start to finish." },
  { title: "Transparent, itemized bids", desc: "No vague totals — every line is explained before we begin." },
  { title: "Vetted, insured technicians", desc: "Every vendor in our network is screened and covered." },
  { title: "Around-the-clock emergency line", desc: "Leaks, break-ins and outages don't wait for business hours." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-forest text-forest-foreground overflow-hidden">
    <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[460px] hidden md:block">
        <img src={teamPlanning} alt="Crew reviewing a property work plan" className="absolute left-0 top-0 w-3/4 h-72 object-cover rounded-2xl" />
        <img src={plumberWork} alt="Technician repairing plumbing" className="absolute right-0 bottom-0 w-3/5 h-64 object-cover rounded-2xl border-8 border-forest" />
      </motion.div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-leaf mb-3">The AssetGuard standard</p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
          Built for owners who can't be on site.
        </h2>
        <ul className="mt-10 space-y-6">
          {pledges.map((p, i) => (
            <motion.li key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex gap-4">
              <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-primary flex items-center justify-center">
                <Check size={16} className="text-primary-foreground" />
              </span>
              <div>
                <h3 className="font-heading font-bold">{p.title}</h3>
                <p className="text-sm opacity-75">{p.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
