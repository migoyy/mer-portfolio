import { m } from "framer-motion";
import { HiBriefcase, HiCodeBracketSquare, HiSparkles } from "react-icons/hi2";
import Card from "@components/ui/Card";
import Badge from "@components/ui/Badge";
import { fadeInUp } from "@utils/motionVariants";

const TYPE_META = {
  work: { label: "Work", variant: "brand", Icon: HiBriefcase },
  freelance: { label: "Freelance", variant: "warn", Icon: HiCodeBracketSquare },
  personal: { label: "Personal", variant: "success", Icon: HiSparkles },
};

/**
 * One node in the experience timeline.
 * Layout is intentionally responsive — stacks on mobile, alternates on desktop.
 */
export default function TimelineItem({ item, index }) {
  const meta = TYPE_META[item.type] || TYPE_META.work;
  const isEven = index % 2 === 0;

  return (
    <m.div variants={fadeInUp} className="relative md:grid md:grid-cols-2 md:gap-12">
      {/* Center dot — anchored to the spine */}
      <div
        className="absolute md:left-1/2 left-0 top-6 -translate-x-1/2
                   h-4 w-4 rounded-full bg-brand-400
                   ring-4 ring-brand-500/20 shadow-glow z-10"
      />

      {/* Card column — alternates on desktop */}
      <div
        className={`pl-8 md:pl-0 ${
          isEven ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"
        }`}
      >
        <Card hoverable className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant={meta.variant}>
              <meta.Icon className="text-sm" /> {meta.label}
            </Badge>
            <span className="text-xs font-mono text-ink-400">{item.period}</span>
          </div>

          <h3 className="text-lg font-semibold">{item.role}</h3>
          <p className="text-sm text-brand-300 mt-0.5">
            {item.company} · {item.location}
          </p>

          <p className="mt-3 text-sm text-ink-300 leading-relaxed">
            {item.description}
          </p>

          {item.achievements?.length > 0 && (
            <ul className="mt-4 space-y-1.5">
              {item.achievements.map((a) => (
                <li
                  key={a}
                  className="text-sm text-ink-200 pl-4 relative
                             before:content-['▸'] before:absolute before:left-0 before:text-brand-400"
                >
                  {a}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </m.div>
  );
}
