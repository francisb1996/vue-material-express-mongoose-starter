import Vue from 'vue'
import Vuex from 'vuex'
import User from './models/User'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: User.find()
  },
  mutations: {

  },
  actions: {

  }
})
