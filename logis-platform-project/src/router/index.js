import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/ETC/NotFoundView.vue')
    },
    {
      path: '/blocked',
      name: 'blocked',
      component: () => import('../views/ETC/BlockedView.vue')
    },
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
      path: '/loading/workspace',
      name: 'workspace',
      component: () => import('@/views/Loading/WorkspaceView.vue')
    },
    {
      path: '/loading/waitlist',
      name: 'waitlist',
      component: () => import('@/views/Loading/WaitListView.vue')
    },
    {
      path: '/loading/new',
      name: 'new-item',
      component: () => import('@/views/Loading/NewItemView.vue')
    },
    {
      path: '/command/request',
      name: 'new-command',
      component: () => import('@/views/Command/RequestView.vue')
    },
    {
      path: '/command/pending',
      name: 'pending-command',
      component: () => import('@/views/Command/PendingView.vue')
    },
    {
      path: '/command/completed',
      name: 'completed-command',
      component: () => import('@/views/Command/CompleteView.vue')
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('@/views/LogView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
  ],
})

export default router
