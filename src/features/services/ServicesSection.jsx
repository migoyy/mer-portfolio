import { m } from "framer-motion";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@data/services";
import { staggerContainer, defaultViewport } from "@utils/motionVariants";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <Container>
        <SectionHeading
          eyebrow="05 — Services"
          title="What I |offer."
          subtitle="Whether you need a full product built or an existing one polished, here's how I can help."
        />

        <m.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </m.div>
      </Container>
    </section>
  );
}
