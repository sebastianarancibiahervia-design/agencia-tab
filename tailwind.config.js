/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-deep': '#0A0A14',
        'neon': '#B9FF00',
        'ghost': '#F0EFF4',
        'graphite': '#18181B',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
        fira: ['Fira Code', 'monospace']
      },
      borderRadius: {
        'huge': '3rem',
        'massive': '4rem',
      }
    },
  },
  plugins: [],
}
