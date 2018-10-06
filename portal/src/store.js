import Vue from 'vue'
import Vuex from 'vuex'
import UserService from './services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: UserService.getAll()
  },
  mutations: {

  },
  actions: {

  }
})
