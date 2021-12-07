import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MobileNav from '@/components/MobileNav.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MobileNav', () => {
  const stubs = {
    NuxtLink: { template: '<a><slot></slot></a>' },
  }
  const mocks = {
    $route: {
      path: 'test/path',
    },
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
    const wrapper = mount(MobileNav, { stubs, mocks })
    const closeBtn = wrapper.find('button')
    expect(closeBtn.exists()).toBe(true)
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(4)
  })

  test('dispatches "toggleMobileNav" when close button is clicked', () => {
    const wrapper = mount(MobileNav, { store, localVue, stubs, mocks })
    const closeBtn = wrapper.find('button')
    closeBtn.trigger('click')
    expect(actions.toggleMobileNav).toHaveBeenCalledTimes(1)
  })

  test('dispatches "toggleMobileNav" when list item is clicked', () => {
    const wrapper = mount(MobileNav, { store, localVue, stubs, mocks })
    const li = wrapper.find('li')
    li.trigger('click')
    expect(actions.toggleMobileNav).toHaveBeenCalledTimes(1)
  })
})
