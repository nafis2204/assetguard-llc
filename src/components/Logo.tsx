import { brand } from "@/lib/brand";

interface LogoProps {
  className?: string;
  size?: "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => (
  <img
    src={brand.logo}
    alt={brand.name}
    className={`${size === "lg" ? "h-16" : "h-11 md:h-12"} w-auto ${className}`}
  />
);

export default Logo;
