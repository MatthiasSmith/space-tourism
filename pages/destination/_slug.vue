<template>
  <article class="bg-image min-h-screen px-6 pt-28 pb-14 lg:pb-32">
    <div
      class="
        site-content-max-width
        mx-auto
        flex flex-col
        lg:flex-row
        items-center
        lg:justify-between lg:pt-24
      "
    >
      <div class="flex flex-col w-full items-center lg:self-start lg:flex-1">
        <AdventureType
          number="01"
          text="Pick your destination"
          class="md:self-start md:mt-8 lg:mt-0"
        />
        <FeaturedImage
          class="featured-img text-center mt-8 md:mt-14"
          :img-name="destination.name"
          :alt="destination.name"
          :img-types="imgTypes"
          fallback-img-type="png"
          dir="destination"
        />
      </div>
      <div class="flex flex-col items-center lg:max-w-md lg:items-start">
        <PageTabs class="mt-7 md:mt-12 lg:mt-0" :tabs="destinations" />
        <h1
          class="
            page-title
            uppercase
            font-bellefair
            text-heading-3
            md:text-mobile-heading-1
            xl:text-heading-2
            mt-5
            md:mt-8
          "
        >
          {{ destination.name }}
        </h1>
        <p
          class="
            text-lightPurple text-mobile-base
            md:text-base
            xl:text-lg xl:leading-8
            md:mt-2
            max-w-md
            md:max-w-xl
            text-center
            lg:text-left
          "
        >
          {{ destination.description }}
        </p>
        <div
          class="
            stats
            flex flex-col
            md:flex-row
            items-center
            md:justify-center
            lg:justify-start
            mt-8
            md:mt-12
            pt-8
            border-t border-borderGray
            w-full
            md:max-w-xl
          "
        >
          <DestinationStat
            stat-title="Avg. Distance"
            :stat-text="destination.distance"
          />
          <DestinationStat
            class="mt-8 md:mt-0 md:ml-20"
            stat-title="Est. Travel Time"
            :stat-text="destination.travel"
          />
        </div>
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
  background-image: var(--bgOverlayGradient),
    url('~/assets/destination/background-destination-mobile.jpg');
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

@media screen and (min-width: 48em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/destination/background-destination-tablet.jpg');
  }

  .featured-img {
    width: 18.75rem;
    height: 18.75rem;
  }
}

@media screen and (min-width: 64em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/destination/background-destination-desktop.jpg');
  }

  .featured-img {
    width: min(27.8125rem, 65%);
    height: min(27.8125rem, 65%);
  }
}
</style>
