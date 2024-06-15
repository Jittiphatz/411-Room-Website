import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        aura: "url(/bg-dark-blue-aura.png)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({ prefix: "jirayu-ui" })],
};
export default config;
