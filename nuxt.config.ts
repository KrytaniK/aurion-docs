// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  compatibilityDate: '2026-04-07'
});
