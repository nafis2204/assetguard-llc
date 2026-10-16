import { brand } from "@/lib/brand";

interface LogoProps {
  className?: string;
  size?: "md" | "lg";
}

/** Icon (bundled PNG) + live text wordmark, so the logo never depends on an external URL. */
const Logo = ({ className = "", size = "md" }: LogoProps) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <img
      src={brand.logo}
      alt=""
      aria-hidden="true"
      className={size === "lg" ? "h-12 w-auto" : "h-10 w-auto"}
    />
    <span className="flex flex-col leading-none">
      <span
        className={`font-heading font-extrabold tracking-tight text-[#14284b] ${
          size === "lg" ? "text-2xl" : "text-xl"
        }`}
      >
        Rapid<span className="text-primary">Fix</span>
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        LLC
      </span>
    </span>
  </span>
);

export default Logo;
