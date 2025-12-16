import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space)"],
      },
      spacing: {
        "123": "30.75rem",
      },
    },
  },
};

export default config;