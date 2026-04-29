import useCountUp from "@hooks/useCountUp";

/**
 * Pretty animated counter — pairs `useCountUp` with formatted output.
 */
export default function AnimatedCounter({ value, suffix = "", label }) {
  const [ref, current] = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient font-display">
        {current}
        {suffix}
      </div>
      <p className="mt-2 text-xs md:text-sm font-mono uppercase tracking-widest text-ink-400">
        {label}
      </p>
    </div>
  );
}
