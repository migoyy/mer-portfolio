import { useEffect, useRef, useState } from "react";

/**
 * Smoothly animates a number from 0 to `target` once the element is in view.
 * Uses IntersectionObserver so the count triggers on scroll.
 *
 * @param {number} target              — final number
 * @param {object} [options]
 * @param {number} [options.duration=1800]   — animation duration in ms
 * @param {number} [options.threshold=0.4]   — IO threshold
 */
export default function useCountUp(target, { duration = 1800, threshold = 0.4 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, threshold]);

  return [ref, value];
}
