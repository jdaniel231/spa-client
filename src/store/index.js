import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    category: {},
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },

    setCategory(state, category) {
      state.category = category
    },
  },
  actions: {
    fetchCategories({commit}) {
      axios.get("http://localhost:3000/api/categories")
        .then(response => commit('setCategories', response.data))
        .catch(err => console.log(err.response))
    },

    getCategory({commit}, id) {
      axios.get(`http://localhost:3000/api/categories/${id}`)
      .then(response =>{ commit('setCategory', response.data)})
      .catch(err => console.log(err.response))
    },

    doLogin({ commit, state }, user) {
      commit('setHeaders')
      return new Promise((resolve, reject) => {
        axios.post("/authenticate", user, { headers: state.headers })
          .then(response => {
            commit('setToken', `Bearer ${response.data.auth_token}`)
            resolve({ path: 'home_path' })
          })
          .catch(err => reject(err))
      })
    },
  },
  
  modules: {
  }
})
