<template>
  <picture>
    <source
      v-for="image in imageSrcs"
      :key="image.src"
      :srcset="image.src"
      :type="`image/${image.imgType}`"
    />
    <img :src="fallbackImg" :alt="alt" :style="{ height }" />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImageSrcType } from '~/types/image-src'

export default Vue.extend({
  props: {
    imgName: {
      type: String,
      default: '',
      required: true,
    },
    imgTypes: {
      type: Array, // string[]
      default: () => [],
    },
    dir: {
      type: String,
      default: '',
      required: true,
    },
    fallbackImgType: {
      type: String,
      default: '',
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    orientation: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageSrcs(): ImageSrcType[] {
      if (!this.imgTypes) return []

      return this.imgTypes.map((type: any) => {
        return {
          src: require(`~/assets/${
            this.dir
          }/image-${this.imgName.toLowerCase()}${
            this.orientation ? '-' + this.orientation : ''
          }.${type}`),
          imgType: type,
        }
      })
    },
    fallbackImg(): string {
      return require(`~/assets/${this.dir}/image-${this.imgName.toLowerCase()}${
        this.orientation ? '-' + this.orientation : ''
      }.${this.fallbackImgType}`)
    },
  },
})
</script>
