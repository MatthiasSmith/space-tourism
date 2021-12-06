<template>
  <article
    class="
      bg-image
      min-h-screen
      text-center
      px-6
      pt-28
      pb-14
      md:pb-0
      flex flex-col
      items-center
    "
  >
    <AdventureType
      number="02"
      text="Meet your crew"
      class="md:self-start md:mt-8"
    />
    <FeaturedImage
      class="featured-img text-center mt-8 md:mt-10 md:order-3"
      :img-name="imgName"
      :alt="crewMember.name"
      :img-types="imgTypes"
      :styles="imageStyles"
      fallback-img-type="png"
      dir="crew"
    />
    <hr class="w-full border-t-1 border-borderGray md:hidden" />
    <PageTabs
      class="mt-8 md:mt-10 md:order-2"
      :tabs="pages"
      display-type="bullet"
    />
    <section class="flex flex-col mt-8 md:order-1 md:mt-14 max-w-md">
      <span
        class="
          uppercase
          text-mobile-sub-heading-1
          md:text-tablet-sub-heading-1
          tracking-normal
          md:tracking-normal
          font-bellefair
          opacity-50
        "
      >
        {{ crewMember.role }}
      </span>
      <h1 class="crew-member-name uppercase font-bellefair mt-2">
        {{ crewMember.name }}
      </h1>
      <p class="text-mobile-base md:text-base text-lightPurple mt-4">
        {{ crewMember.bio }}
      </p>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { CrewType } from '~/types/crew'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const data = await $content('crew').fetch()
    const pages: string[] = data.map((item: CrewType) => item.id.toString())
    const crewMember: CrewType = data.find(
      (item: CrewType) => params.slug === item.id.toString()
    )
    return { pages, crewMember }
  },
  data() {
    return {
      crewMember: {} as CrewType,
    }
  },
  computed: {
    imgTypes(): string[] {
      if (!this.crewMember) return []
      return Object.keys(this.crewMember.images).map((key) => key)
    },
    imgName(): string {
      if (!this.crewMember) return ''
      return this.crewMember.name.replace(/\s/g, '-').toLowerCase()
    },
    imageStyles(): any {
      return { height: this.getImgHeight() }
    },
  },
  methods: {
    getImgHeight(): string {
      if (typeof window !== 'undefined') {
        return window.screen.width >= 768 ? '532px' : '222px'
      } else {
        return '222px'
      }
    },
  },
})
</script>

<style scoped>
.bg-image {
  background-image: var(--bgOverlayGradient),
    url('~/assets/crew/background-crew-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.crew-member-name {
  font-size: 1.5rem;
  line-height: 1.75rem;
}

@media screen and (min-width: 48em) {
  .bg-image {
    background-image: var(--bgOverlayGradient),
      url('~/assets/crew/background-crew-tablet.jpg');
  }

  .crew-member-name {
    font-size: 2.5rem;
    line-height: 45.84px;
  }
}
</style>