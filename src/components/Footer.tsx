import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand";
import Logo from "@/components/Logo";

const services = ["Property Preservation", "Turnover Repairs", "HVAC & Plumbing", "Electrical", "Painting & Flooring", "Landscaping & Trash Out"];

const Footer = () => (
  <footer className="bg-forest text-forest-foreground">
    <div className="container mx-auto py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Link to="/" aria-label="AssetGuard LLC home" className="inline-block bg-background rounded-md px-3 py-2">
          <Logo />
        </Link>
        <p className="mt-5 text-sm opacity-80 leading-relaxed">
          Houston-based property care that keeps homes and commercial spaces protected, documented and ready for what's next.
        </p>
      </div>

      <div>
        <h4 className="font-heading text-sm uppercase tracking-widest text-leaf mb-4">Company</h4>
        <ul className="space-y-2 text-sm">
          {[
            ["Home", "/"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"], ["Join Our Network", "/become-a-vendor"],
          ].map(([l, t]) => (
            <li key={t}><Link to={t} className="opacity-80 hover:opacity-100 hover:text-leaf transition">{l}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading text-sm uppercase tracking-widest text-leaf mb-4">What We Handle</h4>
        <ul className="space-y-2 text-sm">
          {services.map((s) => (
            <li key={s}><Link to="/services" className="opacity-80 hover:opacity-100 hover:text-leaf transition">{s}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading text-sm uppercase tracking-widest text-leaf mb-4">Reach Us</h4>
        <div className="space-y-3 text-sm">
          <a href={brand.phoneHref} className="flex items-center gap-3 hover:text-leaf"><Phone size={16} className="text-leaf" />{brand.phone}</a>
          <a href={brand.emailHref} className="flex items-center gap-3 hover:text-leaf break-all"><Mail size={16} className="text-leaf shrink-0" />{brand.email}</a>
          <a href={brand.maps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-leaf">
            <MapPin size={16} className="text-leaf mt-0.5 shrink-0" />
            <span>{brand.addressLines[0]}<br />{brand.addressLines[1]}</span>
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-2 font-semibold text-leaf hover:gap-3 transition-all">
            Request service <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
    <div className="border-t border-forest-foreground/10">
      <div className="container mx-auto py-5 flex flex-col md:flex-row justify-between gap-2 text-xs opacity-70">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <p>Developed by <a href="https://rosetech.dev" target="_blank" rel="noopener noreferrer" className="hover:text-leaf underline">RoseTech Solutions Ltd</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
