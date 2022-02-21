<template>
  <div>
    <product v-for="product in products.data"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Loadable } from '@/types';
  import { Product as ProductData, apiClient } from '@/modules/client';
  import Product from './Product.vue';

  @Component({
    components: { Product },
  })
  export default class ProductsList extends Vue {
    private products: Loadable<ProductData[]> = {
      data: [],
      isLoading: true,
    };

    private async created() {
      this.products.data = await apiClient.getProducts();
    }
  }
</script>

<style scoped>

</style>