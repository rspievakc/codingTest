package com.publicis.sapient.codingTest.service;

import com.publicis.sapient.codingTest.entity.CreditCard;

/**
 * Defines a service interface for the custom credit card's service
 *
 * @author Rodrigo Spievak Cavalcanti
 */
public interface CreditCardService {

	/**
	 * Return all the persisted credit cards
	 * @return Iterable<CreditCard>
	 */
	Iterable<CreditCard> getAll();
	
	/**
	 * Return all the persisted credit cards
	 * @return CreditCard
	 */
	CreditCard add(CreditCard creditCard);

}
