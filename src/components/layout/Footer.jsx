import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import { NAV_LINKS, SITE_CONFIG } from "@utils/constants";
import Container from "@components/ui/Container";

const SOCIALS = [
  { href: SITE_CONFIG.socials.github, label: "GitHub", Icon: FaGithub },
  { href: SITE_CONFIG.socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: SITE_CONFIG.socials.twitter, label: "Twitter", Icon: FaXTwitter },
  { href: `mailto:${SITE_CONFIG.email}`, label: "Email", Icon: HiEnvelope },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface-50/40 backdrop-blur-md">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand-400 to-purple-500 shadow-glow text-surface-0 font-mono">
                {"</>"}
              </span>
              {SITE_CONFIG.name}
            </div>
            <p className="mt-4 text-sm text-ink-300 max-w-xs">
              Building modern web apps, scalable APIs and business systems
              that ship.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-4">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-200 hover:text-brand-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-xl
                             bg-white/[0.04] border border-white/10
                             text-ink-200 hover:text-brand-300 hover:border-brand-500/40
                             transition-colors"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-300">{SITE_CONFIG.email}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-ink-400 font-mono">
            © {year} {SITE_CONFIG.name}. Crafted with care.
          </p>
          <p className="text-xs text-ink-400 font-mono">
            Built with React · Vite · Tailwind · Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
