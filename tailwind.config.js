/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*{.tsx,.jsx,.htm,.html,.ts,.js,.svg}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1d2840",
        primary: "#0f1729",
        mutedcolor: "#aaaaaa1a",
        skyblue: "#3b82f6",
        lightgray: "#f1f5f9",
        mutedgray: "#2125290d"
      },
    },
    
  },
  darkMode: "class",
  plugins: [],
}

