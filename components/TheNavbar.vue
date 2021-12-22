<template>
  <nav class="navbar p-10 px-12 xl:pl-28 xl:pr-40">
    <ul class="flex">
      <li v-for="(link, index) in links" :key="link.text" class="list-item">
        <NuxtLink
          :to="link.path"
          class="
            link
            font-barlowCondensed
            uppercase
            xl:inline-block
            focus-visible:outline-white
          "
          :class="activeLink(link.text)"
        >
          <span
            class="hidden text-sm lg:text-base xl:inline-block mr-2 font-bold"
          >
            {{ '0' + index }}
          </span>
          <span class="text-sm lg:text-base" data-test-id="link-text">
            {{ link.text }}
          </span>
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

.link {
  letter-spacing: 2.36px;
  position: relative;
}

.link::after {
  background: white;
  content: '';
  position: absolute;
  bottom: -43px;
  left: 0;
  width: 100%;
  height: 3px;
  transition: transform 0.35s ease-in-out;
  transform: scale(0);
}

.nuxt-link-exact-active::after,
.link-active::after {
  transform: scale(1);
}

@media screen and (min-width: 64em) {
  .link::after {
    bottom: -45px;
  }
}
</style>
