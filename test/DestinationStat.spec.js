import { mount } from '@vue/test-utils'
import DestinationStat from '@/components/DestinationStat.vue'

describe('DestinationStat', () => {
  test('displays correctly', () => {
    const wrapper = mount(DestinationStat, {
      propsData: { statTitle: 'distance', statText: '300km' },
    })
    const title = wrapper.find('[data-test-id="stat-title"]')
    expect(title.text()).toBe('distance')
    const text = wrapper.find('[data-test-id="stat-text"]')
    expect(text.text()).toBe('300km')
  })
})
