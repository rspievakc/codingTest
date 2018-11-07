package com.publicis.sapient.codingTest.validation;

/**
 * Defines a custom error wrapping bean to be
 * used at the front end.
 *
 * @author Rodrigo Spievak Cavalcanti
 */
import java.util.Date;

/*
 * 	Simple error response bean
 */
public class ErrorDetails {
	
	private Date timestamp;
	private String message;
	private String details;
	
	public ErrorDetails(Date timestamp, String message, String details) {
		this.timestamp = timestamp;
		this.message = message;
		this.details = details;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

}
