import { forwardRef } from "react";
import { cn } from "@utils/cn";

/**
 * Glassmorphism card with optional hover lift + animated gradient border.
 */
const Card = forwardRef(function Card(
  { className, hoverable = false, gradientBorder = false, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative glass overflow-hidden",
        hoverable &&
          "transition-all duration-500 hover:-translate-y-1 hover:shadow-glow hover:border-brand-400/30",
        gradientBorder && "gradient-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default Card;
