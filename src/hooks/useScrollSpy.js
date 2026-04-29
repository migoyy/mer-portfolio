import { useEffect, useState } from "react";

/**
 * Tracks which section ID is currently visible in the viewport.
 * Returns the active section's id so the navbar can highlight it.
 *
 * @param {string[]} sectionIds — list of section element ids (without "#")
 * @param {number}   offset     — px offset from top to consider "active"
 */
export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
