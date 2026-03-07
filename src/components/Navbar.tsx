import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import xgenLogo from "@/assets/xgen-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 rounded-2xl bg-background/70 backdrop-blur-xl shadow-lg border border-border/50"
    >
      <div className="flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={xgenLogo} alt="XGen HomeBuilders" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link to="/become-a-vendor">Become a Crew</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium py-1.5 transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/become-a-vendor">Become a Vendor</Link>
          </Button>
          <Button size="sm" asChild className="w-full">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
