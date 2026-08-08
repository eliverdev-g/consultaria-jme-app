import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    baseURL: '/consultaria-jme-app/',
    // ESTO ES CLAVE: Cambia '_nuxt' por 'assets' para que GitHub Pages cargue tus CSS y JS
    buildAssetsDir: 'assets'
  },

  nitro: {
    preset: 'github-pages'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],

  image: {
    provider: 'none',
    // ESTO ES CLAVE: Le dice a NuxtImg que siempre agregue tu repositorio al inicio de la URL
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
