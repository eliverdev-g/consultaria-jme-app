<!-- src/components/AppHeader.vue -->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next' // Importamos los íconos

const isScrolled = ref(false)
const mobileMenu = ref(false)

// Variables para el control de gestos (Swipe)
const touchStartX = ref(0)
const touchEndX = ref(0)

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Propuesta de valor', to: '/propuesta-valor' },
  { label: 'Contacto', to: '/contacto' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 15
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMenu = () => {
  mobileMenu.value = false
}

// Métodos para detectar el deslizamiento táctil
const onTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0]!.screenX
}

const onTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0]!.screenX
  handleSwipe()
}

const handleSwipe = () => {
  // Si el usuario desliza el dedo hacia la derecha por más de 50px, cerramos el menú
  if (touchEndX.value - touchStartX.value > 50) {
    closeMenu()
  }
}
</script>

<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container-custom">
      <div class="header-content">

        <!-- Reemplazo a RouterLink e <img> estándar -->
        <RouterLink to="/" class="logo">
          <img src="/images/logo-bg.png" alt="Consultores JME" />
        </RouterLink>

        <!-- Desktop -->
        <nav class="desktop-menu">
          <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" class="nav-link">
            {{ item.label }}
          </RouterLink>
        </nav>

        <!-- Botón móvil (Abre el menú) -->
        <button class="mobile-button" @click="mobileMenu = true">
          <Menu class="w-8 h-8" />
        </button>
      </div>
    </div>

    <!-- Overlay -->
    <Transition name="fade">
      <div v-if="mobileMenu" class="mobile-overlay" @click="closeMenu"></div>
    </Transition>

    <!-- Menú Móvil -->
    <Transition name="slide-menu">
      <nav v-if="mobileMenu" class="mobile-menu" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <!-- Botón de Cierre Interno (X) -->
        <button class="close-menu-btn" @click="closeMenu" aria-label="Cerrar menú">
          <X class="w-8 h-8" />
        </button>

        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" class="mobile-link" @click="closeMenu">
          {{ item.label }}
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>