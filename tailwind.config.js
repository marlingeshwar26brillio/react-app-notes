/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)',
        'primary-hover': 'rgb(37 99 235)',
        danger: 'rgb(239 68 68)',
        success: 'rgb(34 197 94)',
      },
      boxShadow: {
        card: '0 18px 40px rgba(0 0 0 / 8%)',
      },
    },
  },
  plugins: [],
}
