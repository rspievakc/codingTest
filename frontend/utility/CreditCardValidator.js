/**
 * Validates the credit card number using the Luhn
 * Algorithm.
 * 
 * @author Rodrigo Spievak Cavalcanti
 */ 
const validateCreditCard = function(value) {
  if (!value) 
    return false

  // accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) 
    return false
  
  var nCheck = 0, nDigit = 0, bEven = false;
  // removes all the non numeric digits from the input
  value = value.replace(/\D/g, "")

  // Only allows not empty values and with the maximum length of 19 numbers
  if (value.length == 0 || value.length > 19)
    return false

	for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n), 
    nDigit = parseInt(cDigit, 10)

    // If the double of the digit value is greater than 9
    // subtract 9 from it == Mod(10)
		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9
		}

		nCheck += nDigit
		bEven = !bEven
	}

	return (nCheck % 10) == 0
}

export default validateCreditCard