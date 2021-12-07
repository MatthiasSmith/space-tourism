<template>
  <header class="flex justify-between items-center">
    <NuxtLink class="p-6" to="/">
      <img
        class="logo"
        src="~/assets/shared/logo.svg"
        alt="navigate home"
        @click="closeMobileNav"
      />
    </NuxtLink>
    <TheNavbar class="hidden md:block" />
    <button type="button" class="md:hidden p-6" @click="openMobileNav">
      <img
        src="~/assets/shared/icon-hamburger.svg"
        alt="open mobile navigation menu"
      />
    </button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    openMobileNav() {
      this.$store.commit('setMobileNavOpenClosed', true)
    },
    closeMobileNav() {
      this.$store.commit('setMobileNavOpenClosed', false)
    },
  },
})
</script>

<style scoped>
.logo {
  width: 2.5rem;
  height: 2.5rem;
}
</style>