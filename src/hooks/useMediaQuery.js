import { useEffect, useState } from "react";

/**
 * Reactive media query hook.
 * @example const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export default function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
