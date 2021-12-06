<template>
  <article
    class="
      bg-image
      min-h-screen
      text-center
      pt-28
      pb-14
      flex flex-col
      items-center
    "
  >
    <AdventureType
      number="03"
      text="Space Launch 101"
      class="px-6 md:self-start"
    />
    <FeaturedImage
      class="featured-img text-center mt-8"
      :img-name="imgName"
      :alt="tech.name"
      :styles="imageStyles"
      fallback-img-type="jpg"
      dir="technology"
      orientation="landscape"
    />
    <PageTabs class="mt-8 md:mt-14 px-6" :tabs="pages" display-type="number" />
    <section class="flex flex-col mt-7 md:mt-11 px-6">
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
        {{ tech.name }}
      </h1>
      <p class="text-mobile-base md:text-base text-lightPurple mt-4 max-w-md">
        {{ tech.description }}
      </p>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { TechnologyType } from '~/types/technology'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const data = await $content('technology').fetch()
    const pages: string[] = data.map((item: TechnologyType) =>
      item.id.toString()
    )
    const tech: TechnologyType = data.find(
      (item: TechnologyType) => params.slug === item.id.toString()
    )
    return { pages, tech }
  },
  data() {
    return {
      tech: {} as TechnologyType,
      imageStyles: {
        width: '100%',
      },
    }
  },
  computed: {
    imgName(): string {
      if (!this.tech) return ''
      return this.tech.name.replace(/\s/g, '-').toLowerCase()
    },
  },
})
</script>

<style scoped>
.bg-image {
  background-image: var(--bgOverlayGradient),
    url('~/assets/technology/background-technology-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.featured-img {
  min-height: 170px;
  width: 100%;
}

.title {
  font-size: 1.5rem;
  line-height: 1.75rem;
}

@media screen and (min-width: 48em) {
  .terminology-text {
    letter-spacing: 2.7px;
    line-height: 19.2px;
  }

  .title {
    font-size: 2.5rem;
    line-height: 45.84px;
  }

  .featured-img {
    min-height: 312px;
  }
}
</style>