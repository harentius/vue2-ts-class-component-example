<template>
  <button-success @click.native="$router.push({ name: 'cart' })">
    <v-icon small>mdi-cart</v-icon>{{itemsCount}}
  </button-success>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Getter } from 'vuex-class';
  import { ButtonSuccess } from '@/components/ui/buttons';

  @Component({ components: { ButtonSuccess } })
  export default class ButtonCart extends Vue {

    // @Getter('cartItemsCount')
    private itemsCount: number = 2;
  };
</script>

<style scoped>

</style>
