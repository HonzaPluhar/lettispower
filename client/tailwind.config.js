/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#00a9dd",
        //old main color 49DE80
        secondarycolor: "#010409",
      },
    },
  },
  plugins: [],
};
