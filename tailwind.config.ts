import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2B7F8B", // Teal principal (rgb 43, 127, 139) - ahora es light
          DEFAULT: "#F693AA", // Rosa principal (rgb 246, 147, 170) - ahora es DEFAULT
          dark: "#E85A7F", // Rosa oscuro
          pink: {
            50: "#FEF2F4",
            100: "#FDE8EB",
            200: "#FBD4DB",
            300: "#F8B3C0",
            400: "#F693AA", // Rosa principal
            500: "#F4729A",
            600: "#E85A7F",
          },
          teal: {
            50: "#E6F4F6",
            100: "#B3DDE3",
            200: "#80C6D0",
            300: "#4DAFBD",
            400: "#2B7F8B", // Teal principal
            500: "#236670",
            600: "#1F5A63",
          },
        },
        medical: {
          white: "#FFFFFF",
          soft: "#E6F4F6", // Fondo suave teal
          pink: "#F693AA",
          teal: "#2B7F8B",
        },
      },
      fontFamily: {
        sans: ["Inter", "Nunito", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px rgba(0, 0, 0, 0.08)",
        medical: "0 4px 20px rgba(43, 127, 139, 0.15)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;

