import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// =====================================================================
// TAILWIND CONFIG · Nefrance · Soft Structuralism Edition
// =====================================================================

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        "canvas-warm": "var(--canvas-warm)",
        surface: "var(--surface)",
        "surface-soft": "var(--surface-soft)",
        ink: "var(--ink)",
        stone: "var(--stone)",
        whisper: "var(--whisper)",
        petrol: "var(--petrol)",
        terra: "var(--terra)",
        sage: "var(--sage)",
        sand: "var(--sand)",
        // Aliases legados
        "off-white": "var(--canvas)",
        bone: "var(--canvas-warm)",
        chocolate: "var(--ink)",
        terracota: "var(--terra)",
        salvia: "var(--sage)",
        champagne: "var(--petrol)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        eyebrow: ["10px", { lineHeight: "1.2", letterSpacing: "0.22em" }],
        "eyebrow-lg": ["11px", { lineHeight: "1.2", letterSpacing: "0.22em" }],
        small: ["13px", { lineHeight: "1.5" }],
        body: ["16px", { lineHeight: "1.65" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        h3: ["20px", { lineHeight: "1.3" }],
        "h3-lg": ["28px", { lineHeight: "1.25" }],
        h2: ["24px", { lineHeight: "1.2" }],
        "h2-lg": ["40px", { lineHeight: "1.1" }],
        display: ["36px", { lineHeight: "1.02" }],
        "display-lg": ["64px", { lineHeight: "0.98" }],
        "display-xl": ["84px", { lineHeight: "0.94" }],
        "display-2xl": ["128px", { lineHeight: "0.9" }],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        display: "-0.025em",
        "display-tight": "-0.035em",
      },
      borderRadius: {
        squircle: "2rem",
        "squircle-lg": "2.5rem",
        "squircle-sm": "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31, 58, 61, 0.04), 0 8px 24px -8px rgba(31, 58, 61, 0.06)",
        elevated: "0 1px 2px rgba(31, 58, 61, 0.05), 0 20px 60px -20px rgba(31, 58, 61, 0.12)",
        floating: "0 1px 3px rgba(31, 58, 61, 0.06), 0 30px 80px -30px rgba(31, 58, 61, 0.18)",
        "inset-highlight": "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.32, 0.72, 0, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [typography],
};

export default config;
