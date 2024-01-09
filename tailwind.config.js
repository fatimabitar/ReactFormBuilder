/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#161a1e",
        bgSecondary: "#21282d",
        mainBrand: "#29A19C",
        babyBlue: "#A3F7BF",
      },
    },
  },
  plugins: [],
};
