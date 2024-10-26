import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',          
          redirect:'dashboard'
        },
        {
          path: 'dashboard',          
          name: 'dashboard',          
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: 'find',
          name: 'find',          
          component: () => import('@/views/FindData.vue')
        },
        {
          path: 'excise',
          name: 'excise',          
          component: () => import('@/views/Excise.vue')
        },
        {
          path: 'penalty',
          name: 'penalty',          
          component: () => import('@/views/Penalty.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      // component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LoginView.vue')
    },    
  ]
})

export default router
