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
    <AdventureType number="03" text="Space Launch 101" />
    <FeaturedImage
      class="featured-img text-center mt-8"
      :img-name="imgName"
      :alt="tech.name"
      fallback-img-type="jpg"
      dir="technology"
      orientation="landscape"
      height="170px"
    />
    <PageTabs class="mt-8" :tabs="pages" display-type="number" />
    <section class="flex flex-col mt-7">
      <span
        class="
          uppercase
          text-lightPurple text-sub-heading-2
          font-barlowCondensed
        "
      >
        The terminology...
      </span>
      <h1 class="title uppercase font-bellefair mt-2">
        {{ tech.name }}
      </h1>
      <p class="text-mobile-base text-lightPurple mt-4">
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
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.title {
  font-size: 1.5rem;
  line-height: 1.75rem;
}
</style>