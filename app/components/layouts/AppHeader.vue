<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isScrolled = ref(false)
const mobileMenu = ref(false)

const navigation = [
  { label: 'Inicio', to: '#inicio' },
  { label: 'Nosotros', to: '#nosotros' },
  { label: 'Servicios', to: '#servicios' },
  { label: 'Propuesta de valor', to: '#propuesta-valor' },
  { label: 'Contacto', to: '#contacto' }
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
</script>

<template>
  <header
    class="app-header"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container-custom">

      <div class="header-content">

        <NuxtLink
          to="/"
          class="logo"
        >
          <img :src="withBase('/images/logo-bg.png')" alt="Consultores JME" />
        </NuxtLink>

        <!-- Desktop -->

        <nav class="desktop-menu">

          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="nav-link"
          >
            {{ item.label }}
          </NuxtLink>

        </nav>

        <!-- Botón móvil -->

        <button
          class="mobile-button"
          @click="mobileMenu = !mobileMenu"
        >
          <UIcon
            :name="mobileMenu ? 'i-lucide-x' : 'i-lucide-menu'"
          />
        </button>

      </div>

    </div>

    <!-- Overlay -->

    <Transition name="fade">

      <div
        v-if="mobileMenu"
        class="mobile-overlay"
        @click="closeMenu"
      />

    </Transition>

    <!-- Menú -->

    <Transition name="slide-menu">

      <nav
        v-if="mobileMenu"
        class="mobile-menu"
      >

        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="mobile-link"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>

      </nav>

    </Transition>

  </header>
</template>
