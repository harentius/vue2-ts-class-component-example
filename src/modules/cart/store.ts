import { Product } from '../client'
import { Cart } from './types'

interface State {
  cart: Cart,
}

export default {
  state: {
    cart: {
      items: []
    }
  },
  mutations: {
    clear: (state: State): void => { state.cart.items = [] },
    addItem: (state: State, product: Product): void => {
      const existingItem = state.cart.items.find(v => v.product.id === product.id)

      if (existingItem) {
        existingItem.amount++
        return
      }

      state.cart.items.push({
        product,
        amount: 1
      })
    }
  },
  actions: {
  },
  getters: {
    totalItems: (state: State): number => state.cart.items.reduce((v, item) => (v + item.amount), 0),
    cart: (state: State): Cart => state.cart
  }
}
