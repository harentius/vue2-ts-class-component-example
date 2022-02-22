<template>
  <div>
    <h1>Cart</h1>
      <cart-item v-for="cartItem in cart.items"
        class="float-left"
        :key="cartItem.id"
        :cart-item="cartItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import CartItem from './CartItem.vue'
import { Cart as CartData } from './types'

@Component({
  components: {
    CartItem
  }
})
export default class Cart extends Vue {
  @Getter('cart')
  private cart!: CartData;
}
</script>

<style scoped>

</style>
