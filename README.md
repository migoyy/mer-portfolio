# Developer Portfolio

A premium, production-ready personal portfolio built with **React 19**, **Vite 7**, **Tailwind CSS 3.4**, **React Router DOM 7**, and **Framer Motion 12**.

## ✨ Features

- 🌑 Dark-mode-first design with glassmorphism cards & gradient accents
- 🪄 Smooth scroll, scroll-spy active nav, and animated page transitions
- ⌨️ Typewriter hero text + animated counters
- 🎯 Project filtering with animated reordering
- 📊 Animated skill progress bars and timeline experience
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Scroll progress bar + back-to-top button
- ♿ Respects `prefers-reduced-motion`

## 🧰 Tech stack & versions

| Package              | Version  |
| -------------------- | -------- |
| react                | ^19.2.0  |
| react-dom            | ^19.2.0  |
| react-router-dom     | ^7.9.0   |
| framer-motion        | ^12.23.0 |
| react-icons          | ^5.4.0   |
| vite                 | ^7.0.0   |
| @vitejs/plugin-react | ^5.0.0   |
| tailwindcss          | ^3.4.17  |
| postcss              | ^8.5.0   |
| autoprefixer         | ^10.4.20 |

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## 🗂️ Folder structure

```
src/
├── app/                  # Router & global providers
│   ├── router.jsx
│   └── providers.jsx
├── assets/               # Static images & icons
├── components/
│   ├── common/           # BackgroundFx, ScrollProgressBar, BackToTop, AnimatedCounter
│   ├── ui/               # Button, Card, Badge, Container, SectionHeading
│   └── layout/           # Navbar, Footer, RootLayout
├── features/             # One folder per page section
│   ├── home/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── experience/
│   ├── services/
│   └── contact/
├── hooks/                # useScrollSpy, useMediaQuery, useTypewriter, useCountUp
├── data/                 # Static content: projects.js, skills.js, experience.js, services.js
├── utils/                # cn, constants, motionVariants
├── pages/                # HomePage, NotFoundPage
├── styles/               # globals.css (Tailwind layers + custom utilities)
├── App.jsx
└── main.jsx
```

## ✏️ Customisation cheatsheet

| Want to change…           | Edit this file                                   |
| ------------------------- | ------------------------------------------------ |
| Your name, email, socials | `src/utils/constants.js`                         |
| Brand colors / fonts      | `tailwind.config.js`                             |
| Hero typewriter words     | `src/features/home/HeroSection.jsx` (`TAGLINES`) |
| Projects list             | `src/data/projects.js`                           |
| Skills & stats            | `src/data/skills.js`                             |
| Work history              | `src/data/experience.js`                         |
| Services offered          | `src/data/services.js`                           |
| Resume download           | Drop `resume.pdf` in `public/`                   |

## 🔌 Connecting the contact form to a real backend

Open `src/features/contact/ContactForm.jsx` and replace the simulated `setTimeout` inside `handleSubmit`:

```js
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error("Failed");
```

Or plug in a service like **Resend**, **EmailJS**, **Formspree**, or **Web3Forms** — no backend needed.

## 🛡️ Best practices baked in

1. **Separation of concerns** — data lives in `/data`, primitives in `/components/ui`, sections in `/features`.
2. **Path aliases** (`@components`, `@features`, `@data`, etc.) for clean imports — configured in `vite.config.js` and `jsconfig.json` for IDE intellisense.
3. **Reusable Framer Motion variants** in `utils/motionVariants.js` — no copy-pasted animation configs.
4. **`LazyMotion`** keeps the Framer Motion bundle small (~6KB instead of ~25KB).
5. **`prefers-reduced-motion`** is respected globally via a media query in `globals.css`.
6. **Strict component boundaries** — no section is over ~150 lines, each is self-contained.

## 🔮 Future upgrade path

| Upgrade             | How                                                                  |
| ------------------- | -------------------------------------------------------------------- |
| Add a blog          | Create `pages/BlogPage.jsx` + register in `app/router.jsx`           |
| Add light mode      | Add `ThemeProvider` to `app/providers.jsx`, toggle `dark` class      |
| Type-safe migration | Rename `.jsx` → `.tsx`, add TypeScript & types                       |
| State management    | Drop in **Zustand** or **TanStack Query** at the providers layer     |
| CMS-driven content  | Replace files in `/data` with fetches from Sanity, Contentful, etc.  |
| i18n                | Add **react-intl** or **i18next** at the providers layer             |
| Tests               | Add **Vitest** + **React Testing Library** (Vite-native)             |
| Deploy              | One-click on Vercel / Netlify / Cloudflare Pages                     |

## 📄 License

MIT — use freely, attribution appreciated.
