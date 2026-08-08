<!-- src/components/ContactoSection.vue -->
<script setup lang="ts">
import FormularioContactoComponent from '@/components/FormularioContactoComponent.vue';
import UbicacionView from '@/components/UbicacionView.vue';

</script>

<template>
    <section id="contacto" class="section section--white scroll-mt-[100px]">
        <div class="container-custom">

            <!-- Encabezado de la Sección -->
            <div class="section-header">
                <h2 class="section-title section-eyebrow">Estamos para servirle</h2>
                <p class="section-description">
                    Comuníquese con nosotros para agendar una asesoría o resolver cualquier duda sobre nuestros
                    servicios.
                </p>
            </div>

            <!-- Cuadrícula Principal (Grid) -->
            <div class="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
                <!-- Izquierda: Formulario -->
                <FormularioContactoComponent />

                <!-- Derecha: Mapa -->
                <UbicacionView />
            </div>

        </div>
    </section>
</template>