import { cn } from "@utils/cn";

/**
 * Tiny tag/badge — used for tech stack pills and timeline labels.
 */
const VARIANTS = {
  default: "bg-surface-200/80 border-white/5 text-ink-200",
  brand: "bg-brand-500/10 border-brand-400/30 text-brand-300",
  success: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
  warn: "bg-amber-500/10 border-amber-400/30 text-amber-300",
  danger: "bg-rose-500/10 border-rose-400/30 text-rose-300",
};

export default function Badge({ variant = "default", className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md",
        "border text-xs font-mono tracking-wide",
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
