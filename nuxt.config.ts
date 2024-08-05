// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/_mixins.scss"; @import "@/assets/styles/_colors.scss";',
        },
      },
    },
  },
  modules: ["nuxt-svgo", "nuxt-snackbar"],
  snackbar: {
    top: true,
    left: true,
    duration: 3000,
  },
  svgo: {
    defaultImport: "component",
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800;900&family=Muli:wght@300;400;600;700;800;900&display=swap",
        },
      ],
    },
  },
});
