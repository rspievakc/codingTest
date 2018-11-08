import React from 'react'
import renderer  from 'react-test-renderer'
import App from '../App.js'

test('verify if the App component renderers correctly. all the UI structure will be validated.', () => {
  const component = renderer.create(
    <App />
  )
  expect(component).toBeDefined()
});

/* TODO tests

  Need to verify if the two components, CreditCardForm and CreditCardList are present on the rendering.

*/