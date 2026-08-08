<script setup lang="ts">
import AppHeader from '~/components/layouts/AppHeader.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import MissionVisionSection from '~/components/home/MissionVisionSection.vue';
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <MissionVisionSection />
    </main>

    <!-- <AppFooter /> -->
  </div>
</template>
