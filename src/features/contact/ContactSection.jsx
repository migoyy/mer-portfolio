import { m } from "framer-motion";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import Card from "@components/ui/Card";
import ContactForm from "./ContactForm";
import { SITE_CONFIG } from "@utils/constants";
import {
  slideInLeft,
  slideInRight,
  defaultViewport,
} from "@utils/motionVariants";

const CONTACT_ITEMS = [
  {
    Icon: HiEnvelope,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    Icon: HiMapPin,
    label: "Location",
    value: SITE_CONFIG.location,
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    value: "miguel-emmanuel",
    href: SITE_CONFIG.socials.linkedin,
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    value: "@migoyy",
    href: SITE_CONFIG.socials.github,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <Container>
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's |build something."
          subtitle="Got a project in mind, or just want to say hi? Drop a message — I usually reply within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-5 items-start">
          {/* Left column — contact info + CTA */}
          <m.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-7">
              <h3 className="text-lg font-semibold mb-1">
                Open to new opportunities
              </h3>
              <p className="text-sm text-ink-300">
                Available for freelance work, full-time roles, and
                interesting collaborations.
              </p>

              <ul className="mt-6 space-y-4">
                {CONTACT_ITEMS.map(({ Icon, label, value, href }) => {
                  const Wrapper = href ? "a" : "div";
                  return (
                    <li key={label}>
                      <Wrapper
                        href={href}
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={href?.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <span
                          className="h-10 w-10 grid place-items-center rounded-xl
                                     bg-white/[0.04] border border-white/10
                                     text-brand-300
                                     group-hover:border-brand-500/40 transition"
                        >
                          <Icon className="text-lg" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-xs font-mono uppercase tracking-widest text-ink-400">
                            {label}
                          </span>
                          <span className="block text-sm text-ink-100 group-hover:text-brand-300 transition">
                            {value}
                          </span>
                        </span>
                      </Wrapper>
                    </li>
                  );
                })}
              </ul>
            </Card>

            <Card className="p-7 bg-gradient-to-br from-brand-500/10 to-purple-500/10">
              <h4 className="text-base font-semibold">Currently hiring me?</h4>
              <p className="mt-2 text-sm text-ink-300">
                Send a quick brief and we'll jump on a 30-min call to scope it
                out — no obligation.
              </p>
            </Card>
          </m.div>

          {/* Right column — form */}
          <m.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-3"
          >
            <Card className="p-7 md:p-9">
              <ContactForm />
            </Card>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
