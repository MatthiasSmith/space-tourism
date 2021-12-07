<template>
  <nav class="navbar">
    <ul class="flex">
      <li v-for="link in links" :key="link.text" class="list-item">
        <NuxtLink
          :to="link.path"
          class="link-text text-sm font-barlowCondensed uppercase"
          :class="activeLink(link.text)"
        >
          {{ link.text }}
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
  backdrop-filter: blur(81.5485px);
  padding: 39px 3rem;
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
  bottom: -39px;
  left: 0;
  width: 100%;
  height: 3px;
}
</style>
