// import globalStore from '@/store';
// import globalRouter from '@/router';
import store from './store';
import routes from './routes';
import ButtonCart from './ButtonCart.vue';
import ButtonAddToCart from './ButtonAddToCart.vue';

// This would work:
// globalStore.registerModule('cart', store)
// This would not:
// globalRouter.addRoutes(routes);

export {
  ButtonCart,
  ButtonAddToCart,
  routes,
  store,
}
