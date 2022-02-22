<template>
  <v-btn
    elevation="2"
    :color="buttonColor"
    :outlined="isOutlined"
  >
    <slot/>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export enum ButtonType {
    SUCCESS = 'success',
    CANCEL = 'cancel',
    DANGER = 'danger',
  }

@Component({})
export default class Button extends Vue {
  @Prop({ required: true })
  private type!: ButtonType;

  @Prop({ type: Boolean, default: false })
  private isOutlined!: boolean;

  private get buttonColor (): string {
    const buttonTypeColorMap = {
      [ButtonType.SUCCESS]: 'success',
      [ButtonType.CANCEL]: '',
      [ButtonType.DANGER]: 'error'
    }

    if (buttonTypeColorMap[this.type] !== undefined) {
      return buttonTypeColorMap[this.type]
    }

    return buttonTypeColorMap[this.type]
  }
}
</script>
