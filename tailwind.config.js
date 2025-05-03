/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        lora: ['Lora', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        josefin: ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
