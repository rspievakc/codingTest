package com.publicis.sapient.codingTest.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="CREDIT_CARD")
public class CreditCard implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id 
	@GeneratedValue(generator = "credit_card_sequ", strategy = GenerationType. SEQUENCE) 
	@SequenceGenerator(name="credit_card_sequence", sequenceName = "credit_card_sequ", allocationSize=1)
	private Long id;
	
	@NotNull
	@Column(name="name")
	private String name;
	
    @NotNull
    @Size(max = 19)
	@Column(name="number")
	private String number;
	
	@Column(name="_limit")
	@NotNull
	private BigDecimal limit;
	
	@Column(name="balance")
	@NotNull
	private BigDecimal balance;
	
	public CreditCard() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public BigDecimal getLimit() {
		return limit;
	}

	public void setLimit(BigDecimal limit) {
		this.limit = limit;
	}

	public BigDecimal getBalance() {
		return balance;
	}

	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}
	
}
