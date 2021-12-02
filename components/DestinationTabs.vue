<template>
  <ul class="flex">
    <li
      v-for="destination in destinations"
      :key="destination"
      class="
        tab
        relative
        h-7
        font-barlowCondensed
        text-sub-heading-2 text-lightPurple
        uppercase
      "
    >
      <NuxtLink :to="getLink(destination)">
        {{ destination }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    destinations: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getLink(destination: string): string {
      return `${destination.toLowerCase()}`
    },
  },
})
</script>

<style scoped>
.tab:not(:last-of-type) {
  margin-right: 2rem;
}

.nuxt-link-active {
  color: white;
}

.nuxt-link-active::after {
  content: '';
  background: white;
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>