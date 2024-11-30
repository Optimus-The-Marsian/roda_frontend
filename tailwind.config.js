// tailwind.config.js
module.exports = {
  content: [
    "./index.html",               
    "./src/**/*.{js,jsx,ts,tsx}",   
    "./components/**/*.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {
      colors: {
        'light-text': '#222222',  // Even darker color for better contrast
      },
    },
  },
  plugins: [],
}
