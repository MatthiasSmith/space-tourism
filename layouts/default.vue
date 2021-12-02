<template>
  <div>
    <TheHeader class="absolute top-0 left-0 z-10 w-full" />
    <main>
      <nuxt />
    </main>
    <transition name="slide">
      <MobileNav v-if="isMobileNavOpen" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    isMobileNavOpen() {
      return this.$store.state.ui.isMobileNavOpen
    },
  },
})
</script>

<style scoped>
@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@media screen and (prefers-reduced-motion: no-preference) {
  .slide-enter-active {
    animation: slide-in 0.3s ease-in;
  }

  .slide-leave-active {
    animation: slide-in 0.3s ease-out reverse;
  }
}
</style>