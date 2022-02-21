<template>
<v-card
  class="mx-auto my-12"
  max-width="374"
  elevation="2"
>
  <v-img v-if="cover"
    class="mx-auto"
    width="250"
    height="250"
    :src="cover"
  ></v-img>

  <v-card-title v-if="title">{{ title }}</v-card-title>

  <v-card-text>
    <slot/>
  </v-card-text>
</v-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Card extends Vue {
    @Prop({ type: String })
    private cover!: string;

    @Prop({ type: String })
    private title!: string;
  }
</script>

<style scoped>

</style>