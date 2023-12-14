/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkpurple: "#130f1c",
        lightpurple: "#7863e0",
        gray1: "#dddddd",
        gray2: "#999999",
        line: "#27213b",
      },
    },
  },
  plugins: [],
};
