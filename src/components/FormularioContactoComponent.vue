<!-- src/components/FormularioContacto.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
})

const enviarMensaje = () => {
    // Aquí luego puedes conectar tu backend o servicio de correos (ej. Formspree o EmailJS)
    console.log('Datos a enviar:', form.value)
    alert('¡Gracias por su mensaje! Nos comunicaremos con usted a la brevedad.')

    // Limpiar el formulario
    form.value = { nombre: '', correo: '', telefono: '', mensaje: '' }
}
</script>

<template>
    <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-lg lg:p-10">
        <h3 class="mb-6 text-2xl font-bold text-primary-900">Envíenos un mensaje</h3>

        <form @submit.prevent="enviarMensaje" class="flex flex-col gap-5">
            <!-- Nombre -->
            <div>
                <label for="nombre" class="mb-1.5 block text-sm font-semibold text-gray-700">Nombre completo</label>
                <input id="nombre" v-model="form.nombre" type="text" required
                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500"
                    placeholder="Ej. Juan Pérez" />
            </div>

            <!-- Grid para Correo y Teléfono -->
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                    <label for="correo" class="mb-1.5 block text-sm font-semibold text-gray-700">Correo
                        electrónico</label>
                    <input id="correo" v-model="form.correo" type="email" required
                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500"
                        placeholder="correo@empresa.com" />
                </div>
                <div>
                    <label for="telefono" class="mb-1.5 block text-sm font-semibold text-gray-700">Teléfono
                        (Opcional)</label>
                    <input id="telefono" v-model="form.telefono" type="tel"
                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500"
                        placeholder="+502 0000 0000" />
                </div>
            </div>

            <!-- Mensaje -->
            <div>
                <label for="mensaje" class="mb-1.5 block text-sm font-semibold text-gray-700">Mensaje</label>
                <textarea id="mensaje" v-model="form.mensaje" required rows="4"
                    class="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500"
                    placeholder="¿En qué podemos ayudarle?"></textarea>
            </div>

            <!-- Botón de Envío -->
            <button type="submit"
                class="inline-flex items-center justify-center rounded-lg border-2 bg-primary-900 text-white px-10 py-4 text-lg font-semibold shadow-[0_0_15px] transition-all duration-300 hover:bg-gold-500 hover:!text-primary-900 hover:shadow-[0_0_25px] hover:shadow-gold-500/80">
                ENVIAR MENSAJE
            </button>
        </form>
    </div>
</template>