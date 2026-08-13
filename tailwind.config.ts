import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Branding Palette
        blue: {
          light: "#EBF3FF", // BG accents
          mid: "#5A9BFF", // Subtle CTAs
          DEFAULT: "#0066FF", // Primary buttons/links
          dark: "#0052CC", // Hover states
        },
        navy: {
          light: "#F0F3F7", // Secondary accents
          muted: "#4A5A72", // Paragaph text
          soft: "#73849A", // Captions/Mono text
          DEFAULT: "#111827", // Headlines/Body text
          dark: "#0C111A", // Dark components
        },
        // Base structure colors
        border: "#E2E8F0", // Neutral boundaries
        surface: "#F8FAFC", // Alternative background
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        // Deep, rich shadow for lifted cards
        glass:
          "0 20px 25px -5px rgba(17, 24, 39, 0.03), 0 10px 10px -5px rgba(17, 24, 39, 0.02)",
      },
    },
  },
  plugins: [
    // Define the custom 'card-hover' micro-interaction utility
    plugin(function ({ addUtilities }: any) {
      addUtilities({
        ".card-hover": {
          transition: "all 0.3s cubic-bezier(0.2, 0, 0.2, 1)", // Stripe-style smoothness
          "&:hover": {
            transform: "translateY(-4px)", // Subtly lift
            border: "1px solid #0066FF33", // Change border to blue (10% opacity)
            boxShadow:
              "0 25px 50px -12px rgba(0, 102, 255, 0.06)", // Add blueish depth shadow
          },
        },
      });
    }),
  ],
};
export default config;