<template>
  <article class="bg-image min-h-screen px-6 pt-28 pb-14 lg:pb-32">
    <NuxtChild />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  template: 'default',
})
</script>

<style scoped>
.bg-image {
  background-image: var(--bgOverlayGradient),
    url('~/assets/destination/background-destination-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (min-width: 48em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/destination/background-destination-tablet.jpg');
  }
}

@media screen and (min-width: 64em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/destination/background-destination-desktop.jpg');
  }
}
</style>