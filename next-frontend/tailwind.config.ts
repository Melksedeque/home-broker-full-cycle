import type { Config } from "tailwindcss";
//@ts-expect-error - flowbite-typography has not a type
import flowbiteTypography from "flowbite-typography";
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [flowbitePlugin, flowbiteTypography],
} satisfies Config;