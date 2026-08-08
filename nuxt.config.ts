import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    baseURL: '/consultaria-jme-app/'
  },

  nitro: {
    preset: 'github-pages'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image', // Asegúrate de que esté habilitado
    '@vueuse/nuxt'
  ],

  // @ts-expect-error - Omitimos el error de TypeScript si no has regenerado los tipos
  image: {
    // ESTO ES LO QUE SOLUCIONA EL 404 EN GITHUB PAGES
    baseURL: '/consultaria-jme-app/'
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  compatibilityDate: '2026-06-30'
})
