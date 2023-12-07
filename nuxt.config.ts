// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',

],
  app: {
    head: {
      link: [
       
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
      script: [
      ],
    },
  },
  vite: {
    // Configuration for handling static assets
    server: {
      fs: {
        strict: false, // Allow Vite to resolve files outside of project root
      },
    },
  },
});