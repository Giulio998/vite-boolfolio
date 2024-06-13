import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',component: AppHome },
    { path: '/portfolio',component: AppPortfolio },
    { path: '/contact',component: AppContact }
  ]
})

export default router;