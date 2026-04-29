/**
 * Single source of truth for site-level configuration.
 * Editing values here updates every component that consumes them.
 */
export const SITE_CONFIG = {
  name: "Miguel Emmanuel Regino",
  role: "Full Stack Developer",
  email: "miguelemmanuel.regino@gmail.com",
  location: "Butuan City, Philippines",
  resumeUrl: "/resume.pdf", // HERE your CV at public/resume.pdf
  socials: {
    github: "https://github.com/migoyy",
    linkedin: "https://linkedin.com/in/miguel-emmanuel-regino-bbb7a9400",
    facebook: "https://facebook.com/migoyyyyyy",
  },
};

/** Anchor links rendered in the navbar (and used for active highlighting). */
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/** email js here */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};