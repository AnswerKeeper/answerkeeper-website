import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stripe-Level Purple Palette
        purple: {
          light: "#F5F3FF", // BG accents / soft badges
          mid: "#A78BFA",   // Vibrant highlights / subtle CTAs
          DEFAULT: "#7C3AED", // Primary brand purple
          dark: "#6D28D9",   // Hover states
          deep: "#4C1D95",   // Dark accents / gradients
        },
        // Alias blue to purple so existing 'bg-blue', 'text-blue' classes work instantly
        blue: {
          light: "#F5F3FF",
          mid: "#A78BFA",
          DEFAULT: "#7C3AED",
          dark: "#6D28D9",
        },
        navy: {
          light: "#F0F3F7", // Secondary accents
          muted: "#4A5A72", // Paragraph text
          soft: "#73849A",  // Captions / Mono text
          DEFAULT: "#111827", // Headlines / Body text
          dark: "#0C111A",  // Dark components / Surface background
        },
        // Base structure colors
        border: "#E2E8F0", // Neutral boundaries
        surface: "#F8FAFC", // Alternative background
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "purple-glow": "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.12) 0%, transparent 75%)",
        "stripe-purple": "linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)",
      },
      boxShadow: {
        // Deep glass shadow with a soft purple tint
        glass: "0 20px 25px -5px rgba(17, 24, 39, 0.03), 0 10px 10px -5px rgba(17, 24, 39, 0.02)",
        "purple-glow": "0 10px 30px -10px rgba(124, 58, 237, 0.3)",
      },
    },
  },
  plugins: [
    // Define the custom 'card-hover' micro-interaction utility with purple glow
    plugin(function ({ addUtilities }: any) {
      addUtilities({
        ".card-hover": {
          transition: "all 0.3s cubic-bezier(0.2, 0, 0.2, 1)", // Stripe-style smoothness
          "&:hover": {
            transform: "translateY(-4px)", // Subtly lift
            border: "1px solid rgba(124, 58, 237, 0.25)", // Soft purple border
            boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.12)", // Rich purple depth shadow
          },
        },
      });
    }),
  ],
};
export default config;