import React from 'react';
import renderer  from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import App from '../App.js';
import CreditCardForm from '../components/CreditCardForm.js';
import CreditCardList from '../components/CreditCardList.js';

describe("App", () => {

  test("always renders a div", () => {
    expect(mount(<App/>).find("div").length).toBeGreaterThan(0);
  });

  test("always renders a `CreditCardForm`", () => {
    expect(mount(<App />).find(CreditCardForm).length).toBe(1);
  });
  
  test("always renders a `CreditCardList`", () => {
    expect(mount(<App />).find(CreditCardList).length).toBe(1);
  });

});




/* TODO tests

  Need to verify if the two components, CreditCardForm and CreditCardList are present on the rendering.

*/