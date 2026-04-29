import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

/**
 * Floating "back to top" button — appears after scrolling past 400px.
 */
export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          aria-label="Back to top"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50
                     h-12 w-12 rounded-full
                     bg-gradient-to-br from-brand-500 to-brand-700
                     flex items-center justify-center text-white
                     shadow-glow hover:shadow-glow-lg
                     hover:scale-110 transition-transform"
        >
          <HiArrowUp className="text-lg" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
