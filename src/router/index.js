import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardIndex from '../views/dashboard/Index.vue'
import Login from '../views/auth/Login.vue'
import HomeIndex from '../views/dashboard/children/homes/Index.vue'
import CategoriesIndex from '../views/dashboard/children/categories/Index.vue'
import CategoriesShow from '../views/dashboard/children/categories/Show.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    
    { path: '/login', name: 'login_path', component: Login},
    {    
      path: '/', name: 'dashboard_path', component: DashboardIndex,
      children: [
        {path: '/', name: 'home_path', component: HomeIndex},
        { path: '/categories', name: 'categories_path', component: CategoriesIndex },
        { path: '/categories/:id', name: 'category_path', component: CategoriesShow }, 
      ]
    }
  ]
})

export default router
