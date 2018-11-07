package com.publicis.sapient.codingTest.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.publicis.sapient.codingTest.entity.CreditCard;
import com.publicis.sapient.codingTest.repository.CreditCardRepository;
import com.publicis.sapient.codingTest.service.CreditCardService;

@Service
public class CreditCardServiceImpl implements CreditCardService {
	
	@Autowired
    private CreditCardRepository creditCardRepository;

	@Override
	public Iterable<CreditCard> getAll() {
		return creditCardRepository.findAll();
	}

	@Override
	public CreditCard add(CreditCard creditCard) {
		return creditCardRepository.save(creditCard);
	}

}
