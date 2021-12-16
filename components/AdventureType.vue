<template>
  <div class="destination-text-container">
    <span
      class="
        font-barlowCondensed font-bold
        text-mobile-sub-heading-1
        md:text-tablet-sub-heading-1
        xl:text-heading-5
        opacity-25
        mr-4
      "
      data-test-id="number-text"
    >
      {{ number }}
    </span>
    <span
      class="
        uppercase
        font-barlowCondensed
        text-mobile-sub-heading-1
        md:text-tablet-sub-heading-1
        xl:text-heading-5
      "
      data-test-id="text"
    >
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    number: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
})
</script>