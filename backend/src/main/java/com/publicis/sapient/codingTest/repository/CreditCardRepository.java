package com.publicis.sapient.codingTest.repository;

import org.springframework.data.repository.CrudRepository;

import com.publicis.sapient.codingTest.entity.CreditCard;

/**
 * Defines a spring data repository for the credit card model
 *
 * @author Rodrigo Spievak Cavalcanti
 */
public interface CreditCardRepository extends CrudRepository<CreditCard, Long> {
}
