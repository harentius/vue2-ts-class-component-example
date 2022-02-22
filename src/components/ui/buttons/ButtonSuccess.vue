<template>
  <button-component :type="ButtonType.SUCCESS">
    <template v-slot:default><slot/></template>
  </button-component>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ButtonComponent, { ButtonType } from './Button.vue'

@Component({ components: { ButtonComponent } })
export default class ButtonSuccess extends Vue {
  private ButtonType = ButtonType;
}
</script>

<style scoped>

</style>
