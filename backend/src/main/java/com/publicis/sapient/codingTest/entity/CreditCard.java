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

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.publicis.sapient.codingTest.util.MoneyDeserializer;
import com.publicis.sapient.codingTest.util.MoneySerializer;

/**
 * Defines a credit card entity
 *
 * @author Rodrigo Spievak Cavalcanti
 */
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
	@JsonSerialize(using = MoneySerializer.class)
	@JsonDeserialize(using = MoneyDeserializer.class)
	private BigDecimal limit;
	
	@Column(name="balance")
	@NotNull
	@JsonSerialize(using = MoneySerializer.class)
	@JsonDeserialize(using = MoneyDeserializer.class)
	private BigDecimal balance;
	
	public CreditCard() {
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
		if (limit != null) {
			this.limit = limit.setScale(2, BigDecimal.ROUND_HALF_UP);
		}
	}

	public BigDecimal getBalance() {
		return balance;
	}

	public void setBalance(BigDecimal balance) {
		if (balance != null) {
			this.balance = balance.setScale(2, BigDecimal.ROUND_HALF_UP);
		}
	}
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CreditCard cc = (CreditCard) o;

        if (!id.equals(cc.id)) return false;
        if (name != null ? !name.equals(cc.name) : cc.name != null) return false;
        if (limit != null ? !limit.equals(cc.limit) : cc.limit != null) return false;
        return balance != null ? balance.equals(cc.balance) : cc.balance == null;
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (limit != null ? limit.hashCode() : 0);
        result = 31 * result + (balance != null ? balance.hashCode() : 0);
        return result;
    }

    public CreditCard clone() {
    	CreditCard cc = new CreditCard();
    	cc.setId(this.id);
    	cc.setName(this.name);
    	cc.setLimit(this.limit);
    	cc.setBalance(this.balance);
        return cc;
    }
	
}
