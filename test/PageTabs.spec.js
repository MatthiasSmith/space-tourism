import { mount } from '@vue/test-utils'
import PageTabs from '~/components/PageTabs.vue'

describe('PageTabs', () => {
  const tabs = ['Moon', 'Mars']
  const NuxtLinkStub = {
    template: '<a :href="to"><slot></slot></a>',
    props: { to: { type: String, default: '/' } },
  }

  test('displays text tabs', () => {
    const wrapper = mount(PageTabs, {
      propsData: { tabs },
      stubs: {
        NuxtLink: NuxtLinkStub,
      },
    })
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(tabs.length)
    expect(listEls.at(0).classes()).toContain('li-text')
    expect(listEls.at(0).text()).toBe('Moon')
    expect(listEls.at(1).classes()).toContain('li-text')
    expect(listEls.at(1).text()).toBe('Mars')

    const link1 = listEls.at(0).find('a')
    expect(link1.classes()).toContain('link-text')
    expect(link1.attributes('href')).toBe('moon')
    const link2 = listEls.at(1).find('a')
    expect(link2.classes()).toContain('link-text')
    expect(link2.attributes('href')).toBe('mars')
  })

  test('displays bullet tabs', () => {
    const wrapper = mount(PageTabs, {
      propsData: { tabs, displayType: 'bullet' },
      stubs: { NuxtLink: NuxtLinkStub },
    })
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(tabs.length)
    expect(listEls.at(0).classes()).toContain('li-bullet')
    expect(listEls.at(0).text()).toBe('')
    expect(listEls.at(1).classes()).toContain('li-bullet')
    expect(listEls.at(1).text()).toBe('')

    const link1 = listEls.at(0).find('a')
    expect(link1.classes()).toContain('link-bullet')
    expect(link1.attributes('href')).toBe('moon')
    const link2 = listEls.at(1).find('a')
    expect(link2.classes()).toContain('link-bullet')
    expect(link2.attributes('href')).toBe('mars')
  })

  test('displays number tabs', () => {
    const wrapper = mount(PageTabs, {
      propsData: { tabs, displayType: 'number' },
      stubs: { NuxtLink: NuxtLinkStub },
    })
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(tabs.length)
    expect(listEls.at(0).classes()).toContain('li-number')
    expect(listEls.at(0).text()).toBe('1')
    expect(listEls.at(1).classes()).toContain('li-number')
    expect(listEls.at(1).text()).toBe('2')

    const link1 = listEls.at(0).find('a')
    expect(link1.classes()).toContain('link-number')
    expect(link1.attributes('href')).toBe('moon')
    const link2 = listEls.at(1).find('a')
    expect(link2.classes()).toContain('link-number')
    expect(link2.attributes('href')).toBe('mars')
  })
})
