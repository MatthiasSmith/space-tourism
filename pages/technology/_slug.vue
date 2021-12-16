<template>
  <article
    class="
      bg-image
      min-h-screen
      pt-28
      lg:pt-56
      pb-14
      lg:pb-24
      xl:pb-0
      lg:flex lg:justify-between lg:items-center
    "
  >
    <div
      class="
        site-content-max-width
        flex flex-col
        items-center
        mx-auto
        lg:flex-row lg:self-start lg:pb-44 lg:mr-8
        xl:mr-auto
      "
    >
      <div
        class="
          flex flex-col
          items-center
          lg:items-start lg:self-start lg:w-full lg:justify-between
        "
      >
        <AdventureType
          number="03"
          text="Space Launch 101"
          class="px-6 md:self-start md:mt-8 lg:mt-0"
        />
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
          <PageTabs class="xl:mr-4" :tabs="pages" display-type="number" />
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
      class="featured-img hidden lg:block"
      :img-name="imgName"
      :alt="tech.name"
      fallback-img-type="jpg"
      dir="technology"
      orientation="portrait"
    />
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

@media screen and (min-width: 48em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/technology/background-technology-tablet.jpg');
  }

  .terminology-text {
    letter-spacing: 2.7px;
    line-height: 19.2px;
  }

  .featured-img {
    min-height: 312px;
  }
}

@media screen and (min-width: 64em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/technology/background-technology-desktop.jpg');
  }

  .featured-img {
    width: unset;
  }
}
</style>