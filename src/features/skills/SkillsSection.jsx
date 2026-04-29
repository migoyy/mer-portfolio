import { m } from "framer-motion";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import SkillCategoryCard from "./SkillCategoryCard";
import { SKILLS } from "@data/skills";
import { staggerContainer, defaultViewport } from "@utils/motionVariants";

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <Container>
        <SectionHeading
          eyebrow="02 — Skills"
          title="A toolkit that |delivers."
          subtitle="Years of compounding experience across the stack — from pixel-pushing on the frontend to wrangling distributed systems on the backend."
        />

        <m.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {SKILLS.map((cat) => (
            <SkillCategoryCard key={cat.category} {...cat} />
          ))}
        </m.div>
      </Container>
    </section>
  );
}
