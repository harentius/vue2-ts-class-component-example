<template>
  <card
    :cover="product.image"
    :title="product.title"
  >
    {{ product.description }}
  </card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Card } from '@/components/ui';
  import { Product as ProductData } from '@/modules/client';

  @Component({
    components: { Card }
  })
  export default class Product extends Vue {
    @Prop({ type: Object, required: true })
    private product!: ProductData;
  }
</script>

<style scoped>

</style>