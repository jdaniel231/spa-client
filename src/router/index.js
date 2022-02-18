import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardIndex from '../views/dashboard/Index.vue'
import HomeIndex from '../views/dashboard/childrem/homes/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    
    path: '/',
    name: 'dashboard_path',
    component: DashboardIndex,
    children: [
      {path: '/', name: 'home_path', component: HomeIndex},
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
