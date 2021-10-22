module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "electric-blue": "#66fcf1",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      ringColor: ["active"],
      ringWidth: ["active"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
}
