module.exports = {
  content: [
    "./*.html",         
    "./src/js/*.js"   
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#0B1120',  
        },
        green: {
          950: '#0F291E', 
        },
      },
    },
  },
  safelist: [
    'bg-blue-950',  
    'bg-green-950', 
    'bg-red-400',   
  ],
  plugins: [],
};
