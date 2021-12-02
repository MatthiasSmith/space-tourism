<template>
  <article
    class="
      bg-image
      min-h-screen
      text-center
      px-6
      pt-28
      pb-14
      flex flex-col
      items-center
    "
  >
    <AdventureType number="01" text="Pick your destination" />
    <picture class="destination-img text-center mt-8">
      <source :srcset="webpImage" type="image/webp" />
      <source :srcset="pngImage" type="image/png" />
      <img :src="webpImage" :alt="destination.name" />
    </picture>
    <DestinationTabs class="mt-7" :destinations="destinations" />
    <h1 class="uppercase font-bellefair text-heading-3 mt-5">
      {{ destination.name }}
    </h1>
    <p class="text-lightPurple text-mobile-base">
      {{ destination.description }}
    </p>
    <div
      class="
        stats
        text-center
        flex flex-col
        items-center
        mt-8
        pt-8
        border-t border-borderGray
        w-full
      "
    >
      <div class="stat-container flex flex-col items-center">
        <span
          class="
            stat-title
            text-barlowCondensed text-sub-heading-2 text-lightPurple
            uppercase
          "
        >
          Avg. Distance
        </span>
        <span class="stat-text mt-3"> {{ destination.distance }} </span>
      </div>
      <div class="stat-container flex flex-col items-center mt-8">
        <span
          class="
            stat-title
            text-barlowCondensed text-sub-heading-2 text-lightPurple
            uppercase
          "
        >
          Est. Travel Time
        </span>
        <span class="stat-text mt-3"> {{ destination.travel }} </span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { DestinationType } from '~/types/destination'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const data = await $content('destinations').fetch()
    const destinations: string[] = data.map(
      (destination: DestinationType) => destination.name
    )
    const destination: DestinationType = data.find(
      (item: DestinationType) => item.id === params.slug
    )
    return { destinations, destination }
  },
  data() {
    return {
      destination: {} as DestinationType,
    }
  },
  // watch: {
  //   '$route.params': '$fetch',
  // },
  computed: {
    webpImage(): string {
      if (!this.destination) return ''
      return require(`~/assets/destination/image-${this.destination.id.toLowerCase()}.webp`)
    },
    pngImage(): string {
      if (!this.destination) return ''
      return require(`~/assets/destination/image-${this.destination.id.toLowerCase()}.png`)
    },
  },
  template: 'default',
})
</script>

<style scoped>
.bg-image {
  background-image: url('~/assets/destination/background-destination-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.destination-img {
  width: 10.625rem;
  min-height: 10.625rem;
}

.stat-text {
  font-family: 'Bellefair';
  font-size: 1.75rem;
  line-height: 2rem;
  text-transform: uppercase;
}
</style>
