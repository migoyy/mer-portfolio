/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Brand palette — easily swap to re-theme the entire portfolio
        brand: {
          50: "#eef9ff",
          100: "#d9f0ff",
          200: "#bce5ff",
          300: "#8ed4ff",
          400: "#59baff",
          500: "#319bff",
          600: "#1a7df5",
          700: "#1666e0",
          800: "#1953b3",
          900: "#1a488d",
        },
        // Surface colors for the dark theme
        surface: {
          0: "#05060a",
          50: "#0a0c14",
          100: "#0f1220",
          200: "#151a2d",
          300: "#1c2238",
          400: "#252c46",
          500: "#2f3858",
        },
        ink: {
          50: "#f5f7fb",
          100: "#e2e6ef",
          200: "#c5cdd9",
          300: "#9aa3b5",
          400: "#6e778d",
          500: "#4c5468",
        },
      },
      fontFamily: {
        // Distinctive display + readable body pairing
        display: ['"Sora"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(89,186,255,0.15), 0 10px 40px -10px rgba(89,186,255,0.35)",
        "glow-lg":
          "0 0 0 1px rgba(89,186,255,0.2), 0 20px 80px -20px rgba(89,186,255,0.5)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(20px, -20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 14s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
};
