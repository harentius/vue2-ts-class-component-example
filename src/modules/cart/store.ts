import { Product } from '../client';
import { Cart } from './types';

interface State {
  cart: Cart,
}

export default {
  state: {
    cart: {
      items: [],
    },
  },
  mutations: {
    clear: (state: State) => state.cart.items = [],
    addItem: (state: State, product: Product) => {
      const existingItem = state.cart.items.find(v => v.product.id === product.id);

      if (existingItem) {
        existingItem.amount++;
        return;
      }

      state.cart.items.push({
        product,
        amount: 1,
      })
    }
  },
  actions: {
  },
  getters: {
    totalItems: (state: State) => state.cart.items.reduce((v, item) => (v + item.amount), 0),
    cart: (state: State) => state.cart,
  }
}
