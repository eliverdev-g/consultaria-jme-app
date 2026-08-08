<script setup lang="ts">
const scrollToServices = () => {
  document
    .querySelector('#servicios')
    ?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<template>
  <section id="inicio" class="relative overflow-hidden bg-primary-900 pt-2">
    <div class="container-custom">
      <div class="grid min-h-[760px] items-center gap-12 lg:grid-cols-2">
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

          <UButton size="xl" color="warning" variant="outline"
            class="rounded-lg border-2 border-gold-500 px-10 py-4 text-lg font-semibold" @click="scrollToServices">
            CONOCE MÁS
          </UButton>
        </div>

        <!-- Imagen -->

        <div class="relative h-full">
          <NuxtImg src="/images/mainJME.png" class="h-[760px] w-full rounded-bl-[120px] object-cover" />

          <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/35 to-transparent" />
        </div>
      </div>
    </div>

    <!-- Línea decorativa -->

    <div class="pointer-events-none absolute left-1/2 top-0 hidden h-full w-72 -translate-x-1/2 lg:block">
      <svg viewBox="0 0 220 900" preserveAspectRatio="none" class="h-full w-full">

        <path d="M180 0
             C50 180
              40 520
              180 900" fill="none" stroke="#C89A2B" stroke-width="2" />

      </svg>
    </div>
  </section>
</template>
