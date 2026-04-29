import { m } from "framer-motion";
import { defaultViewport } from "@utils/motionVariants";

/**
 * Single animated skill row with name + percent + filled bar.
 * The fill animates from 0 → level when the bar enters the viewport.
 */
export default function SkillBar({ name, level, gradient }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm text-ink-100">{name}</span>
        <span className="text-xs font-mono text-ink-400">{level}%</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
        <m.span
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={defaultViewport}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${gradient}`}
        />
      </div>
    </div>
  );
}
