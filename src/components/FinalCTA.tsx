import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

const FinalCTA = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto">
      <div className="rounded-3xl px-8 py-14 md:px-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-forest-foreground" style={{ background: "var(--gradient-cta)" }}>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Have a property that needs attention?</h2>
          <p className="mt-3 opacity-85">Tell us the address and the issue — we'll respond with a plan and a price.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start a Work Order</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-forest-foreground/40 text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground" asChild>
            <a href={brand.phoneHref}><Phone /> {brand.phone}</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
