/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "vd-desat-blue-main": "hsl(222,26%, 31%)",
        "vd-desat-blue-toggle": "hsl(223, 31%, 20%)",
        "vd-desat-blue-screen": "hsl(224, 36%, 15%)",
        "key-desat-dark-blue-bg": "hsl(225, 21%, 49%)",
        "key-desat-dark-blue-shadow": "hsl(224, 28%, 35%)",
        "key-red-bg-toggle": "hsl(6, 6%,50%)",
        "key-dark-red-shadow": "hsl(6, 70%, 34%)",
        "key-light-grey-orange": "hsl(30,25%,89%)",
        "key-grey-orange": "hsl(28, 16%, 65%)",
        "text-dark-grey-blue": "hsl(221, 14%, 31%)",
        "text-white": "hsl(0,0,100%)",
      },
      fontFamily: {
        keys: "'Space Mono', monospace;",
      },
      fontSize: {
        numbers: "32px",
      },
    },
  },
  plugins: [],
};
