<template>
  <button-cancel>
    Add to Cart
  </button-cancel>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  // import { Getter } from 'vuex-class';
  import { ButtonCancel } from '@/components/ui/buttons';

  @Component({ components: { ButtonCancel } })
  export default class ButtonAddToCart extends Vue {
    // @Getter('cartItemsCount')
    // private itemsCount: number = 2;
  };
</script>

<style scoped>

</style>
