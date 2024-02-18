import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseDate from '@/components/BaseDate.vue'
import { diffForHumans, humanFriendlyDate } from '@/helper/dateHelper'

describe('BaseDate', () => {
  const timestamp = 1708203706
  it('has right content', () => {
    const wrapper = mount(BaseDate, { props: { timestamp: timestamp } })
    expect(wrapper.text()).toContain(diffForHumans(timestamp))
  })
  it('has right attribute', () => {
    const wrapper = mount(BaseDate, { props: { timestamp: timestamp } })
    expect(wrapper.attributes()).toEqual({
      title: humanFriendlyDate(timestamp)
    })
  })
})
