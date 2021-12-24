<template>
  <ul
    class="flex px-6"
    :class="{
      'lg:flex-col': displayType === 'number',
      'lg:px-0': displayType !== 'number',
    }"
  >
    <li
      v-for="(tab, index) in tabs"
      :key="tab"
      class="tab relative h-7 md:h-8 text-center"
      :class="{
        li__bullet: displayType === 'bullet',
        'li__number focus-within:outline-white': displayType === 'number',
        li__text: displayType === 'text',
      }"
    >
      <NuxtLink
        :to="getLink(tab)"
        :class="{
          tab__bullet: displayType === 'bullet',
          tab__number: displayType === 'number',
          tab__text: displayType === 'text',
        }"
        class="focus-visible:outline-white"
      >
        <span v-if="displayType === 'number'">
          {{ index + 1 }}
        </span>
        <span
          v-else-if="displayType === 'text'"
          class="
            text
            font-barlowCondensed
            text-sub-heading-2 text-lightPurple
            uppercase
          "
        >
          {{ tab }}
        </span>
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
.li__bullet:not(:last-of-type),
.li__number:not(:last-of-type) {
  margin-right: 1rem;
}

.li__text:not(:last-of-type) {
  margin-right: 2rem;
}

.li__number {
  border-radius: 50%;
  border: 1px solid hsla(0, 0%, 100%, 0.25);
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease-in-out;
}

.li__number:hover {
  border-color: white;
}

.tab__number {
  width: 100%;
  color: white;
  font-family: 'Bellefair';
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.tab__number span {
  letter-spacing: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tab__bullet {
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.25;
  width: 0.625rem;
  height: 0.625rem;
  transition: opacity 0.3s ease-in-out;
}

.tab__bullet:hover {
  opacity: 0.5;
}

.tab__bullet.nuxt-link-active,
.tab__bullet:focus {
  background-color: white;
  opacity: 1;
}

.tab__number.nuxt-link-active {
  color: var(--darkGray);
  background-color: white;
}

.tab__text.nuxt-link-active {
  color: white;
}

.tab__text::after {
  content: '';
  background-color: hsla(0, 0%, 100%, 0.5);
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transform: scale(0);
}

.tab .tab__text:hover::after {
  transform: scale(1);
}

.tab .tab__text.nuxt-link-active::after {
  background: white;
  transform: scale(1);
}

@media screen and (min-width: 48em) {
  .tab__text::after {
    bottom: -2px;
  }

  .text {
    font-size: 1rem;
    letter-spacing: 2.7px;
  }

  .tab__bullet {
    width: 0.9375rem;
    height: 0.9375rem;
  }

  .li__number {
    width: 3.75rem;
    height: 3.75rem;
  }

  .tab__number {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 64em) {
  .li__number:not(:first-of-type) {
    margin-top: 1.5rem;
  }

  .li__number:not(:last-of-type) {
    margin-right: 0;
  }
}

@media screen and (min-width: 80em) {
  .li__number {
    width: 5rem;
    height: 5rem;
  }

  .li__number:not(:first-of-type) {
    margin-top: 2rem;
  }

  .li__number:not(:last-of-type) {
    margin-right: 0;
  }

  .tab__number {
    font-size: 2rem;
  }
}

@media screen and (prefers-reduced-motion: reduce) {
  .tab__text::after {
    transition-duration: 0s;
  }
}
</style>