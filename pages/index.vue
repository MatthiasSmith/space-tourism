<template>
  <article class="bg-image min-h-screen pt-28">
    <div
      class="
        site-content-max-width
        mx-auto
        pb-20
        lg:pb-32 lg:flex lg:items-end lg:mt-32
        xl:mt-60
      "
    >
      <section class="text-center px-6 lg:px-0 lg:text-left">
        <h1 id="main-content" class="uppercase md:mt-24 lg:mt-3">
          <span
            class="
              font-barlowCondensed
              text-mobile-sub-heading-1
              md:text-tablet-sub-heading-1
              xl:text-heading-5
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
            xl:text-lg xl:leading-8
            text-lightPurple
            mt-4
            md:mt-6
            max-w-sm
            md:max-w-md
            mx-auto
          "
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <ExploreButtonLink class="mt-20 mx-auto lg:mr-0 lg:ml-auto" />
    </div>
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
    background-image: url('~/assets/home/background-home-desktop.jpg');
  }
}
</style>
