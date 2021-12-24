<template>
  <article
    class="bg-image min-h-screen pt-28 lg:pt-36"
    :class="{
      'bg-destination': getRoutePath === 'destination',
      'bg-crew': getRoutePath === 'crew',
      'bg-technology': getRoutePath === 'technology',
    }"
  >
    <AdventureType
      :number="attractionNumber"
      :text="attractionText"
      class="
        site-content-max-width
        mx-auto
        text-center
        md:pl-6 md:text-left md:self-start md:mt-8
        lg:pl-0 lg:mt-24
      "
    />
    <NuxtChild />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    getRoutePath() {
      const path =
        this.$route && this.$route.name && this.$route.name.split('-')[1]
      return path
    },
    attractionNumber() {
      const path =
        this.$route && this.$route.name && this.$route.name.split('-')[1]
      return path === 'destination' ? '01' : path === 'crew' ? '02' : '03'
    },
    attractionText() {
      const path =
        this.$route && this.$route.name && this.$route.name.split('-')[1]
      return path === 'destination'
        ? 'Pick your destination'
        : path === 'crew'
        ? 'Meet your crew'
        : 'Space launch 101'
    },
  },
})
</script>

<style scoped>
.bg-image {
  background-size: cover;
  background-repeat: no-repeat;
}

.bg-destination {
  background-image: var(--bgOverlayGradient),
    url('~/assets/destination/background-destination-mobile.jpg');
}

.bg-crew {
  background-image: var(--bgOverlayGradient),
    url('~/assets/crew/background-crew-mobile.jpg');
}

.bg-technology {
  background-image: var(--bgOverlayGradient),
    url('~/assets/technology/background-technology-mobile.jpg');
}

@media screen and (min-width: 32em) {
  .bg-destination {
    background-image: var(--bgOverlayGradient),
      url('~/assets/destination/background-destination-tablet.jpg');
  }

  .bg-crew {
    background-image: var(--bgOverlayGradient),
      url('~/assets/crew/background-crew-tablet.jpg');
  }

  .bg-technology {
    background-image: var(--bgOverlayGradient),
      url('~/assets/technology/background-technology-tablet.jpg');
  }
}

@media screen and (min-width: 64em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/destination/background-destination-desktop.jpg');
  }

  .bg-crew {
    background-image: var(--bgOverlayGradient),
      url('~/assets/crew/background-crew-desktop.jpg');
  }

  .bg-technology {
    background-image: var(--bgOverlayGradient),
      url('~/assets/technology/background-technology-desktop.jpg');
  }
}
</style>