import { forwardRef } from "react";
import { cn } from "@utils/cn";

/**
 * Button primitive — handles both <button> and <a>/<Link> via `as` prop.
 *
 * Variants: primary | secondary | ghost | outline
 * Sizes:    sm | md | lg
 */
const VARIANTS = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow " +
    "hover:shadow-glow-lg hover:from-brand-400 hover:to-brand-500 active:scale-[0.98]",
  secondary:
    "bg-white/[0.06] text-ink-50 border border-white/10 backdrop-blur-md " +
    "hover:bg-white/[0.1] hover:border-white/20 active:scale-[0.98]",
  ghost:
    "bg-transparent text-ink-100 hover:bg-white/[0.06] hover:text-white",
  outline:
    "bg-transparent text-brand-300 border border-brand-500/40 " +
    "hover:bg-brand-500/10 hover:border-brand-500/70 hover:text-brand-200",
};

const SIZES = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

const Button = forwardRef(function Button(
  {
    as: Component = "button",
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
  },
  ref
) {
  return (
    <Component
      ref={ref}
      className={cn(
        // Base styles
        "inline-flex items-center justify-center gap-2 rounded-full",
        "font-medium tracking-wide whitespace-nowrap",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0",
        "disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Button;
