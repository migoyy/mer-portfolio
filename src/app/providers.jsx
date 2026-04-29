import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Centralised provider stack.
 * Add future providers here (ThemeProvider, QueryClientProvider, AuthProvider...).
 *
 * LazyMotion + domAnimation reduces Framer Motion's bundle weight by loading
 * only the animation features that we actually use.
 */
export default function AppProviders({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
