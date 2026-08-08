<!-- src/components/HeroSection.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="inicio" class="relative overflow-hidden bg-primary-900 pt-2">
    <div class="container-custom">
      <div class="grid min-h-[510px] items-center gap-12 lg:grid-cols-2">

        <!-- Texto -->
        <div class="relative z-20 max-w-xl">
          <h1 class="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Consultoría
            <span class="text-gold-500">
              JME
            </span>
          </h1>

          <h2 class="mb-6 text-3xl font-light text-white lg:text-5xl">
            Simplificamos procesos.
            <br>
            <span class="font-semibold text-gold-500">
              Impulsamos resultados.
            </span>
          </h2>

          <p class="mb-10 max-w-lg text-lg leading-9 text-gray-300">
            Soluciones estratégicas que optimizan su operación
            y le permiten enfocarse en el crecimiento
            sostenible de su negocio.
          </p>

          <!-- Botón nativo con efecto Neón -->
          <RouterLink to="/nosotros"
            class="inline-flex items-center justify-center rounded-lg border-2 border-gold-500 px-10 py-4 text-lg font-semibold !text-white shadow-[0_0_15px] shadow-gold-500/50 transition-all duration-300 hover:bg-gold-500 hover:!text-primary-900 hover:shadow-[0_0_25px] hover:shadow-gold-500/80">
            CONOCE MÁS
          </RouterLink>
        </div>

        <!-- Imagen con gradiente oscuro -->
        <div class="relative h-full">
          <img src="/images/mainJME.png" alt="Consultoría JME"
            class="h-[500px] w-full rounded-bl-[120px] object-cover" />
          <!-- Gradiente de superposición -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/35 to-transparent" />
        </div>

      </div>
    </div>

    <!-- Línea decorativa SVG -->
    <div class="pointer-events-none absolute left-1/2 top-0 hidden h-full w-72 -translate-x-1/2 lg:block">
      <svg viewBox="0 0 220 900" preserveAspectRatio="none" class="h-full w-full">
        <path d="M180 0
             C50 180
              40 520
              180 900" fill="none" stroke="var(--color-gold-500)" stroke-width="2" />
      </svg>
    </div>
  </section>
</template>