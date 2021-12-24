<template>
  <section class="flex flex-col px-6">
    <span
      class="
        terminology-text
        uppercase
        text-lightPurple text-sub-heading-2
        md:text-base
        font-barlowCondensed
      "
    >
      The terminology...
    </span>
    <h1 class="title uppercase font-bellefair mt-2 md:mt-4">
      {{ name }}
    </h1>
    <p
      class="
        text-lightPurple text-mobile-base
        md:text-base
        xl:text-lg xl:leading-8
        mt-4
        max-w-md
      "
    >
      {{ description }}
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
.title {
  font-size: 1.5rem;
  line-height: 1.75rem;
}

@media screen and (min-width: 48em) {
  .title {
    font-size: 2.5rem;
    line-height: 45.84px;
  }
}

@media screen and (min-width: 80em) {
  .title {
    font-size: 3.5rem;
    line-height: 64.18px;
  }
}
</style>