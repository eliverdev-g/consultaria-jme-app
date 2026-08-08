import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    baseURL: '/consultaria-jme-app/',
    // Cambia la carpeta del build de '_nuxt' a 'assets' para que GitHub Pages no la bloquee
    buildAssetsDir: 'assets'
  },

  // Preset nativo de Nitro para GitHub Pages
  nitro: {
    preset: 'github-pages'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    //'@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  image: {
    provider: 'none'
  },

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  compatibilityDate: '2026-06-30'
})
