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
    <FeaturedImage
      class="featured-img text-center mt-8"
      :img-name="destination.name"
      :alt="destination.name"
      :img-types="imgTypes"
      fallback-img-type="png"
      dir="destination"
    />
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
  computed: {
    imgTypes(): string[] {
      if (!this.destination) return []
      return Object.keys(this.destination.images).map((key) => key)
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

.featured-img {
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
