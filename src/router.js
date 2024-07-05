import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'
import AppShow from './pages/AppShow.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',component: AppHome },
    { path: '/portfolio',component: AppPortfolio },
    { path: '/contact',component: AppContact },
    { path: '/show', name : 'AppShow',component: AppShow, props: true }
  ]
})

export default router;