<script setup lang="ts">
// Importación directa de imágenes desde la carpeta assets/images
import misionImg from '~/assets/images/mision.jpg'
import visionImg from '~/assets/images/vision.jpg'
import valoresImg from '~/assets/images/valores.jpg'

const sections = [
  {
    id: 'mision',
    title: 'Misión',
    text: 'Simplificar y optimizar los procesos operativos y estratégicos de nuestros clientes mediante soluciones integrales que impulsen su eficiencia, fortalezcan su gestión y les permitan enfocarse en el crecimiento sostenible de su negocio.',
    image: misionImg
  },
  {
    id: 'vision',
    title: 'Visión',
    text: 'Consolidarnos como una firma de consultoría líder en Guatemala, con presencia en Latinoamérica, reconocida por la excelencia de nuestras soluciones, la confianza de nuestros clientes y nuestra capacidad para generar valor e impulsar el crecimiento sostenible de las organizaciones.',
    image: visionImg
  },
  {
    id: 'valores',
    title: 'Valores',
    text: 'Actuamos con transparencia, integridad, profesionalismo, ética y puntualidad, principios que orientan nuestro trabajo y fortalecen las relaciones de confianza con nuestros clientes y aliados estratégicos.',
    image: valoresImg
  }
]
</script>

<template>
  <section class="section section--white">
    <div class="container-custom">

      <!-- Encabezado -->
      <div class="section-header">
        <span class="section-eyebrow">
          Sobre nosotros
        </span>

        <h2 class="section-title">
          Experiencia que genera valor
        </h2>

        <p class="section-description">
          En Consultores JME combinamos experiencia, profesionalismo y
          compromiso para ofrecer soluciones estratégicas que impulsen
          el crecimiento sostenible de nuestros clientes.
        </p>
      </div>

      <!-- ==========================================
           MISIÓN / VISIÓN / VALORES
      =========================================== -->
      <div class="grid grid-3 grid-gap-md">

        <article
          v-for="item in sections"
          :id="item.id"
          :key="item.id"
          class="group flex h-full flex-col overflow-hidden rounded-[12px] border border-primary-100 bg-white shadow-[0_6px_25px_rgba(7,21,46,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(7,21,46,0.14)]"
        >

          <!-- ==========================================
               IMAGEN
          =========================================== -->
          <div class="relative flex h-[190px] shrink-0 items-center justify-center overflow-hidden bg-white">

            <!-- Imagen vinculada a la variable importada -->
            <img
              :src="item.image"
              :alt="`${item.title} - Consultores JME`"
              class="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
            >

            <!-- Línea inferior -->
            <div
              class="absolute bottom-0 left-1/2 h-[3px] w-12 -translate-x-1/2 bg-gold-500 transition-all duration-300 group-hover:w-20"
            />

          </div>

          <!-- ==========================================
               CONTENIDO
          =========================================== -->
          <div class="flex flex-1 flex-col px-6 pb-7 pt-5 text-center">

            <p class="text-[0.88rem] leading-[1.75] text-text-muted">
              {{ item.text }}
            </p>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>
