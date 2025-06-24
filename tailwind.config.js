/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D0304",
        secondary: "#E7F1F8",
        hash: "#E7F1F8",
        info: "#8E0003",
        button: "#8E0003",
        playground: "#359ff0",
        "light-gray": "#E7F8FF",
        "green-playground": "#00C38A",
      },
    },
  },
  plugins: [],
};
