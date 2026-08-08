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
    '@nuxt/icon', // Iconos
    '@nuxt/image', // <-- Habilita el módulo aquí
    '@vueuse/nuxt'
  ],

  // Si solo quieres que arregle la ruta sin transformar las imágenes de public/
  image: {
    provider: 'none'
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
