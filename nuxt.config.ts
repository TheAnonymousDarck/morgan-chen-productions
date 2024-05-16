// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "default", mode: "out-in" },
  },
  srcDir: 'src',
  css: ['~~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss",'@formkit/auto-animate/nuxt', '@nuxtjs/color-mode', "nuxt-icon"],
  tailwindcss: {
    cssPath: ['~~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: '~~/src/config/tailwind.ts',
    viewer: true,
  }
});