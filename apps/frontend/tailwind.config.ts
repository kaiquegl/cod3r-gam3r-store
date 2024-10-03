import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "violet-dark": {
          DEFAULT: "#0E001D",
          foreground: "#fff",
        },
      },
      // backgroundImage: {
      //   gradientBG: "url('/background.png')",
      // },
    },
  },
  plugins: [],
};
export default config;
