/**
 * Project entries.
 * Each project belongs to one or more categories (used for filtering),
 * and includes a tech stack list, plus optional live & GitHub links.
 */
export const PROJECT_CATEGORIES = ["All", "Web App", "API", "Business", "UI/UX"];

export const PROJECTS = [
  {
    id: "nimbus-erp",
    title: "Nimbus ERP Suite",
    description:
      "A modular ERP platform for SMBs — handles inventory, payroll, invoicing and analytics with role-based access.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    categories: ["Business", "Web App"],
    stack: ["React", "NestJS", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/nimbus-erp",
    featured: true,
  },
  {
    id: "linkforge",
    title: "LinkForge API",
    description:
      "High-throughput URL shortening and analytics API serving millions of redirects per day with sub-50ms latency.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    categories: ["API"],
    stack: ["Go", "Redis", "PostgreSQL", "Kafka"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/linkforge",
    featured: true,
  },
  {
    id: "pulse-dashboard",
    title: "Pulse Analytics Dashboard",
    description:
      "Real-time SaaS dashboard with WebSocket streams, customisable widgets and beautiful animated charts.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    categories: ["Web App", "UI/UX"],
    stack: ["Next.js", "TypeScript", "tRPC", "Recharts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/pulse",
    featured: true,
  },
  {
    id: "atlas-cms",
    title: "Atlas Headless CMS",
    description:
      "Developer-first headless CMS with a GraphQL API, custom field types and one-click deployments.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    categories: ["API", "Business"],
    stack: ["Node.js", "GraphQL", "MongoDB", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/atlas-cms",
  },
  {
    id: "fintrack",
    title: "FinTrack Mobile",
    description:
      "Cross-platform finance tracker with budgeting, recurring expenses and bank-grade encryption at rest.",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80",
    categories: ["Web App", "UI/UX"],
    stack: ["React Native", "Expo", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/fintrack",
  },
  {
    id: "kanban-flow",
    title: "Kanban Flow",
    description:
      "Collaborative kanban board with drag-and-drop, real-time presence indicators and offline sync.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    categories: ["Web App", "UI/UX"],
    stack: ["React", "Liveblocks", "Zustand", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/kanban-flow",
  },
];
