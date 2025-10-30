// frontend/tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Rutas que cubren src/app y components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    // ...
  },
  plugins: [],
};
