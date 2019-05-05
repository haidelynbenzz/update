package com.ibm.training.bootcamp.rest.sample01.service;

import java.util.List;

import com.ibm.training.bootcamp.rest.sample01.domain.Order;
import com.ibm.training.bootcamp.rest.sample01.domain.OrderItem;

public interface OrderService {

	public List<Order> findAllOrder();
	
	public Order findOrder(Long id);
	
	public List<Order> findByOrder(String CustomerName);
	
	public void add(Order order);
	
	public void upsert(Order order);
	
	public void delete(Long id);

}
