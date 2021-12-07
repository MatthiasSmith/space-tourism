import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TheHeader from '@/components/TheHeader.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TheHeader', () => {
  const stubs = {
    NuxtLink: { template: '<a><slot></slot></a>' },
    TheNavbar: { template: '<nav></nav>' },
  }
  let actions
  let store

  beforeEach(() => {
    actions = {
      toggleMobileNav: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
    })
  })

  test('renders correctly', () => {
    const wrapper = shallowMount(TheHeader, { stubs })
    const logo = wrapper.find('.logo')
    expect(logo.exists()).toBe(true)
    const hamburgerIcon = wrapper.find(
      '[data-test-id="mobile-nav-menu-toggle-btn"]'
    )
    expect(hamburgerIcon.exists()).toBe(true)
  })

  test('dispatches "toggleMobileNav" when logo is clicked', () => {
    const wrapper = shallowMount(TheHeader, { store, localVue, stubs })
    const logo = wrapper.find('.logo')
    logo.trigger('click')
    expect(actions.toggleMobileNav).toHaveBeenCalledTimes(1)
  })

  test('dispatches "toggleMobileNav" when toggle mobile nav menu button is clicked', () => {
    const wrapper = shallowMount(TheHeader, { store, localVue, stubs })
    const hamburgerIcon = wrapper.find(
      '[data-test-id="mobile-nav-menu-toggle-btn"]'
    )
    hamburgerIcon.trigger('click')
    expect(actions.toggleMobileNav).toHaveBeenCalledTimes(1)
  })
})
