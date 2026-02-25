import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import xgenLogo from "@/assets/xgen-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img src={xgenLogo} alt="XGen HomeBuilders" className="h-16 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Dependable property maintenance and preservation services for homeowners, investors,
              and property managers.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61587243430491"
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
              <a href="tel:+16175163443" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" />
                <span>+1 617-516-3443</span>
              </a>
              <a href="mailto:xgenhomebuilders@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" />
                <span>xgenhomebuilders@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>64 Woodlawn Rd, Randolph, MA 02368</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} XGen HomeBuilders LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
