export default defineNuxtConfig({
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: false },

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],

  content: { contentHead: false },

  build: {
    transpile: ["gsap"],
  },

  googleFonts: {
    display: "swap",
    families: {
      Poppins: {
        wght: [400, 800],
      },
      Montserrat: {
        wght: [300, 400, 500, 800],
      },
    },
  },

  devServer: {
    host: "0.0.0.0",
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  site: {
    url: "https://portfolio.francescadaforno.it",
    trailingSlash: true,
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  compatibilityDate: "2024-10-14",
});