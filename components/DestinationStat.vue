<template>
  <div class="stat-container flex flex-col items-center lg:items-start">
    <span
      class="text-barlowCondensed text-sub-heading-2 text-lightPurple uppercase"
      data-test-id="stat-title"
    >
      {{ statTitle }}
    </span>
    <span
      class="
        mt-3
        font-bellefair
        text-heading-5
        tracking-normal
        leading-8
        uppercase
      "
      data-test-id="stat-text"
    >
      {{ statText }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    statTitle: {
      type: String,
      default: '',
    },
    statText: {
      type: String,
      default: '',
    },
  },
})
</script>
