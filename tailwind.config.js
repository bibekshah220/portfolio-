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
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px #a855f7, 0 0 40px #a855f7",
          },
          "50%": {
            boxShadow:
              "0 0 30px #d946ef, 0 0 60px #d946ef",
          },
        },
      },
    },
  },
  plugins: [],
};
