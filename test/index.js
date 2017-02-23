import React from 'react'
import { test } from 'ava'
import { shallow } from 'enzyme'

import ReactAnimable from '../'

test('ReactAnimable renders without crashing', t => {
  t.notThrows(() => shallow(<ReactAnimable />))
})

test('ReactAnimable accepts className', t => {
  const c = shallow(<ReactAnimable className='react-animable' />)
  t.true(c.hasClass('react-animable'))
})

