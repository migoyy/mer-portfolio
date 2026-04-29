import AppProviders from "./app/providers";
import AppRouter from "./app/router";

/**
 * Root application component.
 * Keeps logic minimal — providers + router are composed separately.
 */
export default function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
