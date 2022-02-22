<template>
  <v-app id="app">
    <homebar class="homebar"/>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Homebar } from '@/modules/homebar'

@Component({
  components: { Homebar }
})
export default class App extends Vue {}
</script>

<style scoped>
  .homebar {
    margin-bottom: 15px;
  }
</style>
