import Vue from 'vue'
import Vuex from 'vuex'
import { store as cartStore } from '@/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { cart: cartStore },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})
