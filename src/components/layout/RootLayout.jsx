import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, m } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundFx from "@components/common/BackgroundFx";
import ScrollProgressBar from "@components/common/ScrollProgressBar";
import BackToTopButton from "@components/common/BackToTopButton";

/**
 * Shared layout for all routes — global chrome + page transitions.
 */
export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundFx />
      <ScrollProgressBar />
      <Navbar />

      <AnimatePresence mode="wait">
        <m.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 pt-20 md:pt-24"
        >
          <Outlet />
        </m.main>
      </AnimatePresence>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
