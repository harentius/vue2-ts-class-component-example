<template>
  <button-component :type="ButtonType.CANCEL" :is-outlined="true">
    <template v-slot:default><slot/></template>
  </button-component>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Button as ButtonComponent, ButtonType } from '@/components/ui/buttons'

@Component({ components: { ButtonComponent } })
export default class ButtonCancel extends Vue {
  private ButtonType = ButtonType;
}
</script>

<style scoped>

</style>
