import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { brand } from "@/lib/brand";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-forest text-forest-foreground text-xs">
        <div className="container mx-auto flex items-center justify-between py-2">
          <span className="flex items-center gap-2 opacity-90">
            <MapPin size={14} className="text-leaf" /> {brand.address}
          </span>
          <div className="flex items-center gap-6">
            <a href={brand.emailHref} className="flex items-center gap-2 hover:text-leaf transition-colors">
              <Mail size={14} className="text-leaf" /> {brand.email}
            </a>
            <a href={brand.phoneHref} className="flex items-center gap-2 font-semibold hover:text-leaf transition-colors">
              <Phone size={14} className="text-leaf" /> {brand.phone}
            </a>
          </div>
        </div>
      </div>

      <nav aria-label="Main navigation" className="bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3">
          <Link to="/" aria-label="AssetGuard LLC home" className="shrink-0">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-sm font-semibold py-2 transition-colors hover:text-primary ${
                    active ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/become-a-vendor">Join Us</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Get an Estimate</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-2 font-semibold ${location.pathname === link.to ? "text-primary" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
            <a href={brand.phoneHref} className="py-2 flex items-center gap-2 text-primary font-semibold">
              <Phone size={16} /> {brand.phone}
            </a>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button variant="outline" asChild>
                <Link to="/become-a-vendor">Join Network</Link>
              </Button>
              <Button asChild>
                <Link to="/contact">Get an Estimate</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
