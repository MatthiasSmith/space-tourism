import { mount } from '@vue/test-utils'
import DestinationTabs from '@/components/DestinationTabs.vue'

describe('DestinationTabs', () => {
  const destinations = ['Moon', 'Mars']

  test('displays tabs', () => {
    const wrapper = mount(DestinationTabs, {
      propsData: { destinations },
      stubs: { NuxtLink: { template: '<a><slot></slot></a>' } },
    })
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(destinations.length)
  })
})
