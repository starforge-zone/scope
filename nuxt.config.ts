// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@nuxt/image",
    "@compodium/nuxt",
  ],
  css: ["~/assets/styles/main.css"],
  app: {
    rootAttrs: {
      id: "__starforge-scope__",
    },
  },
  appId: "starforge-scope",
  components: [
    { path: "~/components/atoms/", prefix: "a" },
    { path: "~/components/molecules/", prefix: "m" },
    { path: "~/components/organisms/", prefix: "o" },
    { path: "~/components/templates/", prefix: "t" },
  ],
});