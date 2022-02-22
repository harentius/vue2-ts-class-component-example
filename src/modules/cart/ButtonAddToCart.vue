<template>
  <button-cancel @click.native="addItem(product)">
    Add to Cart
  </button-cancel>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Mutation } from 'vuex-class';
  import { ButtonCancel } from '@/components/ui/buttons';
import { Prop } from 'vue-property-decorator';
import { Product } from '@/modules/client';

  @Component({ components: { ButtonCancel } })
  export default class ButtonAddToCart extends Vue {
    @Prop({ type: Object, required: true })
    private product!: Product;

    @Mutation('addItem')
    private addItem!: (item: Product) => void;
  };
</script>

<style scoped>

</style>
