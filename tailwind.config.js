/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rancho': ['Rancho', 'cursive'],
      'raleway': ['Raleway', 'sans-serif']
    },
    colors: {
      'white': '#ffffff',
      'bg-color': '#ECEAE3',
      'btn-first': '#E3B577',
      'btn-second': '#3C393B',
      'btn-text': '#242222',
      'text-header': '#331A15',
      'text-one': '#1B1A1A',
      'text-two': '#5C5B5B',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}