<template>
  <section class="flex flex-col text-center lg:text-left">
    <div
      class="
        uppercase
        text-mobile-sub-heading-1
        md:text-tablet-sub-heading-1
        xl:text-heading-4
        tracking-normal
        md:tracking-normal
        font-bellefair
        opacity-50
      "
    >
      {{ role }}
    </div>
    <h1 class="crew-member-name uppercase font-bellefair mt-2">
      {{ name }}
    </h1>
    <p
      class="
        text-mobile-base
        md:text-base
        xl:text-lg xl:leading-8
        text-lightPurple
        mt-4
        max-w-md
        lg:h-40
      "
    >
      {{ bio }}
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    role: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
.crew-member-name {
  font-size: 1.5rem;
  line-height: 1.75rem;
}

@media screen and (min-width: 48em) {
  .crew-member-name {
    font-size: 2.5rem;
    line-height: 45.84px;
  }
}

@media screen and (min-width: 80em) {
  .crew-member-name {
    font-size: 3.5rem;
    line-height: 64.18px;
  }
}
</style>