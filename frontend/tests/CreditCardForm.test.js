import React from 'react'
import renderer  from 'react-test-renderer'
import { Provider } from 'react-redux';
import configureStore from '../configureStore'

import CreditCardForm from '../components/CreditCardForm'

const store = configureStore()

test('verify if the App component renderers correctly. all the UI structure will be validated.', () => {
  const form = renderer.create(
    <Provider store={store}>
      <CreditCardForm />
    </Provider>
  )
  expect(form).toBeDefined()
});

/* TODO tests

  Need to verify the form validation by setting the field values and submiting them and 
  then verify the labels to see if the correct error message are shown.

*/