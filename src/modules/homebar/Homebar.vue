<template>
  <div class="homebar">
    <button-homebar @click.native="$router.push({ name: 'home' })">Home</button-homebar>
    <button-cart/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ButtonHomebar from './ButtonHomebar.vue'
import { ButtonCart } from '@/modules/cart'

@Component({ components: { ButtonHomebar, ButtonCart } })
export default class App extends Vue {

}
</script>

<style scoped>
  .homebar {
    display: flex;
    align-items: center;
    width: 1000px;
    height: 50px;
    padding: 10px;
    margin: 0 auto;
    background: rgb(113, 147, 153);
  }
</style>
