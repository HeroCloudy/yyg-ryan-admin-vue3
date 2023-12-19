import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import type { App } from 'vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/demo-icon-list',
    name: 'demo-icon-list',
    component: () => import('@/views/icon/icon-list-demo.vue')
  },
  {
    path: '/demo-icon-picker',
    name: 'demo-icon-picker',
    component: () => import('@/views/icon/icon-picker-demo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export const installRouter = (app: App) => {
  app.use(router)
}

export default router
