/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f8af5",
        background: {
          DEFAULT: "#06070a",
        },
        text: {
          secondary: "rgba(255, 255, 255, 0.6)",
        },
        fontFamily: {
          sans: ['JetBrains Mono', 'monospace'],
        },


      },
      typography: {
      },
    },
  },
  plugins: [
    typography,
  ],
}
