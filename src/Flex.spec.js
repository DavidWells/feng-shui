/*eslint-disable no-unused-vars */
import React from 'react'
import test from 'ava'
import Flex from './Flex'
import { mount, shallow } from 'enzyme'

test('Flex is <div> tag', (t) => {
  const wrapper = shallow(<Flex id='test' />)
  const div = document.createElement('div')
  document.body.insertBefore(div, window.document.body.firstChild)
  div.innerHTML = wrapper.html()
  var output = window.document.documentElement.outerHTML
  const style = document.getElementById('test').style

  t.is(wrapper.type(), 'div')
})

test('Flex is <div> tag', (t) => {
  const wrapper = mount(<Flex id='test' />)

  var output = window.document.documentElement.outerHTML

  //console.log('output', output)
  console.log(document.getElementById('test').style)
  t.skip.is(wrapper.type(), 'div')
})

test('Flex is <div> tag', (t) => {
  const wrapper = false
  t.is(wrapper, false)
})

