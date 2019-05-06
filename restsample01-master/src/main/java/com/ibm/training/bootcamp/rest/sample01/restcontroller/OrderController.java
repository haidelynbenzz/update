package com.ibm.training.bootcamp.rest.sample01.restcontroller;

import java.math.BigDecimal;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import com.ibm.training.bootcamp.rest.sample01.domain.Order;
import com.ibm.training.bootcamp.rest.sample01.service.OrderService;
import com.ibm.training.bootcamp.rest.sample01.service.OrderServiceImpl;

@Path("/AddOrder")
public class OrderController {

	private OrderService orderService;

	public OrderController() {
		this.orderService = new OrderServiceImpl();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Order> getOrder(
			@QueryParam("FoodItemName") String FoodItemName, 
			@QueryParam("UnitPrice") BigDecimal UnitPrice,
			@QueryParam("Quantity") BigDecimal Quantity,
			@QueryParam("TotalItemPrice") BigDecimal TotalItemPrice,
			@QueryParam("CustomerName") String CustomerName, 
			@QueryParam("Address") String Address,
			@QueryParam("ContactNumber") String ContactNumber,
			@QueryParam("Status") String Status,
			@QueryParam("Total") BigDecimal Total) {

		try {
			List<Order> orders;
			
			if (StringUtils.isBlank(CustomerName)) {
				orders = orderService.findAllOrder();
			} else {
				orders = orderService.findByOrder(CustomerName);
			}
						
			return orders;
			
		} catch (Exception e) {
			throw new WebApplicationException(e);
		}

	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Order getOrder(@PathParam("id") String id) {

		try {
			Long longId = Long.parseLong(id);
			Order order = orderService.findOrder(longId);
			return order;
		} catch (Exception e) {
			throw new WebApplicationException(e);
		}
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addOrder(Order order) {

		try {
			orderService.add(order);
			String result = "Order List saved : " + order.getAddress() + " " + order.getTotal() + " " + order.getStatus() + "  " + order.getFoodItemName() + " " + order.getContactNumber() + " " + order.getCustomerName()+ " " + order.getUnitPrice()+ " " + order.getQuantity() + " "+order.getTotalItemPrice();
			return Response.status(201).entity(result).build();
		} catch (Exception e) {
			throw new WebApplicationException(e);
		}
	}
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateOrder(@PathParam("id") Long id,Order order) {

		try {
			order.setId(id);
			orderService.upsert(order);
			String result = "Order List updated : " + order.getCustomerName() + " " + order.getAddress() + "  " + order.getContactNumber();
			return Response.status(200).entity(result).build();
		} catch (Exception e) {
			throw new WebApplicationException(e);
		}

	}
	
	@DELETE
	@Path("{id}")
	public Response deleteOrder(@PathParam("id") String id) {

		try {
			Long longId = Long.parseLong(id);
			orderService.delete(longId);
			String result = "Ordered List deleted";
			return Response.status(200).entity(result).build();
		} catch (Exception e) {
			throw new WebApplicationException(e);
		}
	}
	
	
	
}