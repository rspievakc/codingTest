package com.publicis.sapient.codingTest.util;

import java.io.IOException;
import java.math.BigDecimal;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class MoneyDeserializer extends JsonDeserializer<BigDecimal> {
	
	public MoneyDeserializer() {
	}
	
	@Override
	public BigDecimal deserialize(JsonParser p, DeserializationContext ctxt)
			throws IOException, JsonProcessingException {
		
		BigDecimal decimal = p.getDecimalValue().setScale(2, BigDecimal.ROUND_HALF_UP);;
		return decimal;
		
	}
}
