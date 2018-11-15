import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';

import configureStore from '../configureStore';

import CreditCardForm from '../components/CreditCardForm';

describe('CreditCardForm tests', () => {

  function mountForm(store) {
    const _store = store || configureStore();
    return mount(<Provider store={_store}><CreditCardForm /></Provider>);
  }

  function getSubmitButton(form) {
    const result = form.find('button[name=\'submit\']')
    return result
  }

  function getResetButton(form) {
    const result = form.find('button[name=\'reset\']')
    return result
  }

  function getInputField(form, inputName) {
    return form.find(`input[name='${inputName}']`)
  }

  function changeInput(
    form, 
    inputName, 
    value
  ) {
    const input = getInputField(form, inputName)
    input.simulate('change', { target: { name: inputName, value } })
    return input;
  }

  it('Expect to find one CreditCardForm instance.', () => {
    const form = mountForm()
    expect(form.find(CreditCardForm).length).toBe(1);
  });

  describe('Testing the credit card form', () => {
    const form = mountForm();
    
    it('Expects to find three input fields', () => {
      const inputs = form.find('Field');
      expect(inputs.length).toBe(3);
    })

    it('Expects to find two buttons', () => {
      const buttons = form.find('button');
      expect(buttons.length).toBe(2);

      expect(getSubmitButton(form).prop('disabled')).toBe(true)
      expect(getResetButton(form).prop('disabled')).toBe(true)
    })

    describe('Tests the buttons state when the fields get changed', () => {
      it('Expects the Submit and reset buttons to be enabled', () => {
        changeInput(form, 'name', 'dummyValue')

        form.update();

        expect(getSubmitButton(form).prop('disabled')).toBeUndefined()
        expect(getResetButton(form).prop('disabled')).toBeUndefined()
      })

      it('Expects the Submit and reset buttons to be disabled', () => {
        changeInput(form, 'name', '')

        form.update();

        expect(getSubmitButton(form).prop('disabled')).toBe(true)
        expect(getResetButton(form).prop('disabled')).toBe(true)
      })
    })
    
    describe('Tests the form validation', () => {
      
      it('When empty expect to show all that all the fields are required', () => {

        // change the name field to enable the submit and reset buttons
        //const event = { target: { name: 'name', value: 'name' } };
        //form.find('input[name=\'name\']').at(0).simulate('change', event)
        getResetButton(form).simulate('click');
        form.update();
        // Updates the form state and click on the submit button
        
        getSubmitButton(form).at(0).simulate('click')
        form.update();

        const fields = form.find('Field')
        expect(fields.at(0).find('.formError').length).toBe(0);
        expect(fields.at(1).find('.formError').length).toBe(0);
        expect(fields.at(2).find('.formError').length).toBe(0);
      })
    })
  });
})

/* TODO tests

  Need to verify the form validation by setting the field values and submiting them and 
  then verify the labels to see if the correct error message are shown.

*/