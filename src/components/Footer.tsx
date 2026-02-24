import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-heading font-extrabold text-primary">XGen</span>
            <span className="text-lg font-heading font-semibold text-foreground ml-2">
              HomeBuilders LLC
            </span>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Dependable property maintenance and preservation services for homeowners, investors,
              and property managers.
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
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>info@xgenhomebuilders.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Serving the Greater Metro Area</span>
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
