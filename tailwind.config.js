/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            "vd-desat-blue-main": "hsl(var(--color-main-background))",
            "vd-desat-blue-toggle": "hsl(var(--color-toggle-key-background))",
            "vd-desat-blue-screen": "hsl(var(--color-screen-background))",
            "key-desat-dark-blue-bg": "hsl(var(--color-key-dark-background))",
            "key-desat-dark-blue-shadow": "hsl(var(--color-key-dark-shadow))",
            "key-red-bg-toggle": "hsl(var(--color-key-red-toggle-bg))",
            "key-dark-red-shadow": "hsl(var(--color-key-red-shadow))",
            "key-light-grey-orange": "hsl(var(--color-key-light-background))",
            "key-grey-orange": "hsl(var(--color-key-light-shadow))",
            "text-number-keys": "hsl(var(--color-text-keys))",
            "text-screen": "hsl(var(--color-text-screen))",
            "text-equals": "hsl(var(--color-text-equals))",
            "text-white": "hsl(var(--color-text-light))",
         },
         fontFamily: {
            keys: "'League Spartan', sans-serif",
         },
         fontSize: {
            numbers: "32px",
         },
      },
   },
   plugins: [],
};
