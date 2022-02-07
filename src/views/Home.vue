<template>
  <div class="home">
    <button-success>Success</button-success>
    <button-cancel>Cancel</button-cancel>
    <button-danger>Danger</button-danger>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ButtonSuccess, ButtonCancel, ButtonDanger } from '@/components/ui/buttons';

@Component({
  components: { ButtonSuccess, ButtonCancel, ButtonDanger },
})
export default class Home extends Vue {}
</script>
