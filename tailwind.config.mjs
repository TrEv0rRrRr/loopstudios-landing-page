/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "Dark-Gray": "hsl(0, 0%, 55%)",
        "Very-Dark-Gray": "hsl(0, 0%, 41%)",
      },
      fontWeight: {
        WeightAlata: "400",
        WeightJosefin: "300",
      },
      fontFamily: {
        AlataF: "Alata",
        JosefinF: ['"Josefin Sans"'],
      },
      screens: {
        sm: "360px",
      },
    },
  },
  plugins: [],
};
