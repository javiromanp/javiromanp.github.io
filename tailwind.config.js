/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Source Serif 4", "Georgia", "serif"],
        mono: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        lab: {
          canvas: "rgb(var(--color-canvas) / <alpha-value>)",
          surface: "rgb(var(--color-surface) / <alpha-value>)",
          elevated: "rgb(var(--color-elevated) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
          muted: "rgb(var(--color-muted) / <alpha-value>)",
          subtle: "rgb(var(--color-subtle) / <alpha-value>)",
          line: "rgb(var(--color-line) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          accent2: "rgb(var(--color-accent-2) / <alpha-value>)",
          accent3: "rgb(var(--color-accent-3) / <alpha-value>)",
        },
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        scan: "scan 9s linear infinite",
      },
    },
  },
  plugins: [],
};
