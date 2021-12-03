<template>
  <ul class="flex">
    <li
      v-for="(tab, index) in tabs"
      :key="tab"
      class="
        tab
        relative
        h-7
        font-barlowCondensed
        text-sub-heading-2 text-lightPurple
        uppercase
      "
      :class="{
        'li-bullet': displayType === 'bullet',
        'li-number': displayType === 'number',
        'li-text': displayType === 'text',
      }"
    >
      <NuxtLink
        :to="getLink(tab)"
        :class="{
          'link-bullet': displayType === 'bullet',
          'link-number': displayType === 'number',
          'link-text': displayType === 'text',
        }"
      >
        <span v-if="displayType === 'number'">
          {{ index + 1 }}
        </span>
        <span v-else-if="displayType === 'text'">{{ tab }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    displayType: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    getLink(tab: string): string {
      return `${tab.toLowerCase()}`
    },
  },
})
</script>

<style scoped>
.li-bullet:not(:last-of-type) {
  margin-right: 1rem;
}

.li-text:not(:last-of-type) {
  margin-right: 2rem;
}

.link-bullet {
  background-color: var(--borderGray);
  border-radius: 50%;
  display: inline-block;
  width: 1rem;
  height: 1rem;
}

.link-bullet.nuxt-link-active {
  background-color: white;
}

.link-text.nuxt-link-active {
  color: white;
}

.link-text.nuxt-link-active::after {
  content: '';
  background: white;
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>