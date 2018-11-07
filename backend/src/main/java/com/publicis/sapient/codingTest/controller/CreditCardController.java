package com.publicis.sapient.codingTest.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.publicis.sapient.codingTest.entity.CreditCard;
import com.publicis.sapient.codingTest.service.CreditCardService;

@RestController
@RequestMapping("/api/creditCard")
public class CreditCardController {

	@Autowired
	private CreditCardService creditCardService;
	
	public CreditCardController() {
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public CreditCard add(@Valid @RequestBody CreditCard creditCard) {
		return creditCardService.add(creditCard);
	}
	
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public Iterable<CreditCard> getAll() {
		return creditCardService.getAll();
	}
	
}
