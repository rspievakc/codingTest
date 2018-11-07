package com.publicis.sapient.codingTest.controller;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;

import org.hamcrest.BaseMatcher;
import org.hamcrest.Description;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.publicis.sapient.codingTest.entity.CreditCard;
import com.publicis.sapient.codingTest.util.CreditCardNumberValidator;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CreditCardControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	ObjectMapper objectMapper;
	
	private static CreditCard testData[];
	
	@BeforeClass
    public static void setUp() {
		testData = new CreditCard[4];
		
		CreditCard creditCard = new CreditCard();
		creditCard.setName("Bruce Wayne");
		creditCard.setNumber(CreditCardNumberValidator.generate("3333", 19));
		creditCard.setBalance(new BigDecimal(0.10));
		creditCard.setLimit(new BigDecimal(1000.00));
		testData[0] = creditCard;
		
		creditCard = new CreditCard();
		creditCard.setName("Jonh Doe");
		creditCard.setNumber(CreditCardNumberValidator.generate("1234", 16));
		creditCard.setBalance(new BigDecimal(0.10));
		creditCard.setLimit(new BigDecimal(1000.00));
		testData[1] = creditCard;
		
		creditCard = new CreditCard();
		creditCard.setName("John Wick");
		creditCard.setNumber(CreditCardNumberValidator.generate("5678", 16));
		creditCard.setBalance(new BigDecimal(0.10));
		creditCard.setLimit(new BigDecimal(1000.00));
		testData[2] = creditCard;
		
		creditCard = new CreditCard();
		creditCard.setName("Alice Cooper");
		creditCard.setNumber(CreditCardNumberValidator.generate("9001", 16));
		creditCard.setBalance(new BigDecimal(0.10));
		creditCard.setLimit(new BigDecimal(1000.00));
		testData[3] = creditCard;
		
    }
	
	private void addCreditCard(int index) throws Exception {
		
		mvc.perform(post("/api/creditCard/add")
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(testData[0])))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(jsonPath("name", equalTo(testData[0].getName())))
				.andExpect(jsonPath("number", equalTo(testData[0].getNumber())))
				.andExpect(jsonPath("balance").value(new BigDecimalMatcher(testData[0].getBalance())))
				.andExpect(jsonPath("limit").value(new BigDecimalMatcher(testData[0].getLimit())))
				.andReturn();
	}
	
	@Test
	public void testA_addCreditCard_thenReturnCreditCard() 
			throws Exception{
		
		addCreditCard(0);
		
	}
	
	@Test
	public void testB_getAllCreditCardsAndExpectAnArrayWithOneEntry() 
			throws Exception{
		
		mvc.perform(get("/api/creditCard/getAll")
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andDo(print())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(jsonPath("$.length()", equalTo(1)))
				.andExpect(jsonPath("$[0].name", equalTo(testData[0].getName())))
				.andExpect(jsonPath("$[0].number", equalTo(testData[0].getNumber())))
				.andExpect(jsonPath("$[0].balance").value(new BigDecimalMatcher(testData[0].getBalance())))
				.andExpect(jsonPath("$[0].limit").value(new BigDecimalMatcher(testData[0].getLimit())))
				.andReturn();
	}
	
	@Test
	public void testC_addThreeMoreCreditCardsAndExpectAnArrayWithFourEntries() 
			throws Exception{
		
		addCreditCard(1);
		addCreditCard(2);
		addCreditCard(3);
		
		mvc.perform(get("/api/creditCard/getAll")
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andDo(print())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(jsonPath("$.length()", equalTo(4)));
		
	}
	
	private class BigDecimalMatcher extends BaseMatcher<BigDecimal> {
		
		private final BigDecimal expectedValue;
		
		public BigDecimalMatcher(BigDecimal expectedValue) {
			this.expectedValue = expectedValue;
		}
		
		@Override
		public boolean matches(Object item) {
			if (item instanceof Integer && expectedValue.compareTo(new BigDecimal((Integer) item)) == 0) {
				return true;
			}
			if (item instanceof Long && expectedValue.compareTo(new BigDecimal((Long) item)) == 0) {
				return true;
			}
			if (item instanceof Float && expectedValue.compareTo(new BigDecimal((Float) item)) == 0) {
				return true;
			}
			if (item instanceof Double && expectedValue.compareTo(new BigDecimal((Double) item).setScale(2, BigDecimal.ROUND_HALF_UP)) == 0) {
				return true;
			}
			if (item instanceof BigDecimal && expectedValue.compareTo(((BigDecimal) item)) == 0) {
				return true;
			}
			return false;
		}

		@Override
		public void describeTo(Description description) {
			// Stub
		}
		
	}
	
	

}
