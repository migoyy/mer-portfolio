import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NAV_LINKS, SITE_CONFIG } from "@utils/constants";
import { cn } from "@utils/cn";
import useScrollSpy from "@hooks/useScrollSpy";
import Button from "@components/ui/Button";

/**
 * Sticky navbar with:
 *  - Glassmorphism that gets stronger after scrolling
 *  - Active link highlight via scroll-spy
 *  - Animated mobile drawer
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Section IDs are derived from the anchor hrefs in NAV_LINKS.
  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-surface-0/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-display font-bold text-lg"
        >
          <span
            className="grid place-items-center h-9 w-9 rounded-xl
                       bg-gradient-to-br from-brand-400 to-purple-500
                       shadow-glow text-surface-0 font-mono"
          >
            {"</>"}
          </span>
          <span className="hidden sm:block">
            {SITE_CONFIG.name.split(" ")[0]}
            <span className="text-brand-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium",
                  "transition-colors duration-300",
                  isActive ? "text-white" : "text-ink-300 hover:text-white"
                )}
              >
                {isActive && (
                  <m.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button as="a" href="#contact" size="sm">
            Hire me
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 grid place-items-center rounded-lg
                     bg-white/[0.05] border border-white/10 text-ink-100"
        >
          {open ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-3 mx-4 glass-strong rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      isActive
                        ? "bg-brand-500/10 text-brand-300"
                        : "text-ink-200 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button
                as="a"
                href="#contact"
                onClick={closeMenu}
                className="mt-3 w-full"
              >
                Hire me
              </Button>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
