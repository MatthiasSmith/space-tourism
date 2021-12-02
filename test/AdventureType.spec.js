import { mount } from '@vue/test-utils'
import AdventureType from '@/components/AdventureType.vue'

describe('AdventureType', () => {
  test('displays correctly', () => {
    const wrapper = mount(AdventureType, {
      propsData: { number: '01', text: 'Pick a destination' },
    })
    const numberText = wrapper.find('[data-test-id="number-text"]')
    expect(numberText.text()).toBe('01')
    const text = wrapper.find('[data-test-id="text"]')
    expect(text.text()).toBe('Pick a destination')
  })
})
