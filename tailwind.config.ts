import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4A90E2",
        secondary: "#F5A623",
        accent: "#2ECC71",
      },
      fontFamily: {
        sans: ["Funnels Sans", "Poppins", "Geist", "Helvetica", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        geist: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
