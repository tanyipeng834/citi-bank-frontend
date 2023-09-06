import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/FileUpload.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/Portfolio.vue')
    },
  ]
})

export default router
