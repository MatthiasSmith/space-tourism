<template>
  <div
    class="
      site-content-max-width
      mx-auto
      flex flex-col
      lg:flex-row
      items-center
      lg:justify-between
    "
  >
    <div
      class="
        flex flex-col
        items-center
        lg:items-start lg:self-start lg:pb-16
        w-full
        lg:w-auto
        info-container
      "
    >
      <CrewInfo
        class="
          mt-8
          md:order-1 md:mt-14
          lg:mt-24
          xl:mt-36
          max-w-md
          lg:max-w-none
          hidden
          md:block
        "
        :role="crewMember.role"
        :name="crewMember.name"
        :bio="crewMember.bio"
      />
      <FeaturedImage
        class="text-center mt-8 md:hidden"
        :img-name="imgName"
        :alt="crewMember.name"
        :img-types="imgTypes"
        :styles="imageStyles"
        fallback-img-type="png"
        dir="crew"
      />
      <hr class="w-full border-t-1 border-borderGray md:hidden" />
      <PageTabs
        class="mt-8 md:mt-10 md:order-2 lg:mt-16"
        :tabs="pages"
        display-type="bullet"
      />
    </div>
    <CrewInfo
      class="mt-8 md:order-1 md:mt-14 max-w-md md:hidden"
      :role="crewMember.role"
      :name="crewMember.name"
      :bio="crewMember.bio"
    />
    <FeaturedImage
      class="hidden md:block md:mt-10 lg:mt-0 lg:ml-8 lg:self-end"
      :img-name="imgName"
      :alt="crewMember.name"
      :img-types="imgTypes"
      :styles="imageStyles"
      fallback-img-type="png"
      dir="crew"
    />
  </div>
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
        return window.screen.width >= 1024
          ? '100%'
          : window.screen.width >= 768
          ? '532px'
          : '222px'
      } else {
        return '222px'
      }
    },
  },
})
</script>

<style scoped>
@media screen and (min-width: 64em) {
  .info-container {
    flex: 1 0 50%;
  }
}
</style>