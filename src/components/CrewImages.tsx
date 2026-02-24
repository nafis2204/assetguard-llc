import { motion } from "framer-motion";
import electricianWork from "@/assets/electrician-work.jpg";
import painterWork from "@/assets/painter-work.jpg";
import plumberWork from "@/assets/plumber-work.jpg";
import flooringWork from "@/assets/flooring-work.jpg";
import hvacWork from "@/assets/hvac-work.jpg";

const images = [
  { src: electricianWork, alt: "Electrician panel work" },
  { src: painterWork, alt: "Painter rolling walls" },
  { src: plumberWork, alt: "Plumber under sink" },
  { src: flooringWork, alt: "Flooring installation" },
  { src: hvacWork, alt: "HVAC technician" },
];

const CrewImages = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrewImages;
