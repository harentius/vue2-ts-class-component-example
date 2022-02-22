import Vue from 'vue'

export enum Events {
  PRODUCT_CLICK = 'PRODUCT_CLICK',
}

export const eventBus = new Vue()
