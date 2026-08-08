<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import HeroSectionComponent from '../components/HeroSectionComponent.vue';
import MissionVisionSection from '../components/MissionVisionSection.vue'
import ServiciosSectionComponent from '@/components/ServiciosSectionComponent.vue';
</script>

<template>
    <div>
        <HeroSectionComponent />
        <MissionVisionSection />
        <ServiciosSectionComponent />
    </div>
</template>