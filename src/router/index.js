/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-15 10:16:37
 * @LastEditTime: 2023-11-17 12:00:23
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/piniaUse',
    name: 'PiniaUse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "piniaUse" */ '../views/piniaUse/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
