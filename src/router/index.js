import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/screen-1',
    name: 'screen1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen1.vue')
  },
  {
    path: '/screen-2',
    name: 'screen2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen2.vue')
  },
  {
    path: '/screen-3',
    name: 'screen3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen3.vue')
  },
  {
    path: '/screen-3/:cpf',
    name: 'screen3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen3.vue')
  },
  {
    path: '/screen-4',
    name: 'screen4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen4.vue')
  },
  {
    path: '/screen-5',
    name: 'screen5',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen5.vue')
  },
  {
    path: '/screen-6',
    name: 'screen6',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen6.vue')
  },
  {
    path: '/screen-7',
    name: 'screen7',
    component: () => import(/* webpackChunkName: "about" */ '../views/Screen7.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
