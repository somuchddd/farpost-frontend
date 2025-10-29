// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [["@nuxtjs/google-fonts", {
    families: {
      'Rubik One': true,
      "Inter": true,
    }
  }], 'vue-yandex-maps/nuxt', 'nuxt-charts'],
  css: ['./app/assets/css/main.css'],
  yandexMaps: {
      apikey: process.env.YANDEX_MAPS_API_KEY,
   }
})