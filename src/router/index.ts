import ServiciosSectionComponent from '@/components/ServiciosSectionComponent.vue'
import ContactoView from '@/view/ContactoView.vue'
import HomeView from '@/view/HomeView.vue'
import NosotrosView from '@/view/NosotrosView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: NosotrosView,
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosSectionComponent,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
