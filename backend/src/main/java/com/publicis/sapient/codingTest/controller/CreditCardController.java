package com.publicis.sapient.codingTest.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.publicis.sapient.codingTest.entity.CreditCard;
import com.publicis.sapient.codingTest.service.CreditCardService;

/**
 * Creates a custom controller for handling the custom
 * API paths, as they are required on the specification.
 *
 * @author Rodrigo Spievak Cavalcanti
 */
@RestController
@RequestMapping("/api/creditCard")
public class CreditCardController {

	@Autowired
	private CreditCardService creditCardService;
	
	public CreditCardController() {
	}
	
	/**
	 * Add a new credit card on the database
	 * This end point only accepts the Post HTTP method.
	 * The input parameter will be validated.
	 * 
	 * @param creditCard the new creditCard to be added to the collection.
	 * @return the persisted instance for the credit card
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public CreditCard add(@Valid @RequestBody CreditCard creditCard) {
		return creditCardService.add(creditCard);
	}
	
	/**
	 * List all the credit cards registered.
	 * This end point only accepts the Get HTTP method.
	 * @return an iterator with all the existent credit cards.
	 */
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public Iterable<CreditCard> getAll() {
		return creditCardService.getAll();
	}
	
}
