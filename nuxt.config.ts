// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  build: {
    transpile: ['vue-sonner']
  },
  devtools: { enabled: true },
  googleFonts: {

  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "default", mode: "out-in" },
  },
  srcDir: 'src',
  css: ['~~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss",'@formkit/auto-animate/nuxt', '@nuxtjs/color-mode', "nuxt-icon", '@nuxtjs/google-fonts'],
  tailwindcss: {
    cssPath: ['~~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: '~~/src/config/tailwind.ts',
    viewer: true,
  }
});