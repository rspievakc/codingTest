package com.publicis.sapient.codingTest.util;

import java.util.Random;

/**
 * A credit card number validator and generator.
 *
 * @author Rodrigo Spievak Cavalcanti
 */
public class CreditCardNumberValidator {
	
	private static Random random = new Random(System.currentTimeMillis());
	
	/**
     * Checks if the card is valid
     * 
     * @param number
     *           {@link String} card number
     * @return result {@link boolean} true of false
     */
	public static boolean check(String number) {
		
		if (number == null)
            return false;
        char checkDigit = number.charAt(number.length() - 1);
        String digit = calculateCheckDigit(number.substring(0, number.length() - 1));
        return checkDigit == digit.charAt(0);
		
	}
	
	/**
     * Calculates the last digits for the card number received as parameter
     * 
     * @param number
     *           {@link String} number
     * @return {@link String} the check digit
     */
	public static String calculateCheckDigit(String number) {
        
		if (number == null)
            return null;
        
        String digit;
        /* convert to array of integers for simplicity */
        int[] digits = new int[number.length()];
        for (int i = 0; i < number.length(); i++) {
            digits[i] = Character.getNumericValue(number.charAt(i));
        }
        
        /* Double every other starting from right - steps 2 by 2 */
        for (int i = digits.length - 1; i >= 0; i -= 2)	{
            digits[i] += digits[i]; // Doubles the value of the digit
            
            /* Taking the sum of digits grater than 10 - simple trick by subtract 9 */
            if (digits[i] >= 10) {
                digits[i] = digits[i] - 9;
            }
        }
        
        // Compute the sum of all the digits
        int sum = 0;
        for (int i = 0; i < digits.length; i++) {
            sum += digits[i];
        }
        /* multiply by 9 step */
        sum = sum * 9;
        
        /* convert to string to be easier to take the last digit */
        digit = Integer.toString(sum);
        return digit.substring(digit.length() - 1);
    }
	
	/**
     * Generates a random valid credit card number. 
     *
     * @param bin
     *            The bank identification number, a set digits at the start of the credit card
     *            number, used to identify the bank that is issuing the credit card.
     * @param length
     *            The total length (i.e. including the BIN) of the credit card number.
     * @return
     *            A randomly generated, valid, credit card number.
     */
	public static String generate(String bin, int length) {

        // The number of random digits that we need to generate is equal to the
        // total length of the card number minus the start digits given by the
        // user, minus the check digit at the end.
        int randomNumberLength = length - (bin.length() + 1);

        StringBuilder builder = new StringBuilder(bin);
        for (int i = 0; i < randomNumberLength; i++) {
            int digit = random.nextInt(10);
            builder.append(digit);
        }

        // Do the Luhn algorithm to generate the check digit.
        String checkDigit = calculateCheckDigit(builder.toString());
        builder.append(checkDigit);

        return builder.toString();
    }

	

}
