import { mount } from '@vue/test-utils'
import ExploreButtonLink from '@/components/ExploreButtonLink.vue'

describe('ExploreButtonLink', () => {
  test('says "explore"', () => {
    const wrapper = mount(ExploreButtonLink, {
      stubs: { NuxtLink: { template: '<a><slot></slot></a>' } },
    })
    expect(wrapper.text()).toBe('explore')
  })
})
