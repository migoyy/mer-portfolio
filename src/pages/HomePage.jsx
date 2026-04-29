import HeroSection from "@features/home/HeroSection";
import AboutSection from "@features/about/AboutSection";
import SkillsSection from "@features/skills/SkillsSection";
import ProjectsSection from "@features/projects/ProjectsSection";
import ExperienceSection from "@features/experience/ExperienceSection";
import ServicesSection from "@features/services/ServicesSection";
import ContactSection from "@features/contact/ContactSection";

/**
 * HomePage — composes every feature section in order.
 * Add or reorder sections here; each is fully self-contained.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
