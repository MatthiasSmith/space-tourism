import { mount } from '@vue/test-utils'
import PageTabs from '~/components/PageTabs.vue'

describe('PageTabs', () => {
  const tabs = [
    { id: '1', name: 'Moon' },
    { id: '2', name: 'Mars' },
  ]
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
    expect(listEls.at(0).classes()).toContain('li__text')
    expect(
      listEls.at(0).find(`[data-test-id="link-display-text-${1}"]`).text()
    ).toBe('Moon')
    expect(listEls.at(1).classes()).toContain('li__text')
    expect(
      listEls.at(1).find(`[data-test-id="link-display-text-${2}"]`).text()
    ).toBe('Mars')

    const link1 = listEls.at(0).find('a')
    expect(link1.classes()).toContain('tab__text')
    expect(link1.attributes('href')).toBe('1')
    const link2 = listEls.at(1).find('a')
    expect(link2.classes()).toContain('tab__text')
    expect(link2.attributes('href')).toBe('2')
  })

  test('displays bullet tabs', () => {
    const wrapper = mount(PageTabs, {
      propsData: { tabs, displayType: 'bullet' },
      stubs: { NuxtLink: NuxtLinkStub },
    })
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(tabs.length)
    expect(listEls.at(0).classes()).toContain('li__bullet')
    expect(
      listEls.at(0).find(`[data-test-id="link-display-text-${1}"]`).exists()
    ).toBe(false)
    expect(listEls.at(1).classes()).toContain('li__bullet')
    expect(
      listEls.at(1).find(`[data-test-id="link-display-text-${2}"]`).exists()
    ).toBe(false)

    const link1 = listEls.at(0).find('a')
    expect(link1.classes()).toContain('tab__bullet')
    expect(link1.attributes('href')).toBe('1')
    const link2 = listEls.at(1).find('a')
    expect(link2.classes()).toContain('tab__bullet')
    expect(link2.attributes('href')).toBe('2')
  })

  test('displays number tabs', () => {
    const wrapper = mount(PageTabs, {
      propsData: { tabs, displayType: 'number' },
      stubs: { NuxtLink: NuxtLinkStub },
    })
    const listEls = wrapper.findAll('li')
    expect(listEls).toHaveLength(tabs.length)
    expect(listEls.at(0).classes()).toContain('li__number')
    expect(
      listEls.at(0).find(`[data-test-id="link-display-text-${1}"]`).text()
    ).toBe('1')
    expect(listEls.at(1).classes()).toContain('li__number')
    expect(
      listEls.at(1).find(`[data-test-id="link-display-text-${2}"]`).text()
    ).toBe('2')

    const link1 = listEls.at(0).find('a')
    expect(link1.classes()).toContain('tab__number')
    expect(link1.attributes('href')).toBe('1')
    const link2 = listEls.at(1).find('a')
    expect(link2.classes()).toContain('tab__number')
    expect(link2.attributes('href')).toBe('2')
  })
})
