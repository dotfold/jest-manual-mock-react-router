import React from 'react'
import { shallow } from 'enzyme'
import ComponentB from '../ComponentB'

// this spec doesn't mock moduleA, so the actual is used

// this spec doesn't mock 'react-router' so the actual _should_ be used...
// but the console will print that the mock is being used

describe('<ComponentB />', () => {
  it('should render something', () => {
    const m = shallow(<ComponentB />)
    expect(m).toBeDefined()
  })
})
