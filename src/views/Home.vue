<template>
  <div class="home">
    <products-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ProductsList } from '@/modules/products';

@Component({
  components: { ProductsList },
})
export default class Home extends Vue {}
</script>
