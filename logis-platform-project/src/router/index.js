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
      path: '/loading/storage',
      name: 'storage',
      component: () => import('@/views/Loading/StorageView.vue')
    },
    {
      path: '/loading/waitlist',
      name: 'waitlist',
      component: () => import('@/views/Loading/WaitListView.vue')
    },
    {
      path: '/loading/register',
      name: 'register',
      component: () => import('@/views/Loading/RegisterView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
  ],
})

export default router
