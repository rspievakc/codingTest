import React from 'react'
import renderer  from 'react-test-renderer'
import App from '../App.js'

test('verify if the App component renderers correctly', () => {
  console.log("into test")
  const component = renderer.create(
    <App />
  )
  console.log(component)
  expect(component).toBeDefined()
});