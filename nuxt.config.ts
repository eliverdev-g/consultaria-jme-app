import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

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

  // 1. Registra el plugin de Tailwind CSS v4 para que procese el CSS en el build
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // 2. Configura Nuxt Image para servidores estáticos (GitHub Pages)
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
