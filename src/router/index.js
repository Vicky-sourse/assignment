import Vue from 'vue'
import VueRouter from 'vue-router'
import Pricing from '../views/Pricing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pricing',
    component: Pricing
  }
]

const router = new VueRouter({
  routes
})

export default router
