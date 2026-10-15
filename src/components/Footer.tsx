import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { brand } from "@/lib/brand";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img src={brand.logo} alt={brand.name} className="w-48 h-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Dependable property maintenance and preservation services for homeowners, investors,
              and property managers.
            </p>
            <a
              href={brand.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={18} />
              <span>Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-primary mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Become a Vendor", to: "/become-a-vendor" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-primary mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={brand.phoneHref} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" />
                <span>{brand.phone}</span>
              </a>
              <a href={brand.emailHref} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" />
                <span>{brand.email}</span>
              </a>
              <a href={brand.maps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{brand.address}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="mt-1">
            Developed by{" "}
            <a href="https://rosetech.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              RoseTech Solutions Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
