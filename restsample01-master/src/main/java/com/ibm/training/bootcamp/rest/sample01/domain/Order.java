package com.ibm.training.bootcamp.rest.sample01.domain;

import java.math.BigDecimal;

public class Order {
	
	

	//ORDER FIELDS
	Long id;
	private String FoodItemName;
	private BigDecimal UnitPrice;
	private String CustomerName;
	private String Address;
	private String ContactNumber;
	private String Status;
	private BigDecimal Total;
	private String OrderItemName;
	private BigDecimal Quantity;
	private BigDecimal TotalItemPrice;
	
	public Order() {
		
	}
	
	//constructor of the Order Class w/ it's parameter
	public Order(String FoodItemName, BigDecimal UnitPrice, String CustomerName, String Address, String ContactNumber, String Status, BigDecimal Total, String OrderItemName, BigDecimal Quantity, BigDecimal TotalItemPrice) {
		this(null, FoodItemName, UnitPrice, CustomerName, Address, ContactNumber, Status, Total, OrderItemName, Quantity, TotalItemPrice);
	}
	
	public Order(Long id,String FoodItemName, BigDecimal UnitPrice, String CustomerName, String Address, String ContactNumber, String Status,  BigDecimal Total,String OrderItemName, BigDecimal Quantity, BigDecimal TotalItemPrice) {
		this.id = id;
		this.FoodItemName = FoodItemName;
		this.UnitPrice = UnitPrice;
		this.CustomerName = CustomerName;
		this.Address = Address;
		this.ContactNumber = ContactNumber;
		this.Status = Status;
		this.Total = Total;
		this.OrderItemName = OrderItemName;
		this.Quantity = Quantity;
		this.TotalItemPrice = TotalItemPrice;
	}
	



	//ORDER GETTERS AND SETTERS
	//
	
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

	public BigDecimal getQuantity() {
		return Quantity;
	}

	public void setQuantity(BigDecimal quantity) {
		Quantity = quantity;
	}

	public BigDecimal getTotalItemPrice() {
		return TotalItemPrice;
	}

	public void setTotalItemPrice(BigDecimal totalItemPrice) {
		TotalItemPrice = totalItemPrice;
	}

	public String getOrderItemName() {
		return OrderItemName;
	}

	public void setOrderItemName(String orderItemName) {
		OrderItemName = orderItemName;
	}

}
