import { isDevelopment } from 'std-env'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
  ],

  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'],
      ['acceptHMRUpdate', 'acceptPiniaHMRUpdate'],
    ],
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  devtools: {
    enabled: true,
  },
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
