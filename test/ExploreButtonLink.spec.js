import { mount } from '@vue/test-utils'
import ExploreButtonLink from '@/components/ExploreButtonLink.vue'

describe('ExploreButtonLink', () => {
  test('says "explore"', () => {
    const wrapper = mount(ExploreButtonLink)
    expect(wrapper.text()).toBe('explore')
  })
})
