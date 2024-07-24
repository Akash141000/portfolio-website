module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "primary": "#66fcf1",
        "secondary":"",
        "green":"rgba(4,120,87)",
        "dark":"black",
        "light":"white",
      },
      textColor: {
        "light":"white",
        "dark":"black"
      }
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
