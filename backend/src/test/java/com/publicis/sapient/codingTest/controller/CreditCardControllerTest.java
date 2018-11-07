package com.publicis.sapient.codingTest.controller;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.publicis.sapient.codingTest.entity.CreditCard;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
public class CreditCardControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	ObjectMapper objectMapper;
	
	@Before
    public void setUp() {
    }
	
	@Test
	public void addCreditCard_thenReturnCreditCard() 
			throws Exception{
		
		CreditCard creditCard = new CreditCard();
		creditCard.setName("Credit card holder 1");
		creditCard.setNumber("123456789012345");
		creditCard.setBalance(new BigDecimal(0.10));
		creditCard.setLimit(new BigDecimal(1000.00));
		
		String content = objectMapper.writeValueAsString(creditCard);
		
		mvc.perform(post("/creditCard/add")
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.content(content))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(jsonPath("$.name", equalTo(creditCard.getName())));
		
	}

}
