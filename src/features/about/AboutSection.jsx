import { m } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import AnimatedCounter from "@components/common/AnimatedCounter";
import { STATS } from "@data/skills";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  defaultViewport,
} from "@utils/motionVariants";

const HIGHLIGHTS = [
  "3+ years shipping production software",
  "End-to-end ownership: design → deploy → support",
  "Strong Laravel, PHP, SQL, and API development",
  "ERP, POS, inventory, and workflow automation experience",
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <Container>
        <SectionHeading
          eyebrow="01 — About"
          title="Crafting products with |intention."
          subtitle="I’m a developer who cares as much about reliability as functionality. I build scalable backend systems, clean APIs, and practical software that helps businesses run smoother every day."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left column — bio */}
          <m.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-7 space-y-6 text-ink-200 leading-relaxed"
          >
            <p>
              I started writing code because I enjoy solving problems in practical ways — when slow processes become efficient,
              scattered data becomes organized,
              and teams can work better through the right system.
            </p>
            <p>
              Today I build software that turns business needs into dependable solutions.
              From ERP modules and operational dashboards to APIs and custom systems,
              I focus on clean architecture, performance, and software people can rely on.
            </p>

            {/* Highlight bullets */}
            <m.ul
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="grid sm:grid-cols-2 gap-3 pt-2"
            >
              {HIGHLIGHTS.map((h) => (
                <m.li
                  key={h}
                  variants={fadeInUp}
                  className="flex items-start gap-3 text-sm"
                >
                  <HiCheckBadge className="mt-0.5 text-brand-400 text-lg flex-none" />
                  <span className="text-ink-200">{h}</span>
                </m.li>
              ))}
            </m.ul>
          </m.div>

          {/* Right column — stats card */}
          <m.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-5"
          >
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-6">
                By the numbers
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {STATS.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
