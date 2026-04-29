import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import Container from "@components/ui/Container";
import Button from "@components/ui/Button";

/**
 * 404 fallback — matches the dark/glass aesthetic of the rest of the site.
 */
export default function NotFoundPage() {
  return (
    <Container className="min-h-[70vh] flex items-center justify-center text-center">
      <div className="max-w-md">
        <p className="font-mono text-sm uppercase tracking-widest text-brand-300">
          Error 404
        </p>
        <h1 className="mt-4 text-6xl md:text-8xl font-bold text-gradient font-display">
          Lost in space
        </h1>
        <p className="mt-6 text-ink-300">
          The page you're looking for has drifted off the grid. Let's get you
          back home.
        </p>
        <Button as={Link} to="/" className="mt-8" size="lg">
          <HiArrowLeft /> Back to home
        </Button>
      </div>
    </Container>
  );
}
