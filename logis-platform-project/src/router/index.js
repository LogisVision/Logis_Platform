import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/device',
      name: 'device',
      component: () => import('../views/DeviceView.vue')
    },
    {
      path: '/load',
      name: 'load',
      component: () => import('../views/LoadBaseView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
  ],
})

export default router
