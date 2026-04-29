import { m } from "framer-motion";
import {
  HiArrowDownTray,
  HiArrowRight,
  HiPaperAirplane,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "@components/ui/Button";
import Container from "@components/ui/Container";
import useTypewriter from "@hooks/useTypewriter";
import { fadeInUp, staggerContainer } from "@utils/motionVariants";
import { SITE_CONFIG } from "@utils/constants";

const TAGLINES = [
  "Full Stack Developer",
  "API Architect",
  "UI Craftsman",
  "Problem Solver",
];

export default function HeroSection() {
  const typed = useTypewriter(TAGLINES, { typeSpeed: 90, deleteSpeed: 45 });

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-6rem)] flex items-center"
    >
      <Container>
        <m.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-12 items-center"
        >
          {/* ---------- Left: text ---------- */}
          <div className="lg:col-span-7">
            <m.span variants={fadeInUp} className="section-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </m.span>

            <m.h1
              variants={fadeInUp}
              className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]"
            >
              Hi, I'm{" "}
              <span className="text-gradient">
                {SITE_CONFIG.name.split(" ")[0]}
              </span>
              <br />a{" "}
              <span className="caret font-mono text-brand-300 text-3xl sm:text-4xl lg:text-5xl">
                {typed}
              </span>
            </m.h1>

            <m.p
              variants={fadeInUp}
              className="mt-6 text-lg text-ink-300 max-w-xl leading-relaxed"
            >
              I design and build{" "}
              <span className="text-ink-100 font-medium">
                blazing-fast web apps
              </span>
              , production-grade APIs and the business systems that quietly
              keep companies running. Clean code, thoughtful UX, real
              outcomes.
            </m.p>

            {/* CTA buttons */}
            <m.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#projects" size="lg">
                View Projects <HiArrowRight />
              </Button>
              <Button
                as="a"
                href="#contact"
                size="lg"
                variant="secondary"
              >
                <HiPaperAirplane /> Hire Me
              </Button>
              <Button
                as="a"
                href={SITE_CONFIG.resumeUrl}
                size="lg"
                variant="outline"
                download
              >
                <HiArrowDownTray /> Download Resume
              </Button>
            </m.div>

            {/* Socials */}
            <m.div
              variants={fadeInUp}
              className="mt-10 flex items-center gap-4"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-ink-400">
                Find me on
              </span>
              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="h-10 w-10 grid place-items-center rounded-xl
                             bg-white/[0.04] border border-white/10
                             hover:border-brand-500/40 hover:text-brand-300
                             text-ink-200 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 grid place-items-center rounded-xl
                             bg-white/[0.04] border border-white/10
                             hover:border-brand-500/40 hover:text-brand-300
                             text-ink-200 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </m.div>
          </div>

          {/* ---------- Right: floating code card ---------- */}
          <m.div
            variants={fadeInUp}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Decorative glow behind the card */}
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-500/30 via-purple-500/20 to-transparent blur-3xl" />

              <div className="relative glass-strong rounded-2xl overflow-hidden animate-float">
                {/* Faux editor titlebar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-xs font-mono text-ink-400">
                    developer.js
                  </span>
                </div>

                <pre className="text-[13px] md:text-sm font-mono p-5 leading-relaxed text-ink-200 overflow-x-auto">
{`const developer = {
  name: "${SITE_CONFIG.name}",
  role: "Full Stack Developer",
  stack: ["Laravel","JQuery","React","MSQL"],
  values: ["clarity", "craft", "ship"],
  available: true,

  build(idea) {
    return idea
      .design()
      .iterate()
      .deploy(); // 🚀
  },
};`}
                </pre>
              </div>
            </div>
          </m.div>
        </m.div>
      </Container>
    </section>
  );
}
