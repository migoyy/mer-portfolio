import { cn } from "@utils/cn";

/**
 * Filter pills — clicking one updates the active category in the parent.
 */
export default function ProjectFilters({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-all",
              isActive
                ? "bg-brand-500/15 border-brand-400/50 text-brand-200 shadow-glow"
                : "bg-white/[0.03] border-white/10 text-ink-300 hover:text-white hover:border-white/20"
            )}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
