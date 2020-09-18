import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../index'

test('button test', () => {
  const component = renderer.create(
    <Button>按钮</Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})