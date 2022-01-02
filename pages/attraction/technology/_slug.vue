<template>
  <div
    class="
      lg:flex lg:justify-between lg:items-center
      pb-14
      lg:pb-16
      site-content-max-width
      mx-auto
    "
  >
    <div
      class="
        site-content-max-width
        flex flex-col
        items-center
        lg:flex-row lg:self-start lg:pb-44
      "
    >
      <div class="flex flex-col items-center lg:justify-between">
        <FeaturedImage
          class="featured-img text-center mt-8 lg:hidden"
          :img-name="imgName"
          :alt="tech.name"
          :styles="imageStyles"
          fallback-img-type="jpg"
          dir="technology"
          orientation="landscape"
        />
        <div class="mt-8 md:mt-14 xl:mt-32 lg:flex lg:flex-row">
          <PageTabs
            class="xl:mr-4 lg:pl-0"
            :tabs="pages"
            display-type="number"
          />
          <TechnologyInfo
            class="mt-7 md:mt-11 lg:mt-0 hidden lg:block"
            :name="tech.name"
            :description="tech.description"
          />
        </div>
      </div>
      <TechnologyInfo
        class="mt-7 items-center text-center md:mt-11 lg:hidden"
        :name="tech.name"
        :description="tech.description"
      />
    </div>
    <FeaturedImage
      class="featured-img hidden lg:block absolute right-0"
      :img-name="imgName"
      :alt="tech.name"
      fallback-img-type="jpg"
      dir="technology"
      orientation="portrait"
    />
  </div>
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
.featured-img {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

@media screen and (min-width: 48em) {
  .terminology-text {
    letter-spacing: 2.7px;
    line-height: 19.2px;
  }
}

@media screen and (min-width: 64em) {
  .featured-img {
    width: 38vw;
    margin-left: 0rem;
    margin-right: 0rem;
  }
}

@media screen and (min-width: 80em) {
  .featured-img {
    width: unset;
  }
}
</style>