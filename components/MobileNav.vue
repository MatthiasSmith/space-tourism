<template>
  <div
    aria-label="Mobile navigation"
    role="dialog"
    class="
      mobile-nav-menu
      absolute
      right-0
      top-0
      backdrop-filter backdrop-blur-2xl
      h-screen
      px-6
      z-50
    "
  >
    <button
      type="button"
      class="close-button block ml-auto"
      aria-label="Close mobile navigation menu"
      @click="closeMobileNav"
    >
      <img
        src="~/assets/shared/icon-close.svg"
        alt="Close mobile navigation menu"
      />
    </button>
    <nav class="mt-8">
      <ul>
        <li
          v-for="(link, index) in links"
          :key="link.text"
          class="list-item font-barlowCondensed letter-spaced-text mt-8"
          @click="closeMobileNav"
        >
          <NuxtLink
            :to="link.path"
            class="uppercase text-base inline-flex items-center w-full h-8"
          >
            <span class="font-bold mr-3">0{{ index }}</span>
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

interface LinkType {
  text: string
  path: string
}

export default Vue.extend({
  data() {
    return {
      links: [
        { text: 'Home', path: '/' },
        { text: 'Destination', path: '/destination/moon' },
        { text: 'Crew', path: '/crew' },
        { text: 'Technology', path: '/technology' },
      ] as LinkType[],
    }
  },
  methods: {
    ...mapActions(['toggleMobileNav']),
    closeMobileNav() {
      this.$store.dispatch('toggleMobileNav', false)
    },
  },
})
</script>

<style scoped>
.mobile-nav-menu {
  width: 15.875rem;
  padding: 2.125rem 0 2.125rem 2rem;
}

.close-button {
  margin-right: 1.625rem;
}

.letter-spaced-text {
  letter-spacing: 2.7px;
}

.nuxt-link-exact-active {
  border-right: 0.25rem solid white;
}
</style>