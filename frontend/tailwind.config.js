/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          scherazade: ['Scheherazade New', 'serif'],
          mono: ['Courier New', 'monospace'],
        },
      },
      colors: {
        bgPrimary: "#1E293B", // slate-800
        textPrimary: "#D1D5DB"
      }
    },
  },
  plugins: [],
}

