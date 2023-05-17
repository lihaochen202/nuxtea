// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'],
      ['acceptHMRUpdate', 'acceptPiniaHMRUpdate'],
    ],
  },
})
