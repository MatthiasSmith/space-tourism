<template>
  <nav class="navbar p-10 px-12 xl:pl-28 xl:pr-40">
    <ul class="flex">
      <li
        v-for="(link, index) in links"
        :key="link.text"
        class="list-item focus-within:outline-white"
      >
        <NuxtLink
          :to="link.path"
          class="
            link-text
            text-sm
            lg:text-base
            font-barlowCondensed
            uppercase
            focus:outline-none
          "
          :class="activeLink(link.text)"
        >
          <span class="hidden xl:inline-block mr-2 font-bold">
            {{ '0' + index }}
          </span>
          <span data-test-id="link-text">{{ link.text }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { SITE_LINKS } from '~/constants/site-links'

export default Vue.extend({
  data() {
    return {
      links: SITE_LINKS,
    }
  },
  methods: {
    activeLink(path: string) {
      return {
        'link-active': this.$route.path.includes(path.toLowerCase()),
      }
    },
  },
})
</script>

<style scoped>
.navbar {
  background: hsla(0, 0%, 100%, 0.04);
  backdrop-filter: blur(0.75rem);
}

.list-item:not(:first-of-type) {
  margin-left: 2.5rem;
}

.link-text {
  letter-spacing: 2.36px;
  position: relative;
}

.nuxt-link-exact-active::after,
.link-active::after {
  background: white;
  content: '';
  position: absolute;
  bottom: -43px;
  left: 0;
  width: 100%;
  height: 3px;
}
</style>
