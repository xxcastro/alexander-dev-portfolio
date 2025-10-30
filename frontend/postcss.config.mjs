// frontend/postcss.config.mjs
export default {
  plugins: {
    // CAMBIO CLAVE: Usa el paquete @tailwindcss/postcss en lugar del 'tailwindcss' directo
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};