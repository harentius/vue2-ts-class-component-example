<template>
  <button
    class="btn"
    :class="buttonClass"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  export enum ButtonType {
    SUCCESS = 'success',
    CANCEL = 'cancel',
    DANGER = 'danger',
  }

  @Component({})
  export default class Button extends Vue {
    @Prop({ required: true })
    private type!: ButtonType;

    @Prop({ default: false })
    private isOutlined!: boolean;

    private get buttonClass(): string {
      const buttonTypeColorMap = {
        [ButtonType.SUCCESS]: 'btn-success',
        [ButtonType.CANCEL]: 'btn-light',
        [ButtonType.DANGER]: 'btn-danger',
      }

      if (buttonTypeColorMap[this.type] !== undefined) {
        return buttonTypeColorMap[this.type];
      }

      return buttonTypeColorMap[this.type];
    }
  };
</script>
