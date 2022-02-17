import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardIndex from '../views/dashboard/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    
    path: '/',
    name: 'dashboard_path',
    component: DashboardIndex
  },
  
]

const router = new VueRouter({
  routes
})

export default router
