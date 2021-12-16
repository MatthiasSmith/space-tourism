import { mount } from '@vue/test-utils'
import TheNavbar from '@/components/TheNavbar.vue'

describe('TheNavbar', () => {
  const stubs = {
    NuxtLink: {
      template: '<a :href="to"><slot></slot></a>',
      props: { to: { type: String, default: '/' } },
    },
  }
  const $route = {
    path: 'test/path',
  }

  test('renders correctly', () => {
    const wrapper = mount(TheNavbar, {
      stubs,
      mocks: {
        $route,
      },
    })
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(4)
    expect(listEls.at(0).find('[data-test-id="link-text"]').text()).toBe('Home')
    expect(listEls.at(1).find('[data-test-id="link-text"]').text()).toBe(
      'Destination'
    )
    expect(listEls.at(2).find('[data-test-id="link-text"]').text()).toBe('Crew')
    expect(listEls.at(3).find('[data-test-id="link-text"]').text()).toBe(
      'Technology'
    )
  })
})
