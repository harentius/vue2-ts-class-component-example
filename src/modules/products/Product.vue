<template>
  <card
    :cover="product.image"
    :title="product.title"
    @coverClick="eventBus.$emit(Events.PRODUCT_CLICK, product)"
  >
    <p>{{ product.description }}</p>
    <button-add-to-cart :product="product" />
  </card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Card } from '@/components/ui'
import { Product as ProductData } from '@/modules/client'
import { ButtonAddToCart } from '@/modules/cart'
import { eventBus, Events } from '@/eventBus'

@Component({
  components: { Card, ButtonAddToCart }
})
export default class Product extends Vue {
  @Prop({ type: Object, required: true })
  private product!: ProductData;

  private eventBus = eventBus;

  private Events = Events;
}
</script>

<style scoped>

</style>
