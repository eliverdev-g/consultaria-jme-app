<!-- src/components/SobreNosotros.vue -->
<script setup lang="ts">
// 1. Importamos los iconos específicos que necesitas
import { BookOpen, Target, Eye, Landmark, Handshake } from 'lucide-vue-next'
import { markRaw } from 'vue'

// 2. Reemplazamos los strings por los componentes reales envueltos en markRaw
const valores = [
  {
    icon: markRaw(BookOpen),
    title: 'INTEGRIDAD',
    description: 'Actuamos con honestidad y transparencia en cada decisión y acción.'
  },
  {
    icon: markRaw(Target),
    title: 'COMPROMISO',
    description: 'Nos involucramos con pasión en el éxito de nuestros clientes.'
  },
  {
    icon: markRaw(Eye),
    title: 'VISIÓN',
    description: 'Anticipamos necesidades y generamos soluciones estratégicas.'
  },
  {
    icon: markRaw(Landmark),
    title: 'EXCELENCIA',
    description: 'Buscamos la mejora continua y la calidad en todo lo que hacemos.'
  },
  {
    icon: markRaw(Handshake),
    title: 'CONFIANZA',
    description: 'Construimos relaciones sólidas basadas en confianza y respeto.'
  }
]
</script>

<template>
  <div id="nosotros" class="scroll-mt-[100px]">
    <!-- ==========================================
       SECCIÓN: NUESTRA HISTORIA
    ========================================== -->
    <section class="section section--white">
      <div class="container-custom">
        <div class="grid gap-12 lg:grid-cols-2 items-start">

          <!-- Lado Izquierdo: Título (Sticky en desktop para lectura fluida) -->
          <div class="lg:sticky lg:top-32">
            <div class="section-title section-eyebrow">Nuestra Historia</div>
            <h3 class="section-title">
              Transformando desafíos en
              <span class="text-gold-500">oportunidades estratégicas</span>
            </h3>
          </div>

          <!-- Lado Derecho: Contenido -->
          <div class="flex flex-col gap-6 text-text-muted text-lg leading-relaxed">
            <p>
              <strong class="text-primary-900 font-semibold">Consultores JME</strong> fue fundada en 2026 con el
              propósito de brindar soluciones especializadas que fortalezcan la gestión empresarial y contribuyan al
              crecimiento sostenible de las organizaciones. Nacemos con una visión clara: convertirnos en un socio
              estratégico para nuestros clientes mediante servicios profesionales de alto valor, orientados a
              resultados.
            </p>
            <p>
              Si bien somos una empresa de reciente creación, nuestro principal respaldo es la trayectoria de nuestro
              equipo de profesionales, quienes cuentan con más de 15 años de experiencia acumulada en las áreas de
              créditos y cobros, administración de cartera, recuperación de cuentas, reclutamiento y selección de
              talento, desarrollo comercial y optimización de procesos empresariales.
            </p>
            <p>
              La creación de Consultores JME responde a la necesidad de ofrecer un modelo de consultoría basado en la
              cercanía con el cliente, la excelencia operativa y el diseño de soluciones personalizadas. Entendemos que
              cada organización enfrenta desafíos particulares; por ello, desarrollamos estrategias alineadas con sus
              objetivos, generando valor a través de procesos eficientes, análisis técnico y un acompañamiento
              permanente.
            </p>
            <p>
              Nuestra filosofía se fundamenta en la integridad, el compromiso, la confidencialidad y la mejora continua.
              Estos principios guían cada uno de nuestros servicios y reflejan nuestra convicción de construir
              relaciones de largo plazo sustentadas en la confianza y el profesionalismo.
            </p>
            <p>
              Hoy iniciamos esta nueva etapa con la experiencia de un equipo consolidado y la visión de una empresa
              moderna, comprometida con ofrecer soluciones innovadoras que impulsen la competitividad y el éxito de
              nuestros clientes.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
       SECCIÓN: NUESTROS VALORES
    ========================================== -->
    <section class="section section--surface">
      <div class="container-custom">

        <!-- Encabezado de la Sección -->
        <div class="section-header">
          <div class="section-title section-eyebrow">Nuestros valores, nuestra esencia</div>
          <p class="section-description">
            En Consultores JME trabajamos con integridad, compromiso y profesionalismo para ofrecer soluciones que
            generan valor y resultados sostenibles.
          </p>
        </div>

        <!-- Grid de Valores -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">

          <div v-for="(valor, index) in valores" :key="index"
            class="card flex flex-col items-center text-center p-8 group">

            <!-- Círculo e Ícono: Renderizamos dinámicamente el componente importado -->
            <div class="icon-circle icon-circle--large mb-6 transition-transform duration-300 group-hover:scale-110">
              <component :is="valor.icon" class="w-8 h-8" />
            </div>

            <h3 class="text-primary-900 font-bold mb-3 tracking-wide">
              {{ valor.title }}
            </h3>

            <p class="text-text-muted text-sm leading-relaxed">
              {{ valor.description }}
            </p>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>