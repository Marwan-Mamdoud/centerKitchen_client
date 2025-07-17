/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redcolor: "var(--redcolor)",
        bluecolor: "var(--bluecolor)",
        graycolor: "var(--graycolor)",
        blackcolor: "var(--blackcolor)",
        greencolor: "var(--greencolor)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")(),
    { nocompatible: true },
    { preferredStrategy: "pseudoelements" },
  ],
};
