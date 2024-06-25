/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'darkkorchid': '#7965AF',
        'slategray': '#D1F1F3',
      },
      fontFamily: {
        poppins: ['Poppins']
      },
    },
  },
  plugins: [],
};
