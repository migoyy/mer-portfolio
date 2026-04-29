/**
 * items grouped by category.
 * Each skill has a name and a proficiency level (0–100) used for progress bars.
 * Add or remove items freely — the UI scales automatically.
 */
// export const SKILLS = [
//   {
//     category: "Frontend",
//     icon: "Sparkles",
//     color: "from-cyan-400 to-blue-500",
//     items: [
//       { name: "React / Next.js", level: 95 },
//       { name: "TypeScript", level: 90 },
//       { name: "Tailwind CSS", level: 95 },
//       { name: "Framer Motion", level: 85 },
//       { name: "Vue 3", level: 75 },
//     ],
//   },
//   {
//     category: "Backend",
//     icon: "Server",
//     color: "from-purple-400 to-pink-500",
//     items: [
//       { name: "Node.js / Express", level: 92 },
//       { name: "NestJS", level: 85 },
//       { name: "Python / FastAPI", level: 80 },
//       { name: "REST & GraphQL APIs", level: 90 },
//       { name: "WebSockets", level: 78 },
//     ],
//   },
//   {
//     category: "Database",
//     icon: "Database",
//     color: "from-emerald-400 to-teal-500",
//     items: [
//       { name: "PostgreSQL", level: 90 },
//       { name: "MongoDB", level: 85 },
//       { name: "Redis", level: 78 },
//       { name: "Prisma ORM", level: 88 },
//       { name: "Supabase", level: 82 },
//     ],
//   },
//   {
//     category: "Tools",
//     icon: "Wrench",
//     color: "from-amber-400 to-orange-500",
//     items: [
//       { name: "Git / GitHub", level: 95 },
//       { name: "Vite / Webpack", level: 85 },
//       { name: "Jest / Vitest", level: 80 },
//       { name: "Figma", level: 75 },
//       { name: "Linux / Bash", level: 82 },
//     ],
//   },
//   // {
//   //   category: "Deployment",
//   //   icon: "Rocket",
//   //   color: "from-rose-400 to-red-500",
//   //   items: [
//   //     { name: "Docker", level: 85 },
//   //     { name: "AWS (EC2, S3, Lambda)", level: 80 },
//   //     { name: "Vercel / Netlify", level: 92 },
//   //     { name: "GitHub Actions (CI/CD)", level: 85 },
//   //     { name: "Nginx", level: 75 },
//   //   ],
//   // },
// ];

export const SKILLS = [
  {
    category: "Backend & Architecture",
    icon: "server",
    color: "from-fuchsia-500 to-pink-500",
    items: [
      { name: "Laravel", level: 92 },
      { name: "PHP", level: 90 },
      { name: "REST API Development", level: 88 },
      { name: "MVC Architecture", level: 90 },
      { name: "Middleware", level: 85 },
      { name: "Authentication / RBAC", level: 84 },
      { name: "Scalable Code Structure", level: 82 },
      { name: "Modular Monolith", level: 78 }
    ]
  },

  {
    category: "Database & Performance",
    icon: "database",
    color: "from-emerald-400 to-cyan-400",
    items: [
      { name: "MySQL", level: 90 },
      { name: "MSSQL", level: 85 },
      { name: "Complex SQL Queries", level: 88 },
      { name: "Stored Procedures", level: 80 },
      { name: "Query Optimization", level: 82 },
      { name: "Indexing", level: 80 },
      { name: "Transactions", level: 84 },
      { name: "Large Dataset Processing", level: 78 }
    ]
  },

  {
    category: "Business Systems",
    icon: "briefcase",
    color: "from-sky-400 to-blue-500",
    items: [
      { name: "ERP Systems", level: 85 },
      { name: "POS Workflows", level: 90 },
      { name: "Inventory Management", level: 92 },
      { name: "FIFO / FEFO Logic", level: 88 },
      { name: "Accounting Flows", level: 80 },
      { name: "Workflow Automation", level: 85 },
      { name: "Reports / Dashboards", level: 86 },
      { name: "Queue Systems", level: 75 }
    ]
  },

  {
    category: "Frontend & Integration",
    icon: "monitor",
    color: "from-amber-400 to-orange-500",
    items: [
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 80 },
      { name: "Bootstrap", level: 88 },
      { name: "JavaScript", level: 78 },
      { name: "jQuery / AJAX", level: 82 },
      { name: "Laravel Blade", level: 88 },
      { name: "React Native (Basic)", level: 55 },
      { name: "API Integration", level: 84 }
    ]
  },

  {
    category: "DevOps & Support",
    icon: "tool",
    color: "from-rose-400 to-red-500",
    items: [
      { name: "Git / GitHub / GitLab", level: 82 },
      { name: "Deployment Support", level: 80 },
      { name: "IIS / Windows Server", level: 68 },
      { name: "Environment Configuration", level: 85 },
      { name: "Logging / Troubleshooting", level: 82 },
      { name: "Monitoring", level: 72 },
      { name: "Backup / Restore", level: 75 }
    ]
  }
];

/** Highlight stats rendered in the About section. */
export const STATS = [
  {
    label: "Years of Experience",
    value: 3,
    suffix: "+",
  },
  {
    label: "Systems Built",
    value: 10,
    suffix: "+",
  },
  {
    label: "Business Domains Served",
    value: 5,
    suffix: "+",
  },
  {
    label: "Faster Reporting Achieved",
    value: 60,
    suffix: "%",
  },
];
