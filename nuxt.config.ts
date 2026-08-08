import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    baseURL: '/consultaria-jme-app/'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  compatibilityDate: '2026-06-30'
})
