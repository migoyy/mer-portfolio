import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { PROJECTS, PROJECT_CATEGORIES } from "@data/projects";
import { staggerContainer, defaultViewport } from "@utils/motionVariants";

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  // Memoise the filtered list so we don't recompute on every re-render
  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="projects" className="section">
      <Container>
        <SectionHeading
          eyebrow="03 — Projects"
          title="Selected |work."
          subtitle="A curated mix of client engagements, side projects and open source — each one shipped end-to-end."
        />

        <ProjectFilters
          categories={PROJECT_CATEGORIES}
          active={active}
          onChange={setActive}
        />

        <m.div
          key={active}
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </m.div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-400 mt-10">
            No projects in this category yet — check back soon.
          </p>
        )}
      </Container>
    </section>
  );
}
