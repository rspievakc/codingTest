package com.publicis.sapient.codingTest.repository;

import org.springframework.data.repository.CrudRepository;

import com.publicis.sapient.codingTest.entity.CreditCard;

/**
 * Defines a repository for the Spring Framework's REST
 *
 * @author Rodrigo Spievak Cavalcanti
 */
public interface CreditCardRepository extends CrudRepository<CreditCard, Long> {
}
