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
      path: '/riskAssessment',
      name: 'riskAssessment',
      component: () => import('@/views/RiskAssessment.vue')
    },
    {
      path: '/detailedResult/:id',
      name: 'detailedResult',
      component: () => import('@/views/DetailedResult.vue'),
    },
  ]
})

export default router
