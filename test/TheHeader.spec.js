import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader', () => {
  const stubs = {
    NuxtLink: { template: '<a><slot></slot></a>' },
    TheNavbar: { template: '<nav></nav>' },
  }

  test('renders correctly', () => {
    const wrapper = shallowMount(TheHeader, { stubs })
    const logo = wrapper.find('.logo')
    expect(logo.exists()).toBe(true)
  })
})
