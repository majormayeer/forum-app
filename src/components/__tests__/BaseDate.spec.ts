import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../BaseDate.vue'
import { diffForHumans } from '@/helper/dateHelper'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { timestamp: 1708203706 } })
    expect(wrapper.text()).toContain(diffForHumans(1708203706))
  })
})
