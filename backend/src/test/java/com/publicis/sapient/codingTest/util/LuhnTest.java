package com.publicis.sapient.codingTest.util;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.publicis.sapient.codingTest.util.CreditCardNumberValidator;

public class LuhnTest {
	
	@Before
    public void setUp() {
    }
	
	@Test
	public void checkAnInvalidCreditCardNumber() 
			throws Exception{
		
		String validCreditCardNumber16 = CreditCardNumberValidator.generate("1111", 16);
		
		Assert.assertFalse("This is an invalid credit card number", CreditCardNumberValidator.check("1111111111111111"));
		
		Assert.assertTrue("This is a valid credit card number", CreditCardNumberValidator.check(validCreditCardNumber16));
		
	}
	
	@Test
	public void checkAValiddCreditCardNumber() 
			throws Exception{
		
		String validCreditCardNumber16 = CreditCardNumberValidator.generate("1111", 16);
		
		Assert.assertTrue("This is a valid credit card number", CreditCardNumberValidator.check(validCreditCardNumber16));
		
	}

}
