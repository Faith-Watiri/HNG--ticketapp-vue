import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Landing from '@/pages/Landing.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Tickets from '@/pages/Tickets.vue'
import Login from '@/pages/auth/Login.vue'
import Signup from '@/pages/auth/Signup.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/tickets', name: 'Tickets', component: Tickets },
  { path: '/auth/login', name: 'Login', component: Login },
  { path: '/auth/signup', name: 'Signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
