package com.publicis.sapient.codingTest.service;

import com.publicis.sapient.codingTest.entity.CreditCard;

/**
 * Defines a service interface for the custom credit card's service
 *
 * @author Rodrigo Spievak Cavalcanti
 */
public interface CreditCardService {

	/**
	 * Retrieve all the existent credit cards
	 * @return an iterator with all the existent credit cards 
	 */
	Iterable<CreditCard> getAll();
	
	/**
	 * Save a new credit card and return the persisted instance.
	 * @param creditCard the instance to be persisted
	 * @return the persisted instance of the credit card.
	 */
	CreditCard add(CreditCard creditCard);

}
