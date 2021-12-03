import { mount } from '@vue/test-utils'
import FeaturedImage from '@/components/FeaturedImage.vue'

describe('FeaturedImage', () => {
  const path = '~/assets/destination/image-'

  beforeEach(() => {
    jest.mock(
      `${path}moon.webp`,
      () => `~/assets/destination/image-moon.webp`,
      {
        virtual: true,
      }
    )
    jest.mock(`${path}moon.png`, () => `~/assets/destination/image-moon.png`, {
      virtual: true,
    })
  })

  test('renders correctly', () => {
    const wrapper = mount(FeaturedImage, {
      propsData: {
        imgName: 'moon',
        imgTypes: ['webp', 'png'],
        dir: 'destination',
        fallbackImgType: 'png',
        alt: 'Moon',
      },
    })
    const sourceEls = wrapper.findAll('source')
    expect(sourceEls).toHaveLength(2)
    expect(sourceEls.at(0).attributes('srcset')).toBe(`${path}moon.webp`)
    expect(sourceEls.at(0).attributes('type')).toBe(`image/webp`)
    expect(sourceEls.at(1).attributes('srcset')).toBe(`${path}moon.png`)
    expect(sourceEls.at(1).attributes('type')).toBe(`image/png`)
    const imgEl = wrapper.find('img')
    expect(imgEl.attributes('src')).toBe(`${path}moon.png`)
    expect(imgEl.attributes('alt')).toBe('Moon')
  })
})
