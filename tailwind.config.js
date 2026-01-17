/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundSecondary: "var(--backgroundSecondary)",
        backgroundLight: "var(--backgroundLight)",
        primary: "var(--primary)",
        textSecondary: "var(--textSecondary)",
        textDim: "var(--textDim)",
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        permanent: ['"Permanent Marker"', "cursive"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
