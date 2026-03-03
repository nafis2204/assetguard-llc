import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import xgenLogo from "@/assets/xgen-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img src={xgenLogo} alt="Evergreen Homes Restoration" className="h-24 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Professional property restoration and preservation services for homeowners,
              investors, and property managers across New York and California.
            </p>
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
              <a href="tel:+12067450913" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" />
                <span>(206) 745-0913</span>
              </a>
              <a href="mailto:fayej@evergreenhomesrestoration.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" />
                <span>fayej@evergreenhomesrestoration.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>2113 Grand Ave, Bronx, NY 10453</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>453 S Spring St, Los Angeles, CA 90013</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Evergreen Homes Restoration LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
