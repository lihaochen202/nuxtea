import { isDevelopment } from 'std-env'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  sourcemap: isDevelopment,

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
})
