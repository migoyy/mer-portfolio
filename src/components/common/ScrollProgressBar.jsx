import { m, useScroll, useSpring } from "framer-motion";

/**
 * Top-of-page progress bar tied to vertical scroll position.
 * Uses Framer Motion's useScroll + spring for buttery smooth motion.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <m.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]
                 bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400"
    />
  );
}
