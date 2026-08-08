<!-- src/components/AppFooter.vue -->
<script setup lang="ts">
// Importamos los iconos de redes sociales desde Lucide
import { Facebook, Instagram, Linkedin } from 'lucide-vue-next'
</script>

<template>
    <footer class="bg-primary-950 py-8 border-t border-primary-900/50">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

                <!-- Izquierda: Copyright -->
                <div class="text-center md:text-left">
                    <p class="text-sm text-gray-400">
                        Copyright © 2022 Todos los derechos reservados.
                    </p>
                </div>

                <!-- Centro: Imagen / Logo -->
                <div class="flex justify-center">
                    <!-- Coloca el nombre de tu imagen aquí (asegúrate de guardarla en public/images/) -->
                    <img src="/images/logo-bg.png" alt="Consultores JME"
                        class="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>

                <!-- Derecha: Redes Sociales -->
                <div class="flex justify-center md:justify-end gap-5">
                    <a href="#" target="_blank" rel="noopener noreferrer"
                        class="p-2 rounded-full bg-gold-50 text-gray-400 hover:bg-gold-500 hover:text-primary-950 transition-all duration-300"
                        aria-label="Facebook">
                        <Facebook class="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer"
                        class="p-2 rounded-full bg-gold-50 text-gray-400 hover:bg-gold-500 hover:text-primary-950 transition-all duration-300"
                        aria-label="Instagram">
                        <Instagram class="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer"
                        class="p-2 rounded-full bg-gold-50 text-gray-400 hover:bg-gold-500 hover:text-primary-950 transition-all duration-300"
                        aria-label="LinkedIn">
                        <Linkedin class="w-5 h-5" />
                    </a>
                </div>

            </div>
        </div>
    </footer>
</template>