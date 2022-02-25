import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'


import DashboardIndex from '../views/dashboard/Index.vue'
import Login from '../views/auth/Login.vue'
import HomeIndex from '../views/dashboard/children/homes/Index.vue'
import CategoriesIndex from '../views/dashboard/children/categories/Index.vue'
import CategoriesShow from '../views/dashboard/children/categories/Show.vue'
import CategoriesNew from '../views/dashboard/children/categories/New.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    
    { path: '/login', name: 'login_path', component: Login, meta: { requireAuth: false } },
    {    
      path: '/', component: DashboardIndex, meta: { requiresAuth: true },
      children: [
        {path: '/', name: 'home_path', component: HomeIndex},
        { path: '/categories', name: 'categories_path', component: CategoriesIndex },
        { path: '/categories/:id', name: 'category_path', component: CategoriesShow }, 
        { path: '/categories/new', name: 'new_category_path', component: CategoriesNew }, 
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.state.token) {next() }
    else {next({path: '/login'})}
  }else {
    if(store.state.token) {next({ path: '/' }) }
    else {next() }
  }
})

export default router
