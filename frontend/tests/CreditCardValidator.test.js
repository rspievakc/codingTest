import validateCreditCard from '../utility/CreditCardValidator'

test('check if a valid credit card number passes.', () => {
    expect(validateCreditCard("9001284950110023")).toBe(true);
});

test('check if an invalid credit card number fails.', () => {
  expect(validateCreditCard("1111111111111111")).toBe(false);
});

test('check if an empty credit card number fails.', () => {
  expect(validateCreditCard("")).toBe(false);
});

test('check if a null credit card number fails.', () => {
  expect(validateCreditCard(null)).toBe(false);
});