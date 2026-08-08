<!-- src/components/ServiciosSection.vue -->
<script setup lang="ts">
import { markRaw } from 'vue'
import { Headset, Users, TrendingUp } from 'lucide-vue-next'

const servicios = [
    {
        // Cambia el nombre de la imagen aquí cuando agregues las tuyas en public/images/
        image: '/images/callcenter.jpg',
        icon: markRaw(Headset),
        title: 'Outsourcing de créditos y cobros',
        description: 'Gestionamos su cartera con estrategias efectivas que mejoran la recuperación, optimizan el flujo de caja y reducen la morosidad.'
    },
    {
        image: '/images/reclutamiento.jpg',
        icon: markRaw(Users),
        title: 'Reclutamiento y selección de personal',
        description: 'Conectamos su empresa con el talento adecuado a través de procesos de selección eficientes, confiables y alineados a su cultura.'
    },
    {
        image: '/images/desarrolloComercial.png',
        icon: markRaw(TrendingUp),
        title: 'Desarrollo comercial y representación de ventas',
        description: 'Impulsamos sus ventas y expandimos su mercado con estrategias comerciales efectivas y representación profesional.'
    }
]
</script>

<template>
    <section id="servicios" class="section section--surface scroll-mt-[100px]">
        <div class="container-custom">

            <!-- Encabezado de la Sección -->
            <div class="section-header">
                <div class="section-eyebrow">Nuestras Soluciones</div>
                <h2 class="section-title">Servicios que impulsan su crecimiento</h2>
                <p class="section-description">
                    Brindamos acompañamiento especializado en áreas clave de su negocio,
                    permitiéndole enfocarse en el núcleo de su operación.
                </p>
            </div>

            <!-- Grid de Servicios (Replicando el diseño de la imagen) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                <div v-for="(servicio, index) in servicios" :key="index"
                    class="card group flex flex-col bg-white overflow-hidden">
                    <!-- 1. Imagen Superior -->
                    <div class="relative h-56 w-full overflow-hidden bg-gray-200">
                        <img :src="servicio.image" :alt="servicio.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <!-- Overlay suave (opcional, por si la imagen es muy brillante) -->
                        <div class="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
                    </div>

                    <!-- 2. Cuerpo de la Tarjeta (Ícono, Título y Descripción) -->
                    <div class="flex-grow p-8 pt-0 flex flex-col">

                        <!-- Contenedor Flex para el ícono superpuesto y el título -->
                        <div class="flex items-center gap-5 relative">

                            <!-- Ícono circular (Superpuesto con margen negativo) -->
                            <div
                                class="w-20 h-20 flex-shrink-0 bg-primary-900 rounded-full flex items-center justify-center border-[5px] border-white shadow-sm -mt-10 relative z-10 transition-colors duration-300 group-hover:bg-primary-950">
                                <component :is="servicio.icon" class="w-9 h-9 text-gold-500" />
                            </div>

                            <!-- Título -->
                            <h3 class="text-[1.2rem] font-bold text-primary-900 leading-snug pt-3">
                                {{ servicio.title }}
                            </h3>
                        </div>

                        <!-- Descripción -->
                        <p class="mt-5 text-gray-600 text-[0.95rem] leading-relaxed">
                            {{ servicio.description }}
                        </p>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>