package com.ibm.training.bootcamp.rest.sample01.domain;

import java.math.BigDecimal;

public class Order {
	
	

	//ORDERTBL FIELDS
	Long id;
	private String FoodItemName;
	private BigDecimal UnitPrice;
	private String CustomerName;
	private String Address;
	private String ContactNumber;
	private String Status;
	private BigDecimal Total;
	
	public Order() {
		
	}
	
	//ORDERTBL METHOD
	public Order(String FoodItemName, BigDecimal UnitPrice, String CustomerName, String Address, String ContactNumber, String Status, BigDecimal Total) {
		this(null, FoodItemName, UnitPrice, CustomerName, Address, ContactNumber, Status, Total);
	}
	
	public Order(Long id, String CustomerName, BigDecimal UnitPrice, String Address, String ContactNumber, String Status, String FoodItemName, BigDecimal Total) {
		this.id = id;
		this.FoodItemName = FoodItemName;
		this.UnitPrice = UnitPrice;
		this.CustomerName = CustomerName;
		this.Address = Address;
		this.ContactNumber = ContactNumber;
		this.Status = Status;
		this.Total = Total;
	}
	



	//ORDERTBL GETTERS AND SETTERS
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getCustomerName() {
		return CustomerName;
	}

	public void setCustomerName(String customerName) {
		CustomerName = customerName;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getContactNumber() {
		return ContactNumber;
	}

	public void setContactNumber(String contactNumber) {
		ContactNumber = contactNumber;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public BigDecimal getTotal() {
		return Total;
	}

	public void setTotal(BigDecimal total) {
		Total = total;
	}

	public String getFoodItemName() {
		return FoodItemName;
	}


	public void setFoodItemName(String foodItemName) {
		FoodItemName = foodItemName;
	}


	public BigDecimal getUnitPrice() {
		return UnitPrice;
	}


	public void setUnitPrice(BigDecimal unitPrice) {
		UnitPrice = unitPrice;
	}

}
