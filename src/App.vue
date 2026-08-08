<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue' 
</script>

<template>
  <div class="app-wrapper">
    <!-- Tu menú de navegación fijo -->
    <AppHeader />

    <!-- El espacio superior de 100px para que el contenido no quede detrás del menú fijo -->
    <main class="pt-[100px]">
      <!-- Aquí es donde Vue renderizará HomeView, NosotrosView, etc. -->
      <RouterView />
    </main>
  </div>
</template>