import { m } from "framer-motion";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import TimelineItem from "./TimelineItem";
import { EXPERIENCE } from "@data/experience";
import { staggerContainer, defaultViewport } from "@utils/motionVariants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <Container>
        <SectionHeading
          eyebrow="04 — Experience"
          title="A short |timeline."
          subtitle="From freelancing to leading engineering teams — here's the path so far."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical spine — left on mobile, centered on desktop */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 w-px
                       left-0 md:left-1/2 md:-translate-x-1/2
                       bg-gradient-to-b from-transparent via-white/10 to-transparent"
          />

          <m.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-12"
          >
            {EXPERIENCE.map((item, idx) => (
              <TimelineItem key={item.id} item={item} index={idx} />
            ))}
          </m.div>
        </div>
      </Container>
    </section>
  );
}
