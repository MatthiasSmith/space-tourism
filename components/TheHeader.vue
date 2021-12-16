<template>
  <header class="flex justify-between items-center lg:pt-10">
    <NuxtLink class="ml-6 focus:outline-white" to="/">
      <img
        class="logo"
        src="~/assets/shared/logo.svg"
        alt="navigate home"
        @click="closeMobileNav"
      />
    </NuxtLink>
    <div class="line hidden lg:block"></div>
    <TheNavbar class="hidden md:block" />
    <button
      type="button"
      title="open mobile navigation menu"
      class="md:hidden p-6"
      data-test-id="mobile-nav-menu-toggle-btn"
      @click="openMobileNav"
    >
      <svg
        role="img"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
      >
        <g fill="#D0D6F9" fill-rule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
    </button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    openMobileNav() {
      this.$store.dispatch('toggleMobileNav', true)
    },
    closeMobileNav() {
      this.$store.dispatch('toggleMobileNav', false)
    },
  },
})
</script>

<style scoped>
.logo {
  width: 2.5rem;
  height: 2.5rem;
}

.line {
  background: hsla(0, 0%, 100%, 0.25);
  flex: 1;
  height: 1px;
  margin-left: 4rem;
  margin-right: -1rem;
  position: relative;
  z-index: 1;
}

@media screen and (min-width: 48em) {
  .logo {
    width: 3rem;
    height: 3rem;
  }
}

@media screen and (min-width: 80em) {
  .line {
    margin-right: -2rem;
  }
}
</style>