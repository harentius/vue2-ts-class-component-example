<template>
  <card
    :cover="cartItem.product.image"
    :title="cartItem.product.title"
  >
    {{ cartItem.product.description }}
    <p>
      <v-chip>Amount: {{ cartItem.amount }}</v-chip>
    </p>
  </card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Card } from '@/components/ui'

@Component({
  components: { Card }
})
export default class CartItem extends Vue {
  @Prop({ type: Object, required: true })
  private cartItem!: CartItem;
}
</script>

<style scoped>

</style>
