<template>
  <article class="bg-image h-screen text-center px-6 pt-28">
    <h1 class="uppercase">
      <span
        class="
          font-barlowCondensed
          text-mobile-sub-heading-1
          md:text-tablet-sub-heading-1
          text-lightPurple
        "
      >
        So, you want to travel to
      </span>
      <span
        class="
          font-bellefair
          text-mobile-heading-1
          md:text-heading-1
          block
          mt-4
          md:mt-6
        "
      >
        space
      </span>
    </h1>
    <p
      class="
        text-mobile-base
        md:text-base
        text-lightPurple
        mt-4
        md:mt-6 md:max-w-md md:mx-auto
      "
    >
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>
    <ExploreButtonLink class="mt-20 mx-auto" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  template: 'default',
})
</script>

<style scoped>
.bg-image {
  background-image: var(--bgOverlayGradient),
    url('~/assets/home/background-home-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (min-width: 48em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/home/background-home-tablet.jpg');
  }
}

@media screen and (min-width: 64em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/home/background-home-desktop.jpg');
  }
}
</style>
