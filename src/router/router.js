import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/page/Main';
import Basket from '@/page/Basket';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/basket',
    component: Basket
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
