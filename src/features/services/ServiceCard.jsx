import { m } from "framer-motion";
import {
  HiCodeBracket,
  HiServerStack,
  HiBuildingOffice2,
  HiSparkles,
  HiCheckCircle,
} from "react-icons/hi2";
import Card from "@components/ui/Card";
import { fadeInUp } from "@utils/motionVariants";

// String → component registry — keeps data files icon-free
const ICONS = {
  HiCodeBracket,
  HiServerStack,
  HiBuildingOffice2,
  HiSparkles,
};

export default function ServiceCard({ icon, title, description, features }) {
  const Icon = ICONS[icon] || HiSparkles;

  return (
    <m.div variants={fadeInUp}>
      <Card hoverable className="p-7 h-full relative group">
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100
                     bg-gradient-to-br from-brand-500/[0.08] to-transparent
                     transition-opacity duration-500 pointer-events-none"
        />

        <div className="relative">
          <div
            className="h-12 w-12 rounded-xl grid place-items-center
                       bg-gradient-to-br from-brand-500/20 to-purple-500/20
                       border border-white/10 text-brand-300
                       group-hover:scale-110 transition-transform duration-500"
          >
            <Icon className="text-2xl" />
          </div>

          <h3 className="mt-5 text-lg font-semibold">{title}</h3>
          <p className="mt-3 text-sm text-ink-300 leading-relaxed">
            {description}
          </p>

          <ul className="mt-5 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-ink-200">
                <HiCheckCircle className="text-brand-400 flex-none" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </m.div>
  );
}
