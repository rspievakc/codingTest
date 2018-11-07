package com.publicis.sapient.codingTest.service;

import com.publicis.sapient.codingTest.entity.CreditCard;

public interface CreditCardService {
	
	Iterable<CreditCard> getAll();
	
	CreditCard add(CreditCard creditCard);

}
