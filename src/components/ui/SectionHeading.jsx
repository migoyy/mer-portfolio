import { m } from "framer-motion";
import { fadeInUp, defaultViewport } from "@utils/motionVariants";
import { cn } from "@utils/cn";

/**
 * Standard section heading — eyebrow + title + optional subtitle.
 * All three reveal together on scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <m.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn("max-w-3xl mb-14 md:mb-16", alignClass, className)}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading mt-4">
        {/* If title contains '|', everything after is rendered as gradient text. */}
        {title.includes("|") ? (
          <>
            {title.split("|")[0]}
            <span className="text-gradient">{title.split("|")[1]}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-ink-300 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </m.div>
  );
}
