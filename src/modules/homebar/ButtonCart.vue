<template>
  <button-component :type="ButtonType.SUCCESS">
    <v-icon small>mdi-cart</v-icon>{{itemsCount}}
  </button-component>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Getter } from 'vuex-class';
  import { Button as ButtonComponent, ButtonType } from '@/components/ui/buttons';

  @Component({ components: { ButtonComponent } })
  export default class ButtonCart extends Vue {
    private ButtonType = ButtonType;

    @Getter('cartItemsCount')
    private itemsCount!: number;
  };
</script>

<style scoped>

</style>
