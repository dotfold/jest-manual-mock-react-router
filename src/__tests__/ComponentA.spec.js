import React from 'react'
import { shallow } from 'enzyme'
import ComponentA from '../ComponentA'

jest.mock('../moduleA')
jest.mock('react-router')
require('react-router').__setReplaceSpy(jest.fn(() => console.log('mockedReplaceSpy')))

describe('<ComponentA />', () => {
  it('should render something using the mock', () => {
    const m = shallow(<ComponentA />)
    expect(m).toBeDefined()
  })
})
