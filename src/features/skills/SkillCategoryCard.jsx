import { m } from "framer-motion";
import {
  HiSparkles,
  HiServerStack,
  HiCircleStack,
  HiWrenchScrewdriver,
  HiRocketLaunch,
} from "react-icons/hi2";
import Card from "@components/ui/Card";
import SkillBar from "./SkillBar";
import { fadeInUp } from "@utils/motionVariants";

// Icon registry — keeps the data file string-only & icon-agnostic
const ICONS = {
  Sparkles: HiSparkles,
  Server: HiServerStack,
  Database: HiCircleStack,
  Wrench: HiWrenchScrewdriver,
  Rocket: HiRocketLaunch,
};

export default function SkillCategoryCard({ category, icon, color, items }) {
  const Icon = ICONS[icon] || HiSparkles;

  return (
    <m.div variants={fadeInUp}>
      <Card hoverable className="p-7 h-full">
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`h-11 w-11 rounded-xl grid place-items-center
                        bg-gradient-to-br ${color} text-white shadow-glow`}
          >
            <Icon className="text-xl" />
          </div>
          <h3 className="text-lg font-semibold">{category}</h3>
        </div>

        <div className="space-y-4">
          {items.map((skill) => (
            <SkillBar key={skill.name} {...skill} gradient={color} />
          ))}
        </div>
      </Card>
    </m.div>
  );
}
